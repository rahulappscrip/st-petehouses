import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Arr } from "@/components/ui/Arr";
import { SiteImage } from "@/components/ui/SiteImage";
import { ASSETS, SITE } from "@/lib/constants";
import { PERSON_IMAGES } from "@/lib/image-accessibility";

type FinalCtaSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  offerHref?: string;
  bullets?: string[];
};

export function FinalCtaSection({
  eyebrow = "Ready to sell?",
  title = (
    <>
      Get your <em>no-obligation</em> St Petersburg cash offer today.
    </>
  ),
  description = "Call us or fill out our form. Tell us about your property — address, condition, and timeline. Receive your cash offer, usually within 24 hours. Choose your closing date. No pressure. No obligation. Just a fair cash offer for your St Pete home.",
  offerHref = SITE.cashOfferHref,
  bullets,
}: FinalCtaSectionProps = {}) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="cta-card">
          <div className="cta-card__content">
            <span className="eyebrow">{eyebrow}</span>
            <div className="cta-card__copy">
              <h2 className="h-2">{title}</h2>
              {description ? <p>{description}</p> : null}
              {bullets && bullets.length > 0 ? (
                <ul className="cta-card__bullets">
                  {bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="cta-actions">
              <Link href={offerHref} className="btn btn--cta">
                Get my cash offer
                <Arr />
              </Link>
              <a
                href={SITE.phoneHref}
                className="btn"
                style={
                  {
                    "--bg": "transparent",
                    "--fg": "var(--paper)",
                    "--bd": "color-mix(in oklab, var(--paper) 40%, transparent)",
                  } as CSSProperties
                }
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M22 16v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 3.2 2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 8.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16z" />
                </svg>
                {SITE.phone}
              </a>
            </div>
          </div>

          <aside className="cta-side">
            <SiteImage
              src={ASSETS.johnCta}
              alt={PERSON_IMAGES.johnPortrait.alt}
              title={PERSON_IMAGES.johnPortrait.title}
              width={894}
              height={1302}
              sizes="(min-width: 880px) 33vw, 100vw"
              className="cta-side__img"
            />
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
