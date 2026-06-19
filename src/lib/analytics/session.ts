const SESSION_START_KEY = "rudder_session_start_time";
const PAGE_VIEW_COUNT_KEY = "rudder_page_view_count";
const LANDING_PAGE_KEY = "rudder_landing_page_url";

export function getPageLoadTime(): number {
  if (typeof window === "undefined") return Date.now();
  return window.__rudderPageLoadTime ?? Date.now();
}

export function setPageLoadTime(time: number): void {
  if (typeof window === "undefined") return;
  window.__rudderPageLoadTime = time;
}

declare global {
  interface Window {
    __rudderPageLoadTime?: number;
  }
}

export function getSessionStartTime(): number {
  if (typeof window === "undefined") return Date.now();

  const stored = sessionStorage.getItem(SESSION_START_KEY);
  if (stored) return parseInt(stored, 10);

  const startTime = Date.now();
  sessionStorage.setItem(SESSION_START_KEY, String(startTime));
  return startTime;
}

export function getSessionPageViewCount(): number {
  if (typeof window === "undefined") return 0;
  return parseInt(sessionStorage.getItem(PAGE_VIEW_COUNT_KEY) || "0", 10);
}

export function incrementSessionPageView(): number {
  const count = getSessionPageViewCount() + 1;
  if (typeof window !== "undefined") {
    sessionStorage.setItem(PAGE_VIEW_COUNT_KEY, String(count));
  }
  return count;
}

export function isLandingPage(): boolean {
  return getSessionPageViewCount() === 0;
}

export function getLandingPageURL(): string {
  if (typeof window === "undefined") return "";

  let landing = sessionStorage.getItem(LANDING_PAGE_KEY);
  if (!landing) {
    landing = window.location.href;
    sessionStorage.setItem(LANDING_PAGE_KEY, landing);
  }
  return landing;
}

export function getTimeOnPage(): number {
  return Math.round((Date.now() - getPageLoadTime()) / 1000);
}

export function getTimeOnSite(): number {
  return Math.round((Date.now() - getSessionStartTime()) / 1000);
}
