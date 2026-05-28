"use client";

import dynamic from "next/dynamic";

const AuroraBackground = dynamic(() => import("./AuroraBackground"), {
  ssr: false,
});

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* CSS fallback gradient (shows before/without WebGL) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(255,122,24,0.25), transparent 60%), radial-gradient(ellipse 50% 50% at 90% 40%, rgba(255,45,45,0.14), transparent 60%), #0a0606",
        }}
      />

      {/* WebGL aurora */}
      <AuroraBackground />

      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 35%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 35%, transparent 80%)",
        }}
      />

      {/* bottom fade into solid bg for readability */}
      <div
        className="absolute inset-x-0 bottom-0 h-[40vh]"
        style={{
          background: "linear-gradient(to bottom, transparent, #0a0606)",
        }}
      />
    </div>
  );
}
