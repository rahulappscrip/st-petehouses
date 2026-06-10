import type { Metadata } from "next";
import { SellYourHouseContent } from "@/components/sell-your-house/SellYourHouseContent";
import { SITE } from "@/lib/constants";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Sell Your House Fast in St. Petersburg, FL | Cash Offers",
  description:
    "Sell your house fast in St. Petersburg with We Buy St Pete Houses. Get a cash offer quickly, close in as little as 7 days, and avoid repairs or commissions.",
  keywords: PAGE_KEYWORDS.sellYourHouse,
  alternates: { canonical: "/sell-your-house" },
  openGraph: {
    type: "website",
    title: "Sell Your House Fast in St. Petersburg, FL | Cash Offers",
    description: "Cash offers quickly. Close in as little as 7 days. As-is, no repairs, no commissions.",
    url: `${SITE.url}sell-your-house/`,
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}sell-your-house/#webpage`,
      name: "Sell Your House Fast in St. Petersburg, FL with a Cash Offer",
      url: `${SITE.url}sell-your-house/`,
      datePublished: "2026-05-27",
      dateModified: "2026-05-27",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Sell Your House" },
      ],
    },
  ],
};

export default function SellYourHousePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SellYourHouseContent />
    </>
  );
}
