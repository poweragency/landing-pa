import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

type Freq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const PAGES: { path: string; priority: number; changeFrequency: Freq }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/ecosistema", priority: 0.9, changeFrequency: "monthly" },
  { path: "/software", priority: 0.8, changeFrequency: "monthly" },
  { path: "/crm", priority: 0.8, changeFrequency: "monthly" },
  { path: "/prop", priority: 0.6, changeFrequency: "monthly" },
  { path: "/ecommerce", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/termini", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAGES.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
