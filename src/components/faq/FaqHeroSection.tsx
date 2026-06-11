import { LeadOfferForm } from "@/components/shared/LeadOfferForm";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";
import { FAQ_PAGE_HERO } from "@/lib/faq-page-content";

export function FaqHeroSection() {
  return (
    <section className="city-hero situation-hero">
      <div className="city-hero__bg" aria-hidden="true" />
      <div className="wrap city-hero__grid">
        <Reveal className="city-hero__content">
          <p className="eyebrow city-hero__eyebrow">{FAQ_PAGE_HERO.eyebrow}</p>
          <h1 className="h-display city-hero__title">{FAQ_PAGE_HERO.title}</h1>
          <div className="city-hero__subs">
            {FAQ_PAGE_HERO.descriptions.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="city-hero__sub body-intro">
                {paragraph}
              </p>
            ))}
            <p className="city-hero__sub body-intro">
              {FAQ_PAGE_HERO.descriptionWithPhone.before}
              <a href={SITE.phoneHref}>{SITE.phone}</a>
              {FAQ_PAGE_HERO.descriptionWithPhone.after}
            </p>
          </div>
        </Reveal>

        <Reveal d={1}>
          <LeadOfferForm
            id="offer"
            formEyebrow={FAQ_PAGE_HERO.formEyebrow}
            formTitle={
              <>
                {FAQ_PAGE_HERO.formTitleLead}
                <em>{FAQ_PAGE_HERO.formTitleEm}</em>
                {FAQ_PAGE_HERO.formTitleTail}
              </>
            }
            formIntro={FAQ_PAGE_HERO.formIntro}
            addressPlaceholder={FAQ_PAGE_HERO.addressPlaceholder}
          />
        </Reveal>
      </div>
    </section>
  );
}
