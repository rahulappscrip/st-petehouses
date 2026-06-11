import type { Metadata } from "next";
import { CashVsAgentPageContent } from "@/components/cash-vs-agent/CashVsAgentPageContent";
import { CASH_VS_AGENT_PAGE } from "@/lib/cash-vs-agent-content";
import { SITE } from "@/lib/constants";
import { getPageOgImage, ogImageMeta } from "@/lib/og-images";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: CASH_VS_AGENT_PAGE.meta.title,
  description: CASH_VS_AGENT_PAGE.meta.description,
  keywords: PAGE_KEYWORDS.cashVsAgent,
  alternates: { canonical: "/cash-vs-agent" },
  openGraph: {
    type: "article",
    title: CASH_VS_AGENT_PAGE.meta.title,
    description: CASH_VS_AGENT_PAGE.meta.description,
    url: `${SITE.url}cash-vs-agent/`,
    locale: "en_US",
    images: (() => {
      const file = getPageOgImage("/cash-vs-agent");
      return file ? ogImageMeta(file, CASH_VS_AGENT_PAGE.meta.title) : undefined;
    })(),
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE.url}cash-vs-agent/#article`,
      headline: "Cash Offer vs Listing with an Agent",
      description: CASH_VS_AGENT_PAGE.meta.description,
      datePublished: "2026-06-08",
      dateModified: "2026-06-08",
      author: {
        "@type": "Person",
        name: "John Gardepe",
        jobTitle: "Owner",
        worksFor: { "@type": "LocalBusiness", name: "We Buy St Pete Houses" },
      },
      publisher: {
        "@type": "Organization",
        name: "We Buy St Pete Houses",
        logo: { "@type": "ImageObject", url: `${SITE.url}assets/images/logo.webp` },
      },
      mainEntityOfPage: `${SITE.url}cash-vs-agent/`,
    },
    {
      "@type": "FAQPage",
      mainEntity: CASH_VS_AGENT_PAGE.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Cash vs Agent" },
      ],
    },
  ],
};

export default function CashVsAgentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CashVsAgentPageContent />
    </>
  );
}
