"use client";

import { useState } from "react";
import { Arr } from "@/components/ui/Arr";
import { GET_A_CASH_OFFER_PAGE } from "@/lib/get-a-cash-offer-content";
import { SITE } from "@/lib/constants";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const BADGE_ICONS = [ShieldIcon, LockIcon, ClockIcon];

export function GetACashOfferForm() {
  const { form } = GET_A_CASH_OFFER_PAGE.hero;
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="gaco-form-card contact-form-card" id="offer-form">
        <div className="contact-form-success">
          <div className="contact-form-success__icon" aria-hidden>
            <CheckIcon />
          </div>
          <h3 className="h-4">{form.successTitle}</h3>
          <p className="body-standard">
            {form.successBody}
            <a href={SITE.phoneHref}>{SITE.phone}</a>.
          </p>
        </div>
        <FormBadges badges={form.badges} />
      </div>
    );
  }

  return (
    <div className="gaco-form-card contact-form-card" id="offer-form">
      <div className="contact-form-card__head">
        <h2 className="h-4">{form.title}</h2>
        <p className="body-standard">{form.intro}</p>
      </div>

      <form
        className="contact-form"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          const formEl = e.currentTarget;
          const required = formEl.querySelectorAll<HTMLInputElement>("[required]");
          let valid = true;
          required.forEach((field) => {
            if (!field.value.trim()) {
              field.classList.add("contact-form__input--error");
              valid = false;
            } else {
              field.classList.remove("contact-form__input--error");
            }
          });
          if (!valid) return;
          setSubmitted(true);
        }}
      >
        <div className="contact-form__group">
          <label htmlFor="gaco-address">Property Address *</label>
          <input
            id="gaco-address"
            name="address"
            type="text"
            required
            placeholder="123 Main St, St Petersburg FL"
            className="input contact-form__input"
            autoComplete="street-address"
          />
        </div>

        <div className="contact-form__row">
          <div className="contact-form__group">
            <label htmlFor="gaco-fname">First Name *</label>
            <input
              id="gaco-fname"
              name="fname"
              type="text"
              required
              placeholder="First name"
              className="input contact-form__input"
              autoComplete="given-name"
            />
          </div>
          <div className="contact-form__group">
            <label htmlFor="gaco-lname">Last Name</label>
            <input
              id="gaco-lname"
              name="lname"
              type="text"
              placeholder="Last name"
              className="input contact-form__input"
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="contact-form__group">
          <label htmlFor="gaco-phone">Phone *</label>
          <input
            id="gaco-phone"
            name="phone"
            type="tel"
            required
            placeholder="(727) 000-0000"
            className="input contact-form__input"
            autoComplete="tel"
          />
        </div>

        <div className="contact-form__group">
          <label htmlFor="gaco-email">Email</label>
          <input
            id="gaco-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="input contact-form__input"
            autoComplete="email"
          />
        </div>

        <div className="contact-form__group">
          <label htmlFor="gaco-situation">Your Situation</label>
          <select id="gaco-situation" name="situation" className="input contact-form__input contact-form__select">
            <option value="">What best describes your situation?</option>
            {form.situationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="contact-form__group">
          <label htmlFor="gaco-condition">Property Condition</label>
          <select id="gaco-condition" name="condition" className="input contact-form__input contact-form__select">
            <option value="">How would you describe the property?</option>
            {form.conditionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="contact-form__group">
          <label htmlFor="gaco-timeline">Ideal Closing Timeline</label>
          <select id="gaco-timeline" name="timeline" className="input contact-form__input contact-form__select">
            <option value="">When do you need to close?</option>
            {form.timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="contact-form__group">
          <label htmlFor="gaco-notes">Additional Details (optional)</label>
          <textarea
            id="gaco-notes"
            name="notes"
            rows={3}
            placeholder="Anything else we should know — liens, tenants, probate, code violations..."
            className="input contact-form__input contact-form__textarea"
          />
        </div>

        <button type="submit" className="btn btn--cta contact-form__submit">
          {form.submitLabel}
          <Arr />
        </button>

        <p className="contact-form__consent">{form.consent}</p>
      </form>

      <FormBadges badges={form.badges} />
    </div>
  );
}

function FormBadges({ badges }: { badges: readonly string[] }) {
  return (
    <div className="contact-form-badges">
      {badges.map((badge, i) => {
        const Icon = BADGE_ICONS[i] ?? ShieldIcon;
        return (
          <span key={badge} className="contact-form-badge">
            <Icon />
            {badge}
          </span>
        );
      })}
    </div>
  );
}
