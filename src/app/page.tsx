import "@/styles/bundles/home.css";
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
import { GUARANTEE_ASIDE_CHECKLIST, HOMEPAGE_SEO, SITE } from "@/lib/constants";
import { getPageOgImage, ogImageMeta } from "@/lib/og-images";
import { getTestimonialsData } from "@/lib/reviews/get-reviews";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: HOMEPAGE_SEO.title,
  description: HOMEPAGE_SEO.description,
  keywords: PAGE_KEYWORDS.home,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: HOMEPAGE_SEO.title,
    description: HOMEPAGE_SEO.description,
    url: SITE.url,
    locale: "en_US",
    images: (() => {
      const file = getPageOgImage("/");
      return file ? ogImageMeta(file, HOMEPAGE_SEO.title) : undefined;
    })(),
  },
  robots: { index: true, follow: true },
};

export default async function HomePage() {
  const testimonials = await getTestimonialsData();

  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProcessSection />
      <OfferMathSection />
      <SellerSituationsSection />
      <MeetOwnerSection />
      <SavingsEstimatorSection />
      <ProsConsSection />
      <AreasSection />
      <ReviewsSection testimonials={testimonials} />
      <MarketSection showLocal={false} />
      <GuaranteeSection asideChecklist={GUARANTEE_ASIDE_CHECKLIST} />
      <ResourcesSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
