import { ReviewsSection } from "@/components/home/ReviewsSection";
import { getReviewsCache, getTestimonialsData } from "@/lib/reviews/get-reviews";
import {
  pickSituationReviews,
  SITUATION_REVIEW_LIMIT,
} from "@/lib/reviews/match-situation-reviews";
import type { SituationTestimonialsHeader } from "@/lib/situation-types";

type Props = {
  slug: string;
  header: SituationTestimonialsHeader;
  className?: string;
};

export async function SituationTestimonialsSectionBlock({
  slug,
  header,
  className = "",
}: Props) {
  const testimonials = await getTestimonialsData();
  const fullPool = getReviewsCache()?.items ?? testimonials.items;
  const items = pickSituationReviews(slug, fullPool, SITUATION_REVIEW_LIMIT);

  return (
    <ReviewsSection
      id="situation-reviews"
      className={className}
      eyebrow={header.eyebrow}
      title={
        <>
          {header.titleLead}
          <em>{header.titleEm}</em>
          {header.titleTail}
        </>
      }
      lede={header.lede}
      testimonials={{ ...testimonials, items }}
      googleLinkLabel="See all reviews"
    />
  );
}
