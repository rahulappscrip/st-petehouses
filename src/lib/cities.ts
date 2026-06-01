export type CityPageData = {
  /** Route segment, e.g. we-buy-houses-st-petersburg-fl */
  route: string;
  label: string;
  cityName: string;
  description: string;
  metaDescription: string;
  neighborhoods: string;
};

export const CITY_SECOND_INTRO =
  "Whether the property is move-in ready, deeply distressed, inherited, vacant, or tenant-occupied, we can make a fair, written offer within 24 hours. No repairs needed. No agent fees deducted. No financing contingencies.";

export const CITY_HERO_SUB =
  "Sell as-is. Close in as little as 7 days. No fees, no repairs, no commissions.";

export const CITY_BENEFITS = [
  { label: "Speed", text: "close in as little as 7 days from acceptance." },
  { label: "Certainty", text: "no financing fall-through, no buyer cold feet." },
  { label: "As-is", text: "we buy in any condition — keep what you want, leave the rest." },
  { label: "No fees", text: "$0 commissions, $0 closing costs charged to you." },
] as const;

export const CITY_SITUATIONS_TEXT =
  "Foreclosure, divorce, probate, tired-landlord exits, relocations, fire/water/mold damage, and properties with significant deferred maintenance. Every situation is different — call us and we'll walk through your options.";

/** Active city location pages — single source of truth for routes, nav, and footer. */
export const CITY_PAGES: CityPageData[] = [
  {
    route: "we-buy-houses-st-petersburg-fl",
    label: "St Petersburg",
    cityName: "St Petersburg",
    description: CITY_HERO_SUB,
    metaDescription:
      "Sell your house fast in St Petersburg, FL. Get a fair cash offer with no repairs, no fees, and close on your schedule. We buy houses as-is.",
    neighborhoods: "Old Northeast, Historic Kenwood, Disston Heights, Shore Acres, Pasadena, Gulfport area",
  },
  {
    route: "we-buy-houses-clearwater-fl",
    label: "Clearwater",
    cityName: "Clearwater",
    description: CITY_HERO_SUB,
    metaDescription:
      "Sell your Clearwater home fast for cash. No repairs, no fees, close in as little as 7 days. We serve Clearwater and Greater Tampa Bay. Get your offer today.",
    neighborhoods: "Island Estates, Countryside, Belleair, Coachman, North Clearwater",
  },
  {
    route: "we-buy-houses-largo-fl",
    label: "Largo",
    cityName: "Largo",
    description: CITY_HERO_SUB,
    metaDescription:
      "Need to sell your house fast in Largo? We buy homes as-is for cash with no fees or repairs. Get a fair offer and close in as little as 7 days. Call today!",
    neighborhoods: "Central Park, Twin Oaks, Bardmoor, Indian Rocks gateway",
  },
  {
    route: "we-buy-houses-dunedin-fl",
    label: "Dunedin",
    cityName: "Dunedin",
    description: CITY_HERO_SUB,
    metaDescription:
      "Sell your Dunedin house fast for cash—close in as few as 7 days with no fees, no repairs. We buy houses as-is across Tampa Bay. Get your offer today.",
    neighborhoods: "Downtown Dunedin, Honeymoon Island area, Caladesi, Curlew Hills",
  },
  {
    route: "we-buy-houses-pinellas-park-fl",
    label: "Pinellas Park",
    cityName: "Pinellas Park",
    description: CITY_HERO_SUB,
    metaDescription:
      "Sell your house fast for cash in Pinellas Park. No fees, no repairs, close in 7 days. Get a fair cash offer from We Buy St Pete Houses today.",
    neighborhoods: "Bardmoor, Park Royal, Pinellas Park core, near 49th Street",
  },
];

export const CITY_NAV_LINKS = CITY_PAGES.map((page) => ({
  label: page.label,
  href: `/${page.route}`,
}));

export const AREA_CITIES = CITY_PAGES.map((page) => ({
  label: page.label,
  href: `/${page.route}`,
}));

export const CITY_BY_ROUTE = Object.fromEntries(CITY_PAGES.map((page) => [page.route, page])) as Record<
  string,
  CityPageData
>;

export function getCityPage(route: string): CityPageData | undefined {
  return CITY_BY_ROUTE[route];
}

export function buildCityIntro(cityName: string, neighborhoods: string): string {
  return `We buy houses in ${cityName} for cash — as-is, no commissions, with a closing date you choose. Our local team has been working the Tampa Bay market since 2014, and we know ${cityName} neighborhoods like ${neighborhoods}.`;
}

export function buildCityBreadcrumb(cityName: string): string {
  return `We buy houses in ${cityName}, FL for cash`;
}
