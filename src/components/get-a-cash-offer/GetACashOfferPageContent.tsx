import { GetACashOfferHeroSection } from "@/components/get-a-cash-offer/GetACashOfferHeroSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { StatsSection } from "@/components/home/StatsSection";
import { GetACashOfferPrepareSection } from "@/components/get-a-cash-offer/GetACashOfferPrepareSection";
import { SituationIconCardsSection } from "@/components/situations/SituationIconCardsSection";
import { SituationTenantMarketSection } from "@/components/situations/SituationSections";
import { StageCardsSection } from "@/components/situations/StageCardsSection";
import {
  GET_A_CASH_OFFER_EVALUATE_IMAGES,
  GET_A_CASH_OFFER_PAGE,
  GET_A_CASH_OFFER_STATS,
} from "@/lib/get-a-cash-offer-content";
export function GetACashOfferPageContent() {
  const { process, formula, evaluate, timeline, faq, cta } = GET_A_CASH_OFFER_PAGE;

  return (
    <div className="get-a-cash-offer-page">
      <GetACashOfferHeroSection />
      <StatsSection stats={GET_A_CASH_OFFER_STATS} />
      <StageCardsSection data={process} />
      <SituationTenantMarketSection data={formula} />
      <SituationIconCardsSection data={evaluate} imageMap={GET_A_CASH_OFFER_EVALUATE_IMAGES} />
      <StageCardsSection data={timeline} />
      <GetACashOfferPrepareSection />
      <FaqSection
        className="situation-faq"
        id="faq"
        eyebrow={faq.eyebrow}
        title={
          <>
            {faq.titleLead}
            <em>{faq.titleEm}</em>
          </>
        }
        items={faq.items}
      />
      <FinalCtaSection
        title={
          <>
            {cta.titleLead}
            <em>{cta.titleEm}</em>
          </>
        }
        description={cta.body}
        offerHref={cta.primaryHref}
      />
    </div>
  );
}
