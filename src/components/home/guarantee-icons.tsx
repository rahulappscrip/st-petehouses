import type { ReactNode } from "react";

export type GuaranteeIconId = "cash" | "repair" | "dollar" | "coin" | "eyeHidden" | "clock";

/** Cash / banknotes */
const GUARANTEE_ICON_CASH = (
  <g>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M7 12h.01M17 12h.01" strokeLinecap="round" />
  </g>
);

/** Wrench — repairs / as-is */
const GUARANTEE_ICON_REPAIR = (
  <path
    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

/** Dollar sign */
const GUARANTEE_ICON_DOLLAR = (
  <g>
    <path d="M12 3v18" />
    <path d="M16 7.5c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4 4 1.8 4 4-1.8 4-4 4" />
  </g>
);

/** Coin */
const GUARANTEE_ICON_COIN = (
  <g>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10M9.5 9.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1-2.5-2.5" strokeLinecap="round" />
  </g>
);

/** Eye hidden / off */
const GUARANTEE_ICON_EYE_HIDDEN = (
  <g strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
    <path d="m2 2 20 20" />
  </g>
);

/** Clock — timeline / speed (homepage & fallbacks) */
const GUARANTEE_ICON_CLOCK = (
  <g>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </g>
);

export const GUARANTEE_ICONS: Record<GuaranteeIconId, ReactNode> = {
  cash: GUARANTEE_ICON_CASH,
  repair: GUARANTEE_ICON_REPAIR,
  dollar: GUARANTEE_ICON_DOLLAR,
  coin: GUARANTEE_ICON_COIN,
  eyeHidden: GUARANTEE_ICON_EYE_HIDDEN,
  clock: GUARANTEE_ICON_CLOCK,
};

/** Normalized h3 title → icon (order-independent). */
export const GUARANTEE_TITLE_ICON_MAP: Record<string, GuaranteeIconId> = {
  "no commissions": "cash",
  "no repairs": "repair",
  "no staging or showings": "eyeHidden",
  "no closing fees": "dollar",
  "no financing contingencies": "coin",
  "guaranteed cash offer": "cash",
  "no hidden fees": "dollar",
  "closing on your timeline": "clock",
  "as-is purchase": "repair",
  "zero commissions": "cash",
  "transparent offer formula": "cash",
};

export function normalizeGuaranteeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[—–]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function resolveGuaranteeIconId(title: string, explicit?: GuaranteeIconId): GuaranteeIconId {
  if (explicit) return explicit;

  const normalized = normalizeGuaranteeTitle(title);
  if (GUARANTEE_TITLE_ICON_MAP[normalized]) {
    return GUARANTEE_TITLE_ICON_MAP[normalized];
  }

  if (normalized.includes("staging") || normalized.includes("showing")) return "eyeHidden";
  if (normalized.includes("closing fee")) return "dollar";
  if (normalized.includes("financing contingenc")) return "coin";
  if (normalized.includes("closing on") || normalized.includes("timeline")) return "clock";
  if (normalized.includes("commission") || normalized.includes("guaranteed cash") || normalized.includes("cash offer")) {
    return "cash";
  }
  if (normalized.includes("repair") || normalized.includes("as-is")) return "repair";
  if (normalized.includes("hidden fee")) return "dollar";

  return "cash";
}

export function resolveGuaranteeIcon(title: string, explicit?: GuaranteeIconId): ReactNode {
  return GUARANTEE_ICONS[resolveGuaranteeIconId(title, explicit)];
}
