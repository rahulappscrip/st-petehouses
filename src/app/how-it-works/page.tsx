import type { Metadata } from "next";
import { HowItWorksContent } from "@/components/how-it-works/HowItWorksContent";
import { SITE } from "@/lib/constants";
import { getPageOgImage, ogImageMeta } from "@/lib/og-images";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "How It Works: Selling Your House Fast for Cash | We Buy St Pete Houses",
  description:
    "Learn how our cash home buying process works — from inquiry to closing in as little as 7 days. No repairs, no fees, no hassle. Serving St Petersburg and Tampa Bay.",
  keywords: PAGE_KEYWORDS.howItWorks,
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    type: "article",
    title: "How It Works: Selling Your House Fast for Cash",
    description:
      "Our 4-step cash home buying process — inquiry, assessment, offer, closing in as little as 7 days. As-is, no fees, no commissions.",
    url: `${SITE.url}how-it-works/`,
    locale: "en_US",
    images: (() => {
      const file = getPageOgImage("/how-it-works");
      return file ? ogImageMeta(file, "How It Works: Selling Your House Fast for Cash") : undefined;
    })(),
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE.url}how-it-works/#article`,
      headline: "How the Cash Home Buying Process Works.",
      description:
        "A clear, step-by-step guide to selling your home for cash in St Petersburg and Tampa Bay — inquiry, assessment, offer, closing.",
      datePublished: "2026-05-26",
      dateModified: "2026-05-26",
      author: {
        "@type": "Person",
        name: "Benette Andrew",
        jobTitle: "Owner",
        worksFor: { "@type": "LocalBusiness", name: "We Buy St Pete Houses" },
      },
      publisher: {
        "@type": "Organization",
        name: "We Buy St Pete Houses",
        logo: { "@type": "ImageObject", url: `${SITE.url}assets/images/logo.webp` },
      },
      mainEntityOfPage: `${SITE.url}how-it-works/`,
    },
    {
      "@type": "HowTo",
      name: "How to Sell Your House for Cash in St Petersburg",
      description:
        "Four-step cash home buying process from initial inquiry to closing in as little as 7 days.",
      totalTime: "P7D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Submit Your Inquiry",
          text: "Reach out by phone, online form, or email with your property address and a brief description of your situation.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Receive and Review the Offer",
          text: "We evaluate your property and provide a written cash offer within 24 hours. Review it at your own pace, no pressure.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Acceptance and Escrow",
          text: "Once you accept, we open escrow and handle title work, due-diligence inspections, and paperwork.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Closing and Possession",
          text: "We close on a date that works for you. After signing, you receive your proceeds and hand over the keys.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "How It Works" },
      ],
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HowItWorksContent />
    </>
  );
}
