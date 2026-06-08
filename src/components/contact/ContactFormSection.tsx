import { DEFAULT_HERO } from "@/components/home/HeroSection";
import { LeadOfferForm } from "@/components/shared/LeadOfferForm";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT_PAGE } from "@/lib/contact-content";
import { ASSETS } from "@/lib/constants";

function PromiseCheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
      <polyline points="1 6 5 10 11 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContactFormSection() {
  const { formSection } = CONTACT_PAGE;
  const { john } = formSection;

  return (
    <section className="contact-form-section" aria-labelledby="contact-form-heading">
      <div className="wrap contact-form-section__inner">
        <Reveal className="contact-form-section__left">
          <p className="eyebrow">{formSection.eyebrow}</p>
          <h2 id="contact-form-heading" className="h-2">
            {formSection.titleLead}
            <em>{formSection.titleEm}</em>
          </h2>
          <p className="body-standard contact-form-section__body">{formSection.body}</p>

          <ul className="contact-promises">
            {formSection.promises.map((promise) => (
              <li key={promise}>
                <span className="contact-promises__dot" aria-hidden>
                  <PromiseCheckIcon />
                </span>
                {promise}
              </li>
            ))}
          </ul>

          <div className="contact-john-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.ownerJohn}
              alt="John Gardepe, Owner of We Buy St Pete Houses"
              className="contact-john-card__photo"
              width={80}
              height={80}
              decoding="async"
            />
            <div className="contact-john-card__info">
              <strong className="contact-john-card__name">{john.name}</strong>
              <span className="contact-john-card__title">{john.title}</span>
              <p className="contact-john-card__quote">&ldquo;{john.quote}&rdquo;</p>
            </div>
          </div>
        </Reveal>

        <Reveal d={1} className="contact-form-section__right">
          <LeadOfferForm
            id="form"
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
