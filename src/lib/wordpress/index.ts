import { mapWordPressPosts } from "@/lib/wordpress/map-post";
import {
  fetchWordPressPostBySlug,
  fetchWordPressPosts,
  type WordPressPost,
} from "@/lib/wordpress/graphql";
import type { BlogPost } from "@/lib/blog";

export { WORDPRESS_GRAPHQL_URL } from "@/lib/wordpress/graphql";

export async function getWordPressBlogPosts(): Promise<BlogPost[]> {
  const posts = await fetchWordPressPosts();
  return mapWordPressPosts(posts);
}

export async function getWordPressBlogPost(slug: string): Promise<BlogPost | null> {
  const post = await fetchWordPressPostBySlug(slug);
  if (!post) return null;
  return mapWordPressPosts([post])[0] ?? null;
}

export async function getWordPressBlogPostsWithFallback(): Promise<BlogPost[]> {
  try {
    return await getWordPressBlogPosts();
  } catch (error) {
    console.error("[wordpress] Failed to load blog posts:", error);
    return [];
  }
}

export async function getWordPressBlogPostWithFallback(slug: string): Promise<BlogPost | undefined> {
  try {
    const post = await getWordPressBlogPost(slug);
    if (post) return post;

    const posts = await getWordPressBlogPosts();
    return posts.find((item) => item.slug === slug);
  } catch (error) {
    console.error(`[wordpress] Failed to load blog post "${slug}":`, error);
    return undefined;
  }
}

export async function getAllWordPressSlugs(): Promise<string[]> {
  try {
    const posts = await fetchWordPressPosts();
    return posts.map((post) => post.slug);
  } catch {
    return [];
  }
}

export type { WordPressPost };
