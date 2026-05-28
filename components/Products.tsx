"use client";

import { motion } from "framer-motion";
import { PRODUCTS, type Product } from "@/lib/content";
import { EASE } from "@/lib/motion";
import SectionHead from "./SectionHead";
import TiltCard from "./TiltCard";

function Tag({ product }: { product: Product }) {
  const base =
    "rounded-full px-3 py-1.5 font-head text-[0.72rem] font-semibold uppercase tracking-[0.12em]";
  if (product.tagStyle === "saas")
    return (
      <span className={`${base} bg-gradient-to-r from-amber via-orange to-red text-[#1a0a03]`}>
        {product.tag}
      </span>
    );
  if (product.tagStyle === "soon")
    return (
      <span className={`${base} border border-line-strong text-amber`}>{product.tag}</span>
    );
  return <span className={`${base} border border-line text-mut`}>{product.tag}</span>;
}

// bento spans (lg screens, 6-col grid)
const SPAN: Record<string, string> = {
  "01": "lg:col-span-3",
  "02": "lg:col-span-3",
  "03": "lg:col-span-3",
  "04": "lg:col-span-3",
  "05": "lg:col-span-6",
};

export default function Products() {
  return (
    <section id="prodotti" className="scroll-mt-24 px-6 pb-28 pt-8">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          kicker="Cosa costruiamo"
          title="Prodotti & sistemi"
          lead="Dal pacchetto chiavi-in-mano al SaaS proprietario. Scegli il livello, noi mettiamo l'AI sotto al cofano."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: EASE }}
              className={SPAN[p.index]}
            >
              <TiltCard className="h-full">
                <div
                  className={`ring-grad flex h-full flex-col overflow-hidden rounded-[18px] border p-8 transition-[transform,box-shadow,background] duration-300 hover:shadow-[0_30px_60px_-30px_rgba(255,45,45,0.5)] ${
                    p.tagStyle === "saas"
                      ? "border-line-strong bg-[linear-gradient(150deg,rgba(255,122,24,0.12),#16100d_60%)]"
                      : "border-line bg-surface hover:bg-surface-2"
                  } ${p.tagStyle === "soon" ? "opacity-95" : ""}`}
                  style={{ transform: "translateZ(0)" }}
                >
                  <div className="mb-5 flex items-center justify-between [transform:translateZ(30px)]">
                    <Tag product={p} />
                    <span className="font-head text-[0.9rem] text-dim">{p.index}</span>
                  </div>

                  <h3 className="font-head text-[1.55rem] font-semibold tracking-tight [transform:translateZ(25px)]">
                    {p.title}
                  </h3>
                  <p className="mt-3.5 flex-1 text-[0.98rem] text-mut">{p.text}</p>

                  {p.bullets && (
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {p.bullets.map((b) => (
                        <li
                          key={b}
                          className="relative pl-6 text-[0.95rem] text-mut before:absolute before:left-2 before:font-bold before:text-orange before:content-['›']"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href="#contatti"
                    data-cursor="hover"
                    className="group/link mt-7 inline-flex items-center gap-2 self-start font-head text-[0.95rem] font-semibold text-ink transition-colors hover:text-amber"
                  >
                    {p.cta}
                    <span className="text-orange transition-transform duration-300 group-hover/link:translate-x-1">
                      {p.arrow ?? "→"}
                    </span>
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
