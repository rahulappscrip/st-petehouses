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
};

export function SituationHeroSection({ breadcrumb, hero }: Props) {
  return (
    <>
      <nav className="city-breadcrumb" aria-label="Breadcrumb">
        <div className="wrap">
          <Link href="/">Home</Link>
          <span aria-hidden>›</span>
          <span>{breadcrumb}</span>
        </div>
      </nav>

      <section className="city-hero situation-hero">
        <div className="city-hero__bg" aria-hidden="true" />
        <div className="wrap city-hero__grid">
          <Reveal className="city-hero__content">
            <p className="city-hero__eyebrow">{hero.eyebrow}</p>
            {hero.urgencyBadge ? (
              <p className="situation-hero__urgency-badge">{hero.urgencyBadge}</p>
            ) : null}
            <h1 className="h-display city-hero__title">
              {hero.titleLead}
              {hero.titleEm ? <em>{hero.titleEm}</em> : null}
              {hero.titleTail}
            </h1>
            <p className="city-hero__sub">{hero.subheadline}</p>

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
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            <div className="situation-hero__actions">
              <Link href="#offer" className="btn btn--cta">
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
