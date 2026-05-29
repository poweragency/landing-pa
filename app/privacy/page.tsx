import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali di PowerAgency.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="maggio 2026"
      sections={[
        {
          heading: "1. Titolare del trattamento",
          body: [
            `Titolare del trattamento dei dati è PowerAgency. Per qualsiasi richiesta relativa ai tuoi dati personali puoi scrivere a ${CONTACT.email}.`,
            "[Da completare con ragione sociale, partita IVA e sede legale.]",
          ],
        },
        {
          heading: "2. Dati che raccogliamo",
          body: [
            "Raccogliamo i dati che ci fornisci volontariamente tramite il modulo di contatto: nome e cognome, indirizzo email e numero di telefono.",
            "Raccogliamo inoltre dati tecnici di navigazione strettamente necessari al funzionamento del sito (vedi Cookie Policy).",
          ],
        },
        {
          heading: "3. Finalità del trattamento",
          body: [
            "Utilizziamo i dati esclusivamente per rispondere alle tue richieste, ricontattarti e fornirti informazioni sui nostri servizi.",
          ],
        },
        {
          heading: "4. Base giuridica",
          body: [
            "Il trattamento si fonda sul consenso dell'interessato e sull'esecuzione di misure precontrattuali adottate su tua richiesta.",
          ],
        },
        {
          heading: "5. Conservazione dei dati",
          body: [
            "Conserviamo i dati per il tempo necessario a gestire la tua richiesta e gli adempimenti connessi, e comunque non oltre quanto previsto dalla normativa applicabile.",
          ],
        },
        {
          heading: "6. Comunicazione a terzi",
          body: [
            "I dati possono essere trattati da fornitori che ci supportano nell'erogazione del servizio (es. hosting e strumenti di CRM), nominati responsabili del trattamento. Non vendiamo i tuoi dati a terzi.",
          ],
        },
        {
          heading: "7. I tuoi diritti",
          body: [
            `Puoi esercitare in ogni momento i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei dati, scrivendo a ${CONTACT.email}.`,
            "Hai inoltre il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali.",
          ],
        },
      ]}
    />
  );
}
