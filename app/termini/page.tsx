import LegalShell from "@/components/LegalShell";
import { COMPANY } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Termini di servizio",
  description: "Termini e condizioni d'uso del sito PowerAgency.",
  path: "/termini",
});

export default function TerminiPage() {
  return (
    <LegalShell
      title="Termini di servizio"
      updated="maggio 2026"
      sections={[
        {
          heading: "1. Oggetto e titolare",
          body: [
            "I presenti termini regolano l'accesso e l'utilizzo del sito di PowerAgency e dei contenuti in esso pubblicati.",
            `Il sito è gestito da ${COMPANY.identifier}.`,
          ],
        },
        {
          heading: "2. Uso del sito",
          body: [
            "L'utente si impegna a utilizzare il sito in modo lecito e a non comprometterne il funzionamento o la sicurezza.",
          ],
        },
        {
          heading: "3. Proprietà intellettuale",
          body: [
            "Tutti i contenuti del sito (testi, grafica, loghi, marchi e software) sono di proprietà di PowerAgency o dei rispettivi titolari e sono protetti dalla normativa vigente. Ne è vietata la riproduzione senza autorizzazione.",
          ],
        },
        {
          heading: "4. Limitazione di responsabilità",
          body: [
            "Il sito e i suoi contenuti sono forniti “così come sono”. PowerAgency non garantisce l'assenza di errori o interruzioni e non è responsabile per eventuali danni derivanti dall'uso del sito.",
          ],
        },
        {
          heading: "5. Modifiche ai termini",
          body: [
            "PowerAgency si riserva il diritto di modificare i presenti termini in qualsiasi momento. Le modifiche hanno effetto dalla pubblicazione su questa pagina.",
          ],
        },
        {
          heading: "6. Legge applicabile e foro competente",
          body: [
            "I presenti termini sono regolati dalla legge italiana. Per i consumatori è competente il foro del luogo di residenza o domicilio elettivo dell'utente, se ubicato in Italia; in ogni altro caso è competente in via esclusiva il Foro di Milano.",
          ],
        },
      ]}
    />
  );
}
