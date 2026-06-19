/** Canonical site origin (no trailing slash). */
export function getSiteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/\/$/, "")}`;
  }

  return "https://webuystpetehouses.com";
}

/** Canonical site URL with trailing slash (matches legacy SITE.url shape). */
export function getSiteUrl(): string {
  return `${getSiteOrigin()}/`;
}
