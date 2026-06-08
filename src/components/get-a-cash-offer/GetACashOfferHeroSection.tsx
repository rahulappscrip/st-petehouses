import { GetACashOfferForm } from "@/components/get-a-cash-offer/GetACashOfferForm";
import { GET_A_CASH_OFFER_PAGE } from "@/lib/get-a-cash-offer-content";

function ClockPillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" strokeLinecap="round" />
    </svg>
  );
}

function ShieldPillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarPillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M12 2l3 6.5 7 1-5 4.9 1.2 7L12 18l-6.2 3.4L7 14.4 2 9.5l7-1z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HousePillIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PILL_ICONS = [ClockPillIcon, ShieldPillIcon, StarPillIcon, HousePillIcon];

export function GetACashOfferHeroSection() {
  const { hero } = GET_A_CASH_OFFER_PAGE;

  return (
    <section className="gaco-hero">
      <div className="wrap gaco-hero__inner">
        <div className="gaco-hero__left">
          <span className="eyebrow gaco-hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="h-1 gaco-hero__title">
            {hero.titleLead}
            <em>{hero.titleEm}</em>
          </h1>
          <p className="body-large gaco-hero__body">{hero.body}</p>

          <div className="gaco-trust-pills">
            {hero.trustPills.map((pill, i) => {
              const Icon = PILL_ICONS[i] ?? ClockPillIcon;
              return (
                <span key={pill} className="gaco-trust-pill">
                  <Icon />
                  {pill}
                </span>
              );
            })}
          </div>

          <ol className="gaco-offer-steps">
            {hero.steps.map((step) => (
              <li key={step.num} className="gaco-offer-step">
                <div className="gaco-offer-step__rail" aria-hidden>
                  <span className="gaco-offer-step__num">{step.num}</span>
                </div>
                <div className="gaco-offer-step__content">
                  <span className="gaco-offer-step__timing">{step.timing}</span>
                  <h2 className="h-4">{step.title}</h2>
                  <p className="body-standard">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="gaco-hero__right">
          <GetACashOfferForm />
        </div>
      </div>
    </section>
  );
}
