"use client";

import { useEffect, useRef, useState } from "react";
import {
  countryCodeToFlag,
  DEFAULT_PHONE_COUNTRY,
  formatPhoneForCountry,
  PHONE_COUNTRIES,
  resolvePhoneCountry,
} from "@/lib/phone-countries";

type InternationalPhoneInputProps = {
  id: string;
  name: string;
  value: string;
  countryCode: string;
  defaultCountryCode?: string;
  onChange: (value: string) => void;
  onCountryChange: (countryCode: string) => void;
  placeholder?: string;
  disabled?: boolean;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

export function InternationalPhoneInput({
  id,
  name,
  value,
  countryCode,
  defaultCountryCode,
  onChange,
  onCountryChange,
  placeholder,
  disabled = false,
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedBy,
}: InternationalPhoneInputProps) {
  const userChangedCountry = useRef(false);
  const geoApplied = useRef(false);
  const [countrySelectId] = useState(() => `${id}-country`);

  useEffect(() => {
    if (!defaultCountryCode || userChangedCountry.current || geoApplied.current) return;

    const normalized = defaultCountryCode.toUpperCase();
    if (normalized !== countryCode) {
      onCountryChange(normalized);
    }
    geoApplied.current = true;
  }, [defaultCountryCode, countryCode, onCountryChange]);

  const activeCountry = resolvePhoneCountry(countryCode);
  const resolvedPlaceholder =
    placeholder ??
    (activeCountry.code === "US" || activeCountry.code === "CA"
      ? "(727) 477-8998"
      : "Enter phone number");

  function handleCountryChange(nextCountryCode: string) {
    userChangedCountry.current = true;
    onCountryChange(nextCountryCode);
    onChange(formatPhoneForCountry(value, nextCountryCode));
  }

  function handlePhoneChange(raw: string) {
    onChange(formatPhoneForCountry(raw, activeCountry.code));
  }

  return (
    <div className="phone-input-group">
      <div className="phone-country-select">
        <label className="sr-only" htmlFor={countrySelectId}>
          Country code
        </label>
        <select
          id={countrySelectId}
          className="phone-country-select__control"
          value={activeCountry.code}
          disabled={disabled}
          onChange={(event) => handleCountryChange(event.target.value)}
          aria-label="Country code"
        >
          {PHONE_COUNTRIES.map((country) => (
            <option key={country.code} value={country.code}>
              {countryCodeToFlag(country.code)} {country.dialCode}
            </option>
          ))}
        </select>
        <span className="phone-country-select__display" aria-hidden="true">
          <span className="phone-country-select__dial">{activeCountry.dialCode}</span>
        </span>
      </div>

      <input
        id={id}
        name={name}
        className="input phone-number-input"
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        placeholder={resolvedPlaceholder}
        value={value}
        disabled={disabled}
        maxLength={activeCountry.code === DEFAULT_PHONE_COUNTRY ? 14 : 16}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
        onChange={(event) => handlePhoneChange(event.target.value)}
        onPaste={(event) => {
          event.preventDefault();
          handlePhoneChange(event.clipboardData.getData("text"));
        }}
      />
    </div>
  );
}
