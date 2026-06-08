"use client";

import type { ReactNode } from "react";
import { Arr } from "@/components/ui/Arr";
import { ASSETS, SELL_REASON_OPTIONS, SITE } from "@/lib/constants";

type LeadOfferFormProps = {
  id?: string;
  formTitle?: ReactNode;
  formIntro?: string;
  formEyebrow?: string;
  addressPlaceholder?: string;
  submitLabel?: string;
  className?: string;
};

export function LeadOfferForm({
  id = "offer",
  formTitle = (
    <>
      Get Your <em>Fair Offer</em> Today.
    </>
  ),
  formIntro = "We buy houses fast, as-is, and stress-free. No repairs or out-of-pocket costs.",
  formEyebrow = "Get your fair cash offer today",
  addressPlaceholder = "123 Main St, St Petersburg, FL",
  submitLabel = "Get My Fair Offer",
  className = "",
}: LeadOfferFormProps) {
  const rootClass = ["lead-card", "lead-offer-form", className].filter(Boolean).join(" ");

  return (
    <aside className={rootClass} id={id} aria-label="Get a cash offer">
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
        {formEyebrow ? <span className="lead-eyebrow">{formEyebrow}</span> : null}
        <h2 className="lead-title">{formTitle}</h2>
        <p className="lead-intro">{formIntro}</p>
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
        <div className="row-2">
          <div className="field">
            <label htmlFor="first-name">First name</label>
            <input
              id="first-name"
              className="input"
              required
              type="text"
              autoComplete="given-name"
              placeholder="John"
            />
          </div>
          <div className="field">
            <label htmlFor="last-name">Last name</label>
            <input
              id="last-name"
              className="input"
              required
              type="text"
              autoComplete="family-name"
              placeholder="Smith"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="addr">Property address</label>
          <div className="input-with-action">
            <input
              id="addr"
              className="input"
              required
              type="text"
              autoComplete="street-address"
              placeholder={addressPlaceholder}
            />
          </div>
        </div>

        <div className="field">
          <div className="field-label-row">
            <label htmlFor="sell-reason">Why are you looking to sell?</label>
            <span className="field-badge">required</span>
          </div>
          <select id="sell-reason" className="select" required defaultValue="">
            <option value="" disabled>
              Select a reason
            </option>
            {SELL_REASON_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="row-2">
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" className="input" required type="tel" autoComplete="tel" placeholder={SITE.phone} />
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
          {submitLabel}
          <Arr />
        </button>
      </form>
    </aside>
  );
}
