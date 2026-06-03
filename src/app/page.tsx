import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { OfferMathSection } from "@/components/home/OfferMathSection";
import { SellerSituationsSection } from "@/components/home/SellerSituationsSection";
import { MeetOwnerSection } from "@/components/home/MeetOwnerSection";
import { SavingsEstimatorSection } from "@/components/home/SavingsEstimatorSection";
import { ProsConsSection } from "@/components/home/ProsConsSection";
import { AreasSection } from "@/components/home/AreasSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { MarketSection } from "@/components/home/MarketSection";
import { GuaranteeSection } from "@/components/home/GuaranteeSection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HOMEPAGE_SEO, SITE } from "@/lib/constants";
import { HOMEPAGE_FAQ_JSON_LD } from "@/lib/schema";

export const metadata: Metadata = {
  title: HOMEPAGE_SEO.title,
  description: HOMEPAGE_SEO.description,
  keywords: [
    HOMEPAGE_SEO.primaryKeyword,
    "sell house fast St Petersburg",
    "cash home buyers St Petersburg FL",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: HOMEPAGE_SEO.title,
    description: HOMEPAGE_SEO.description,
    url: SITE.url,
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_FAQ_JSON_LD) }}
      />
      <HeroSection />
      <StatsSection />
      <ProcessSection />
      <OfferMathSection />
      <SellerSituationsSection />
      <MeetOwnerSection />
      <SavingsEstimatorSection />
      <ProsConsSection />
      <AreasSection />
      <ReviewsSection />
      <MarketSection showLocal={false} />
      <GuaranteeSection variant="card" />
      <ResourcesSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
