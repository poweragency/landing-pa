"use client";

import { motion } from "framer-motion";
import { CRM } from "@/lib/content";
import { EASE } from "@/lib/motion";
import SectionHead from "./SectionHead";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

export default function CrmShowcase() {
  return (
    <>
      {/* modules */}
      <section className="px-6 pb-24 pt-8">
        <div className="mx-auto max-w-[1180px]">
          <SectionHead
            kicker="Cosa fa"
            title="Tutto il flusso, un solo gestionale"
            lead="Dal primo contatto alla pratica chiusa. Niente fogli Excel, niente lead persi tra i canali."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CRM.modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
              >
                <TiltCard className="h-full">
                  <article className="ring-grad flex h-full flex-col rounded-[18px] border border-line bg-gradient-to-b from-surface to-bg p-7 transition-shadow duration-300 hover:shadow-[0_24px_50px_-24px_rgba(255,45,45,0.4)]">
                    <div className="mb-5 grid h-13 w-13 place-items-center rounded-[14px] border border-line-strong bg-orange/10 text-2xl">
                      {m.icon}
                    </div>
                    <h3 className="font-head text-[1.18rem] font-semibold tracking-tight">
                      {m.title}
                    </h3>
                    <p className="mt-2.5 text-[0.95rem] text-mut">{m.text}</p>
                  </article>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* workflow */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1180px]">
          <SectionHead
            kicker="Come funziona"
            title="Dal lead alla consegna"
            lead="Un percorso lineare, con l'AI che lavora i contatti nei punti dove di solito si perdono."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CRM.workflow.map((w, i) => (
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-12 flex justify-center"
          >
            <MagneticButton
              href={CRM.url}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber via-orange to-red px-7 py-4 font-head text-base font-semibold text-[#1a0a03] shadow-[0_10px_40px_-8px_rgba(255,45,45,0.55)]"
            >
              Apri il CRM
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
