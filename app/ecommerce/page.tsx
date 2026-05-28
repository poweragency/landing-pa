import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import VerticalShowcase from "@/components/VerticalShowcase";
import CTA from "@/components/CTA";
import { ECOMMERCE } from "@/lib/content";

export const metadata: Metadata = {
  title: ECOMMERCE.metaTitle,
  description: ECOMMERCE.metaDescription,
};

export default function EcommercePage() {
  return (
    <main id="top">
      <PageHero
        kicker={ECOMMERCE.kicker}
        title={
          <>
            {ECOMMERCE.title} <span className="grad-text">{ECOMMERCE.titleAccent}</span>
          </>
        }
        lead={ECOMMERCE.lead}
      />

      <VerticalShowcase vertical={ECOMMERCE} />

      <div className="pt-4">
        <CTA />
      </div>
    </main>
  );
}
