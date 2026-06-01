import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export type CityCompareRow = {
  label: string;
  traditional: string;
  cash: string;
};

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  traditionalLabel?: string;
  cashLabel?: string;
  rows: readonly CityCompareRow[];
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
  cashLabel = "We Buy St Pete Houses",
  rows,
  alt = false,
}: Props) {
  return (
    <section className={`section pros-cons${alt ? " section-alt" : ""}`} id="comparison">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-2">{title}</h2>
          <p className="lede">{lede}</p>
        </Reveal>

        <Reveal className="pros-compare" d={1}>
          <div className="pros-compare__panel pros-compare__panel--traditional">
            <div className="pros-compare__head">
              <span className="pros-compare__dot pros-compare__dot--muted" aria-hidden />
              <span className="pros-compare__type">Traditional sale</span>
            </div>
            <h3 className="pros-compare__title">{traditionalLabel}</h3>
            <p className="pros-compare__sub">List, wait, repair, negotiate, hope financing clears.</p>
            <dl className="pros-compare__rows">
              {rows.map((row) => (
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
            <h3 className="pros-compare__title">{cashLabel}</h3>
            <p className="pros-compare__sub">One buyer. Real cash. No surprises between offer and closing.</p>
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
