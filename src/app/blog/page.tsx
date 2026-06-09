import type { Metadata } from "next";
import { BlogPageContent } from "@/components/blog/BlogPageContent";
import { BLOG_PAGE } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog · We Buy St Pete Houses",
  description: BLOG_PAGE.metaDescription,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Blog · We Buy St Pete Houses",
    description: BLOG_PAGE.metaDescription,
    url: `${SITE.url}blog/`,
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
