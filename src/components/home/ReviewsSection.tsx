import { Reveal } from "@/components/ui/Reveal";

const PLACEHOLDER_REVIEWS = [
  {
    quote: "[BRAND: Insert verified customer testimonial here. Do not fabricate.]",
    initials: "JS",
    name: "St Petersburg seller",
    note: "Verified review — placeholder",
  },
  {
    quote: "[BRAND: Insert second verified testimonial here — e.g. inherited home, foreclosure, or relocation.]",
    initials: "MC",
    name: "Tampa Bay seller",
    note: "Verified review — placeholder",
    avatarStyle: { background: "linear-gradient(135deg,var(--teal),var(--teal-deep))" } as const,
  },
];

export function ReviewsSection() {
  return (
    <section className="section" id="reviews">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Real reviews</span>
          <h2 className="h-2">
            What our <em>customers</em> say.
          </h2>
          <p className="lede">
            Speed of closing and fair offers — that&apos;s what our customers highlight. We close on
            your timeline with clear communication every step of the way. Transparent terms,
            no hidden fees, and the ability to sell as-is.
          </p>
        </Reveal>

        <div className="test-grid">
          {PLACEHOLDER_REVIEWS.map((r, i) => (
            <Reveal key={r.initials} as="article" d={i > 0 ? 1 : undefined} className="tcard">
              <div className="stars">★★★★★</div>
              <p className="quote">{r.quote}</p>
              <div className="who">
                <span className="av" style={"avatarStyle" in r ? r.avatarStyle : undefined}>
                  {r.initials}
                </span>
                <div>
                  <b>{r.name}</b>
                  <br />
                  {r.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal d={2} className="signature-card">
          <div className="sig-photo" aria-hidden="true">
            <span>JG</span>
          </div>
          <div className="sig-body">
            <p className="q">
              I started buying houses in St Pete in 2014 because the traditional sale doesn&apos;t fit every Tampa Bay family. Send me your address — I&apos;ll personally review it and call you with a fair number within 24 hours.
            </p>
            <div className="who">
              <b>John Gardepe</b>
              <span>Owner · We Buy St Pete Houses, LLC</span>
            </div>
          </div>
        </Reveal>

        <p className="mono" style={{ marginTop: 18 }}>
          [BRAND: Replace placeholder quotes with verified testimonials once available.]
        </p>
      </div>
    </section>
  );
}
