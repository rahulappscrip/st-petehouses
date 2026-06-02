import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import {
  PROS_ADVANTAGES,
  PROS_COMPARE_ROWS,
  PROS_CONS,
  PROS_TRADEOFFS,
} from "@/lib/constants";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="var(--sun)" />
      <path
        d="M7.5 12.2l2.6 2.6 6.4-6.8"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="color-mix(in oklab, var(--ink) 12%, var(--sand))" />
      <path d="M8 12h8" stroke="var(--ink-soft)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ProsConsSection() {
  return (
    <section className="section pros-cons" id="pros-cons">
      <div className="wrap">
        <SectionHead
          eyebrow={PROS_CONS.eyebrow}
          title={
            <>
              Pros and cons of selling your home <em>for cash</em>.
            </>
          }
          lede={PROS_CONS.lede}
        />

        <div className="pros-cards">
          <Reveal className="pros-card pros-card--pro" d={1}>
            <span className="pros-card__lab pros-card__lab--pro">Advantages</span>
            <h3 className="pros-card__title">{PROS_CONS.advantagesTitle}</h3>
            <ul className="pros-card__list">
              {PROS_ADVANTAGES.map((item) => (
                <li key={item.label}>
                  <CheckIcon />
                  <span>
                    <b>{item.label}</b> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="pros-card pros-card--con" d={2}>
            <span className="pros-card__lab">Trade-offs</span>
            <h3 className="pros-card__title">{PROS_CONS.tradeoffsTitle}</h3>
            <ul className="pros-card__list">
              {PROS_TRADEOFFS.map((item) => (
                <li key={item.label}>
                  <MinusIcon />
                  <span>
                    <b>{item.label}</b> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="pros-compare" d={1}>
          <div className="pros-compare__panel pros-compare__panel--traditional">
            <div className="pros-compare__head">
              <span className="pros-compare__dot pros-compare__dot--muted" aria-hidden />
              <span className="pros-compare__type">Traditional sale</span>
            </div>
            <h3 className="pros-compare__title">The long road</h3>
            <p className="pros-compare__sub">List, wait, repair, negotiate, hope financing clears.</p>
            <dl className="pros-compare__rows">
              {PROS_COMPARE_ROWS.map((row) => (
                <div key={row.label} className="pros-compare__row">
                  <dt>{row.label}</dt>
                  <dd>{row.traditional}</dd>
                </div>
              ))}
            </dl>
          </div>

          <span className="pros-compare__vs" aria-hidden>
            vs
          </span>

          <div className="pros-compare__panel pros-compare__panel--cash">
            <span className="pros-compare__badge">Recommended</span>
            <div className="pros-compare__head">
              <span className="pros-compare__dot pros-compare__dot--accent" aria-hidden />
              <span className="pros-compare__type">Cash offer</span>
            </div>
            <h3 className="pros-compare__title">The direct path</h3>
            <p className="pros-compare__sub">
              One buyer. Real cash. No surprises between offer and closing.
            </p>
            <dl className="pros-compare__rows">
              {PROS_COMPARE_ROWS.map((row) => (
                <div key={row.label} className="pros-compare__row">
                  <dt>{row.label}</dt>
                  <dd>
                    <span>{row.cash}</span>
                    <CheckIcon />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
