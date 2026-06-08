import type { Metadata } from "next";
import { GetACashOfferPageContent } from "@/components/get-a-cash-offer/GetACashOfferPageContent";
import { GET_A_CASH_OFFER_PAGE } from "@/lib/get-a-cash-offer-content";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: GET_A_CASH_OFFER_PAGE.meta.title,
  description: GET_A_CASH_OFFER_PAGE.meta.description,
  alternates: { canonical: "/get-a-cash-offer" },
  openGraph: {
    type: "website",
    title: GET_A_CASH_OFFER_PAGE.meta.title,
    description: GET_A_CASH_OFFER_PAGE.meta.description,
    url: `${SITE.url}get-a-cash-offer/`,
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}get-a-cash-offer/#webpage`,
      name: GET_A_CASH_OFFER_PAGE.meta.title,
      description: GET_A_CASH_OFFER_PAGE.meta.description,
      url: `${SITE.url}get-a-cash-offer/`,
      isPartOf: { "@id": `${SITE.url}#website` },
    },
    {
      "@type": "FAQPage",
      mainEntity: GET_A_CASH_OFFER_PAGE.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Get a Cash Offer" },
      ],
    },
  ],
};

export default function GetACashOfferPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GetACashOfferPageContent />
    </>
  );
}
