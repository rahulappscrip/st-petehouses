import type { MetadataRoute } from "next";
import { CITY_PAGES } from "@/lib/cities";
import { getSiteOrigin } from "@/lib/site-url";
import { discoverAppRoutes } from "@/lib/sitemap/discover-app-routes";
import { resolveSitemapConfig } from "@/lib/sitemap/route-config";
import { getLastModified } from "@/lib/sitemap-last-modified";
import { SITUATION_SLUGS } from "@/lib/situation-content";

const BASE_URL = getSiteOrigin();

export const revalidate = 60;

const CITY_PAGE_SOURCES = [
  "src/app/[location]/page.tsx",
  "src/lib/cities.ts",
  "src/components/cities",
];

const SITUATION_PAGE_SOURCES = [
  "src/app/situations/[slug]/page.tsx",
  "src/lib/situation-content-data.json",
  "src/components/situations",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = discoverAppRoutes().map(({ path, sources }) => {
    const { changeFrequency, priority } = resolveSitemapConfig(path);

    return {
      url: `${BASE_URL}${path === "/" ? "" : path}`,
      lastModified: getLastModified(...sources),
      changeFrequency,
      priority,
    };
  });

  const cityLastModified = getLastModified(...CITY_PAGE_SOURCES);
  const cityPages: MetadataRoute.Sitemap = CITY_PAGES.map((page) => ({
    url: `${BASE_URL}/${page.route}`,
    lastModified: cityLastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const situationLastModified = getLastModified(...SITUATION_PAGE_SOURCES);
  const situationPages: MetadataRoute.Sitemap = SITUATION_SLUGS.map((slug) => ({
    url: `${BASE_URL}/situations/${slug}`,
    lastModified: situationLastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...cityPages, ...situationPages];
}
