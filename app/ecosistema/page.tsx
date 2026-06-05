import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CaseStudy from "@/components/CaseStudy";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import MagneticButton from "@/components/MagneticButton";
import { ECOSISTEMA, ECOSISTEMA_FAQ } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { serviceSchema, faqSchema } from "@/lib/structured-data";

const DESCRIPTION =
  "Sito che converte, lead generation con qualifica AI e CRM integrato: un'unica infrastruttura per catturare, qualificare e chiudere i lead. Funziona perché lo usiamo prima sui nostri business.";

export const metadata = pageMeta({
  title: "Ecosistema",
  description: DESCRIPTION,
  path: "/ecosistema",
});

export default function EcosistemaPage() {
  return (
    <main id="top">
      <JsonLd
        data={[
          serviceSchema({
            name: "Ecosistema PowerAgency: sito, lead generation e CRM",
            description: DESCRIPTION,
            path: "/ecosistema",
            serviceType: "Sito web, lead generation e CRM AI integrati",
          }),
          faqSchema(ECOSISTEMA_FAQ),
        ]}
      />

      <PageHero
        kicker={ECOSISTEMA.hero.kicker}
        title={
          <>
            {ECOSISTEMA.hero.title}{" "}
            <span className="grad-text">{ECOSISTEMA.hero.titleAccent}</span>
          </>
        }
        lead={ECOSISTEMA.hero.lead}
      >
        <MagneticButton
          href="#contatti"
          className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber via-orange to-red px-7 py-4 font-head text-base font-semibold text-[#1a0a03] shadow-[0_10px_40px_-8px_rgba(255,45,45,0.55)]"
        >
          Prenota una call
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </MagneticButton>
      </PageHero>

      {/* Il problema */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <SectionHead
            center
            kicker="Il problema"
            title={
              <>
                Tre tool diversi. <span className="grad-text">Lead persi nel mezzo.</span>
              </>
            }
            lead={ECOSISTEMA.problem.body}
          />
        </div>
      </section>

      {/* Le 3 componenti */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-[1180px]">
          <SectionHead
            center
            kicker="Come funziona"
            title={
              <>
                Un ecosistema, <span className="grad-text">tre componenti.</span>
              </>
            }
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {ECOSISTEMA.pillars.map((p, i) => (
              <Reveal
                as="article"
                key={p.title}
                delay={i * 0.1}
                className="ring-grad flex h-full flex-col rounded-[18px] border border-line bg-gradient-to-b from-surface to-bg p-8"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-[14px] border border-line-strong bg-orange/10">
                  <Icon name={p.icon} className="h-6 w-6 text-orange" />
                </div>
                <h3 className="font-head text-[1.28rem] font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.98rem] text-mut">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Caso reale */}
      <CaseStudy />

      {/* Come lavoriamo */}
      <section className="px-6 pb-24 md:pb-28">
        <div className="mx-auto max-w-[1180px]">
          <SectionHead
            center
            kicker="Come lavoriamo"
            title={
              <>
                4 step, <span className="grad-text">30 giorni operativi.</span>
              </>
            }
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ECOSISTEMA.process.map((s, i) => (
              <Reveal
                as="article"
                key={s.step}
                delay={i * 0.08}
                className="rounded-[16px] border border-line bg-surface p-6"
              >
                <span className="grad-text font-head text-[1.5rem] font-bold leading-none">
                  {s.step}
                </span>
                <h3 className="mt-3 font-head text-[1.08rem] font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-mut">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq
        title={<>Domande sull&apos;ecosistema</>}
        items={ECOSISTEMA_FAQ}
        related={[
          { label: "Il CRM su misura", href: "/crm" },
          { label: "I nostri software", href: "/software" },
        ]}
      />

      <CTA
        kicker="Il prossimo passo"
        title="Pronto a vedere come funziona sul tuo"
        titleAccent="business?"
        lead="30 minuti, zero impegno. Ti diciamo se siamo i partner giusti — e se non lo siamo, ti diciamo chi cercare."
        primaryLabel="Prenota la call"
      />
    </main>
  );
}
