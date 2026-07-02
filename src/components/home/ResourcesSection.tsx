import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { BEFORE_AFTER, RESOURCES } from "@/lib/constants";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export type ResourceItem = {
  title: string;
  sub: string;
  href: string;
};

type ResourcesSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
  resources?: readonly ResourceItem[];
  showBeforeAfter?: boolean;
  alt?: boolean;
};

export function ResourcesSection({
  eyebrow = "Local resources",
  title = (
    <>
      Trusted <em> homeowner resources</em>.
    </>
  ),
  lede = "Selling to a cash buyer is simple, but it helps to know the local resources available to you for title, taxes, and property records.",
  resources = RESOURCES,
  showBeforeAfter = true,
  alt = false,
}: ResourcesSectionProps = {}) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`} id="resources">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-2">{title}</h2>
          <p className="lede">{lede}</p>
        </Reveal>

        <div className="res-grid">
          {resources.map((res, i) => (
            <Reveal
              key={res.href}
              as="a"
              d={i % 2 === 1 ? 1 : undefined}
              className="res"
              href={res.href}
              target="_blank"
              rel="nofollow noopener"
            >
              <span className="l">
                <b>{res.title}</b>
                <span>{res.sub}</span>
              </span>
              <svg className="arr-out" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </Reveal>
          ))}
        </div>

        {showBeforeAfter ? (
          <div style={{ marginTop: "clamp(48px, 6vw, 80px)" }}>
            <Reveal className="section-head" style={{ marginBottom: 16 }}>
              <span className="eyebrow">Before &amp; after</span>
              <h2 className="h-2">
                Traditional sale vs. <em>cash sale</em>.
              </h2>
              <p className="lede">Drag the divider to compare days to close, fees, and costs.</p>
            </Reveal>

            <div className="ba-grid">
              {BEFORE_AFTER.map((item, i) => (
                <Reveal key={item.title} as="article" d={i > 0 ? 1 : undefined} className="ba-card">
                  <BeforeAfterSlider
                    beforeSrc={item.beforeImage}
                    afterSrc={item.afterImage}
                    beforeAlt={item.beforeImageAlt}
                    afterAlt={item.afterImageAlt}
                    beforeTitle={`${item.beforeLabel} — ${item.title}`}
                    afterTitle={`${item.afterLabel} — ${item.title}`}
                  />
                  <div className="ba-meta">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <span
                      className="stat"
                      dangerouslySetInnerHTML={{ __html: item.statHtml }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
