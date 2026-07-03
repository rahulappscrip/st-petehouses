import { SITUATION_SLUG_MIGRATION } from "@/lib/situation-slugs";

const SITUATION_LABEL_BY_PAGE_KEY: Record<string, string> = {
  foreclosure: "Foreclosure",
  inherited: "Inherited house",
  divorce: "Divorce",
  tenants: "House with tenants",
  lien: "House with a lien",
  "water-damage": "Water / flood damage",
  "fire-damage": "Fire damage",
  "storm-damage": "Storm damage",
  "mold-damage": "Mold Damage",
  "as-is-florida": "Sell as-is Florida",
  "cash-home-buyers": "Cash home buyers",
  condemned: "Condemned house",
  "medical-emergency": "Medical emergency",
  "hoarder-house": "Hoarder house",
  "reverse-mortgage": "Reverse mortgage",
  "sell-as-is": "Sell as-is (St Pete)",
  bankruptcy: "Bankruptcy",
  "foundation-problems": "Foundation problems",
};

export const SITUATION_LABEL_BY_SLUG: Record<string, string> = {
  ...SITUATION_LABEL_BY_PAGE_KEY,
  ...Object.fromEntries(
    Object.entries(SITUATION_SLUG_MIGRATION).map(([pageKey, slug]) => [
      slug,
      SITUATION_LABEL_BY_PAGE_KEY[pageKey] ?? pageKey,
    ]),
  ),
};
