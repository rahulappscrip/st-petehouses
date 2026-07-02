"use client";

import type { FocusEvent, FormEvent, ReactNode } from "react";
import { useCallback, useState } from "react";
import { AddressAutocompleteInput } from "@/components/shared/AddressAutocompleteInput";
import { InternationalPhoneInput } from "@/components/shared/InternationalPhoneInput";
import { useDefaultPhoneCountry } from "@/hooks/use-default-phone-country";
import { Arr } from "@/components/ui/Arr";
import { FormToast } from "@/components/ui/FormToast";
import { SiteImg } from "@/components/ui/SiteImage";
import {
  markFormFieldCompleted,
  markFormStarted,
  trackFormSubmitted,
  trackFormValidationError,
} from "@/lib/analytics/form-state";
import { ASSETS, SELL_REASON_OPTIONS, SITE } from "@/lib/constants";
import { TRUST_IMAGES } from "@/lib/image-accessibility";
import {
  getLeadFormErrorMessage,
  validateLeadFormFields,
} from "@/lib/lead-form-validation";
import { DEFAULT_PHONE_COUNTRY } from "@/lib/phone-countries";
import type { SellReasonValue } from "@/lib/situation-sell-reason";

type LeadOfferFormProps = {
  id?: string;
  formTitle?: ReactNode;
  formIntro?: string;
  formEyebrow?: string;
  addressPlaceholder?: string;
  submitLabel?: string;
  className?: string;
  defaultSellReason?: SellReasonValue;
  onSuccess?: () => void;
  showBadges?: boolean;
};

type SubmitState = "idle" | "loading" | "error";

const SUCCESS_MESSAGE =
  "Thank you! We've received your information and will be in touch within 24 hours.";

function FieldLabel({
  htmlFor,
  children,
  required = true,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor}>
      {children}
      {required ? (
        <span className="field-required" aria-hidden="true">
          {" "}
          *
        </span>
      ) : null}
    </label>
  );
}

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
  defaultSellReason,
  onSuccess,
  showBadges = true,
}: LeadOfferFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [addressFieldKey, setAddressFieldKey] = useState(0);
  const [phone, setPhone] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState(DEFAULT_PHONE_COUNTRY);
  const defaultPhoneCountryCode = useDefaultPhoneCountry();

  const dismissToast = useCallback(() => setToastMessage(null), []);

  const rootClass = ["lead-card", "lead-offer-form", className].filter(Boolean).join(" ");
  const isLoading = submitState === "loading";

  function handleFormFocusIn(event: FocusEvent<HTMLFormElement>) {
    const target = event.target;
    if (
      !(target instanceof HTMLInputElement || target instanceof HTMLSelectElement) ||
      !target.name
    ) {
      return;
    }

    markFormStarted(id, target.name);
  }

  function handleFormFocusOut(event: FocusEvent<HTMLFormElement>) {
    const target = event.target;
    if (
      !(target instanceof HTMLInputElement || target instanceof HTMLSelectElement) ||
      !target.name
    ) {
      return;
    }

    const fieldValue = target.name === "phone" ? phone : String(target.value).trim();
    if (!fieldValue) return;

    markFormFieldCompleted(id, target.name, target.type || "text", fieldValue);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      address: String(formData.get("address") ?? "").trim(),
      sellReason: String(formData.get("sellReason") ?? "").trim(),
      phone,
      phoneCountryCode,
      email: String(formData.get("email") ?? "").trim(),
      sourcePage: window.location.pathname,
    };

    const fieldErrors = validateLeadFormFields(payload);
    const validationMessage = getLeadFormErrorMessage(fieldErrors);
    if (validationMessage) {
      trackFormValidationError(id, Object.keys(fieldErrors));
      setSubmitState("error");
      setErrorMessage(validationMessage);
      return;
    }

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

      form.reset();
      setPhone("");
      setPhoneCountryCode(defaultPhoneCountryCode);
      setAddressFieldKey((current) => current + 1);
      setSubmitState("idle");
      setToastMessage(SUCCESS_MESSAGE);
      trackFormSubmitted(id, payload);
      onSuccess?.();
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <>
      {toastMessage ? <FormToast message={toastMessage} onDismiss={dismissToast} /> : null}

      <aside className={rootClass} id={id} aria-label="Get a cash offer">
        <div className="lead-top">
          {showBadges ? (
            <div className="lead-badges">
              <SiteImg
                className="lead-badge-bbb"
                src={ASSETS.bbbBadge}
                alt={TRUST_IMAGES.bbbBadge.alt}
                title={TRUST_IMAGES.bbbBadge.title}
                width={2000}
                height={751}
                sizes="200px"
              />
              <span className="lead-badge lead-badge--5">
                <b>★★★★★</b>
                <i>5.0 Rated</i>
              </span>
            </div>
          ) : null}
          {formEyebrow ? <span className="lead-eyebrow">{formEyebrow}</span> : null}
          <p className="lead-title">{formTitle}</p>
          {formIntro ? <p className="lead-intro">{formIntro}</p> : null}
        </div>

        <form
          onSubmit={handleSubmit}
          onFocusCapture={handleFormFocusIn}
          onBlurCapture={handleFormFocusOut}
          noValidate
        >
          <div className="field">
            <FieldLabel htmlFor="full-name">Full name</FieldLabel>
            <input
              id="full-name"
              name="fullName"
              className="input"
              required
              type="text"
              autoComplete="name"
              placeholder="John Smith"
              disabled={isLoading}
            />
          </div>

          <div className="field">
            <FieldLabel htmlFor="addr">Property address</FieldLabel>
            <AddressAutocompleteInput
              key={addressFieldKey}
              id="addr"
              name="address"
              placeholder={addressPlaceholder}
              disabled={isLoading}
            />
          </div>

          <div className="field">
            <FieldLabel htmlFor="sell-reason">Why are you looking to sell?</FieldLabel>
            <select
              id="sell-reason"
              name="sellReason"
              className="select"
              required
              defaultValue={defaultSellReason ?? ""}
              disabled={isLoading}
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
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <InternationalPhoneInput
                id="phone"
                name="phone"
                value={phone}
                countryCode={phoneCountryCode}
                defaultCountryCode={defaultPhoneCountryCode}
                onChange={setPhone}
                onCountryChange={setPhoneCountryCode}
                placeholder={SITE.phone}
                disabled={isLoading}
              />
            </div>
            <div className="field">
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <input
                id="email"
                name="email"
                className="input"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                disabled={isLoading}
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
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : submitLabel}
            {!isLoading ? <Arr /> : null}
          </button>
        </form>
      </aside>
    </>
  );
}
