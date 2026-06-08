import { getTestimonialsData } from "@/lib/reviews/get-reviews";
import { ReviewsSection, type ReviewsSectionProps } from "@/components/home/ReviewsSection";

type ReviewsSectionBlockProps = Omit<ReviewsSectionProps, "testimonials">;

export async function ReviewsSectionBlock(props: ReviewsSectionBlockProps) {
  const testimonials = await getTestimonialsData();
  return <ReviewsSection {...props} testimonials={testimonials} />;
}
