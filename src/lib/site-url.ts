/** Canonical site origin (no trailing slash). */
export function getSiteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  // Stable project domain (e.g. st-petehouses.vercel.app), not the per-deployment VERCEL_URL.
  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    return `https://${vercelProduction.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  }

  return "https://webuystpetehouses.com";
}

/** Canonical site URL with trailing slash (matches legacy SITE.url shape). */
export function getSiteUrl(): string {
  return `${getSiteOrigin()}/`;
}
