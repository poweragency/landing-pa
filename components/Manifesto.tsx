"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/content";
import { EASE } from "@/lib/motion";
import SectionHead from "./SectionHead";
import TiltCard from "./TiltCard";

export default function Manifesto() {
  return (
    <section id="metodo" className="scroll-mt-24 px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          kicker="La nostra mission"
          title={
            <>
              Non vendiamo teoria.
              <br />
              Vendiamo ciò che usiamo <span className="grad-text">ogni giorno.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
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
  );
}
