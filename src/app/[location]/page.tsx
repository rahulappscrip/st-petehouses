import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityPageContent } from "@/components/cities/CityPageContent";
import { SITE } from "@/lib/constants";
import { CITY_PAGES, getCityPage } from "@/lib/cities";

type PageProps = {
  params: Promise<{ location: string }>;
};

export function generateStaticParams() {
  return CITY_PAGES.map((page) => ({ location: page.route }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location } = await params;
  const page = getCityPage(location);
  if (!page) return {};

  const title = `We Buy Houses ${page.cityName} FL · Fast Cash Offers · We Buy St Pete Houses`;
  const canonical = `/${page.route}`;

  return {
    title,
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description: page.metaDescription,
      url: `${SITE.url}${page.route}/`,
      locale: "en_US",
    },
    robots: { index: true, follow: true },
  };
}

function buildJsonLd(page: NonNullable<ReturnType<typeof getCityPage>>) {
  const url = `${SITE.url}${page.route}/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: `We Buy Houses in ${page.cityName}, FL for Cash`,
        description: page.metaDescription,
        url,
        datePublished: "2026-05-29",
        dateModified: "2026-05-29",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          {
            "@type": "ListItem",
            position: 2,
            name: `We buy houses in ${page.cityName}, FL for cash`,
            item: url,
          },
        ],
      },
    ],
  };
}

export default async function CityLocationPage({ params }: PageProps) {
  const { location } = await params;
  const page = getCityPage(location);
  if (!page) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(page)) }}
      />
      <CityPageContent page={page} />
    </>
  );
}
