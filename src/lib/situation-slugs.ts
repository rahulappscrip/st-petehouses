/** Old short slug → new root URL segment (published pages only). */
export const SITUATION_SLUG_MIGRATION = {
  inherited: "sell-inherited-house-florida",
  divorce: "sell-house-during-divorce-florida",
  foreclosure: "stop-foreclosure-florida",
  tenants: "sell-rental-property-with-tenants-florida",
  lien: "sell-house-with-lien-florida",
  "storm-damage": "sell-storm-damaged-house-florida",
  "sell-as-is": "sell-my-house-as-is-florida",
  "fire-damage": "sell-fire-damaged-house-florida",
  "water-damage": "sell-flooded-house-florida",
  "mold-damage": "selling-a-house-with-mold-florida",
  "foundation-problems": "sell-house-with-foundation-problems-florida",
  "hoarder-house": "sell-hoarder-house-florida",
  bankruptcy: "sell-house-during-bankruptcy-florida",
  "medical-emergency": "sell-house-for-medical-emergency-florida",
  "reverse-mortgage": "sell-house-with-reverse-mortgage-florida",
  condemned: "sell-condemned-house-florida",
} as const;

export type SituationPageKey = keyof typeof SITUATION_SLUG_MIGRATION;
export type SituationSlug = (typeof SITUATION_SLUG_MIGRATION)[SituationPageKey];

export const PUBLISHED_SITUATION_SLUG_LIST = Object.values(
  SITUATION_SLUG_MIGRATION,
) as SituationSlug[];

const SITUATION_SLUG_SET = new Set<string>(PUBLISHED_SITUATION_SLUG_LIST);

export function getSituationPath(slug: string): string {
  return `/${slug}`;
}

export function isPublishedSituationSlugValue(slug: string): boolean {
  return SITUATION_SLUG_SET.has(slug);
}

export function isSituationRootPath(path: string): boolean {
  const segment = path.replace(/^\//, "").split("/")[0] ?? "";
  return isPublishedSituationSlugValue(segment);
}

export function getSituationSlugFromPath(path: string): string | null {
  if (path.startsWith("/situations/")) {
    const segment = path.replace("/situations/", "").split("/")[0];
    if (!segment) return null;
    if (isPublishedSituationSlugValue(segment)) return segment;
    if (segment in SITUATION_SLUG_MIGRATION) {
      return SITUATION_SLUG_MIGRATION[segment as SituationPageKey];
    }
    return null;
  }

  const segment = path.replace(/^\//, "").split("/")[0] ?? "";
  return isPublishedSituationSlugValue(segment) ? segment : null;
}

type NextRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

type NextRewrite = {
  source: string;
  destination: string;
};

export function buildSituationRedirects(): NextRedirect[] {
  const redirects: NextRedirect[] = [
    {
      source: "/situations/probate",
      destination: getSituationPath(SITUATION_SLUG_MIGRATION.inherited),
      permanent: true,
    },
    {
      source: "/situations/mortgage",
      destination: getSituationPath(SITUATION_SLUG_MIGRATION.lien),
      permanent: true,
    },
  ];

  for (const [oldSlug, newSlug] of Object.entries(SITUATION_SLUG_MIGRATION)) {
    redirects.push({
      source: `/situations/${oldSlug}`,
      destination: getSituationPath(newSlug),
      permanent: true,
    });
    redirects.push({
      source: `/situations/${newSlug}`,
      destination: getSituationPath(newSlug),
      permanent: true,
    });
  }

  return redirects;
}

export function buildSituationRewrites(): NextRewrite[] {
  return PUBLISHED_SITUATION_SLUG_LIST.map((slug) => ({
    source: getSituationPath(slug),
    destination: `/situations/${slug}`,
  }));
}
