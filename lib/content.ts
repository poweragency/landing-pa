export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/software", label: "Software" },
  { href: "/crm", label: "CRM" },
  { href: "/prop", label: "Prop" },
  { href: "/ecommerce", label: "Ecommerce" },
] as const;

export const STATS = [
  { value: 10000, prefix: "", suffix: "€", display: "/day", label: "Ecommerce gestito quotidianamente" },
  { value: 120, prefix: "", suffix: "+", display: "", label: "Account prop firm operativi ogni giorno" },
  { value: 60, prefix: "", suffix: "+", display: "", label: "Lead generati in 2 settimane (carrozzeria)" },
  { value: 15000, prefix: "", suffix: "€", display: "", label: "Fatturato generato da un singolo caso" },
] as const;

export const FEATURES = [
  {
    icon: "⚙️",
    title: "Software testato sul campo",
    text: "Ogni tool nasce dalle nostre operazioni reali. Lo proviamo sul nostro business prima di portarlo fuori. Zero demo finte.",
  },
  {
    icon: "🧲",
    title: "Asset che generano clienti",
    text: "Sito, lead generation e CRM non sono tre fornitori diversi: un solo sistema AI-powered che lavora come una macchina sola.",
  },
  {
    icon: "🔥",
    title: "Team che fa palestra",
    text: "Strategia, tecnica e verticali: un team che si allena ogni giorno sul proprio business. Risultati, non slide.",
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
    icon: "🧲",
    headline: "Un sistema. Non cinque tool.",
    description:
      "Piattaforma all-in-one che automatizza l'acquisizione clienti: estrae lead da Instagram e Google Maps, genera icebreaker personalizzati con AI e invia DM ed email in automatico. Una sola dashboard, un solo abbonamento — al posto di 3-5 strumenti separati da 200-400€/mese.",
    features: [
      "Estrazione lead da profili Instagram e ricerche Google Maps",
      "Icebreaker su misura generati con Anthropic Claude",
      "Outreach automatico: DM via estensione Chrome ed email dal tuo dominio",
      "Setup in 5 minuti, senza competenze tecniche",
      "Dati freschi ad ogni ricerca, mai database obsoleti",
    ],
    audience:
      "Coach, creator, freelancer, e-commerce · Agenzie, studi professionali, SaaS, consulenza, real estate",
    pricing: "Da 49€/mese · 7 giorni di prova gratis con 500 crediti inclusi",
    url: "https://powerleads.poweragency.it",
    ctaLabel: "Vai a PowerLeads",
  },
  {
    slug: "powerreel",
    index: "02",
    name: "PowerReel",
    tag: "In arrivo",
    status: "soon",
    icon: "🎬",
    headline: "Sezione in arrivo.",
    description:
      "Stiamo costruendo PowerReel. Questa sezione è da compilare: feature, descrizione e dettagli arrivano a breve.",
    features: [],
    ctaLabel: "Resta aggiornato",
  },
  {
    slug: "powerlanding",
    index: "03",
    name: "PowerLanding",
    tag: "Servizio · Siti web",
    status: "live",
    icon: "🚀",
    headline: "Sito su misura in 48 ore.",
    description:
      "Sito completamente personalizzato, disegnato e scritto a mano — nessun template. Copy strategico che converte, codice artigianale, hosting e dominio inclusi. Consegna garantita in 48 ore dal pagamento.",
    features: [
      "Sviluppo 100% personalizzato, nessun template o preset",
      "Codice scritto a mano, riga per riga",
      "Copy strategico studiato per convertire",
      "Hosting e dominio inclusi nel prezzo",
      "Codice sorgente e repository ceduti a te, per sempre",
      "Massimo 30 progetti al mese per qualità controllata",
    ],
    audience:
      "Piccole imprese e professionisti — dentisti, avvocati, personal trainer, studi — che vogliono un sito credibile senza spendere migliaia di euro.",
    pricing: "Da 397€ · 3 livelli: Standard, Premium, Signature",
    url: "https://powersite.vercel.app",
    ctaLabel: "Scopri PowerLanding",
  },
];

/* ============================================================
   CRM CARROZZERIE — pagina /crm
   ============================================================ */
export const CRM = {
  name: "CRM Carrozzerie",
  tag: "Verticale · Officine & Carrozzerie",
  headline: "Gestione lead & pratiche, in un unico flusso.",
  description:
    "Il gestionale verticale per carrozzerie: dal primo contatto del cliente alla pratica chiusa. Lead, preventivi, lavorazioni e follow-up in un'unica pipeline — con l'AI che lavora i contatti al posto tuo.",
  url: "https://crm-carrozzerie.vercel.app",
  modules: [
    {
      icon: "📥",
      title: "Gestione lead",
      text: "Ogni richiesta entra, viene qualificata e assegnata. Niente contatti persi tra WhatsApp, telefono e mail.",
    },
    {
      icon: "📋",
      title: "Pratiche & preventivi",
      text: "Dalla stima al consuntivo: storico completo di ogni pratica, documenti e stato di avanzamento sempre allineati.",
    },
    {
      icon: "🔧",
      title: "Pipeline lavorazioni",
      text: "Lo stato di ogni veicolo a colpo d'occhio: in attesa, in lavorazione, pronto, consegnato.",
    },
    {
      icon: "🤖",
      title: "Follow-up AI",
      text: "I preventivi non chiusi vengono ricontattati in automatico. L'AI scrive e insiste al posto tuo, con il tono giusto.",
    },
    {
      icon: "🔗",
      title: "Lead gen integrata",
      text: "I contatti che arrivano dalle ads entrano già dentro al CRM, pronti da lavorare. Zero copia-incolla.",
    },
    {
      icon: "📊",
      title: "Numeri reali",
      text: "Conversioni, tempi di chiusura e fatturato per periodo. Sai sempre cosa funziona e cosa no.",
    },
  ],
  workflow: [
    { step: "01", title: "Arriva il lead", text: "Dalle ads, dal sito o da Google: ogni richiesta entra nel CRM." },
    { step: "02", title: "Qualifica e preventivo", text: "Il contatto viene qualificato e riceve un preventivo tracciato." },
    { step: "03", title: "Follow-up automatico", text: "Se non risponde, l'AI lo ricontatta finché non chiude o dice no." },
    { step: "04", title: "Lavorazione e consegna", text: "Pratica in officina, stato aggiornato, cliente sempre informato." },
  ],
} as const;

export const CASE_METRICS = [
  { value: 60, suffix: "+", label: "lead in 2 settimane" },
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
  lead: "Gestione sistematica di oltre 120 account prop con software costruito internamente. Hedging automatico sui capitali propri, edge matematico, zero teoria: solo operatività live in produzione.",
  metrics: [
    { value: 120, suffix: "+", label: "account prop operativi" },
    { value: 100, suffix: "%", label: "operatività su capitali propri" },
    { value: 24, suffix: "/7", label: "automazioni sempre attive" },
  ],
  features: [
    {
      icon: "🤖",
      title: "Automazioni complete",
      text: "Software interno che gestisce gli account end-to-end: niente operatività manuale, niente errori da stanchezza.",
    },
    {
      icon: "🛡️",
      title: "Hedging automatico",
      text: "Copertura sistematica sui capitali propri. Il rischio è gestito da regole, non da emozioni.",
    },
    {
      icon: "📐",
      title: "Edge matematico",
      text: "Sistemi costruiti su un vantaggio statistico provato e sistematizzato, non su sensazioni.",
    },
    {
      icon: "⚡",
      title: "100% in produzione",
      text: "Operatività live ogni giorno sui nostri capitali. Quello che vendiamo è quello che usiamo.",
    },
  ],
  process: [
    { step: "01", title: "Sistema con edge", text: "Partiamo da un vantaggio matematico misurabile, non da una strategia sentita dire." },
    { step: "02", title: "Sistematizzazione", text: "Lo trasformiamo in regole eseguibili da software: ripetibili e scalabili." },
    { step: "03", title: "Automazione", text: "Le automazioni gestiscono gli account: esecuzione, hedging, monitoraggio." },
    { step: "04", title: "Scala", text: "Da pochi account a 120+ in parallelo, mantenendo il controllo del rischio." },
  ],
  quote: "Niente teoria. Solo operatività live, ogni giorno.",
  owner: { name: "Wassim", role: "Vertical prop firms" },
  metaTitle: "Prop firms",
  metaDescription:
    "120+ account prop gestiti ogni giorno con software interno: hedging automatico, edge matematico, operatività live su capitali propri.",
};

export const ECOMMERCE: Vertical = {
  kicker: "Il verticale · Ecommerce",
  title: "Da dipendente a",
  titleAccent: "10.000€ al giorno.",
  lead: "Business ecommerce scalabili con sistemi di vendita collaudati — e ancora attivi oggi. Testing prodotti iterativo, analisi dashboard costante, ottimizzazione delle campagne millimetrica.",
  metrics: [
    { value: 10000, suffix: "€/day", label: "ecommerce gestito in scala" },
    { value: 100, suffix: "%", label: "data-driven, zero intuito" },
    { value: 0, suffix: "", label: "store demo: sono tutti reali" },
  ],
  features: [
    {
      icon: "🧪",
      title: "Testing sistematico",
      text: "Prodotti testati in modo iterativo: i dati decidono cosa scala e cosa si taglia. Niente affezione al prodotto.",
    },
    {
      icon: "📊",
      title: "Data-driven",
      text: "Analisi costante delle dashboard. Ogni euro speso in ads ha una metrica che lo giustifica.",
    },
    {
      icon: "🎯",
      title: "Campagne ottimizzate",
      text: "Ottimizzazione millimetrica delle campagne pubblicitarie, non set-and-forget.",
    },
    {
      icon: "🏪",
      title: "Store ancora attivi",
      text: "Non case study del passato: store che generano reddito oggi, gestiti in prima persona.",
    },
  ],
  process: [
    { step: "01", title: "Ricerca prodotto", text: "Selezione basata su domanda reale e margini, non sull'hype del momento." },
    { step: "02", title: "Test rapidi", text: "Si testa veloce e si legge il mercato dai numeri, non dalle sensazioni." },
    { step: "03", title: "Scala ciò che funziona", text: "Sul vincente si spinge il budget; sul resto si taglia senza pietà." },
    { step: "04", title: "Ottimizza in continuo", text: "Monitoraggio dashboard e ritocco campagne ogni giorno per tenere il ROI." },
  ],
  quote: "Sistemi di vendita collaudati. E ancora attivi oggi.",
  owner: { name: "Vincenzo", role: "CEO · Vertical ecommerce" },
  metaTitle: "Ecommerce",
  metaDescription:
    "Business ecommerce scalabili e ancora attivi: testing prodotti, ottimizzazione campagne e gestione data-driven fino a 10.000€/day.",
};

/* ============================================================
   TEAM — fondatori + sales team (card)
   ============================================================ */
export type Person = {
  name: string;
  role: string;
};

export const TEAM: Person[] = [
  { name: "Vincenzo", role: "CEO · Vertical ecommerce" },
  { name: "Mattia", role: "Tecnico · AI · sviluppo" },
  { name: "Wassim", role: "Vertical prop firms" },
];

// squadra estesa: ruoli misti (sales + tecnico)
export const SQUAD: Person[] = [
  { name: "Gabriele", role: "Sales · Closer" },
  { name: "Giorgio", role: "Sales · Closer" },
  { name: "William", role: "Tecnico · sviluppo" },
];

export const CONTACT = {
  email: "info@poweragency.it",
  instagram: "https://instagram.com/_poweragency_",
  instagramHandle: "@_poweragency_",
} as const;
