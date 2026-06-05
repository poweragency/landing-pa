export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/software", label: "Software" },
  { href: "/ecosistema", label: "Ecosistema" },
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
    slug: "powersocial",
    index: "02",
    name: "PowerSocial",
    tag: "SaaS · Social media",
    status: "live",
    icon: "send",
    headline: "Tutti i social, una dashboard.",
    description:
      "La dashboard multi-brand per gestire i social da un posto solo: organizzi, programmi e pubblichi i contenuti senza saltare da un tool all'altro. Pensata per chi cura più account e non vuole perdere tempo.",
    features: [
      "Dashboard multi-brand: tutti gli account in un'unica vista",
      "Programmazione e pubblicazione dei contenuti",
      "Un solo flusso di lavoro, niente strumenti sparsi",
    ],
    audience:
      "Agenzie, creator e brand che gestiscono più account social da un'unica dashboard. Ma anche il singolo professionista o imprenditore che vuole gestire i propri social da sé e non ha il tempo materiale di creare e ottimizzare i contenuti ogni giorno.",
    url: "https://powersocial.poweragency.it",
    ctaLabel: "Vai a PowerSocial",
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

/* ============================================================
   FAQ — sezione home + sezioni per pagina (con FAQPage schema)
   ============================================================ */
export type Faq = { q: string; a: string };

export const HOME_FAQ: Faq[] = [
  {
    q: "Cosa fa PowerAgency?",
    a: "PowerAgency costruisce asset digitali che generano clienti: sito, lead generation e CRM in un unico sistema integrato e guidato dall'AI. È un'agenzia che usa gli stessi strumenti sul proprio business — ecommerce e prop firms — prima di proporli ai clienti.",
  },
  {
    q: "Quali servizi offre PowerAgency?",
    a: "Tre componenti che lavorano insieme: il sito, la lead generation con qualifica AI e un CRM su misura per gestire i contatti. In più PowerSocial per i social. Puoi prenderli come sistema unico o singolarmente.",
  },
  {
    q: "A chi si rivolge PowerAgency?",
    a: "Ad aziende e professionisti con vendita consulenziale, dove c'è un ciclo lead, preventivo e chiusura: carrozzerie (il verticale più forte), studi dentistici, imprese edili, servizi B2B. E ai singoli imprenditori che vogliono gestire i propri social senza perderci tempo.",
  },
  {
    q: "Cosa rende PowerAgency diversa da un'agenzia tradizionale?",
    a: "Non vendiamo teoria: usiamo i nostri stessi sistemi ogni giorno sul nostro business — ecommerce gestito fino a 10.000€ al giorno e oltre 120 account prop firm in produzione. Ai clienti proponiamo ciò che già funziona per noi.",
  },
  {
    q: "In quali settori lavorate?",
    a: "Il verticale più forte sono le carrozzerie, dove abbiamo case study reali. Ma il sistema funziona in qualsiasi settore con vendita consulenziale: studi dentistici, imprese edili, studi professionali e servizi B2B.",
  },
  {
    q: "Quanto costa lavorare con PowerAgency?",
    a: "Dipende da cosa ti serve. PowerLeads e PowerSocial sono software in abbonamento, con i piani sulle rispettive pagine. Il sito e il CRM su misura si quotano dopo un breve audit: nella prima call ti diamo un range realistico, senza preventivi nebulosi.",
  },
];

export const CRM_FAQ: Faq[] = [
  {
    q: "Si integra con il mio gestionale?",
    a: "Dipende dal gestionale. I principali (es. CarroGest, MecPlanet, OneOff) hanno API o export che colleghiamo al CRM via webhook. Se il tuo è custom, lo valutiamo in fase di audit.",
  },
  {
    q: "Per quali settori è disponibile oltre alle carrozzerie?",
    a: "Il primo verticale pronto è quello delle carrozzerie. Il CRM è però modellabile su qualsiasi settore con flusso lead, preventivo, lavorazione e consegna: apriamo nuovi verticali di continuo.",
  },
  {
    q: "Gestisce più sedi?",
    a: "Sì. Supporta il multi-sede con routing automatico dei lead per zona e una dashboard di performance separata per ogni sede.",
  },
  {
    q: "Manda promemoria e aggiornamenti su WhatsApp?",
    a: "Sì. Invia in automatico conferme, promemoria appuntamento e aggiornamenti sullo stato della pratica via email e WhatsApp, al momento giusto.",
  },
  {
    q: "In quanto tempo si attiva?",
    a: "Tipicamente 2-3 settimane dopo la conferma, calibrato sul tuo flusso. Entro circa 30 giorni dall'inizio sei operativo con il sistema completo.",
  },
  {
    q: "Posso provarlo prima?",
    a: "Sì, c'è una demo navigabile: te la mostriamo sui numeri reali del primo verticale in una call, senza impegno.",
  },
];

export const SOFTWARE_FAQ: Faq[] = [
  {
    q: "Da dove estrae i lead PowerLeads?",
    a: "Da profili Instagram e ricerche su Google Maps. Per ogni lead l'AI (Claude di Anthropic) scrive un icebreaker su misura, e l'outreach parte in automatico: DM via estensione Chrome ed email dal tuo dominio.",
  },
  {
    q: "Serve competenza tecnica per usare PowerLeads?",
    a: "No. È attivo in cinque minuti, senza competenze tecniche: una sola dashboard al posto di quattro o cinque strumenti separati.",
  },
  {
    q: "Quanto costa PowerLeads?",
    a: "PowerLeads è in abbonamento unico. Trovi i piani aggiornati sulla sua pagina, powerleads.poweragency.it.",
  },
  {
    q: "In quanto tempo è pronto un sito con PowerLanding?",
    a: "In 48 ore, garantite. Il sito è scritto a mano e su misura, non da template, con hosting e dominio inclusi.",
  },
  {
    q: "Il codice del sito è mio?",
    a: "Sì. Con PowerLanding il codice sorgente e il repository restano tuoi, per sempre.",
  },
  {
    q: "Quali social gestisce PowerSocial?",
    a: "Per ora Instagram, da un'unica dashboard multi-brand: gestisci più account da un posto solo.",
  },
  {
    q: "PowerSocial crea i contenuti o li pubblica soltanto?",
    a: "Entrambi: crea i contenuti e li pubblica per te, così presidi i social anche se non hai il tempo di produrli e ottimizzarli ogni giorno.",
  },
];

export const PROP_FAQ: Faq[] = [
  {
    q: "Le prop firms sono un servizio che vendete?",
    a: "No. La gestione delle prop firm è la nostra operatività interna — oltre 120 account gestiti ogni giorno con software proprietario e hedging automatico. La portiamo come prova di metodo, non come servizio in vendita.",
  },
  {
    q: "Perché parlate di prop firms se non le vendete?",
    a: "Perché dimostrano il nostro metodo: un edge matematico sistematizzato e automatizzato su oltre 120 account reali. È la stessa mentalità — sistema, non improvvisazione — che applichiamo ai servizi che vendiamo.",
  },
];

export const ECOMMERCE_FAQ: Faq[] = [
  {
    q: "L'ecommerce è un servizio o la vostra esperienza?",
    a: "È esperienza operativa reale: store nostri ancora attivi oggi, gestiti fino a 10.000€ al giorno. Non case study del passato, ma operatività quotidiana.",
  },
  {
    q: "Offrite consulenza ecommerce?",
    a: "Sì: una consulenza 1:1 con chi gestisce store reali fino a 10.000€ al giorno — prodotto, campagne e numeri. Paghi competenza operativa, non teoria.",
  },
];

/* ============================================================
   ECOSISTEMA — pagina /ecosistema (sito + lead generation + CRM, servizio completo)
   ============================================================ */
export const ECOSISTEMA = {
  hero: {
    kicker: "L'ecosistema PowerAgency",
    title: "Sito, lead generation e CRM.",
    titleAccent: "Un solo ecosistema.",
    lead: "Non tre tool incollati: un'unica infrastruttura guidata dall'AI che cattura il lead, lo qualifica e te lo passa quando è caldo. Funziona perché la usiamo prima sui nostri business.",
  },
  problem: {
    title: "Tre tool diversi. Lead persi nel mezzo.",
    body: "Sito fatto due anni fa, lead capture su un form che non parla con niente, CRM su un foglio Google, ads che girano senza che nessuno qualifichi i contatti in arrivo. Risultato: gran parte dei lead muore prima di essere chiamata — non per cattiva volontà, ma perché il sistema è frammentato e nessuno ha il tempo di incollare i pezzi a mano ogni giorno.",
  },
  pillars: [
    {
      icon: "layers",
      title: "Sito che converte",
      text: "Landing dedicate per ogni canale, copy AI-assisted calibrato sul target, caricamento sotto i 2 secondi. Costruito per essere indicizzato (SEO) e citato dalle AI (GEO).",
    },
    {
      icon: "target",
      title: "Lead generation con qualifica AI",
      text: "Form intelligenti che si adattano al canale di arrivo, scoring automatico per settore, budget e intento. Al sales arriva solo ciò che vale la chiamata.",
    },
    {
      icon: "chart",
      title: "CRM integrato",
      text: "Pipeline pronta e configurabile sul tuo processo, notifiche real-time sul lead caldo, dashboard per canale e per agente. Tutti i lead in un posto, ordinati per priorità.",
    },
  ],
  process: [
    { step: "01", title: "Discovery call", text: "30 minuti. Capiamo settore, ads attuali e come gestisci i lead oggi. Già qui ti diciamo se siamo i partner giusti." },
    { step: "02", title: "Audit e proposta", text: "Analisi del punto di partenza, economics chiari (costi, ROI atteso, break-even) e timeline. Nessun preventivo da decifrare." },
    { step: "03", title: "Build · 2-3 settimane", text: "Sito, lead gen e CRM costruiti e integrati, testati su traffico reale prima del go-live. Tu intervieni solo dove serve la tua firma." },
    { step: "04", title: "Go-live + ottimizzazione", text: "Da lì ricevi lead qualificati nel CRM. Ottimizziamo nelle prime 4 settimane sulla base dei dati reali." },
  ],
} as const;

export const ECOSISTEMA_FAQ: Faq[] = [
  {
    q: "Quanto tempo serve per partire?",
    a: "Tipicamente 2-3 settimane di build dopo la firma. Entro circa 30 giorni dall'inizio sei live con tutto il sistema operativo.",
  },
  {
    q: "Posso mantenere il mio sito attuale?",
    a: "Tecnicamente sì, ma di solito non lo consigliamo: il sistema lavora meglio quando il sito è costruito coerente con il funnel di lead generation. Se il tuo converte bene possiamo collegarci, altrimenti lo ricostruiamo.",
  },
  {
    q: "Chi gestisce la pubblicità (ads)?",
    a: "Possiamo gestirle noi (Google Ads + Meta) o affiancarci alla tua agenzia esistente. Il sistema di lead generation è agnostico al canale: funziona con qualsiasi sorgente.",
  },
  {
    q: "Quanto tempo devo dedicare io?",
    a: "1-2 ore a settimana in fase di build, per contenuti e decisioni di brand. A regime, solo le call con i lead caldi che il CRM ti segnala. Il resto lo gestiamo noi.",
  },
  {
    q: "Cosa succede se voglio interrompere?",
    a: "Il sistema resta tuo: il sito è esportabile e i dati dei lead nel CRM ti seguono. Nessun lock-in: paghi il servizio finché ti serve.",
  },
];
