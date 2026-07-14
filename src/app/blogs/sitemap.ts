import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/site-url";
import { fetchWordPressAuthorSlugs, fetchWordPressPosts } from "@/lib/wordpress/graphql";

const BASE_URL = getSiteOrigin();

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, authorSlugs] = await Promise.all([
    fetchWordPressPosts(),
    fetchWordPressAuthorSlugs(),
  ]);

  return [
    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...authorSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/author/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
