import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailContent } from "@/components/blog/BlogDetailContent";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog";
import { SITE } from "@/lib/constants";
import { getBlogPostKeyword } from "@/lib/seo-keywords";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = `${SITE.url}blog/${post.slug}/`;

  return {
    title: `${post.title} | We Buy St Pete Houses`,
    description: post.metaDescription,
    keywords: getBlogPostKeyword(post),
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url,
      locale: "en_US",
      publishedTime: post.date,
      authors: [post.author],
      images: post.heroImage ? [{ url: post.heroImage }] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        image: post.heroImage,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: post.authorRole,
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          logo: { "@type": "ImageObject", url: `${SITE.url}assets/images/logo.webp` },
        },
        mainEntityOfPage: `${SITE.url}blog/${post.slug}/`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}blog/` },
          { "@type": "ListItem", position: 3, name: post.title },
        ],
      },
      ...(post.faq?.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogDetailContent post={post} />
    </>
  );
}
