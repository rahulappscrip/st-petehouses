import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SituationPageContent } from "@/components/situations/SituationPageContent";
import { SITE } from "@/lib/constants";
import { getSituationContent, SITUATION_PAGES } from "@/lib/situations";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SITUATION_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getSituationContent(slug);
  if (!content) return {};

  const canonical = `/situations/${content.slug}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${SITE.url}situations/${content.slug}/`,
      locale: "en_US",
    },
    robots: { index: true, follow: true },
  };
}

function buildJsonLd(content: NonNullable<ReturnType<typeof getSituationContent>>) {
  const url = `${SITE.url}situations/${content.slug}/`;
  const titleText = [content.hero.titleLead, content.hero.titleEm, content.hero.titleTail]
    .filter(Boolean)
    .join("");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: titleText,
        description: content.metaDescription,
        url,
        datePublished: "2026-05-29",
        dateModified: "2026-06-01",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: content.breadcrumb, item: url },
        ],
      },
    ],
  };
}

export default async function SituationPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getSituationContent(slug);
  if (!content) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(content)) }}
      />
      <SituationPageContent content={content} />
    </>
  );
}
