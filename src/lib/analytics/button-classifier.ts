export type ButtonClassification = {
  button_type: string;
  button_action: string;
};

function normalizeHref(href: string): string {
  return href.trim();
}

function isCashOfferHref(href: string): boolean {
  const lower = href.toLowerCase();
  return (
    lower.includes("/contact") ||
    lower.includes("/get-a-cash-offer") ||
    lower.includes("#offer") ||
    lower.includes("#form")
  );
}

function isCityHref(href: string): boolean {
  const path = href.replace(/^https?:\/\/[^/]+/i, "").replace(/^\//, "");
  return path.startsWith("we-buy-houses-") && path.endsWith("-fl");
}

export function classifyButton(element: HTMLElement, href: string): ButtonClassification {
  const text = (
    element.textContent?.trim() ||
    element.getAttribute("aria-label") ||
    element.getAttribute("title") ||
    ""
  ).toLowerCase();
  const normalizedHref = normalizeHref(href);
  const lowerHref = normalizedHref.toLowerCase();

  if (isCashOfferHref(lowerHref)) {
    return { button_type: "cash_offer", button_action: "get_cash_offer" };
  }

  if (lowerHref.startsWith("/situations/") || lowerHref.includes("/situations/")) {
    return { button_type: "situation", button_action: "view_situation" };
  }

  if (isCityHref(lowerHref)) {
    return { button_type: "city", button_action: "view_city" };
  }

  if (lowerHref.startsWith("/blog") || lowerHref.includes("/blog")) {
    return { button_type: "blog", button_action: "view_blog" };
  }

  if (element.classList.contains("btn--cta")) {
    return { button_type: "cta", button_action: "primary_cta" };
  }

  if (element.classList.contains("btn--ghost") || text.includes("call")) {
    return { button_type: "call", button_action: "call_us" };
  }

  if (normalizedHref.startsWith("#")) {
    return { button_type: "anchor", button_action: "scroll_to_section" };
  }

  if (normalizedHref.startsWith("/") || (normalizedHref && !normalizedHref.startsWith("http"))) {
    return { button_type: "navigation", button_action: "navigate" };
  }

  if (normalizedHref.startsWith("http://") || normalizedHref.startsWith("https://")) {
    return { button_type: "external_link", button_action: "external_navigation" };
  }

  return { button_type: "action", button_action: "click" };
}

export function getButtonLocation(element: HTMLElement): string {
  if (element.closest(".site-chrome, header, .site-header")) return "header";
  if (element.closest(".site-foot, footer")) return "footer";
  if (element.closest(".mobile-call")) return "mobile_bar";
  if (element.closest(".situation-hero, .hero, [class*='hero']")) return "hero";
  if (element.closest("nav, .top-link")) return "navigation";
  return "content";
}

export function getClickableElement(target: EventTarget | null): HTMLElement | null {
  if (!(target instanceof Element)) return null;

  const clickable = target.closest(
    "a, button, .btn, [role='button'], input[type='submit']",
  ) as HTMLElement | null;

  return clickable;
}

export function getElementHref(element: HTMLElement): string {
  if (element instanceof HTMLAnchorElement) return element.href || element.getAttribute("href") || "";
  if (element instanceof HTMLInputElement) return element.value || "";
  return element.getAttribute("href") || "";
}

export function getButtonText(element: HTMLElement): string {
  return (
    element.textContent?.trim() ||
    element.getAttribute("aria-label") ||
    element.getAttribute("title") ||
    (element instanceof HTMLInputElement ? element.value : "") ||
    "Unknown"
  );
}

export function shouldSkipButtonClick(element: HTMLElement): boolean {
  if (element.closest(".lead-offer-form form") && element.getAttribute("type") === "submit") {
    return true;
  }

  const href = getElementHref(element).toLowerCase();
  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return true;
  }

  return false;
}
