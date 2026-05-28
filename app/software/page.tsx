import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SoftwareDetail from "@/components/SoftwareDetail";
import CTA from "@/components/CTA";
import { SOFTWARE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Software proprietari",
  description:
    "PowerLeads, PowerReel e PowerLanding: i software che usiamo ogni giorno sul nostro business prima di portarli fuori. Lead generation, contenuti e siti che convertono.",
};

export default function SoftwarePage() {
  return (
    <main id="top">
      <PageHero
        kicker="I software proprietari"
        title={
          <>
            Software che usiamo <span className="grad-text">prima di vendere.</span>
          </>
        }
        lead="Tre strumenti nati dalle nostre operazioni reali. Lead generation, contenuti e siti: ognuno testato sul campo, non in una demo finta."
      />

      {SOFTWARE.map((s, i) => (
        <SoftwareDetail key={s.slug} software={s} reversed={i % 2 === 1} />
      ))}

      <div className="pt-8">
        <CTA />
      </div>
    </main>
  );
}
