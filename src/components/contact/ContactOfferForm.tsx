"use client";

import { useState } from "react";
import { Arr } from "@/components/ui/Arr";
import { CONTACT_PAGE } from "@/lib/contact-content";
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

const BADGE_ICONS = [ShieldIcon, ClockIcon, LockIcon];

export function ContactOfferForm() {
  const { form } = CONTACT_PAGE.formSection;
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="contact-form-card" id="form">
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
        <ContactFormBadges badges={form.badges} />
      </div>
    );
  }

  return (
    <div className="contact-form-card" id="form">
      <div className="contact-form-card__head">
        <h3 className="h-4">{form.title}</h3>
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
        <div className="contact-form__row">
          <div className="contact-form__group">
            <label htmlFor="contact-address">Property Address *</label>
            <input
              id="contact-address"
              name="address"
              type="text"
              required
              placeholder="123 Main St, St Petersburg FL"
              className="input contact-form__input"
              autoComplete="street-address"
            />
          </div>
          <div className="contact-form__group">
            <label htmlFor="contact-situation">Your Situation</label>
            <select id="contact-situation" name="situation" className="input contact-form__input contact-form__select">
              <option value="">What best describes your situation?</option>
              {form.situationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="contact-form__row">
          <div className="contact-form__group">
            <label htmlFor="contact-fname">First Name *</label>
            <input
              id="contact-fname"
              name="fname"
              type="text"
              required
              placeholder="First name"
              className="input contact-form__input"
              autoComplete="given-name"
            />
          </div>
          <div className="contact-form__group">
            <label htmlFor="contact-lname">Last Name</label>
            <input
              id="contact-lname"
              name="lname"
              type="text"
              placeholder="Last name"
              className="input contact-form__input"
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="contact-form__row">
          <div className="contact-form__group">
            <label htmlFor="contact-phone">Phone Number *</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              placeholder="(727) 000-0000"
              className="input contact-form__input"
              autoComplete="tel"
            />
          </div>
          <div className="contact-form__group">
            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="input contact-form__input"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="contact-form__group">
          <label htmlFor="contact-message">Anything else we should know? (optional)</label>
          <textarea
            id="contact-message"
            name="message"
            rows={3}
            placeholder="Condition, timeline, any special circumstances..."
            className="input contact-form__input contact-form__textarea"
          />
        </div>

        <button type="submit" className="btn btn--cta contact-form__submit">
          {form.submitLabel}
          <Arr />
        </button>

        <p className="contact-form__consent">{form.consent}</p>
      </form>

      <ContactFormBadges badges={form.badges} />
    </div>
  );
}

function ContactFormBadges({ badges }: { badges: readonly string[] }) {
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
