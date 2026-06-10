import Link from "next/link";
import { HeroAuthor } from "@/components/shared/HeroAuthor";
import { LeadOfferForm } from "@/components/shared/LeadOfferForm";
import { Arr } from "@/components/ui/Arr";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";
import type { SituationHero } from "@/lib/situation-types";

type Props = {
  breadcrumb: string;
  hero: SituationHero;
  showBreadcrumb?: boolean;
  formId?: string;
};

export function SituationHeroSection({
  breadcrumb,
  hero,
  showBreadcrumb = true,
  formId = "offer",
}: Props) {
  return (
    <>
      {hero.compassionBanner ? (
        <div className="situation-compassion-banner">
          <div className="wrap situation-compassion-banner__inner">
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <p className="body-standard">{hero.compassionBanner}</p>
          </div>
        </div>
      ) : null}

      {showBreadcrumb ? (
        <nav className="city-breadcrumb" aria-label="Breadcrumb">
          <div className="wrap">
            <Link href="/">Home</Link>
            {hero.breadcrumbTrail?.map((crumb) => (
              <span key={crumb.href}>
                <span aria-hidden>›</span>
                <Link href={crumb.href}>{crumb.label}</Link>
              </span>
            ))}
            <span aria-hidden>›</span>
            <span>{breadcrumb}</span>
          </div>
        </nav>
      ) : null}

      <section className="city-hero situation-hero">
        <div className="city-hero__bg" aria-hidden="true" />
        <div className="wrap city-hero__grid">
          <Reveal className="city-hero__content">
            <p className="eyebrow city-hero__eyebrow">{hero.eyebrow}</p>
            {hero.urgencyBadge ? (
              <p className="situation-hero__urgency-badge">{hero.urgencyBadge}</p>
            ) : null}
            <h1 className="h-display city-hero__title">
              {hero.titleLead}
              {hero.titleEm ? <em>{hero.titleEm}</em> : null}
              {hero.titleTail}
            </h1>
            <div className="city-hero__subs">
              {(hero.subheadlines ?? [hero.subheadline]).map((paragraph) => (
                <p key={paragraph} className="city-hero__sub body-intro">
                  {paragraph}
                </p>
              ))}
            </div>

            {hero.neighborhoodTags && hero.neighborhoodTags.length > 0 ? (
              <div className="situation-hero__neighborhoods" aria-label="Featured neighborhoods">
                {hero.neighborhoodTags.map((tag) => (
                  <span key={tag} className="situation-hero__neighborhood-tag">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {hero.trustPills && hero.trustPills.length > 0 ? (
              <div className="situation-hero__trust-pills" aria-label="Key benefits">
                {hero.trustPills.map((pill) => (
                  <span key={pill} className="situation-hero__trust-pill">
                    {pill}
                  </span>
                ))}
              </div>
            ) : null}

            {hero.checklist && hero.checklist.length > 0 ? (
              <ul className="situation-hero__checklist">
                {hero.checklist.map((item) => (
                  <li key={item} className="body-standard">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="situation-hero__actions">
              <Link href={SITE.cashOfferHref} className="btn btn--cta">
                Get my cash offer
                <Arr />
              </Link>
              <a href={SITE.phoneHref} className="btn btn--ghost">
                Call {SITE.phone}
              </a>
            </div>

            <HeroAuthor role={hero.authorRole} />
          </Reveal>

          <Reveal d={1}>
          <LeadOfferForm
            id={formId}
            formTitle={hero.formTitle}
            formIntro={hero.formIntro}
            addressPlaceholder={hero.addressPlaceholder ?? "123 Main St, St Petersburg, FL"}
          />
          </Reveal>
        </div>
      </section>
    </>
  );
}
