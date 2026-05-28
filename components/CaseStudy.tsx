"use client";

import { motion } from "framer-motion";
import { CASE_METRICS } from "@/lib/content";
import { EASE } from "@/lib/motion";
import Counter from "./Counter";

export default function CaseStudy() {
  return (
    <section id="casi" className="scroll-mt-24 px-6 pb-28">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-[26px] border border-line-strong p-[clamp(36px,6vw,72px)]"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, rgba(255,45,45,0.16), transparent 55%), radial-gradient(circle at 0% 100%, rgba(255,122,24,0.14), transparent 55%), #16100d",
          }}
        >
          <span className="font-head text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-orange">
            Case study · Carrozzeria
          </span>

          <h2 className="mt-4 max-w-[18ch] font-head text-[clamp(1.8rem,4.6vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.025em]">
            &ldquo;Abbiamo dovuto <span className="grad-text">spegnere le ads.</span>
            <br />
            Troppi lead da gestire.&rdquo;
          </h2>

          <p className="mt-5 italic text-mut">
            — Cliente, dopo 2 settimane dal lancio del sistema
          </p>

          <div className="mt-12 flex flex-wrap gap-12">
            {CASE_METRICS.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="grad-text font-head text-[clamp(2rem,4.4vw,3rem)] font-bold leading-none">
                  <Counter value={m.value} suffix={m.suffix} />
                </span>
                <span className="mt-2 text-[0.92rem] text-mut">{m.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
