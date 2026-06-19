import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/site-url";

const BASE_URL = getSiteOrigin();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/*.md"],
    },
    sitemap: [`${BASE_URL}/sitemap.xml`, `${BASE_URL}/blogs/sitemap.xml`],
    host: BASE_URL,
  };
}
