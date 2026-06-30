import { DEFAULT_HERO } from "@/components/home/HeroSection";
import { LeadOfferForm } from "@/components/shared/LeadOfferForm";
import { SiteImg } from "@/components/ui/SiteImage";
import { Reveal } from "@/components/ui/Reveal";
import { ASSETS } from "@/lib/constants";
import { GET_A_CASH_OFFER_PAGE } from "@/lib/get-a-cash-offer-content";
import { PERSON_IMAGES } from "@/lib/image-accessibility";

export function GetACashOfferHeroSection() {
  const { hero } = GET_A_CASH_OFFER_PAGE;

  return (
    <section className="gaco-hero">
      <div className="wrap gaco-hero__inner">
        <div className="gaco-hero__left">
          <Reveal className="gaco-hero__copy">
            <span className="eyebrow gaco-hero__eyebrow">{hero.eyebrow}</span>
            <h1 className="h-1 gaco-hero__title">
              {hero.titleLead}
              <em>{hero.titleEm}</em>
            </h1>
            <p className="body-large gaco-hero__body">{hero.body}</p>
          </Reveal>

          <Reveal d={1} className="hero-portrait gaco-hero__portrait" aria-label="John Gardepe — owner">
            <div className="hero-portrait__img">
              <SiteImg
                src={ASSETS.johnPortrait}
                alt={PERSON_IMAGES.johnPortrait.alt}
                title={PERSON_IMAGES.johnPortrait.title}
                className="hero-portrait__photo"
                width={894}
                height={1302}
                priority
                sizes="(min-width: 900px) 40vw, 100vw"
              />
            </div>
          </Reveal>
        </div>

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
