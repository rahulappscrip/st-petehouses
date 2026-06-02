import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export type CityCompareRow = {
  label: string;
  traditional: string;
  cash: string;
};

export type CompareTradeoff = {
  num: string;
  title: string;
  body: string;
};

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  traditionalLabel?: string;
  traditionalTimeline?: string;
  cashLabel?: string;
  cashTimeline?: string;
  featuredBadge?: string;
  rows: readonly CityCompareRow[];
  tradeoffs?: readonly CompareTradeoff[];
  cashNote?: string;
  traditionalNote?: string;
  alt?: boolean;
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="var(--sun)" />
      <path d="M7.5 12.2l2.6 2.6 6.4-6.8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CityCompareSection({
  eyebrow,
  title,
  lede,
  traditionalLabel = "Traditional Agent Listing",
  traditionalTimeline,
  cashLabel = "We Buy St Pete Houses",
  cashTimeline,
  featuredBadge,
  rows,
  tradeoffs,
  cashNote,
  traditionalNote,
  alt = false,
}: Props) {
  return (
    <section className={`section pros-cons${alt ? " section-alt" : ""}`} id="comparison">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

        <Reveal className="pros-compare" d={1}>
          <div className="pros-compare__panel pros-compare__panel--traditional">
            <div className="pros-compare__head">
              <span className="pros-compare__dot pros-compare__dot--muted" aria-hidden />
              <span className="pros-compare__type">Traditional sale</span>
            </div>
            <h3 className="pros-compare__title">{traditionalLabel}</h3>
            <p className="pros-compare__sub">
              {traditionalTimeline ? `Average close: ${traditionalTimeline}` : "List, wait, repair, negotiate, hope financing clears."}
            </p>
            <dl className="pros-compare__rows">
              {rows.map((row) => (
                <div key={row.label} className="pros-compare__row">
                  <dt>{row.label}</dt>
                  <dd>{row.traditional}</dd>
                </div>
              ))}
            </dl>
            {traditionalNote ? <p className="pros-compare__note">{traditionalNote}</p> : null}
          </div>

          <span className="pros-compare__vs" aria-hidden>
            vs
          </span>

          <div className="pros-compare__panel pros-compare__panel--cash">
            <span className="pros-compare__badge">{featuredBadge ?? "Recommended"}</span>
            <div className="pros-compare__head">
              <span className="pros-compare__dot pros-compare__dot--accent" aria-hidden />
              <span className="pros-compare__type">Cash offer</span>
            </div>
            <h3 className="pros-compare__title">{cashLabel}</h3>
            <p className="pros-compare__sub">
              {cashTimeline ? `Close in ${cashTimeline} — you choose the date` : "One buyer. Real cash. No surprises between offer and closing."}
            </p>
            <dl className="pros-compare__rows">
              {rows.map((row) => (
                <div key={row.label} className="pros-compare__row">
                  <dt>{row.label}</dt>
                  <dd>
                    <span>{row.cash}</span>
                    <CheckIcon />
                  </dd>
                </div>
              ))}
            </dl>
            {cashNote ? <p className="pros-compare__note">{cashNote}</p> : null}
          </div>
        </Reveal>

        {tradeoffs && tradeoffs.length > 0 ? (
          <div className="situation-diff-grid" style={{ marginTop: 48 }}>
            {tradeoffs.map((item) => (
              <Reveal key={item.num} className="situation-diff-card">
                <span className="num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
