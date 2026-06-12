import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  // Sito vetrina: manifest "light" per icone corrette su Android/scorciatoie,
  // senza esperienza standalone (non è un'app installabile).
  return {
    name: "PowerAgency",
    short_name: "PowerAgency",
    description:
      "Costruiamo asset che generano clienti: sito, lead generation e CRM in un unico sistema guidato dall'AI.",
    lang: "it",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#0a0606",
    theme_color: "#0a0606",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
