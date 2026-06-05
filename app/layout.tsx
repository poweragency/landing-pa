import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";
import { organizationSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const HOME_TITLE = "PowerAgency — Sistemi AI per risultati reali";
const HOME_OG_DESCRIPTION =
  "Costruiamo asset che generano clienti. Non un'agenzia, ma un team che ogni giorno testa sul proprio business ciò che vende.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s — PowerAgency",
  },
  description:
    "Costruiamo asset che generano clienti: sito, lead generation e CRM in un unico sistema guidato dall'AI. Se non funziona sul nostro business, non lo portiamo fuori.",
  alternates: { canonical: SITE_URL },
  icons: { icon: "/brand/logo.png" },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_OG_DESCRIPTION,
    type: "website",
    siteName: "PowerAgency",
    url: SITE_URL,
    locale: "it_IT",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_OG_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0606",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <JsonLd data={organizationSchema()} />
        <Background />
        <CustomCursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
