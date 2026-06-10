import type { SELL_REASON_OPTIONS } from "@/lib/constants";

export type SellReasonValue = (typeof SELL_REASON_OPTIONS)[number]["value"];

const SITUATION_SELL_REASON_MAP: Partial<Record<string, SellReasonValue>> = {
  foreclosure: "facing-foreclosure",
  inherited: "inherited-estate",
  divorce: "divorce-separation",
  tenants: "tired-landlord",
  lien: "financial-hardship",
  "reverse-mortgage": "financial-hardship",
  "medical-emergency": "financial-hardship",
  "water-damage": "too-much-work",
  "fire-damage": "too-much-work",
  "storm-damage": "too-much-work",
  "mold-damage": "too-much-work",
  condemned: "too-much-work",
  "hoarder-house": "too-much-work",
  "sell-as-is": "too-much-work",
  "as-is-florida": "too-much-work",
};

export function getSituationSellReason(slug: string): SellReasonValue | undefined {
  return SITUATION_SELL_REASON_MAP[slug];
}
