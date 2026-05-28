export const NAV_LINKS = [
  { href: "#prodotti", label: "Prodotti" },
  { href: "#metodo", label: "Metodo" },
  { href: "#casi", label: "Case study" },
  { href: "#team", label: "Team" },
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
    title: "Trio che fa palestra",
    text: "Strategia, tecnica e verticali: tre persone che si allenano ogni giorno sul proprio business. Risultati, non slide.",
  },
] as const;

export type Product = {
  index: string;
  tag: string;
  tagStyle?: "default" | "saas" | "soon";
  title: string;
  text: string;
  bullets?: string[];
  cta: string;
  arrow?: string;
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    index: "01",
    tag: "Sistema completo",
    title: "Il pacchetto",
    text: "Sito, lead generation e CRM in un sistema unico AI-powered. L'asset completo per trasformare il traffico in clienti che chiudi.",
    bullets: ["Sito che converte, non solo bello", "Lead gen automatizzata", "CRM con follow-up AI"],
    cta: "Esplora",
    featured: true,
  },
  {
    index: "02",
    tag: "Verticale",
    title: "Le carrozzerie",
    text: "Verticalizzazione per settore: preventivi, pratiche e lavorazioni gestite dall'AI. Già testato sul campo con numeri reali.",
    cta: "Vedi il verticale",
  },
  {
    index: "03",
    tag: "Enterprise",
    title: "Progetti enterprise",
    text: "Stack custom e integrazioni profonde per chi ha già volumi. Architettura su misura, AI dove serve davvero.",
    cta: "Parliamone",
  },
  {
    index: "04",
    tag: "SaaS",
    tagStyle: "saas",
    title: "PowerLeads",
    text: "Estrazione lead e outreach AI automatico. Trova i contatti giusti e li contatta per te, su scala.",
    cta: "Vai al SaaS",
    arrow: "↗",
  },
  {
    index: "05",
    tag: "In arrivo",
    tagStyle: "soon",
    title: "PowerReel",
    text: "Gestione contenuti social automatizzata. Dalla creazione alla pubblicazione, il tuo flusso content guidato dall'AI.",
    cta: "Resta aggiornato",
  },
];

export const CASE_METRICS = [
  { value: 60, suffix: "+", label: "lead in 2 settimane" },
  { value: 5, suffix: "", label: "clienti chiusi" },
  { value: 15000, suffix: "€", label: "fatturato generato" },
] as const;

export const TEAM = [
  { initials: "VA", name: "Vincenzo Amore", role: "Commerciale & strategia" },
  { initials: "MA", name: "Mattia", role: "Tecnico · AI · sviluppo" },
  { initials: "WA", name: "Wassim", role: "Vertical prop firms" },
] as const;

export const SALES = ["Gabriele", "Giorgio", "William"] as const;

export const CONTACT = {
  email: "info@poweragency.it",
  instagram: "https://instagram.com/_poweragency_",
  instagramHandle: "@_poweragency_",
} as const;
