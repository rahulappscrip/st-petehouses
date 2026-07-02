"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { LeadOfferForm } from "@/components/shared/LeadOfferForm";
import { SiteImg } from "@/components/ui/SiteImage";
import { ASSETS } from "@/lib/constants";
import { PERSON_IMAGES } from "@/lib/image-accessibility";

export type HeroContent = {
  title: ReactNode;
  subheadline: string;
  formEyebrow?: string;
  formTitle?: ReactNode;
  formIntro?: string;
  addressPlaceholder?: string;
};

export const DEFAULT_HERO: HeroContent = {
  title: (
    <>
      We Buy Houses for Cash In <em>St. Pete</em>
    </>
  ),
  subheadline:
    "Sell your St. Petersburg house as-is without repairs, commissions, or showings. Get a fair offer from a local buyer and choose a closing date that works for you.",
  formEyebrow: "No Repairs. No Fees. Just Cash.",
  formTitle: (
    <>
      Get Your <em>Fair Offer</em> Today.
    </>
  ),
  formIntro: "We buy houses fast, as-is, and stress-free. No repairs or out-of-pocket costs.",
};

export function HeroSection({ content = DEFAULT_HERO }: { content?: HeroContent }) {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="wrap">
        <div className="hero-header">
          <Reveal as="h1" d={1} className="h-display">
            {content.title}
          </Reveal>
          <Reveal as="p" d={2} className="hero-sub">
            {content.subheadline}
          </Reveal>
        </div>

        <div className="hero-body">
          <Reveal as="div" d={2} className="hero-portrait" aria-label="Bennett Andrews — owner">
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

          <Reveal d={1}>
            <LeadOfferForm
              formEyebrow={content.formEyebrow ?? DEFAULT_HERO.formEyebrow}
              formTitle={content.formTitle ?? DEFAULT_HERO.formTitle}
              formIntro={content.formIntro ?? DEFAULT_HERO.formIntro}
              addressPlaceholder={content.addressPlaceholder}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
