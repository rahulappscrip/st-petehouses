import { FAQ_ITEMS, SITE } from "./constants";

/** Site-wide RealEstateAgent structured data (schema.org) */
export const REAL_ESTATE_AGENT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE.url}#organization`,
  name: SITE.name,
  image:
    "https://webuystpetehouses.com/wp-content/uploads/2021/03/webuypethouses-01-1-2048x1822.webp",
  url: SITE.url,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "PO Box 143 St Petersburg",
    addressLocality: "St Petersburg",
    addressRegion: "FL",
    postalCode: "33731",
    addressCountry: "US",
  },
} as const;

/** Homepage FAQ — matches on-page accordion text verbatim */
export const HOMEPAGE_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
} as const;
