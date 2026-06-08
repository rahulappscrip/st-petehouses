import { DEFAULT_HERO } from "@/components/home/HeroSection";
import { LeadOfferForm } from "@/components/shared/LeadOfferForm";
import { Reveal } from "@/components/ui/Reveal";
import { GET_A_CASH_OFFER_PAGE } from "@/lib/get-a-cash-offer-content";

export function GetACashOfferHeroSection() {
  const { hero } = GET_A_CASH_OFFER_PAGE;

  return (
    <section className="gaco-hero">
      <div className="wrap gaco-hero__inner">
        <Reveal className="gaco-hero__left">
          <span className="eyebrow gaco-hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="h-1 gaco-hero__title">
            {hero.titleLead}
            <em>{hero.titleEm}</em>
          </h1>
          <p className="body-large gaco-hero__body">{hero.body}</p>
        </Reveal>

        <Reveal d={1} className="gaco-hero__right">
          <LeadOfferForm
            id="offer-form"
            formEyebrow={DEFAULT_HERO.formEyebrow}
            formTitle={DEFAULT_HERO.formTitle}
            formIntro={DEFAULT_HERO.formIntro}
            addressPlaceholder={DEFAULT_HERO.addressPlaceholder}
          />
        </Reveal>
      </div>
    </section>
  );
}
