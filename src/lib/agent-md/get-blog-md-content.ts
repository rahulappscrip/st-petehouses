import {
  generateBlogListingMd,
  generateBlogPostMd,
} from "@/lib/agent-md/generate-blog-md";
import {
  fetchWordPressPostBySlug,
  fetchWordPressPosts,
} from "@/lib/wordpress/graphql";

export function isBlogAgentMdKey(key: string): boolean {
  return key === "blog" || key.startsWith("blog/");
}

export async function getBlogMdContent(key: string): Promise<string | null> {
  if (key === "blog") {
    const posts = await fetchWordPressPosts();
    return generateBlogListingMd(posts);
  }

  if (key.startsWith("blog/")) {
    const slug = key.slice("blog/".length);
    const post = await fetchWordPressPostBySlug(slug);
    if (!post) return null;
    return generateBlogPostMd(post);
  }

  return null;
}
