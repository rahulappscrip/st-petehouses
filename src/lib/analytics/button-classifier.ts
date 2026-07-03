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

function isSituationHref(href: string): boolean {
  const path = href.replace(/^https?:\/\/[^/]+/i, "").replace(/\/$/, "");
  if (path.startsWith("/situations/") || path.includes("/situations/")) {
    return true;
  }

  const segment = path.replace(/^\//, "").split("/")[0] ?? "";
  return (
    segment.startsWith("sell-") ||
    segment.startsWith("stop-") ||
    segment.startsWith("selling-a-house-with-")
  );
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

  if (isSituationHref(lowerHref)) {
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

const NAV_CHROME_SELECTOR =
  ".site-chrome, header, .site-header, .site-foot, footer, nav, .nav-links, .menu-item, .top-link, .foot-col, .brand, .topbar, .mobile-nav-panel";

const HEADER_UI_BUTTON_SELECTOR =
  "header, .site-header, [data-menu], .nav-burger, .mobile-nav-overlay, .mobile-nav-panel";

function isBtnElement(element: HTMLElement): boolean {
  return element.classList.contains("btn") || element.closest(".btn") !== null;
}

export function shouldSkipButtonClick(element: HTMLElement): boolean {
  if (element.closest(".lead-offer-form form") && element.getAttribute("type") === "submit") {
    return true;
  }

  const href = getElementHref(element).toLowerCase();
  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return true;
  }

  // Header/footer/logo nav text links — tracked via page_view, not button_clicked
  if (element.tagName === "A" && !isBtnElement(element) && element.closest(NAV_CHROME_SELECTOR)) {
    return true;
  }

  // Dropdown toggles, burger menu, drawer chrome — not CTAs
  if (element.tagName === "BUTTON" && !isBtnElement(element) && element.closest(HEADER_UI_BUTTON_SELECTOR)) {
    return true;
  }

  return false;
}
