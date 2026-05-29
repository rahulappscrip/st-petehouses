import type { Metadata } from "next";
import { SellYourHouseContent } from "@/components/sell-your-house/SellYourHouseContent";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sell Your House Fast in St. Petersburg, FL | Cash Offers",
  description:
    "Sell your house fast in St. Petersburg with We Buy St Pete Houses. Get a cash offer quickly, close in as little as 7 days, and avoid repairs or commissions.",
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
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need to fix up my house to sell to a cash buyer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — we buy properties as-is, without requiring repairs. You won't need to invest time or money in upgrades, staging, or contractor work before closing.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can I get a cash offer in St. Petersburg?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cash offers can be provided quickly, often within 24 hours. Once you submit your property details, we review the information and present a fair offer.",
          },
        },
        {
          "@type": "Question",
          name: "Are there Realtor commissions or closing costs with cash offers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We don't charge Realtor commissions. Closing costs can vary depending on the specifics of the transaction, but we work to minimize your out-of-pocket expenses and provide transparency on any costs before you commit.",
          },
        },
      ],
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
