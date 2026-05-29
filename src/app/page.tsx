import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { OfferMathSection } from "@/components/home/OfferMathSection";
import { SavingsEstimatorSection } from "@/components/home/SavingsEstimatorSection";
import { ProsConsSection } from "@/components/home/ProsConsSection";
import { AreasSection } from "@/components/home/AreasSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { MarketSection } from "@/components/home/MarketSection";
import { GuaranteeSection } from "@/components/home/GuaranteeSection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HOMEPAGE_FAQ_JSON_LD } from "@/lib/schema";

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
      <SavingsEstimatorSection />
      <ProsConsSection />
      <AreasSection />
      <ReviewsSection />
      <MarketSection />
      <GuaranteeSection />
      <ResourcesSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
