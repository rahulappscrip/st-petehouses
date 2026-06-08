import Link from "next/link";
import { DEFAULT_HERO } from "@/components/home/HeroSection";
import { LeadOfferForm } from "@/components/shared/LeadOfferForm";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_PAGE } from "@/lib/about-content";

export function AboutHeroSection() {
  const { hero } = ABOUT_PAGE;

  return (
    <section className="about-page">
      <div className="about-page__bg" aria-hidden="true" />

      <div className="wrap about-page__grid">
        <Reveal className="about-page__body">
          <nav className="crumbs about-page__crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
            <span>{hero.breadcrumb}</span>
          </nav>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="h-display about-page__title">
            {hero.titleLead}
            <em>{hero.titleEm}</em>
          </h1>
          <p className="hero-sub about-page__subtitle">{hero.body}</p>
        </Reveal>

        <Reveal d={1}>
          <LeadOfferForm
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
