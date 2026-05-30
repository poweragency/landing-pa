export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/software", label: "Software" },
  { href: "/crm", label: "CRM" },
  { href: "/prop", label: "Prop" },
  { href: "/ecommerce", label: "Ecommerce" },
] as const;

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 10000, prefix: "", suffix: "€", display: "/day", label: "Ecommerce gestito ogni giorno" },
  { value: 120, prefix: "", suffix: "+ prop", display: "", label: "operativi ogni giorno" },
  { value: 60, prefix: "", suffix: "+ clienti", display: "", label: "in due settimane per una carrozzeria" },
  { value: 1000, prefix: "", suffix: "+ lead", display: "", label: "generate in modo automatico in un solo giorno" },
];

export const FEATURES = [
  {
    icon: "cpu",
    title: "Software testati sul campo",
    text: "Ogni strumento nasce dalle nostre operazioni quotidiane. Lo mettiamo alla prova sul nostro business prima di proporlo a te. Nessuna demo costruita ad arte.",
  },
  {
    icon: "layers",
    title: "Asset che generano clienti",
    text: "Sito, lead generation e CRM non sono tre fornitori da coordinare: un unico sistema, guidato dall'AI, che lavora come una macchina sola.",
  },
  {
    icon: "dumbbell",
    title: "Team che fa palestra",
    text: "Strategia, tecnologia e verticali: un team che si allena ogni giorno sul proprio business. Portiamo risultati, non slide.",
  },
] as const;

/* ============================================================
   SOFTWARE PROPRIETARI — pagina /software
   ============================================================ */
export type SoftwareStatus = "live" | "soon";

export type Software = {
  slug: string;
  index: string;
  name: string;
  tag: string;
  status: SoftwareStatus;
  icon: string;
  headline: string;
  description: string;
  features: string[];
  audience?: string;
  pricing?: string;
  url?: string;
  ctaLabel: string;
};

export const SOFTWARE: Software[] = [
  {
    slug: "powerleads",
    index: "01",
    name: "PowerLeads",
    tag: "SaaS · Lead Generation",
    status: "live",
    icon: "magnet",
    headline: "Un sistema. Non cinque tool.",
    description:
      "La piattaforma all-in-one per l'acquisizione clienti. Estrae lead da Instagram e Google Maps, scrive icebreaker su misura con l'AI e invia DM ed email in automatico. Una dashboard, un abbonamento — al posto di cinque strumenti scollegati da 200-400€ al mese.",
    features: [
      "Lead estratti da profili Instagram e ricerche Google Maps",
      "Icebreaker personalizzati, scritti dall'AI di Anthropic (Claude)",
      "Outreach automatico: DM via estensione Chrome ed email dal tuo dominio",
      "Attivo in cinque minuti, senza competenze tecniche",
      "Dati aggiornati a ogni ricerca, mai liste obsolete",
    ],
    audience:
      "Coach, creator, freelancer ed e-commerce · Agenzie, studi professionali, SaaS, consulenza e real estate",
    url: "https://powerleads.poweragency.it",
    ctaLabel: "Vai a PowerLeads",
  },
  {
    slug: "powerreel",
    index: "02",
    name: "PowerReel",
    tag: "In arrivo",
    status: "soon",
    icon: "clapperboard",
    headline: "In arrivo.",
    description:
      "PowerReel è in costruzione. Presto qui troverai funzionalità, dettagli e tutto il resto.",
    features: [],
    ctaLabel: "Resta aggiornato",
  },
  {
    slug: "powerlanding",
    index: "03",
    name: "PowerLanding",
    tag: "Servizio · Siti web",
    status: "live",
    icon: "rocket",
    headline: "Sito su misura in 48 ore.",
    description:
      "Un sito su misura, disegnato e scritto a mano: nessun template. Copy che converte, codice curato riga per riga, hosting e dominio inclusi. Online in 48 ore, garantite.",
    features: [
      "Sviluppo su misura al 100%, nessun template",
      "Codice scritto a mano, riga per riga",
      "Copy strategico, pensato per convertire",
      "Hosting e dominio inclusi",
      "Codice sorgente e repository tuoi, per sempre",
      "Massimo 30 progetti al mese, per non sacrificare la qualità",
    ],
    audience:
      "Professionisti e piccole imprese — dentisti, avvocati, personal trainer, studi — che vogliono un sito credibile senza spendere migliaia di euro.",
    url: "https://powersite.vercel.app",
    ctaLabel: "Scopri PowerLanding",
  },
];

/* ============================================================
   CRM CARROZZERIE — pagina /crm
   ============================================================ */
export const CRM = {
  name: "CRM su misura",
  tag: "Verticale · CRM su misura",
  headline: "Un CRM cucito sul tuo settore.",
  description:
    "Costruiamo CRM verticali, modellati sul flusso reale di un settore: lead, preventivi, lavorazioni e follow-up in un'unica pipeline, senza fogli sparsi e contatti persi. Il primo è dedicato alle carrozzerie; altri verticali sono in arrivo.",
  url: "https://crm-carrozzerie.vercel.app",
  demo: { email: "demo@gmail.com", password: "demo123" },
  modules: [
    {
      icon: "inbox",
      title: "Gestione lead",
      text: "Ogni richiesta entra, viene qualificata e assegnata. Nessun contatto perso tra WhatsApp, telefono e mail.",
    },
    {
      icon: "file",
      title: "Pratiche e preventivi",
      text: "Dalla stima al consuntivo: storico, documenti e stato di avanzamento di ogni pratica, sempre allineati.",
    },
    {
      icon: "wrench",
      title: "Pipeline lavorazioni",
      text: "Lo stato di ogni lavoro a colpo d'occhio: in attesa, in lavorazione, pronto, consegnato.",
    },
    {
      icon: "send",
      title: "Automazioni mail e WhatsApp",
      text: "Email e messaggi WhatsApp inviati in automatico: conferme, promemoria appuntamento e aggiornamenti sullo stato della pratica, al momento giusto.",
    },
    {
      icon: "link",
      title: "Lead generation integrata",
      text: "I contatti dalle ads entrano già nel CRM, pronti da lavorare. Nessun copia-incolla.",
    },
    {
      icon: "chart",
      title: "Numeri reali",
      text: "Conversioni, tempi di chiusura e fatturato per periodo. Sai sempre cosa funziona e cosa no.",
    },
  ],
  workflow: [
    { step: "01", title: "Arriva il lead", text: "Dalle ads, dal sito o da Google: ogni richiesta entra nel CRM." },
    { step: "02", title: "Qualifica e preventivo", text: "Il contatto viene qualificato e riceve un preventivo tracciato." },
    { step: "03", title: "Mail e WhatsApp automatici", text: "Conferme, promemoria e aggiornamenti partono in automatico via email e WhatsApp." },
    { step: "04", title: "Lavorazione e consegna", text: "Lavoro in corso, stato aggiornato, cliente sempre informato." },
  ],
} as const;

export const CASE_METRICS = [
  { value: 60, suffix: "+", label: "lead in due settimane" },
  { value: 5, suffix: "", label: "clienti chiusi" },
  { value: 15000, suffix: "€", label: "fatturato generato" },
] as const;

/* ============================================================
   VERTICALI — pagine /prop e /ecommerce (palestra sul proprio business)
   ============================================================ */
export type Metric = { value: number; prefix?: string; suffix?: string; label: string };

export type Vertical = {
  kicker: string;
  title: string;
  titleAccent: string;
  lead: string;
  metrics: Metric[];
  features: { icon: string; title: string; text: string }[];
  process: { step: string; title: string; text: string }[];
  quote: string;
  owner: Person;
  note?: string;
  metaTitle: string;
  metaDescription: string;
};

export const PROP: Vertical = {
  kicker: "Il verticale · Prop firms",
  title: "120+ account prop,",
  titleAccent: "gestiti ogni giorno.",
  lead: "Oltre 120 account prop gestiti in modo sistematico, con software costruito da noi. Hedging automatico sui capitali propri, edge matematico, zero teoria: solo operatività live, in produzione.",
  metrics: [
    { value: 120, suffix: "+", label: "account prop operativi" },
    { value: 100, suffix: "%", label: "operatività su capitali propri" },
    { value: 24, suffix: "/7", label: "automazioni sempre attive" },
  ],
  features: [
    {
      icon: "bot",
      title: "Automazioni complete",
      text: "Software interno che gestisce gli account dall'inizio alla fine: nessuna operatività manuale, nessun errore da stanchezza.",
    },
    {
      icon: "shield",
      title: "Hedging automatico",
      text: "Copertura sistematica sui capitali propri. Il rischio è gestito da regole, non dalle emozioni.",
    },
    {
      icon: "sigma",
      title: "Edge matematico",
      text: "Sistemi costruiti su un vantaggio statistico provato e sistematizzato, non sull'intuito.",
    },
    {
      icon: "activity",
      title: "Sempre in produzione",
      text: "Operatività live ogni giorno sui nostri capitali. Quello che vendiamo è quello che usiamo.",
    },
  ],
  process: [
    { step: "01", title: "Vantaggio misurabile", text: "Partiamo da un edge matematico verificabile, non da una strategia sentita dire in giro." },
    { step: "02", title: "Sistematizzazione", text: "Lo trasformiamo in regole eseguibili dal software: ripetibili e scalabili." },
    { step: "03", title: "Automazione", text: "Le automazioni gestiscono gli account: esecuzione, hedging, monitoraggio." },
    { step: "04", title: "Scala", text: "Da pochi account a oltre 120 in parallelo, senza perdere il controllo del rischio." },
  ],
  quote: "Niente teoria. Solo operatività live, ogni giorno.",
  owner: { name: "Wassim", role: "Head of power hedging", photo: "/team/wassim.jpg" },
  metaTitle: "Prop firms",
  metaDescription:
    "Oltre 120 account prop gestiti ogni giorno con software interno: hedging automatico, edge matematico e operatività live su capitali propri.",
};

export const ECOMMERCE: Vertical = {
  kicker: "Il verticale · Ecommerce",
  title: "Da dipendente a",
  titleAccent: "10.000€ al giorno.",
  lead: "Business ecommerce scalabili, con sistemi di vendita collaudati e ancora attivi oggi. Test di prodotto continui, analisi dei dati costante, ottimizzazione delle campagne al millimetro.",
  metrics: [
    { value: 10000, suffix: "€/day", label: "ecommerce gestito in scala" },
    { value: 100, suffix: "%", label: "decisioni guidate dai dati" },
    { value: 0, suffix: "", label: "store di facciata: sono tutti reali" },
  ],
  features: [
    {
      icon: "flask",
      title: "Test continui",
      text: "Prodotti testati in modo iterativo: sono i dati a decidere cosa scalare e cosa tagliare. Nessun innamoramento del prodotto.",
    },
    {
      icon: "lineChart",
      title: "Guidati dai dati",
      text: "Analisi costante delle dashboard: ogni euro speso in ads ha una metrica che lo giustifica.",
    },
    {
      icon: "target",
      title: "Campagne ottimizzate",
      text: "Campagne pubblicitarie curate al millimetro, non lasciate a sé stesse.",
    },
    {
      icon: "store",
      title: "Store ancora attivi",
      text: "Non case study del passato: store che generano reddito oggi, gestiti in prima persona.",
    },
  ],
  process: [
    { step: "01", title: "Ricerca prodotto", text: "Selezione basata su domanda reale e margini, non sull'hype del momento." },
    { step: "02", title: "Test rapidi", text: "Si testa veloce e si legge il mercato dai numeri, non dalle sensazioni." },
    { step: "03", title: "Scala il vincente", text: "Sul prodotto che funziona spingiamo il budget; sul resto si taglia senza esitare." },
    { step: "04", title: "Ottimizza ogni giorno", text: "Monitoraggio delle dashboard e ritocco delle campagne, ogni giorno, per tenere il ROI." },
  ],
  quote: "Sistemi di vendita collaudati. E ancora attivi oggi.",
  owner: {
    name: "Vincenzo",
    role: "CEO · Verticale su ecommerce",
    photo: "/team/vincenzo.jpg",
    bio: "Esperto in campagne pubblicitarie Meta e infrastrutture digitali.",
  },
  metaTitle: "Ecommerce",
  metaDescription:
    "Business ecommerce scalabili e ancora attivi: test di prodotto, ottimizzazione delle campagne e gestione guidata dai dati fino a 10.000€/day.",
};

/* ============================================================
   TEAM — fondatori + squadra (card)
   ============================================================ */
export type Person = {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
};

export const TEAM: Person[] = [
  { name: "Vincenzo", role: "CEO", photo: "/team/vincenzo.jpg" },
  { name: "William", role: "CTO", photo: "/team/william.jpg" },
  { name: "Mattia", role: "Tecnico · Verticale su software", photo: "/team/mattia.jpg" },
  { name: "Wassim", role: "Head of power hedging", photo: "/team/wassim.jpg" },
];

// squadra estesa: marketing
export const SQUAD: Person[] = [
  { name: "Gabriele", role: "Marketing", photo: "/team/gabriele.jpg" },
  { name: "Giorgio", role: "Marketing", photo: "/team/giorgio.jpg" },
];

export const CONTACT = {
  email: "info@poweragency.it",
  instagram: "https://instagram.com/_poweragency_",
  instagramHandle: "@_poweragency_",
} as const;
