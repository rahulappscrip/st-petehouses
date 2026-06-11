import type { Metadata } from "next";
import { FaqHeroSection } from "@/components/faq/FaqHeroSection";
import { FaqPageContent } from "@/components/faq/FaqPageContent";
import { StatsSection } from "@/components/home/StatsSection";
import { SITE } from "@/lib/constants";
import { FAQ_PAGE_STATS, getAllFaqPageItems } from "@/lib/faq-page-content";
import { getPageOgImage, ogImageMeta } from "@/lib/og-images";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";
import { buildFaqPageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | We Buy Houses St Petersburg FL | We Buy St Pete Houses",
  description:
    "Answers to the most common questions about selling your house for cash in St Petersburg, FL. How it works, what we pay, how fast we close, and what it costs.",
  keywords: PAGE_KEYWORDS.faq,
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    title: "FAQ | We Buy Houses St Petersburg FL",
    description:
      "Answers to the most common questions about selling your house for cash in St Petersburg, FL. How it works, what we pay, how fast we close, and what it costs.",
    url: `${SITE.url}faq/`,
    locale: "en_US",
    images: (() => {
      const file = getPageOgImage("/faq");
      return file ? ogImageMeta(file, "FAQ | We Buy Houses St Petersburg FL") : undefined;
    })(),
  },
  robots: { index: true, follow: true },
};

const faqJsonLd = buildFaqPageJsonLd(
  getAllFaqPageItems().map((item) => ({
    q: item.q,
    a: [item.a, ...(item.list ?? []), item.aAfter ?? ""].filter(Boolean).join(" "),
  })),
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "FAQ" },
      ],
    },
    faqJsonLd,
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FaqHeroSection />
      <StatsSection stats={FAQ_PAGE_STATS} />
      <FaqPageContent />
    </>
  );
}
