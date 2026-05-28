"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScreenQuad } from "@react-three/drei";
import { useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";

/* ============================================================
   AURORA — full-screen fbm shader + mouse glow
   ============================================================ */
const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uRes;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = m * p;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uRes.x / max(uRes.y, 1.0);
    vec2 p = uv;
    p.x *= aspect;

    float t = uTime * 0.05;

    vec2 q = vec2(fbm(p * 2.2 + t), fbm(p * 2.2 + vec2(5.2, 1.3) - t));
    float n = fbm(p * 2.2 + 1.8 * q + t * 0.5);

    vec3 col = vec3(0.039, 0.024, 0.024);

    vec3 amber = vec3(1.0, 0.70, 0.28);
    vec3 orange = vec3(1.0, 0.48, 0.10);
    vec3 red = vec3(1.0, 0.18, 0.18);

    float topFade = smoothstep(1.15, 0.05, uv.y);
    float band = smoothstep(0.42, 0.95, n) * topFade;

    vec3 grad = mix(orange, red, smoothstep(0.3, 0.9, n));
    grad = mix(grad, amber, smoothstep(0.7, 1.0, n) * 0.6);
    col += grad * band * 0.55;

    vec2 c = uv - vec2(0.5, 1.05);
    c.x *= aspect;
    float glow = exp(-dot(c, c) * 2.5);
    col += orange * glow * 0.35;

    // mouse light — illuminates the background under the cursor
    vec2 mp = uv - uMouse;
    mp.x *= aspect;
    float md = dot(mp, mp);
    float mg = exp(-md * 7.0) * 0.40;          // soft core
    mg += exp(-md * 1.6) * 0.12;               // wide halo
    col += mix(amber, red, 0.4) * mg;

    float vig = smoothstep(1.35, 0.35, length(uv - 0.5));
    col *= mix(0.65, 1.0, vig);

    // static dithering (no time term) — prevents banding without per-frame flicker
    float g = hash(floor(gl_FragCoord.xy)) * 0.03;
    col += g - 0.015;

    gl_FragColor = vec4(col, 1.0);
  }
`;

type MouseRef = RefObject<THREE.Vector2>;

function AuroraPlane({ mouse }: { mouse: MouseRef }) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.6) },
      uRes: { value: new THREE.Vector2(size.width, size.height) },
    }),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  useFrame((state) => {
    if (!mat.current) return;
    const u = mat.current.uniforms;
    u.uTime.value = state.clock.elapsedTime;
    u.uRes.value.set(state.size.width, state.size.height);
    const m = u.uMouse.value as THREE.Vector2;
    const targetX = state.pointer.x * 0.5 + 0.5;
    const targetY = state.pointer.y * 0.5 + 0.5;
    m.x += (targetX - m.x) * 0.09;
    m.y += (targetY - m.y) * 0.09;
    // share smoothed mouse (uv space) with the particle field
    if (mouse.current) mouse.current.copy(m);
  });

  return (
    <ScreenQuad>
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        depthTest={false}
        depthWrite={false}
      />
    </ScreenQuad>
  );
}

/* ============================================================
   PARTICLES — drifting micro-particles in the theme palette
   ============================================================ */
const COUNT = 150;

const particleVertex = /* glsl */ `
  precision highp float;
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aPhase;
  attribute float aSpeed;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uAspect;
  uniform vec2 uMouse;
  varying vec3 vColor;
  varying float vTwinkle;
  varying float vBoost;

  void main() {
    vColor = aColor;
    vec3 pos = position;
    float tt = uTime * aSpeed;
    // gentle elliptical wander
    pos.x += cos(tt + aPhase) * 0.35;
    pos.y += sin(tt * 0.8 + aPhase * 1.3) * 0.30;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uPixelRatio / max(-mv.z, 0.1);

    vTwinkle = 0.55 + 0.45 * sin(uTime * 0.9 + aPhase * 3.0);

    // brighten particles near the cursor (screen-space)
    vec2 screenUv = gl_Position.xy / gl_Position.w * 0.5 + 0.5;
    vec2 d = (screenUv - uMouse) * vec2(uAspect, 1.0);
    vBoost = smoothstep(0.30, 0.0, length(d));
  }
`;

const particleFragment = /* glsl */ `
  precision highp float;
  varying vec3 vColor;
  varying float vTwinkle;
  varying float vBoost;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float a = smoothstep(0.5, 0.0, length(c));
    if (a <= 0.001) discard;
    vec3 col = vColor * (1.0 + vBoost * 1.2);
    float alpha = a * (0.25 + 0.40 * vTwinkle) * (1.0 + vBoost * 0.9);
    gl_FragColor = vec4(col, alpha);
  }
`;

function Particles({ mouse }: { mouse: MouseRef }) {
  const mat = useRef<THREE.ShaderMaterial>(null);

  const { positions, colors, sizes, phases, speeds } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const phases = new Float32Array(COUNT);
    const speeds = new Float32Array(COUNT);
    const palette = [
      [1.0, 0.7, 0.28], // amber
      [1.0, 0.48, 0.1], // orange
      [1.0, 0.18, 0.18], // red
      [1.0, 0.85, 0.55], // warm light
    ];
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 7.2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5.2;
      positions[i * 3 + 2] = Math.random() * -3.0 + 0.2;
      const col = palette[(Math.random() * palette.length) | 0];
      colors[i * 3 + 0] = col[0];
      colors[i * 3 + 1] = col[1];
      colors[i * 3 + 2] = col[2];
      sizes[i] = 3 + Math.random() * 11;
      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.08 + Math.random() * 0.22;
    }
    return { positions, colors, sizes, phases, speeds };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: 1.5 },
      uAspect: { value: 1 },
      uMouse: { value: new THREE.Vector2(0.5, 0.6) },
    }),
    [],
  );

  useFrame((state) => {
    if (!mat.current) return;
    const u = mat.current.uniforms;
    u.uTime.value = state.clock.elapsedTime;
    u.uAspect.value = state.size.width / Math.max(state.size.height, 1);
    u.uPixelRatio.value = state.gl.getPixelRatio();
    if (mouse.current) (u.uMouse.value as THREE.Vector2).copy(mouse.current);
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aColor" args={[colors, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={particleVertex}
        fragmentShader={particleFragment}
        transparent
        depthTest={false}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function AuroraBackground() {
  const mouse = useRef(new THREE.Vector2(0.5, 0.6));

  return (
    <Canvas
      gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 1] }}
      style={{ position: "absolute", inset: 0 }}
      frameloop="always"
    >
      <AuroraPlane mouse={mouse} />
      <Particles mouse={mouse} />
    </Canvas>
  );
}
