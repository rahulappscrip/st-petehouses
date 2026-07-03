import type { SituationFullContent } from "@/lib/situation-types";
import rawPages from "@/lib/situation-content-data.json";
import unpublishedSlugs from "@/lib/unpublished-situation-slugs.json";
import { getSituationPath } from "@/lib/situation-slugs";

const pages = rawPages as SituationFullContent[];

export const UNPUBLISHED_SITUATION_SLUGS = new Set<string>(unpublishedSlugs);

export const SITUATION_FULL_CONTENT: Record<string, SituationFullContent> = Object.fromEntries(
  pages.map((page) => [page.slug, page]),
);

export const SITUATION_SLUGS = pages.map((p) => p.slug);

export function isPublishedSituationSlug(slug: string): boolean {
  return !UNPUBLISHED_SITUATION_SLUGS.has(slug);
}

export const PUBLISHED_SITUATION_SLUGS = SITUATION_SLUGS.filter(isPublishedSituationSlug);

export function getSituationFullContent(slug: string): SituationFullContent | undefined {
  return SITUATION_FULL_CONTENT[slug];
}

export function getSituationNavPages() {
  return pages
    .filter((p) => isPublishedSituationSlug(p.slug))
    .map((p) => ({
      slug: p.slug,
      label: p.label,
      href: getSituationPath(p.slug),
    }));
}
