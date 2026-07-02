"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isRudderEnabled } from "@/lib/analytics/config";
import {
  classifyButton,
  getButtonLocation,
  getButtonText,
  getClickableElement,
  getElementHref,
  shouldSkipButtonClick,
} from "@/lib/analytics/button-classifier";
import { fetchUserLocation, getBaseProperties } from "@/lib/analytics/context";
import { RUDDER_EVENTS } from "@/lib/analytics/events";
import { trackEvent, whenRudderReady } from "@/lib/analytics/rudder";
import { resetScrollState, updateScrollDepth } from "@/lib/analytics/scroll";
import { incrementSessionPageView, setPageLoadTime } from "@/lib/analytics/session";

function useRudderPageTracker(): void {
  const pathname = usePathname();

  useEffect(() => {
    if (!isRudderEnabled()) return;

    window.addEventListener("scroll", updateScrollDepth, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollDepth);
  }, []);

  useEffect(() => {
    if (!isRudderEnabled() || !pathname) return;

    let cancelled = false;

    setPageLoadTime(Date.now());
    resetScrollState();

    fetchUserLocation().finally(() => {
      if (cancelled) return;

      whenRudderReady(() => {
        trackEvent(RUDDER_EVENTS.PAGE_VIEW, getBaseProperties());
        incrementSessionPageView();
      });
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);
}

function useRudderClickTracker(): void {
  useEffect(() => {
    if (!isRudderEnabled()) return;

    const onClick = (event: MouseEvent) => {
      const element = getClickableElement(event.target);
      if (!element || shouldSkipButtonClick(element)) return;

      const href = getElementHref(element);
      const { button_type, button_action } = classifyButton(element, href);

      trackEvent(
        RUDDER_EVENTS.BUTTON_CLICKED,
        getBaseProperties({
          button_text: getButtonText(element),
          button_type,
          button_action,
          button_location: getButtonLocation(element),
          destination_url: href || null,
        }),
      );
    };

    const onPhoneClick = (event: MouseEvent) => {
      const element = getClickableElement(event.target);
      if (!element) return;
      const href = getElementHref(element).toLowerCase();
      if (!href.startsWith("tel:")) return;

      trackEvent(RUDDER_EVENTS.PHONE_NUMBER_CLICKED, getBaseProperties());
    };

    const onEmailClick = (event: MouseEvent) => {
      const element = getClickableElement(event.target);
      if (!element) return;
      const href = getElementHref(element).toLowerCase();
      if (!href.startsWith("mailto:")) return;

      trackEvent(RUDDER_EVENTS.EMAIL_CLICKED, getBaseProperties());
    };

    document.addEventListener("click", onClick);
    document.addEventListener("click", onPhoneClick);
    document.addEventListener("click", onEmailClick);

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("click", onPhoneClick);
      document.removeEventListener("click", onEmailClick);
    };
  }, []);
}

export function RudderAnalyticsProvider() {
  useRudderPageTracker();
  useRudderClickTracker();
  return null;
}
