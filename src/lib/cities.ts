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

export const CITY_PAGES: CityPageData[] = [
  {
    route: "we-buy-houses-st-petersburg-fl",
    label: "St Petersburg",
    cityName: "St Petersburg",
    description: CITY_HERO_SUB,
    metaDescription: "Sell your St Petersburg house fast for cash. Local cash buyers, as-is, no fees.",
    neighborhoods: "Old Northeast, Historic Kenwood, Disston Heights, Shore Acres, Pasadena, Gulfport area",
  },
  {
    route: "we-buy-houses-tampa-fl",
    label: "Tampa",
    cityName: "Tampa",
    description: CITY_HERO_SUB,
    metaDescription: "Sell your Tampa house fast for cash. As-is, no commissions, close in 7 days.",
    neighborhoods: "Hyde Park, Seminole Heights, Ybor City, South Tampa, Westshore, New Tampa",
  },
  {
    route: "we-buy-houses-clearwater-fl",
    label: "Clearwater",
    cityName: "Clearwater",
    description: CITY_HERO_SUB,
    metaDescription:
      "We buy houses in Clearwater, FL for cash. No repairs, no fees, no commissions. Get your no-obligation offer today and close on your schedule.",
    neighborhoods: "Island Estates, Countryside, Belleair, Coachman, North Clearwater",
  },
  {
    route: "we-buy-houses-largo-fl",
    label: "Largo",
    cityName: "Largo",
    description: CITY_HERO_SUB,
    metaDescription:
      "We buy houses in Largo, FL for cash. No fees, no repairs needed. Close in as little as 7 days. Get your no-obligation cash offer today at (727) 477-8998.",
    neighborhoods: "Central Park, Twin Oaks, Bardmoor, Indian Rocks gateway",
  },
  {
    route: "we-buy-houses-pinellas-park-fl",
    label: "Pinellas Park",
    cityName: "Pinellas Park",
    description: CITY_HERO_SUB,
    metaDescription: "Cash for Pinellas Park homes. As-is, no fees, fast close.",
    neighborhoods: "Bardmoor, Park Royal, Pinellas Park core, near 49th Street",
  },
  {
    route: "we-buy-houses-seminole-fl",
    label: "Seminole",
    cityName: "Seminole",
    description: CITY_HERO_SUB,
    metaDescription: "Cash offers for Seminole, FL homes. No repairs needed, fast closing.",
    neighborhoods: "Seminole core, Bay Pines, near Lake Seminole",
  },
  {
    route: "we-buy-houses-dunedin-fl",
    label: "Dunedin",
    cityName: "Dunedin",
    description: CITY_HERO_SUB,
    metaDescription: "Cash offers for Dunedin homes. As-is, no agent fees, close on your timeline.",
    neighborhoods: "Downtown Dunedin, Honeymoon Island area, Caladesi, Curlew Hills",
  },
  {
    route: "we-buy-houses-bradenton-fl",
    label: "Bradenton",
    cityName: "Bradenton",
    description: CITY_HERO_SUB,
    metaDescription: "Cash buyers for Bradenton homes. As-is, on your timeline.",
    neighborhoods: "West Bradenton, Cortez, Palma Sola, Anna Maria gateway",
  },
  {
    route: "we-buy-houses-brandon-fl",
    label: "Brandon",
    cityName: "Brandon",
    description: CITY_HERO_SUB,
    metaDescription: "Sell your Brandon house fast for cash. Local, transparent, no fees.",
    neighborhoods: "Brandon core, Bloomingdale, Valrico edge",
  },
  {
    route: "we-buy-houses-gulfport-fl",
    label: "Gulfport",
    cityName: "Gulfport",
    description: CITY_HERO_SUB,
    metaDescription: "Cash offers for Gulfport homes. As-is, friendly local team.",
    neighborhoods: "Historic Gulfport, Stetson, Boca Ciega Bay",
  },
  {
    route: "we-buy-houses-palm-harbor-fl",
    label: "Palm Harbor",
    cityName: "Palm Harbor",
    description: CITY_HERO_SUB,
    metaDescription: "Cash for Palm Harbor homes. As-is, fast close.",
    neighborhoods: "Crystal Beach, Ozona, Lansbrook, Highland Lakes",
  },
  {
    route: "we-buy-houses-sarasota-fl",
    label: "Sarasota",
    cityName: "Sarasota",
    description: CITY_HERO_SUB,
    metaDescription: "Sell your Sarasota home for cash. As-is, no commissions.",
    neighborhoods: "Downtown Sarasota, Siesta Key area, Bird Key, Lakewood Ranch edge",
  },
  {
    route: "we-buy-houses-hudson-fl",
    label: "Hudson",
    cityName: "Hudson",
    description: CITY_HERO_SUB,
    metaDescription: "Cash for Hudson, FL homes. Local team, fast close.",
    neighborhoods: "Hudson Beach, Sea Pines, Sea Ranch",
  },
  {
    route: "we-buy-houses-new-port-richey-fl",
    label: "New Port Richey",
    cityName: "New Port Richey",
    description: CITY_HERO_SUB,
    metaDescription: "Cash offers for New Port Richey homes. No fees, no repairs.",
    neighborhoods: "Downtown NPR, Trinity, Gulf Harbors",
  },
];

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
