import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import type { TestimonialsData } from "@/lib/reviews/types";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import {
  ASSETS,
  REVIEWS_COMPARE_ROWS,
  REVIEWS_FAQ,
  REVIEWS_PROCESS_STEPS,
  REVIEWS_TRUST_SIGNALS,
} from "@/lib/constants";
import { PERSON_IMAGES } from "@/lib/image-accessibility";

const TRUST_ICONS = [
  <g key="1"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></g>,
  <path key="2" d="M22 16v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 3.2 2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 8.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16z" />,
  <path key="3" d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
  <g key="4"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></g>,
];

type ReviewsPageContentProps = {
  testimonials: TestimonialsData;
};

export function ReviewsPageContent({ testimonials }: ReviewsPageContentProps) {
  return (
    <>
      <section className="rev-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Verified seller feedback</span>
            <h1>
              What St Petersburg homeowners say about <em>working with us</em>.
            </h1>
            <p className="lede">
              Real feedback from local sellers who&apos;ve sold their houses for cash with We Buy St
              Pete Houses. Honest reviews on speed, transparency, and what it&apos;s actually like to
              close with us.
            </p>

            {/* <div className="summary">
              <div className="big">
                {testimonials.rating}
              </div>
              <div className="meta">
                <span className="stars" aria-hidden>
                  ★★★★★
                </span>
                <b>{testimonials.count}</b>
                <span>on Google · Tampa Bay</span>
              </div>
              <div className="badges">
                <span className="badge badge--bbb">
                  <b>BBB</b>
                  <i>A+ Accredited</i>
                </span>
                <span className="badge badge--google">
                  <b>Google</b>
                  <i>{testimonials.rating} Rating</i>
                </span>
                <span className="badge">
                  <b>500+</b>
                  <i>Homes Bought</i>
                </span>
              </div>
            </div> */}

            {/* <div className="byline">
              <SiteImage
                className="av"
                src={ASSETS.johnByline}
                alt={PERSON_IMAGES.johnAvatar.alt}
                title={PERSON_IMAGES.johnAvatar.title}
                width={40}
                height={40}
              />
              <span className="author">
                <b>By Bennett Andrews</b>
                <span>Owner · We Buy St Pete Houses</span>
              </span>
              <span className="dot" aria-hidden />
              <span>Updated May 27, 2026</span>
            </div> */}
          </Reveal>
        </div>
      </section>

      <ReviewsSection testimonials={testimonials} />

      <section className="section section-alt">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">How to verify</span>
            <h2 className="h-2">
              Are cash home buyers in St Pete <em>legit</em>?
            </h2>
            <p className="lede">
              Yes — credible cash buyers exist, but verifying legitimacy matters. Here&apos;s what to
              look for in any buyer before signing anything.
            </p>
          </Reveal>

          {/* <div className="trust-grid">
            {REVIEWS_TRUST_SIGNALS.map((item, i) => (
              <Reveal key={item.title} className="trust-card" d={i > 0 ? (i as 1 | 2 | 3) : undefined}>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    {TRUST_ICONS[i]}
                  </svg>
                </span>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div> */}
 <div className="trust-grid">
  {REVIEWS_TRUST_SIGNALS.map((item, i) => (
    <Reveal key={item.title} className="trust-card" d={i > 0 ? (i as 1 | 2 | 3) : undefined}>
      <span className="ic">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          {TRUST_ICONS[i]}
        </svg>
      </span>
      <h4>{item.title}</h4>
      <p>
        {i === 0
          ? <>We&apos;re at <a href="https://maps.app.goo.gl/WLWfNKY5PqvBVPXy5" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>PO Box 143, St Petersburg, FL 33731</a> — verifiable in public Florida business records.</>
          : i === 1
          ? <>Reach a real person at <a href="tel:+17274778998" style={{ textDecoration: "none", color: "inherit" }}>(727) 477-8998</a> — no offshore call centers or third-party screeners.</>
          : item.body}
      </p>
    </Reveal>
  ))}
</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Our process</span>
            <h2 className="h-2">
              How we buy houses in <em>St Pete</em>.
            </h2>
            <p className="lede">
              A simple four-step process — no surprises, no hidden fees, no commissions. You know
              exactly what you&apos;ll receive at closing from the moment you accept our offer.
            </p>
          </Reveal>

          <div className="reviews-process-grid">
            {REVIEWS_PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.num} className="pstep" d={i > 0 ? (i as 1 | 2 | 3) : undefined}>
                <span className="n">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: 24 }}>
            <Link href="/how-it-works" className="btn btn--link">
              See the full how-it-works walkthrough →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Side by side</span>
            <h2 className="h-2">
              Cash offer vs. <em>agent listing</em>.
            </h2>
            <p className="lede">
              Comparing cash offers to traditional listings helps you decide which path aligns with
              your priorities. The right choice depends on timeline, condition, and financial needs.
            </p>
          </Reveal>

          <Reveal className="compare">
            <div className="compare-scroll">
              <table className="compare-grid" aria-label="Cash offer compared to agent listing">
                <colgroup>
                  <col className="col-factor" />
                  <col className="col-us" />
                  <col className="col-other" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" className="col-h">
                      Factor
                    </th>
                    <th scope="col" className="col-h us">
                      Cash offer (us)
                    </th>
                    <th scope="col" className="col-h">
                      Agent listing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {REVIEWS_COMPARE_ROWS.map((row) => (
                    <tr key={row.factor} className="compare-grid__row">
                      <th scope="row" className="row-h">
                        {row.factor}
                      </th>
                      <td className="us-cell">{row.us}</td>
                      <td className="other-cell">{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        items={REVIEWS_FAQ}
        title={
          <>
            Frequently asked questions about <em>cash buyer reviews</em>.
          </>
        }
        className=""
      />

      <FinalCtaSection
        eyebrow="Next step"
        title={
          <>
            Request your <em>no-obligation</em> cash offer.
          </>
        }
        description="Share basic property details — address, condition, any known issues — and we'll respond quickly with a clear, transparent offer. There's no pressure to accept; our goal is to give you a clear option to compare with any other plans you're considering."
      />
    </>
  );
}
