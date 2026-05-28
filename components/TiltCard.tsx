"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** px·deg constant: higher → more tilt overall. Tilt = strength / cardSize. */
  strength?: number;
  minTilt?: number;
  maxTilt?: number;
};

export default function TiltCard({
  children,
  className,
  strength = 3600,
  minTilt = 6,
  maxTilt = 18,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // glare position (0..1 across the card)
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  // rotation (deg) — set imperatively so the max angle can depend on live size
  const rxMV = useMotionValue(0);
  const ryMV = useMotionValue(0);
  const rx = useSpring(rxMV, { stiffness: 200, damping: 20 });
  const ry = useSpring(ryMV, { stiffness: 200, damping: 20 });

  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,160,80,0.16), transparent 45%)`;

  function onMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width; // 0..1
    const ny = (e.clientY - r.top) / r.height; // 0..1
    px.set(nx);
    py.set(ny);

    // tilt inversely proportional to card size → small cards move more
    const dim = (r.width + r.height) / 2;
    const t = Math.max(minTilt, Math.min(maxTilt, strength / dim));
    rxMV.set((ny - 0.5) * -2 * t); // top → +t, bottom → -t
    ryMV.set((nx - 0.5) * 2 * t); // left → -t, right → +t
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
    rxMV.set(0);
    ryMV.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry, transformPerspective: 900 }}
      className={`group relative [transform-style:preserve-3d] ${className ?? ""}`}
    >
      {children}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glare }}
      />
    </motion.div>
  );
}
