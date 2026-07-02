import {
  getSituationFullContent,
  getSituationNavPages,
  isPublishedSituationSlug,
  PUBLISHED_SITUATION_SLUGS,
} from "@/lib/situation-content";
import type { SituationFullContent } from "@/lib/situation-types";

export type SituationPageData = {
  slug: string;
  label: string;
  breadcrumb: string;
  title: string;
  description: string;
  intro: string;
};

export const SITUATION_PAGES: SituationPageData[] = PUBLISHED_SITUATION_SLUGS.map((slug) => {
  const content = getSituationFullContent(slug)!;
  const titleText = [content.hero.titleLead, content.hero.titleEm, content.hero.titleTail]
    .filter(Boolean)
    .join("");
  return {
    slug: content.slug,
    label: content.label,
    breadcrumb: content.breadcrumb,
    title: titleText,
    description: content.metaDescription,
    intro: content.hero.subheadline,
  };
});

export const SITUATION_BY_SLUG = Object.fromEntries(
  SITUATION_PAGES.map((page) => [page.slug, page]),
) as Record<string, SituationPageData>;

export function getSituationPage(slug: string): SituationPageData | undefined {
  return SITUATION_BY_SLUG[slug];
}

export function getSituationContent(slug: string): SituationFullContent | undefined {
  if (!isPublishedSituationSlug(slug)) return undefined;
  return getSituationFullContent(slug);
}

export { getSituationNavPages, isPublishedSituationSlug };
