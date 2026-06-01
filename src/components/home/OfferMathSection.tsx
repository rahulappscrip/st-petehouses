import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Arr } from "@/components/ui/Arr";
import {
  CASH_ADVANCE_BENEFITS,
  OFFER_FORMULA_DETAILS,
  OFFER_FORMULA_PARTS,
  OFFER_MATH,
} from "@/lib/constants";

function FormulaOp({ children }: { children: string }) {
  return <span className="offer-formula__op" aria-hidden>{children}</span>;
}

export function OfferMathSection() {
  return (
    <section className="offer-math" id="offer-math">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{OFFER_MATH.eyebrow}</span>
          <h2 className="h-2">
            How we <em>calculate</em> our offers.
          </h2>
          <p className="lede">{OFFER_MATH.lede}</p>
        </Reveal>

        <Reveal className="offer-formula-wrap" d={1}>
          <div className="offer-formula">
            <div className="offer-formula__box offer-formula__box--result">
              <span className="offer-formula__lab">{OFFER_MATH.formulaResult.label}</span>
              <span className="offer-formula__val">{OFFER_MATH.formulaResult.value}</span>
            </div>
            <FormulaOp>=</FormulaOp>
            {OFFER_FORMULA_PARTS.map((part, i) => (
              <span key={part.label} className="offer-formula__item">
                {i > 0 ? <FormulaOp>−</FormulaOp> : null}
                <div className="offer-formula__box">
                  <span className="offer-formula__lab">{part.label}</span>
                  <span className="offer-formula__val">{part.value}</span>
                </div>
              </span>
            ))}
          </div>
        </Reveal>

        <div className="offer-factors">
          {OFFER_FORMULA_DETAILS.map((item, i) => (
            <Reveal key={item.num} className="offer-factor" d={i > 0 ? (i as 1 | 2 | 3) : undefined}>
              <span className="offer-factor__num">{item.num}</span>
              <h3 className="offer-factor__title">{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="offer-advance" d={1}>
          <div className="offer-advance__copy">
            <span className="offer-advance__badge">{OFFER_MATH.cashAdvance.badge}</span>
            <h3 className="offer-advance__title">
              We can offer a <em>cash advance</em>.
            </h3>
            <p className="offer-advance__lede">{OFFER_MATH.cashAdvance.lede}</p>
            <ul className="offer-advance__list">
              {CASH_ADVANCE_BENEFITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="offer-advance__action">
            <Link href="#offer" className="btn offer-advance__cta">
              {OFFER_MATH.cashAdvance.cta}
              <Arr />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
