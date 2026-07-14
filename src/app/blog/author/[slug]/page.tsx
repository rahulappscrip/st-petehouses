import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorPageContent } from "@/components/blog/AuthorPageContent";
import { SITE } from "@/lib/constants";
import {
  getAllWordPressAuthorSlugs,
  getWordPressAuthorPageWithFallback,
} from "@/lib/wordpress";

export const revalidate = 60;
export const dynamicParams = true;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllWordPressAuthorSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getWordPressAuthorPageWithFallback(slug);
  if (!data) return {};

  const { author } = data;
  const description =
    author.bio?.slice(0, 160) ||
    `Read articles by ${author.name} on the We Buy St Pete Houses blog.`;
  const url = `${SITE.url}blog/author/${author.slug}/`;

  return {
    title: `${author.name} · Author · We Buy St Pete Houses`,
    description,
    alternates: { canonical: `/blog/author/${author.slug}` },
    openGraph: {
      type: "profile",
      title: `${author.name} · Author`,
      description,
      url,
      locale: "en_US",
      images: author.avatar ? [{ url: author.avatar }] : undefined,
    },
    robots: { index: true, follow: true },
    other: {
      "profile:username": author.slug,
    },
  };
}

export default async function AuthorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getWordPressAuthorPageWithFallback(slug);
  if (!data) notFound();

  const { author, posts } = data;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        name: author.name,
        description: author.bio,
        url: `${SITE.url}blog/author/${author.slug}/`,
        mainEntity: {
          "@type": "Person",
          name: author.name,
          description: author.bio,
          jobTitle: author.role,
          image: author.avatar,
          url: `${SITE.url}blog/author/${author.slug}/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}blog/` },
          {
            "@type": "ListItem",
            position: 3,
            name: author.name,
            item: `${SITE.url}blog/author/${author.slug}/`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: `Articles by ${author.name}`,
        numberOfItems: posts.length,
        itemListElement: posts.slice(0, 9).map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE.url}blog/${post.slug}/`,
          name: post.title,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AuthorPageContent author={author} posts={posts} />
    </>
  );
}
