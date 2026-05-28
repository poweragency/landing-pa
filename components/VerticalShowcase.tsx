"use client";

import { motion } from "framer-motion";
import { type Vertical } from "@/lib/content";
import { EASE } from "@/lib/motion";
import Counter from "./Counter";
import SectionHead from "./SectionHead";
import TiltCard from "./TiltCard";

export default function VerticalShowcase({ vertical }: { vertical: Vertical }) {
  return (
    <>
      {/* metrics strip */}
      <section className="px-6 pb-20 pt-4">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[26px] border border-line bg-line sm:grid-cols-3">
            {vertical.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="group bg-bg p-8 transition-colors duration-300 hover:bg-surface md:p-9"
              >
                <div className="font-head text-[clamp(1.8rem,3.6vw,2.7rem)] font-bold leading-none tracking-tight">
                  <span className="grad-text">
                    <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                  </span>
                </div>
                <p className="mt-3 text-[0.92rem] leading-snug text-mut">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* features */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHead kicker="Cosa facciamo" title="Operatività, non slide" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {vertical.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: EASE }}
              >
                <TiltCard className="h-full">
                  <article className="ring-grad flex h-full flex-col rounded-[18px] border border-line bg-gradient-to-b from-surface to-bg p-8 transition-shadow duration-300 hover:shadow-[0_24px_50px_-24px_rgba(255,45,45,0.4)]">
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-[14px] border border-line-strong bg-orange/10 text-2xl">
                      {f.icon}
                    </div>
                    <h3 className="font-head text-[1.28rem] font-semibold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-[0.98rem] text-mut">{f.text}</p>
                  </article>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHead kicker="Il metodo" title="Come lo sistematizziamo" />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {vertical.process.map((w, i) => (
              <motion.div
                key={w.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <TiltCard className="h-full">
                  <div className="ring-grad relative h-full rounded-[18px] border border-line bg-surface p-7 transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(255,122,24,0.45)]">
                    <span className="grad-text font-head text-[2.4rem] font-bold leading-none">
                      {w.step}
                    </span>
                    <h3 className="mt-4 font-head text-[1.12rem] font-semibold">{w.title}</h3>
                    <p className="mt-2 text-[0.92rem] text-mut">{w.text}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* quote + note */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative overflow-hidden rounded-[26px] border border-line-strong p-[clamp(32px,5vw,64px)] text-center"
            style={{
              background:
                "radial-gradient(circle at 100% 0%, rgba(255,45,45,0.16), transparent 55%), radial-gradient(circle at 0% 100%, rgba(255,122,24,0.14), transparent 55%), #16100d",
            }}
          >
            <p className="mx-auto max-w-[22ch] font-head text-[clamp(1.6rem,4vw,2.8rem)] font-bold leading-[1.12] tracking-[-0.02em]">
              &ldquo;<span className="grad-text">{vertical.quote}</span>&rdquo;
            </p>

            <div className="mt-9 flex flex-col items-center gap-4">
              <span className="font-head text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-dim">
                Chi guida il verticale
              </span>
              <div className="flex items-center gap-4">
                <div className="relative grid h-[60px] w-[60px] place-items-center rounded-full">
                  <span className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full [background:conic-gradient(from_140deg,#ffb347,#ff2d2d,#c4161c,#ffb347)]" />
                  <span className="absolute inset-[3px] grid place-items-center rounded-full bg-surface-2 font-head text-[1.1rem] font-bold">
                    {vertical.owner.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-head text-[1.05rem] font-semibold">
                    {vertical.owner.name}
                  </p>
                  <p className="text-[0.88rem] font-medium text-orange">
                    {vertical.owner.role}
                  </p>
                </div>
              </div>
            </div>

            {vertical.note && (
              <p className="mx-auto mt-7 max-w-[60ch] text-[0.98rem] text-mut">
                {vertical.note}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
