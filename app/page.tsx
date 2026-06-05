import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Manifesto from "@/components/Manifesto";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { websiteSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <main id="top">
      <JsonLd data={websiteSchema()} />
      <Hero />
      <Stats />
      <Manifesto />
      <Team />
      <CTA />
    </main>
  );
}
