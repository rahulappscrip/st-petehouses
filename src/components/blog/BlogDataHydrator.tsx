"use client";

import { hydrateBlogPosts, type BlogPost } from "@/lib/blog";

type BlogDataHydratorProps = {
  posts: BlogPost[];
  children: React.ReactNode;
};

/** Synchronously hydrates the shared blog store before rendering listing UI. */
export function BlogDataHydrator({ posts, children }: BlogDataHydratorProps) {
  hydrateBlogPosts(posts);
  return children;
}
