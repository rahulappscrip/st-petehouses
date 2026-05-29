import { Reveal } from "@/components/ui/Reveal";
import { HOME_TESTIMONIALS } from "@/lib/constants";

type TestimonialsSectionProps = {
  id?: string;
  className?: string;
};

export function TestimonialsSection({ id, className = "" }: TestimonialsSectionProps) {
  return (
    <section className={`section testimonials${className ? ` ${className}` : ""}`} id={id}>
      <div className="wrap">
        <Reveal className="reviews-header">
          <div className="left">
            <span className="eyebrow">Real Stories, Real Sellers</span>
            <h2 className="h-2">
              What our <em>neighbors</em> say.
            </h2>
            <p className="lede">
              Twelve verified reviews from St Petersburg homeowners who sold to us. No incentives,
              no edits. Read every one of them on Google.
            </p>
          </div>
          <div className="rating-badge">
            <div className="score">{HOME_TESTIMONIALS.rating}</div>
            <div className="meta">
              <div className="stars">★★★★★</div>
              <div className="count">{HOME_TESTIMONIALS.count}</div>
              <div className="source">on Google</div>
            </div>
          </div>
        </Reveal>

        <div className="reviews-grid">
          {HOME_TESTIMONIALS.items.map((review) => (
            <Reveal
              key={review.initials + review.name}
              as="article"
              className={`review-card${"featured" in review && review.featured ? " featured" : ""}`}
            >
              <div className="stars">★★★★★</div>
              <p className="quote">&ldquo;{review.quote}&rdquo;</p>
              <div className="who">
                <div className="avatar">{review.initials}</div>
                <div className="who-info">
                  <div className="name">{review.name}</div>
                  <div className="meta-line">
                    {review.localGuide && <span className="lg-badge">Local Guide</span>}
                    {review.meta}
                  </div>
                </div>
              </div>
              {"ownerReply" in review && review.ownerReply && (
                <div className="owner-reply">
                  <div className="ot">{review.ownerReply.title}</div>
                  <div className="reply-text">{review.ownerReply.text}</div>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal d={2} className="reviews-footer">
          <a
            className="gbp-link"
            href={HOME_TESTIMONIALS.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all 12 reviews on Google →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
