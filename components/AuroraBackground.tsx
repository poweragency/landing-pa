"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScreenQuad } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

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

    vec2 mp = uv - uMouse;
    mp.x *= aspect;
    float mg = exp(-dot(mp, mp) * 9.0);
    col += mix(orange, red, 0.5) * mg * 0.22;

    float vig = smoothstep(1.35, 0.35, length(uv - 0.5));
    col *= mix(0.65, 1.0, vig);

    float g = hash(uv * uRes + t) * 0.035;
    col += g - 0.017;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function AuroraPlane() {
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
    m.x += (targetX - m.x) * 0.04;
    m.y += (targetY - m.y) * 0.04;
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

export default function AuroraBackground() {
  return (
    <Canvas
      gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 1] }}
      style={{ position: "absolute", inset: 0 }}
      frameloop="always"
    >
      <AuroraPlane />
    </Canvas>
  );
}
