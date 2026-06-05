import PageHero from "@/components/PageHero";
import VerticalShowcase from "@/components/VerticalShowcase";
import CTA from "@/components/CTA";
import { ECOMMERCE } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: ECOMMERCE.metaTitle,
  description: ECOMMERCE.metaDescription,
  path: "/ecommerce",
});

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
        <CTA
          kicker="Consulenza ecommerce"
          title="Vuoi scalare il tuo ecommerce con chi lo fa"
          titleAccent="ogni giorno?"
          lead="Una consulenza 1:1 con chi gestisce store reali fino a 10.000€/day: prodotto, campagne e numeri. Paghi competenza operativa, non teoria."
          primaryLabel="Prenota una consulenza"
        />
      </div>
    </main>
  );
}
