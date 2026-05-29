import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CrmShowcase from "@/components/CrmShowcase";
import CaseStudy from "@/components/CaseStudy";
import CTA from "@/components/CTA";
import MagneticButton from "@/components/MagneticButton";
import { CRM } from "@/lib/content";

export const metadata: Metadata = {
  title: "CRM",
  description:
    "CRM verticali su misura: lead, preventivi, pratiche e lavorazioni in un'unica pipeline, con follow-up automatici. Il primo verticale è per le carrozzerie.",
};

export default function CrmPage() {
  return (
    <main id="top">
      <PageHero kicker={CRM.tag} title={CRM.headline} lead={CRM.description}>
        <MagneticButton
          href={CRM.url}
          className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber via-orange to-red px-7 py-4 font-head text-base font-semibold text-[#1a0a03] shadow-[0_10px_40px_-8px_rgba(255,45,45,0.55)]"
        >
          Apri il CRM
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </MagneticButton>
      </PageHero>

      <CrmShowcase />

      <CaseStudy />

      <div className="pt-8">
        <CTA
          kicker="Il CRM del tuo settore"
          title="Vuoi un CRM cucito sul tuo"
          titleAccent="settore?"
          lead="Ti mostriamo il gestionale sui numeri veri del primo verticale — la carrozzeria — e come lo adattiamo al tuo settore. Una call, zero impegno."
          primaryLabel="Prenota una demo"
        />
      </div>
    </main>
  );
}
