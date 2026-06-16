import type { MetadataRoute } from "next";
import { CITY_PAGES } from "@/lib/cities";
import { SITE } from "@/lib/constants";
import { SITUATION_SLUGS } from "@/lib/situation-content";
import { getWordPressBlogPostsWithFallback } from "@/lib/wordpress";

const BASE_URL = SITE.url.replace(/\/$/, "");

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const STATIC_ROUTES: StaticRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/how-it-works", changeFrequency: "monthly", priority: 0.9 },
  { path: "/reviews", changeFrequency: "weekly", priority: 0.8 },
  { path: "/sell-your-house", changeFrequency: "monthly", priority: 0.9 },
  { path: "/get-a-cash-offer", changeFrequency: "monthly", priority: 0.9 },
  { path: "/cash-vs-agent", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const blogPosts = await getWordPressBlogPostsWithFallback();

  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const cityPages: MetadataRoute.Sitemap = CITY_PAGES.map((page) => ({
    url: `${BASE_URL}/${page.route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const situationPages: MetadataRoute.Sitemap = SITUATION_SLUGS.map((slug) => ({
    url: `${BASE_URL}/situations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages, ...situationPages, ...blogPages];
}
