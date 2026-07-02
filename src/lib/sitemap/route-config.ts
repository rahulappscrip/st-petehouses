import type { MetadataRoute } from "next";

export type SitemapRouteConfig = {
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

/** Per-path SEO overrides — new pages use SITEMAP_DEFAULTS unless listed here. */
export const SITEMAP_ROUTE_OVERRIDES: Record<string, SitemapRouteConfig> = {
  "/": { priority: 1, changeFrequency: "weekly" },
  "/blog": { priority: 0.8, changeFrequency: "weekly" },
  "/reviews": { priority: 0.8, changeFrequency: "weekly" },
  "/about": { priority: 0.8 },
  "/contact": { priority: 0.9 },
  "/how-it-works": { priority: 0.9 },
  "/sell-your-house": { priority: 0.9 },
  "/get-a-cash-offer": { priority: 0.9 },
  "/cash-vs-agent": { priority: 0.7 },
  "/faq": { priority: 0.8 },
};

export const SITEMAP_DEFAULTS: Required<SitemapRouteConfig> = {
  changeFrequency: "monthly",
  priority: 0.85,
};

export function resolveSitemapConfig(path: string): Required<SitemapRouteConfig> {
  const override = SITEMAP_ROUTE_OVERRIDES[path];

  return {
    changeFrequency: override?.changeFrequency ?? SITEMAP_DEFAULTS.changeFrequency,
    priority: override?.priority ?? SITEMAP_DEFAULTS.priority,
  };
}
