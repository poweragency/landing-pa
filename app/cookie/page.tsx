import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sull'uso dei cookie del sito PowerAgency.",
};

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
            "Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento e alla navigazione. Non utilizziamo cookie di profilazione né strumenti di tracciamento pubblicitario di terze parti.",
            "[Da aggiornare qualora vengano integrati strumenti di analisi statistica o pixel pubblicitari.]",
          ],
        },
        {
          heading: "3. Gestione dei cookie",
          body: [
            "Puoi gestire o eliminare i cookie in qualsiasi momento dalle impostazioni del tuo browser. La disattivazione dei cookie tecnici può compromettere alcune funzionalità del sito.",
          ],
        },
      ]}
    />
  );
}
