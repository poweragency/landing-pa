import { SITE_URL } from "@/lib/seo";

/**
 * Schema.org JSON-LD builders, emitted via <JsonLd>. The Organization is the
 * canonical entity (@id); Service nodes reference it by @id, so Organization
 * must be present on any page that emits a Service (it lives in the layout).
 */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const ORG_DESCRIPTION =
  "PowerAgency costruisce sistemi AI per generare clienti: sito, lead generation e CRM in un'unica infrastruttura. Software testati prima sul proprio business (ecommerce, prop firms) e poi portati ai clienti.";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "PowerAgency",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo.png`,
    image: `${SITE_URL}/brand/logo.png`,
    email: "info@poweragency.it",
    description: ORG_DESCRIPTION,
    sameAs: ["https://instagram.com/_poweragency_"],
    areaServed: { "@type": "Country", name: "Italia" },
    knowsAbout: [
      "lead generation",
      "CRM",
      "siti web",
      "automazione AI",
      "ecommerce",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "PowerAgency",
    inLanguage: "it-IT",
    publisher: { "@id": ORG_ID },
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: `${SITE_URL}${input.path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Italia" },
  };
}
