import PageHero from "./PageHero";

export type LegalSection = { heading: string; body: string[] };

export default function LegalShell({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main id="top">
      <PageHero kicker="Legale" title={title} lead={`Ultimo aggiornamento: ${updated}`} />

      <section className="px-6 pb-28">
        <div className="mx-auto flex max-w-[760px] flex-col gap-9">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-head text-[1.3rem] font-semibold tracking-tight">
                {s.heading}
              </h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 text-[0.98rem] leading-relaxed text-mut">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
