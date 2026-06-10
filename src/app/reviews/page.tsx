import type { Metadata } from "next";
import { ReviewsPageContent } from "@/components/reviews/ReviewsPageContent";
import { SITE } from "@/lib/constants";
import { getTestimonialsData } from "@/lib/reviews/get-reviews";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "We Buy St Pete Houses Reviews: Real Customer Feedback",
  description:
    "Read authentic We Buy St Pete Houses reviews from St Petersburg homeowners. See how local sellers experienced our fast, transparent cash home buying process.",
  keywords: PAGE_KEYWORDS.reviews,
  alternates: { canonical: "/reviews" },
  openGraph: {
    type: "article",
    title: "We Buy St Pete Houses Reviews: Real Customer Feedback",
    description: "Authentic reviews from St Petersburg sellers — fast cash offers, transparent terms, smooth closings.",
    url: `${SITE.url}reviews/`,
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}#business`,
      name: "We Buy St Pete Houses",
      url: SITE.url,
      telephone: SITE.phone,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        postOfficeBoxNumber: "143",
        addressLocality: "St Petersburg",
        addressRegion: "FL",
        postalCode: "33731",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "120",
        bestRating: "5",
      },
    },
    {
      "@type": "Article",
      headline: "We Buy St Pete Houses Reviews: What Local Homeowners Say About Selling for Cash",
      datePublished: "2026-05-27",
      dateModified: "2026-05-27",
      author: {
        "@type": "Person",
        name: "John Gardepe",
        jobTitle: "Owner",
        worksFor: { "@type": "LocalBusiness", name: "We Buy St Pete Houses" },
      },
      mainEntityOfPage: `${SITE.url}reviews/`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Reviews" },
      ],
    },
  ],
};

export default async function ReviewsPage() {
  const testimonials = await getTestimonialsData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReviewsPageContent testimonials={testimonials} />
    </>
  );
}
