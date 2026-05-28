"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/content";
import { EASE } from "@/lib/motion";
import Counter from "./Counter";

export default function Stats() {
  return (
    <section className="px-6 pb-12 pt-6">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[26px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="group bg-bg p-8 transition-colors duration-300 hover:bg-surface md:p-9"
            >
              <div className="font-head text-[clamp(1.8rem,3.6vw,2.7rem)] font-bold leading-none tracking-tight">
                <span className="grad-text">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </span>
                {s.display && (
                  <span className="grad-text text-[0.5em] font-medium">{s.display}</span>
                )}
              </div>
              <p className="mt-3 text-[0.92rem] leading-snug text-mut">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
