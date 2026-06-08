import LegalShell from "@/components/LegalShell";
import { CONTACT, COMPANY } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Cookie Policy",
  description: "Informativa sull'uso dei cookie del sito PowerAgency.",
  path: "/cookie",
});

export default function CookiePage() {
  return (
    <LegalShell
      title="Cookie Policy"
      updated="maggio 2026"
      sections={[
        {
          heading: "1. Cosa sono i cookie",
          body: [
            "I cookie sono piccoli file di testo che i siti visitati salvano sul dispositivo dell'utente. Servono a far funzionare il sito o a migliorarne l'esperienza d'uso.",
          ],
        },
        {
          heading: "2. Cookie che utilizziamo",
          body: [
            "Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento e alla navigazione, che non richiedono consenso preventivo. Non utilizziamo cookie di profilazione né strumenti di tracciamento pubblicitario di terze parti.",
          ],
        },
        {
          heading: "3. Gestione dei cookie",
          body: [
            "Puoi gestire o eliminare i cookie in qualsiasi momento dalle impostazioni del tuo browser. La disattivazione dei cookie tecnici può compromettere alcune funzionalità del sito.",
          ],
        },
        {
          heading: "4. Titolare e contatti",
          body: [
            `Titolare del trattamento è ${COMPANY.identifier}.`,
            `Per qualsiasi richiesta puoi scrivere a ${CONTACT.email}.`,
          ],
        },
      ]}
    />
  );
}
