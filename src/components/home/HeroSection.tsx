"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Arr } from "@/components/ui/Arr";
import { ASSETS } from "@/lib/constants";

export type HeroContent = {
  title: ReactNode;
  subheadline: string;
  formEyebrow?: string;
  formTitle?: ReactNode;
  formIntro?: string;
};

export const DEFAULT_HERO: HeroContent = {
  title: (
    <>
      We Buy Houses In <em>St&nbsp;Petersburg</em> For Fast, Fair Cash
    </>
  ),
  subheadline: "Sell your St Pete house fast for cash. No agents, no fees, no repairs.",
  formEyebrow: "Get your fair cash offer today",
  formTitle: (
    <>
      See <em>how much</em> cash you&apos;ll get today.
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
          <Reveal as="div" d={2} className="hero-portrait" aria-label="John Gardepe — owner">
            <div className="hero-portrait__img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSETS.johnPortrait}
                alt="John Gardepe, owner of We Buy St Pete Houses"
                className="hero-portrait__photo"
                width={894}
                height={1302}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </Reveal>

          <Reveal as="aside" d={1} className="lead-card" id="offer" aria-label="Get a cash offer">
            <div className="lead-top">
              <div className="lead-badges">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="lead-badge-bbb"
                  src={ASSETS.bbbBadge}
                  alt="BBB Accredited Business, A+ rating"
                  width={2000}
                  height={751}
                  decoding="async"
                />
                <span className="lead-badge lead-badge--5">
                  <b>★★★★★</b>
                  <i>5.0 Rated</i>
                </span>
              </div>
              <span className="lead-eyebrow">{content.formEyebrow ?? DEFAULT_HERO.formEyebrow}</span>
              <h2 className="lead-title">{content.formTitle ?? DEFAULT_HERO.formTitle}</h2>
              <p className="lead-intro">{content.formIntro ?? DEFAULT_HERO.formIntro}</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const b = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
                if (b) {
                  b.textContent = "Sent — we will be in touch";
                  b.disabled = true;
                }
              }}
            >
              <div className="field">
                <label htmlFor="addr">Property address</label>
                <div className="input-with-action">
                  <input
                    id="addr"
                    className="input"
                    required
                    type="text"
                    autoComplete="street-address"
                    placeholder="123 Main St, St Petersburg, FL"
                  />
                  {/* <a
                    id="mapsLink"
                    className="input-action"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`}
                    title="Open in Google Maps"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Maps</span>
                  </a> */}
                </div>
              </div>

              <div className="row-2">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" className="input" required type="tel" autoComplete="tel" placeholder="(727) 555-0123" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" className="input" required type="email" autoComplete="email" placeholder="you@example.com" />
                </div>
              </div>

              <label className="lead-consent">
                <span>
                  By submitting, you agree to receive transactional or conversational communications from We Buy St Pete Houses via SMS, calls, and email related to your property inquiry. Reply STOP to opt out. Your info is never sold.
                </span>
              </label>

              <button type="submit" className="btn btn--cta" style={{ width: "100%", justifyContent: "center" }}>
                Get My Fair Offer
                <Arr />
              </button>
            </form>

            <div className="lead-trust">
              <div className="lead-trust__avatars" aria-hidden="true">
                <span>DH</span>
                <span>MC</span>
                <span>RT</span>
              </div>
              <div className="lead-trust__body">
                <span className="lead-trust__stars">★★★★★</span>
                <span className="lead-trust__text">Rated 5.0/5 by Tampa Bay home sellers</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
