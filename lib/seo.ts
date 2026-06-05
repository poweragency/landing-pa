import type { Metadata } from "next";

export const SITE_URL = "https://www.poweragency.it";

// Brand OG card served by app/og/route.tsx. Referenced explicitly (not via the
// opengraph-image file convention) so the image survives per-page openGraph
// overrides instead of being dropped.
export const OG_IMAGE = {
  url: "/og",
  width: 1200,
  height: 630,
  alt: "PowerAgency — sistemi AI per generare clienti",
};

/**
 * Full metadata block for a sub-page: title (templated by layout), description,
 * self-canonical, Open Graph and Twitter with the brand OG image.
 */
export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${input.path}`;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "PowerAgency",
      title: input.title,
      description: input.description,
      url,
      locale: "it_IT",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [OG_IMAGE.url],
    },
  };
}
