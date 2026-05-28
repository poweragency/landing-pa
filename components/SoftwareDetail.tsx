"use client";

import { motion } from "framer-motion";
import { type Software } from "@/lib/content";
import { EASE } from "@/lib/motion";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

function VisualPanel({ software }: { software: Software }) {
  const soon = software.status === "soon";
  return (
    <div
      className="ring-grad relative aspect-[4/3] overflow-hidden rounded-[22px] border border-line-strong"
      style={{
        background:
          "radial-gradient(circle at 80% 0%, rgba(255,45,45,0.18), transparent 55%), radial-gradient(circle at 0% 100%, rgba(255,122,24,0.16), transparent 55%), #16100d",
      }}
    >
      {/* grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 40%, #000 30%, transparent 80%)",
        }}
      />
      <div className="absolute inset-0 grid place-items-center p-8 text-center">
        <div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto grid h-20 w-20 place-items-center rounded-[20px] border border-line-strong bg-orange/10 text-4xl"
          >
            {software.icon}
          </motion.div>
          <p className="mt-5 font-head text-[1.6rem] font-bold tracking-tight">
            {software.name}
          </p>
          {soon ? (
            <span className="mt-3 inline-block rounded-full border border-line-strong px-4 py-1.5 font-head text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-amber">
              Coming soon
            </span>
          ) : (
            <p className="mt-2 grad-text font-head text-[0.95rem] font-semibold uppercase tracking-[0.12em]">
              {software.headline}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SoftwareDetail({
  software,
  reversed,
}: {
  software: Software;
  reversed?: boolean;
}) {
  const soon = software.status === "soon";

  return (
    <section
      id={software.slug}
      className="scroll-mt-24 border-t border-line px-6 py-20 md:py-28"
    >
      <div
        className={`mx-auto grid max-w-[1180px] items-center gap-10 md:gap-16 lg:grid-cols-2 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="font-head text-[0.9rem] text-dim">{software.index}</span>
            <span
              className={`rounded-full px-3 py-1.5 font-head text-[0.72rem] font-semibold uppercase tracking-[0.12em] ${
                soon
                  ? "border border-line-strong text-amber"
                  : "border border-line text-mut"
              }`}
            >
              {software.tag}
            </span>
          </div>

          <h2 className="font-head text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            {software.name}
          </h2>
          <p className="mt-2 grad-text font-head text-[1.15rem] font-semibold">
            {software.headline}
          </p>

          <p className="mt-5 max-w-[56ch] text-[1.02rem] leading-relaxed text-mut">
            {software.description}
          </p>

          {software.features.length > 0 && (
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {software.features.map((f) => (
                <li
                  key={f}
                  className="relative pl-6 text-[0.95rem] text-mut before:absolute before:left-2 before:font-bold before:text-orange before:content-['›']"
                >
                  {f}
                </li>
              ))}
            </ul>
          )}

          {(software.pricing || software.audience) && (
            <div className="mt-7 flex flex-col gap-3">
              {software.pricing && (
                <div className="rounded-[14px] border border-line bg-surface px-5 py-3.5">
                  <span className="font-head text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-dim">
                    Prezzo
                  </span>
                  <p className="mt-1 text-[0.95rem] text-ink">{software.pricing}</p>
                </div>
              )}
              {software.audience && (
                <div className="rounded-[14px] border border-line bg-surface px-5 py-3.5">
                  <span className="font-head text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-dim">
                    Per chi è
                  </span>
                  <p className="mt-1 text-[0.95rem] text-mut">{software.audience}</p>
                </div>
              )}
            </div>
          )}

          <div className="mt-8">
            {software.url ? (
              <MagneticButton
                href={software.url}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber via-orange to-red px-7 py-4 font-head text-base font-semibold text-[#1a0a03] shadow-[0_10px_40px_-8px_rgba(255,45,45,0.55)]"
              >
                {software.ctaLabel}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </MagneticButton>
            ) : (
              <MagneticButton
                href="#contatti"
                strength={0.25}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-7 py-4 font-head text-base font-semibold text-ink transition-colors hover:border-line-strong hover:bg-orange/[0.08]"
              >
                {software.ctaLabel}
              </MagneticButton>
            )}
          </div>
        </motion.div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <TiltCard>
            <VisualPanel software={software} />
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
