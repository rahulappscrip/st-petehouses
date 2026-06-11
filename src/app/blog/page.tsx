import type { Metadata } from "next";
import { BlogPageContent } from "@/components/blog/BlogPageContent";
import { BLOG_PAGE } from "@/lib/blog";
import { SITE } from "@/lib/constants";
import { getPageOgImage, ogImageMeta } from "@/lib/og-images";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Blog · We Buy St Pete Houses",
  description: BLOG_PAGE.metaDescription,
  keywords: PAGE_KEYWORDS.blog,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Blog · We Buy St Pete Houses",
    description: BLOG_PAGE.metaDescription,
    url: `${SITE.url}blog/`,
    locale: "en_US",
    images: (() => {
      const file = getPageOgImage("/blog");
      return file ? ogImageMeta(file, "Blog · We Buy St Pete Houses") : undefined;
    })(),
  },
  robots: { index: true, follow: true },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
