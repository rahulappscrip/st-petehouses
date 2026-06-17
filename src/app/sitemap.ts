import type { MetadataRoute } from "next";
import { CITY_PAGES } from "@/lib/cities";
import { SITE } from "@/lib/constants";
import { getLastModified } from "@/lib/sitemap-last-modified";
import { SITUATION_SLUGS } from "@/lib/situation-content";

const BASE_URL = SITE.url.replace(/\/$/, "");

export const revalidate = 60;

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  sources: string[];
};

const STATIC_ROUTES: StaticRoute[] = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: 1,
    sources: ["src/app/page.tsx", "src/components/home"],
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
    sources: ["src/app/about/page.tsx", "src/components/about"],
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.9,
    sources: ["src/app/contact/page.tsx", "src/components/contact"],
  },
  {
    path: "/how-it-works",
    changeFrequency: "monthly",
    priority: 0.9,
    sources: ["src/app/how-it-works/page.tsx", "src/components/how-it-works"],
  },
  {
    path: "/reviews",
    changeFrequency: "weekly",
    priority: 0.8,
    sources: ["src/app/reviews/page.tsx", "src/components/reviews"],
  },
  {
    path: "/sell-your-house",
    changeFrequency: "monthly",
    priority: 0.9,
    sources: ["src/app/sell-your-house/page.tsx", "src/components/sell-your-house"],
  },
  {
    path: "/get-a-cash-offer",
    changeFrequency: "monthly",
    priority: 0.9,
    sources: ["src/app/get-a-cash-offer/page.tsx", "src/components/get-a-cash-offer"],
  },
  {
    path: "/cash-vs-agent",
    changeFrequency: "monthly",
    priority: 0.7,
    sources: ["src/app/cash-vs-agent/page.tsx", "src/components/cash-vs-agent"],
  },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.8,
    sources: ["src/app/blog/page.tsx", "src/components/blog"],
  },
];

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
  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, changeFrequency, priority, sources }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: getLastModified(...sources),
      changeFrequency,
      priority,
    }),
  );

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
