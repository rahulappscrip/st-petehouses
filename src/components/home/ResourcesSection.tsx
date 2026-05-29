import { Reveal } from "@/components/ui/Reveal";
import { BEFORE_AFTER, RESOURCES } from "@/lib/constants";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function ResourcesSection() {
  return (
    <section className="section" id="resources">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Local resources</span>
          <h2 className="h-2">
            Trusted St Petersburg <em>homeowner resources</em>.
          </h2>
          <p className="lede">
            Selling to a cash buyer is straightforward, but it helps to know the local resources
            available to you for title, taxes, and property records.
          </p>
        </Reveal>

        <div className="res-grid">
          {RESOURCES.map((res, i) => (
            <Reveal key={res.href} as="a" d={i % 2 === 1 ? 1 : undefined} className="res" href={res.href} target="_blank" rel="nofollow noopener">
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
                  beforeLabel={item.beforeLabel}
                  afterLabel={item.afterLabel}
                  beforeTone="ink"
                  afterTone={i === 0 ? "sun" : "teal"}
                />
                <div className="ba-meta">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="stat">
                    {i === 0 ? (
                      <>
                        <b>9 day</b> close · <b>14 wk</b> renovation
                      </>
                    ) : (
                      <>
                        <b>7 day</b> close · <b>11 wk</b> renovation
                      </>
                    )}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mono" style={{ marginTop: 18 }}>
            [IMAGE: Replace before/after slots with real portfolio photos.]
          </p>
        </div>
      </div>
    </section>
  );
}
