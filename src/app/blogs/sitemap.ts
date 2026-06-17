import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { fetchWordPressPosts } from "@/lib/wordpress/graphql";

const BASE_URL = SITE.url.replace(/\/$/, "");

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchWordPressPosts();

  return posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modified || post.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
