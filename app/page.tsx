import Background from "@/components/Background";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Manifesto from "@/components/Manifesto";
import Products from "@/components/Products";
import CaseStudy from "@/components/CaseStudy";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <CustomCursor />
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <Manifesto />
        <Products />
        <CaseStudy />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
