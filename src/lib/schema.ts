import { SITE } from "./constants";

export type FaqSchemaItem = {
  q: string;
  a: string;
  aLink?: { href: string; label: string };
};

function formatFaqAnswerText(item: FaqSchemaItem): string {
  if (!item.aLink) return item.a;

  const href = item.aLink.href.startsWith("http")
    ? item.aLink.href
    : `${SITE.url.replace(/\/$/, "")}${item.aLink.href.startsWith("/") ? item.aLink.href : `/${item.aLink.href}`}`;

  return `${item.a} ${item.aLink.label}: ${href}`;
}

export function buildFaqPageJsonLd(items: readonly FaqSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: formatFaqAnswerText(item),
      },
    })),
  };
}

/** Site-wide publisher — used in root layout metadata and JSON-LD. */
export const SITE_PUBLISHER = {
  name: SITE.name,
  url: SITE.url,
} as const;

export const SITE_PUBLISHER_JSON_LD = {
  "@type": "Organization",
  "@id": `${SITE.url}#publisher`,
  name: SITE_PUBLISHER.name,
  url: SITE_PUBLISHER.url,
} as const;

/** Site-wide RealEstateAgent structured data (schema.org) */
export const REAL_ESTATE_AGENT_JSON_LD = {
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

