import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { HOME_TESTIMONIALS } from "@/lib/constants";

export type ReviewItem = {
  quote: string;
  name: string;
  meta: string;
  initials: string;
};

type ReviewsSectionProps = {
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
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
  lede = "Twelve verified reviews from St Petersburg homeowners who sold to us. No incentives, no edits. Read every one of them on Google.",
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

  return (
    <section className={`section testimonials${className ? ` ${className}` : ""}`} id={id}>
      <div className="wrap">
        <Reveal className="reviews-header">
          <div className="left">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h-2">{title}</h2>
            <p className="lede">{lede}</p>
          </div>
          {showRatingBadge ? (
            <div className="rating-badge">
              <div className="score">{HOME_TESTIMONIALS.rating}</div>
              <div className="meta">
                <div className="stars">★★★★★</div>
                <div className="count">{HOME_TESTIMONIALS.count}</div>
                <div className="source">on Google</div>
              </div>
            </div>
          ) : null}
        </Reveal>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <Reveal key={review.initials + review.name} as="article" className="review-card">
              <div className="stars">★★★★★</div>
              <p className="quote">&ldquo;{review.quote}&rdquo;</p>
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

        {showGoogleLink ? (
          <Reveal d={2} className="reviews-footer">
            <a className="gbp-link" href={HOME_TESTIMONIALS.googleUrl} target="_blank" rel="noopener noreferrer">
              {googleLinkLabel}
            </a>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
