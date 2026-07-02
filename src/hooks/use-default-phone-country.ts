"use client";

import { useEffect, useRef, useState } from "react";
import { DEFAULT_PHONE_COUNTRY } from "@/lib/phone-countries";

type GeoApiResponse = {
  countryCode?: string;
};

/**
 * Fetches the visitor's country once and returns it as a default phone country.
 * The returned value is only meant for initial selection — callers should track
 * manual overrides so geo detection never overwrites user choice.
 */
export function useDefaultPhoneCountry() {
  const [defaultCountryCode, setDefaultCountryCode] = useState(DEFAULT_PHONE_COUNTRY);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    let cancelled = false;

    fetch("/api/geo")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: GeoApiResponse | null) => {
        if (cancelled || !data?.countryCode) return;
        setDefaultCountryCode(data.countryCode.toUpperCase());
      })
      .catch(() => {
        // Keep DEFAULT_PHONE_COUNTRY on failure.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return defaultCountryCode;
}
