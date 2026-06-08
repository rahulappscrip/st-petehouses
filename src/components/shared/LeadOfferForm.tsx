"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
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

type SubmitState = "idle" | "loading" | "success" | "error";

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
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const rootClass = ["lead-card", "lead-offer-form", className].filter(Boolean).join(" ");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      address: String(formData.get("address") ?? "").trim(),
      sellReason: String(formData.get("sellReason") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
    };

    setSubmitState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setSubmitState("success");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  const isLoading = submitState === "loading";
  const isSuccess = submitState === "success";

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
        <p className="lead-title">{formTitle}</p>
        <p className="lead-intro">{formIntro}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="row-2">
          <div className="field">
            <label htmlFor="first-name">First name</label>
            <input
              id="first-name"
              name="firstName"
              className="input"
              required
              type="text"
              autoComplete="given-name"
              placeholder="John"
              disabled={isLoading || isSuccess}
            />
          </div>
          <div className="field">
            <label htmlFor="last-name">Last name</label>
            <input
              id="last-name"
              name="lastName"
              className="input"
              required
              type="text"
              autoComplete="family-name"
              placeholder="Smith"
              disabled={isLoading || isSuccess}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="addr">Property address</label>
          <div className="input-with-action">
            <input
              id="addr"
              name="address"
              className="input"
              required
              type="text"
              autoComplete="street-address"
              placeholder={addressPlaceholder}
              disabled={isLoading || isSuccess}
            />
          </div>
        </div>

        <div className="field">
          <div className="field-label-row">
            <label htmlFor="sell-reason">Why are you looking to sell?</label>
            <span className="field-badge">required</span>
          </div>
          <select
            id="sell-reason"
            name="sellReason"
            className="select"
            required
            defaultValue=""
            disabled={isLoading || isSuccess}
          >
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
            <input
              id="phone"
              name="phone"
              className="input"
              required
              type="tel"
              autoComplete="tel"
              placeholder={SITE.phone}
              disabled={isLoading || isSuccess}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className="input"
              required
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              disabled={isLoading || isSuccess}
            />
          </div>
        </div>

        <label className="lead-consent">
          <span>
            By submitting, you agree to receive transactional or conversational communications from We Buy St Pete Houses via SMS, calls, and email related to your property inquiry. Reply STOP to opt out. Your info is never sold.
          </span>
        </label>

        {submitState === "error" ? (
          <p className="lead-form-error" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          className="btn btn--cta"
          style={{ width: "100%", justifyContent: "center" }}
          disabled={isLoading || isSuccess}
        >
          {isSuccess ? "Sent — we will be in touch" : isLoading ? "Sending..." : submitLabel}
          {!isLoading && !isSuccess ? <Arr /> : null}
        </button>
      </form>
    </aside>
  );
}
