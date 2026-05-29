import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SituationPageContent } from "@/components/situations/SituationPageContent";
import { SITE } from "@/lib/constants";
import { getSituationPage, SITUATION_PAGES } from "@/lib/situations";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SITUATION_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSituationPage(slug);
  if (!page) return {};

  const title = `${page.label} — Sell Your House Fast · We Buy St Pete Houses`;
  const canonical = `/situations/${page.slug}`;

  return {
    title,
    description: page.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description: page.description,
      url: `${SITE.url}situations/${page.slug}/`,
      locale: "en_US",
    },
    robots: { index: true, follow: true },
  };
}

function buildJsonLd(page: NonNullable<ReturnType<typeof getSituationPage>>) {
  const url = `${SITE.url}situations/${page.slug}/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: page.title,
        description: page.description,
        url,
        datePublished: "2026-05-29",
        dateModified: "2026-05-29",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: page.breadcrumb, item: url },
        ],
      },
    ],
  };
}

export default async function SituationPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSituationPage(slug);
  if (!page) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(page)) }}
      />
      <SituationPageContent page={page} />
    </>
  );
}
