import type { ReactNode } from "react";
import { ReviewQuote } from "@/components/home/ReviewQuote";
import { Reveal } from "@/components/ui/Reveal";
import type { GoogleReviewItem, TestimonialsData } from "@/lib/reviews/types";

export type ReviewItem = Pick<GoogleReviewItem, "quote" | "name" | "meta" | "initials">;

export type ReviewsSectionProps = {
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
  testimonials?: TestimonialsData;
  items?: readonly ReviewItem[];
  showGoogleLink?: boolean;
  showRatingBadge?: boolean;
  googleLinkLabel?: string;
};

export function ReviewsSection({
  id = "reviews",
  className = "",
  eyebrow = "Real Stories, Real Sellers",
  title = (
    <>
      What our <em>neighbors</em> say.
    </>
  ),
  lede,
  testimonials: testimonialsProp,
  items,
  showGoogleLink = true,
  showRatingBadge = true,
  googleLinkLabel = "Read all 12 reviews on Google →",
}: ReviewsSectionProps = {}) {
  const reviews = items ?? HOME_TESTIMONIALS.items.map((r) => ({
    quote: r.quote,
    name: r.name,
    meta: r.meta,
    initials: r.initials,
  }));
}: ReviewsSectionProps) {
  const totalReviews =
    testimonialsProp?.totalReviews ?? testimonialsProp?.items.length ?? items?.length ?? 0;
  const defaultLede = `${totalReviews} verified review${totalReviews === 1 ? "" : "s"} from St Petersburg homeowners who sold to us. No incentives, no edits. Read every one of them on Google.`;
  const reviews =
    items ??
    testimonialsProp?.items.map((r) => ({
      quote: r.quote,
      name: r.name,
      meta: r.meta,
      initials: r.initials,
    })) ??
    [];

  return (
    <section className={`section testimonials${className ? ` ${className}` : ""}`} id={id}>
      <div className="wrap">
        <Reveal className="reviews-header">
          <div className="left">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h-2">{title}</h2>
            <p className="lede">{lede ?? defaultLede}</p>
          </div>
          {showRatingBadge && testimonialsProp ? (
            <div className="rating-badge">
              <div className="score">{testimonialsProp.rating}</div>
              <div className="meta">
                <div className="stars">★★★★★</div>
                <div className="count">{testimonialsProp.count}</div>
                <div className="source">on Google</div>
              </div>
            </div>
          ) : null}
        </Reveal>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <Reveal
              key={`${review.initials}-${review.name}-${review.meta}`}
              as="article"
              className="review-card"
            >
              <div className="stars">★★★★★</div>
              <ReviewQuote quote={review.quote} />
              <div className="who">
                <div className="avatar">{review.initials}</div>
                <div className="who-info">
                  <div className="name">{review.name}</div>
                  <div className="meta-line">{review.meta}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {showGoogleLink && testimonialsProp ? (
          <Reveal d={2} className="reviews-footer">
            <a className="gbp-link" href={HOME_TESTIMONIALS.googleUrl} target="_blank" rel="noopener noreferrer">
              {googleLinkLabel}
            <a
              className="gbp-link"
              href={testimonialsProp.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read all {totalReviews} reviews on Google →
            </a>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
