export type SituationPageData = {
  slug: string;
  label: string;
  breadcrumb: string;
  title: string;
  description: string;
  intro: string;
};

export const SITUATION_BENEFITS = [
  { label: "Speed", text: "close in as little as 7 days from acceptance." },
  { label: "As-is", text: "no repairs, no staging, no cleanout required." },
  { label: "Discretion", text: "we keep your situation private and handle it professionally." },
  { label: "No fees", text: "the offer you accept is what you receive." },
] as const;

export const SITUATION_CLOSING =
  "Every situation has nuances. Call us or fill out the form, and we'll walk through what makes sense for yours — with no pressure.";

export const SITUATION_PAGES: SituationPageData[] = [
  {
    slug: "foreclosure",
    label: "Foreclosure",
    breadcrumb: "Facing foreclosure",
    title: "Facing foreclosure?",
    description: "Sell quickly to stop the foreclosure process and protect your credit.",
    intro:
      "Pre-foreclosure or auction date approaching — we can close fast enough to give you a real out. We buy as-is, with no fees, and can pay off your mortgage at closing.",
  },
  {
    slug: "probate",
    label: "Probate",
    breadcrumb: "Selling a probate property",
    title: "Selling a probate property",
    description: "Cash buyers for properties in probate. We work with your attorney and timeline.",
    intro:
      "We work with executors, personal representatives, and attorneys to close on probate properties as soon as the court allows. As-is, no estate cleanout required.",
  },
  {
    slug: "divorce",
    label: "Divorce",
    breadcrumb: "Divorce home sale",
    title: "Divorce home sale",
    description: "Sell the marital home quickly without prolonging negotiations or listings.",
    intro:
      "A fast cash sale lets both parties move forward. We provide transparent offers and close on your timeline — no showings, no buyer financing risk.",
  },
  {
    slug: "inherited",
    label: "Inherited house",
    breadcrumb: "Inherited a Florida home",
    title: "Inherited a Florida home?",
    description: "Cash for inherited homes. No cleanout, no repairs, settle the estate quickly.",
    intro:
      "Whether the home is full of belongings or vacant, we buy as-is. Skip the storage fees and contractor calls — we handle it after closing.",
  },
  {
    slug: "tenants",
    label: "House with tenants",
    breadcrumb: "Selling a rental with tenants in place",
    title: "Selling a rental with tenants in place",
    description: "We buy rentals with tenants — no eviction needed.",
    intro:
      "Done being a landlord? We purchase tenant-occupied rentals and can close even with active leases. Cash-for-keys handled at the closing table when needed.",
  },
  {
    slug: "mortgage",
    label: "House with a mortgage",
    breadcrumb: "Selling with a mortgage balance",
    title: "Selling with a mortgage balance",
    description: "We can buy homes with active mortgages, including upside-down balances.",
    intro:
      "Mortgage payoff is handled at closing. We can also work with sellers who owe more than the home is worth — case by case.",
  },
  {
    slug: "fire-damage",
    label: "Fire damage",
    breadcrumb: "Fire-damaged home",
    title: "Fire-damaged home?",
    description: "We buy fire-damaged homes as-is. No restoration needed.",
    intro:
      "Insurance claim still open? We can close around the claim. No demolition, no restoration — we buy the property in its current condition.",
  },
  {
    slug: "water-damage",
    label: "Water damage",
    breadcrumb: "Water-damaged or flooded",
    title: "Water-damaged or flooded?",
    description: "Cash for water-damaged homes. Flood zone, hurricane damage, plumbing failures — all considered.",
    intro:
      "Florida water damage scenarios are familiar territory for us. We assess and offer based on as-is condition — no mitigation required.",
  },
  {
    slug: "mold-damage",
    label: "Mold damage",
    breadcrumb: "Mold or moisture issues",
    title: "Mold or moisture issues?",
    description: "We buy homes with mold — no remediation required.",
    intro:
      "Mold-related insurance claims and remediation are expensive. Skip both and sell as-is to a buyer who handles it after closing.",
  },
  {
    slug: "hoarder-house",
    label: "Hoarder house",
    breadcrumb: "Hoarder situation",
    title: "Hoarder situation?",
    description: "Cash for hoarder homes. Leave whatever you want — we handle the cleanout.",
    intro:
      "Decades of belongings inside? Don't lift a finger. We buy as-is including contents, and our team handles the cleanout post-closing.",
  },
  {
    slug: "bankruptcy",
    label: "Bankruptcy",
    breadcrumb: "Selling during bankruptcy",
    title: "Selling during bankruptcy",
    description: "We work with bankruptcy trustees and homeowners on Chapter 7 / 13 cases.",
    intro:
      "A cash sale can be a clean way out during a bankruptcy filing. We coordinate with your attorney and trustee and close on the court-approved timeline.",
  },
  {
    slug: "sell-as-is",
    label: "Sell as-is",
    breadcrumb: "Sell your house as-is",
    title: "Sell your house as-is",
    description: "No repairs, no staging, no inspections required by the buyer.",
    intro:
      "Roof at end of life? Outdated systems? Permitting issues? We buy in any condition — what you see is what we close on.",
  },
];

export const SITUATION_BY_SLUG = Object.fromEntries(
  SITUATION_PAGES.map((page) => [page.slug, page]),
) as Record<string, SituationPageData>;

export function getSituationPage(slug: string): SituationPageData | undefined {
  return SITUATION_BY_SLUG[slug];
}
