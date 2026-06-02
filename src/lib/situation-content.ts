import type { SituationFullContent } from "@/lib/situation-types";
import rawPages from "@/lib/situation-content-data.json";

const pages = rawPages as SituationFullContent[];

export const SITUATION_FULL_CONTENT: Record<string, SituationFullContent> = Object.fromEntries(
  pages.map((page) => [page.slug, page]),
);

export const SITUATION_SLUGS = pages.map((p) => p.slug);

export function getSituationFullContent(slug: string): SituationFullContent | undefined {
  return SITUATION_FULL_CONTENT[slug];
}

export function getSituationNavPages() {
  return pages.map((p) => ({
    slug: p.slug,
    label: p.label,
    href: `/situations/${p.slug}`,
  }));
}
