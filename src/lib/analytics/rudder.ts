import { isRudderEnabled } from "@/lib/analytics/config";

type RudderAnalytics = {
  track: (event: string, properties?: Record<string, unknown>) => void;
  ready: (callback: () => void) => void;
  load: (writeKey: string, dataPlaneUrl: string, options?: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    rudderanalytics?: RudderAnalytics;
  }
}

export function whenRudderReady(callback: () => void): void {
  if (typeof window === "undefined" || !isRudderEnabled()) return;

  const rudder = window.rudderanalytics;
  if (!rudder) return;

  if (typeof rudder.ready === "function") {
    rudder.ready(callback);
    return;
  }

  callback();
}

export function trackEvent(event: string, properties?: Record<string, unknown>): void {
  if (typeof window === "undefined" || !isRudderEnabled()) return;

  whenRudderReady(() => {
    window.rudderanalytics?.track(event, properties);
  });
}
