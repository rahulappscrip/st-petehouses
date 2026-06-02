import type { Metadata } from "next";
import { HowItWorksContent } from "@/components/how-it-works/HowItWorksContent";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How It Works: Selling Your House Fast for Cash | We Buy St Pete Houses",
  description:
    "Learn how our cash home buying process works — from inquiry to closing in as little as 7 days. No repairs, no fees, no hassle. Serving St Petersburg and Tampa Bay.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    type: "article",
    title: "How It Works: Selling Your House Fast for Cash",
    description:
      "Our 4-step cash home buying process — inquiry, assessment, offer, closing in as little as 7 days. As-is, no fees, no commissions.",
    url: `${SITE.url}how-it-works/`,
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE.url}how-it-works/#article`,
      headline: "How the Cash Home Buying Process Works",
      description:
        "A clear, step-by-step guide to selling your home for cash in St Petersburg and Tampa Bay — inquiry, assessment, offer, closing.",
      datePublished: "2026-05-26",
      dateModified: "2026-05-26",
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
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is selling to a cash buyer faster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Cash offers typically close faster because they don't rely on mortgage approvals. We can close in as little as 7 days.",
          },
        },
        {
          "@type": "Question",
          name: "Are there fees or commissions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typically no. You won't pay real estate agent commissions or seller fees when you sell to us.",
          },
        },
        {
          "@type": "Question",
          name: "What is a cash offer, and is it fair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A cash offer is a price proposed by a buyer paid in cash that can close quickly. Fairness depends on property condition and market context, but reputable buyers provide offers based on honest evaluations.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can I close?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Closes can occur in as little as 7 days, depending on title and escrow. We work on your timeline.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to repair the house?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Cash buyers often purchase as-is, with no repair requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are needed to start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Proof of ownership and basic property details are usually sufficient to start. We guide you through the rest.",
          },
        },
        {
          "@type": "Question",
          name: "How do I compare a cash offer to listing with an agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Compare terms, closing speed, repairs, and commissions. Cash offers can save time and costs, though they may be lower than retail listing prices.",
          },
        },
        {
          "@type": "Question",
          name: "Is a cash buyer legit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Legitimate cash buyers are investors who close with cash. Verify credibility by checking reviews and references.",
          },
        },
        {
          "@type": "Question",
          name: "What is the next step?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contact us for a no-obligation cash offer and quick next steps. We'll walk you through the entire process.",
          },
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
