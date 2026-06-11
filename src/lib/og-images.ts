import type { Metadata } from "next";

/** Base path for page OG images (webp). Filenames match assets in public/assets/images/OG-Images/. */
export const OG_IMAGE_DIR = "/assets/images/OG-Images";

export function ogImagePath(filename: string): string {
  return `${OG_IMAGE_DIR}/${filename}`;
}

export function ogImageMeta(
  filename: string,
  alt = "We Buy St Pete Houses",
): NonNullable<NonNullable<Metadata["openGraph"]>["images"]> {
  return [{ url: ogImagePath(filename), width: 1200, height: 630, type: "image/webp", alt }];
}

/** Situation slug → OG image filename */
export const SITUATION_OG_IMAGES: Record<string, string> = {
  foreclosure: "OG-Image-Stop-foreclosure.webp",
  inherited: "OG-Image-Inherited-property.webp",
  divorce: "OG-Image-Divorce-home-sale.webp",
  tenants: "OG-Image-Tenant-Occupied-?Property.webp",
  lien: "OG-Image-Lien-on-Property.webp",
  "water-damage": "OG-Image-Flooded-House.webp",
  "fire-damage": "OG-Image-Fire-Damaged House.webp",
  "storm-damage": "OG-Image-Storm-Damaged-House.webp",
  "sell-as-is": "OG-Image-Cash-home-buyers.webp",
  "mold-damage": "OG-Image-Mold-Damaged-House.webp",
  "as-is-florida": "OG-Image-Sell-As-Is-Florida.webp",
  "cash-home-buyers": "OG-Image-Cash-home-buyers.webp",
  condemned: "OG-Image-Condemned-House.webp",
  "medical-emergency": "OG-Image-Medical-Emergency.webp",
  "hoarder-house": "OG-Image-Condemned-House.webp",
  "reverse-mortgage": "OG-Image-Reverse-Mortgage.webp",
  bankruptcy: "OG-Image-Bankruptcy.webp",
  "foundation-problems": "OG-Image-Foundation-Problem.webp",
};

/** City route → OG image filename */
export const CITY_OG_IMAGES: Record<string, string> = {
  "we-buy-houses-st-petersburg-fl": "OG-Image-We-buy-houses-in-St-Petersburg.webp",
  "we-buy-houses-clearwater-fl": "OG-Image-We-buy-houses-in-Clearwater.webp",
  "we-buy-houses-largo-fl": "OG-Image-We-buy-houses-in-Largo.webp",
  "we-buy-houses-dunedin-fl": "OG-Image-We-buy-houses-in-Dunedin.webp",
  "we-buy-houses-pinellas-park-fl": "OG-Image-We-buy-houses-in-Pinellas-Park.webp",
};

/** Static page route → OG image filename */
export const PAGE_OG_IMAGES: Record<string, string> = {
  "/": "OG-Image-Home-page.webp",
  "/how-it-works": "OG-Image - How-It-Works.webp",
  "/about": "OG-Image-About-us.webp",
  "/blog": "OG-Image-Blog.webp",
  "/contact": "OG-Image-Contact-us.webp",
  "/reviews": "OG-Image-Verified-seller-feedback.webp",
  "/faq": "OG-Image-FAQ.webp",
  "/get-a-cash-offer": "OG-Image-Cash-home-buyers.webp",
  "/sell-your-house": "OG-Image-Cash-home-buyers.webp",
  "/cash-vs-agent": "OG-Image-Cash-home-buyers.webp",
};

export function getSituationOgImage(slug: string): string | undefined {
  return SITUATION_OG_IMAGES[slug];
}

export function getCityOgImage(route: string): string | undefined {
  return CITY_OG_IMAGES[route];
}

export function getPageOgImage(path: string): string | undefined {
  return PAGE_OG_IMAGES[path];
}
