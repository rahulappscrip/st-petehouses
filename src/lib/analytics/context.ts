import { CITY_BY_ROUTE } from "@/lib/cities";
import { isRudderGeoEnabled } from "@/lib/analytics/config";
import type { BaseAnalyticsProperties, ContentType, PageType } from "@/lib/analytics/events";
import { getScrollState } from "@/lib/analytics/scroll";
import {
  getLandingPageURL,
  getSessionPageViewCount,
  getTimeOnPage,
  getTimeOnSite,
  isLandingPage,
} from "@/lib/analytics/session";
import { SITUATION_LABEL_BY_SLUG } from "@/lib/analytics/situation-labels";
import { getSituationSlugFromPath } from "@/lib/situation-slugs";

type UserLocation = {
  country: string | null;
  country_code: string | null;
  state: string | null;
  city: string | null;
  timezone: string | null;
};

let userLocation: UserLocation | null = null;
let locationFetched = false;

export async function fetchUserLocation(): Promise<UserLocation> {
  if (locationFetched && userLocation) return userLocation;

  const fallback: UserLocation = {
    country: null,
    country_code: null,
    state: null,
    city: null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  if (!isRudderGeoEnabled()) {
    userLocation = fallback;
    locationFetched = true;
    return userLocation;
  }

  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = (await response.json()) as {
      country_name?: string;
      country_code?: string;
      region?: string;
      city?: string;
      timezone?: string;
    };

    userLocation = {
      country: data.country_name ?? null,
      country_code: data.country_code ?? null,
      state: data.region ?? null,
      city: data.city ?? null,
      timezone: data.timezone ?? fallback.timezone,
    };
  } catch {
    userLocation = fallback;
  }

  locationFetched = true;
  return userLocation;
}

function getDeviceType(): string {
  const width = window.innerWidth;
  if (width <= 768) return "mobile";
  if (width <= 1024) return "tablet";
  return "desktop";
}

function getOSDetails(): { name: string; version: string } {
  const userAgent = navigator.userAgent;
  let os = "";
  let osVersion = "";

  if (userAgent.includes("Win")) {
    os = "Windows";
    if (userAgent.includes("Windows NT 10.0")) osVersion = "10";
    else if (userAgent.includes("Windows NT 6.3")) osVersion = "8.1";
    else if (userAgent.includes("Windows NT 6.2")) osVersion = "8";
    else if (userAgent.includes("Windows NT 6.1")) osVersion = "7";
  } else if (userAgent.includes("Mac")) {
    os = "macOS";
    const match = userAgent.match(/Mac OS X ([\d_]+)/);
    if (match) osVersion = match[1].replace(/_/g, ".");
  } else if (userAgent.includes("Linux")) {
    os = "Linux";
  } else if (userAgent.includes("Android")) {
    os = "Android";
    const match = userAgent.match(/Android ([\d.]+)/);
    if (match) osVersion = match[1];
  } else if (
    userAgent.includes("iOS") ||
    userAgent.includes("iPhone") ||
    userAgent.includes("iPad")
  ) {
    os = "iOS";
    const match = userAgent.match(/OS ([\d_]+)/);
    if (match) osVersion = match[1].replace(/_/g, ".");
  }

  return { name: os, version: osVersion };
}

function getBrowser(): string {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("SamsungBrowser")) return "Samsung Internet";
  if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
  if (userAgent.includes("Trident")) return "Internet Explorer";
  if (userAgent.includes("Edge")) return "Edge";
  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Safari")) return "Safari";
  return "Unknown";
}

function getBrowserVersion(): string {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Chrome")) {
    const match = userAgent.match(/Chrome\/([\d.]+)/);
    if (match) return match[1];
  } else if (userAgent.includes("Firefox")) {
    const match = userAgent.match(/Firefox\/([\d.]+)/);
    if (match) return match[1];
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    const match = userAgent.match(/Version\/([\d.]+)/);
    if (match) return match[1];
  }

  return "";
}

function getReferrerInfo(): { referrer: string; referring_domain: string } {
  const referrer = document.referrer;

  if (!referrer) {
    return { referrer: "$direct", referring_domain: "" };
  }

  try {
    const referrerUrl = new URL(referrer);
    return {
      referrer,
      referring_domain: referrerUrl.hostname,
    };
  } catch {
    return { referrer: "$direct", referring_domain: "" };
  }
}

function getTrafficSource(): string {
  const referrer = document.referrer;
  const url = window.location.href;

  if (url.includes("utm_source=")) return "paid";
  if (!referrer) return "direct";

  try {
    const referrerDomain = new URL(referrer).hostname;
    const currentDomain = window.location.hostname;

    if (referrerDomain.includes(currentDomain)) return "internal";
    if (referrerDomain.includes("google.") || referrerDomain.includes("bing.")) return "organic";
    if (
      referrerDomain.includes("facebook.") ||
      referrerDomain.includes("linkedin.") ||
      referrerDomain.includes("twitter.")
    ) {
      return "social";
    }

    return "referral";
  } catch {
    return "direct";
  }
}

function getURLParam(name: string): string {
  return new URLSearchParams(window.location.search).get(name) || "";
}

function getMetaTags() {
  const metaTitle =
    document.querySelector('meta[property="og:title"]')?.getAttribute("content") ||
    document.querySelector('meta[name="twitter:title"]')?.getAttribute("content") ||
    document.title ||
    "";

  const metaDescription =
    document.querySelector('meta[property="og:description"]')?.getAttribute("content") ||
    document.querySelector('meta[name="twitter:description"]')?.getAttribute("content") ||
    document.querySelector('meta[name="description"]')?.getAttribute("content") ||
    "";

  const metaKeywords =
    document.querySelector('meta[name="keywords"]')?.getAttribute("content") || "";

  return { meta_title: metaTitle, meta_description: metaDescription, meta_keywords: metaKeywords };
}

function parsePathContext(pathname: string): {
  page_type: PageType;
  content_type: ContentType;
  situation_slug: string | null;
  situation_label: string | null;
  city_route: string | null;
  city_name: string | null;
} {
  const path = pathname.toLowerCase().replace(/\/$/, "") || "/";

  if (path === "/" || path === "/home") {
    return {
      page_type: "home",
      content_type: "general",
      situation_slug: null,
      situation_label: null,
      city_route: null,
      city_name: null,
    };
  }

  const situationSlug = getSituationSlugFromPath(path);
  if (situationSlug) {
    return {
      page_type: "situation",
      content_type: "situation",
      situation_slug: situationSlug,
      situation_label: SITUATION_LABEL_BY_SLUG[situationSlug] ?? null,
      city_route: null,
      city_name: null,
    };
  }

  const citySegment = path.replace(/^\//, "");
  if (citySegment.startsWith("we-buy-houses-") && citySegment.endsWith("-fl")) {
    const city = CITY_BY_ROUTE[citySegment];
    return {
      page_type: "city",
      content_type: "city",
      situation_slug: null,
      situation_label: null,
      city_route: citySegment,
      city_name: city?.cityName ?? null,
    };
  }

  if (path === "/blog") {
    return {
      page_type: "blog",
      content_type: "blog",
      situation_slug: null,
      situation_label: null,
      city_route: null,
      city_name: null,
    };
  }

  if (path.startsWith("/blog/")) {
    return {
      page_type: "blog_post",
      content_type: "blog",
      situation_slug: null,
      situation_label: null,
      city_route: null,
      city_name: null,
    };
  }

  const staticPages: Record<string, PageType> = {
    "/contact": "contact",
    "/about": "about",
    "/reviews": "reviews",
    "/faq": "faq",
    "/how-it-works": "how_it_works",
    "/sell-your-house": "sell_your_house",
    "/get-a-cash-offer": "get_cash_offer",
    "/cash-vs-agent": "cash_vs_agent",
  };

  const pageType = staticPages[path] ?? "other";

  return {
    page_type: pageType,
    content_type: "general",
    situation_slug: null,
    situation_label: null,
    city_route: null,
    city_name: null,
  };
}

export function getBaseProperties(
  additionalProps: Record<string, unknown> = {},
): BaseAnalyticsProperties & Record<string, unknown> {
  const location = userLocation ?? {
    country: null,
    country_code: null,
    state: null,
    city: null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  const osDetails = getOSDetails();
  const referrerInfo = getReferrerInfo();
  const metaTags = getMetaTags();
  const pathContext = parsePathContext(window.location.pathname);
  const scroll = getScrollState();

  return {
    page_url: window.location.pathname,
    full_url: window.location.href,
    page_title: document.title,
    page_type: pathContext.page_type,
    content_type: pathContext.content_type,
    situation_slug: pathContext.situation_slug,
    situation_label: pathContext.situation_label,
    city_route: pathContext.city_route,
    city_name: pathContext.city_name,
    meta_title: metaTags.meta_title,
    meta_description: metaTags.meta_description,
    meta_keywords: metaTags.meta_keywords,
    referrer_domain: referrerInfo.referring_domain || null,
    traffic_source: getTrafficSource(),
    utm_source: getURLParam("utm_source"),
    utm_medium: getURLParam("utm_medium"),
    utm_campaign: getURLParam("utm_campaign"),
    utm_term: getURLParam("utm_term"),
    utm_content: getURLParam("utm_content"),
    device_type: getDeviceType(),
    os: osDetails.name,
    os_version: osDetails.version,
    browser: getBrowser(),
    browser_version: getBrowserVersion(),
    country: location.country,
    country_code: location.country_code,
    state: location.state,
    city: location.city,
    timezone: location.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone,
    is_landing_page: isLandingPage(),
    landing_page_url: getLandingPageURL(),
    session_page_number: getSessionPageViewCount() + 1,
    time_on_page: getTimeOnPage(),
    time_on_site: getTimeOnSite(),
    scroll_depth: scroll.scroll_depth,
    scroll_25: scroll.scroll_25,
    scroll_50: scroll.scroll_50,
    scroll_75: scroll.scroll_75,
    scroll_100: scroll.scroll_100,
    timestamp: new Date().toISOString(),
    ...additionalProps,
  };
}
