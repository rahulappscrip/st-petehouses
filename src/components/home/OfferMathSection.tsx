import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Arr } from "@/components/ui/Arr";
import {
  CASH_ADVANCE_BENEFITS,
  OFFER_FORMULA_DETAILS,
  OFFER_FORMULA_PARTS,
} from "@/lib/constants";

function FormulaOp({ children }: { children: string }) {
  return <span className="offer-formula__op" aria-hidden>{children}</span>;
}

export function OfferMathSection() {
  return (
    <section className="section offer-math" id="offer-math">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Our offer math</span>
          <h2 className="h-2">
            How we <em>calculate</em> our offers.
          </h2>
          <p className="lede">
            We need to make a profit on the sale, but we promise not to take advantage of you or
            give you a lowball offer. Every cash offer follows a transparent formula, and we are
            happy to walk you through the math.
          </p>
        </Reveal>

        <Reveal className="offer-formula" d={1}>
          <div className="offer-formula__result">
            <span className="offer-formula__lab">Cash offer amount</span>
            <span className="offer-formula__val">Your Offer</span>
          </div>
          <FormulaOp>=</FormulaOp>
          {OFFER_FORMULA_PARTS.map((part, i) => (
            <span key={part.label} className="offer-formula__group">
              {i > 0 ? <FormulaOp>−</FormulaOp> : null}
              <div className="offer-formula__part">
                <span className="offer-formula__lab">{part.label}</span>
                <span className="offer-formula__val">{part.value}</span>
              </div>
            </span>
          ))}
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
            <span className="offer-advance__badge">Additional benefit</span>
            <h3 className="offer-advance__title">
              We can offer a <em>cash advance</em>.
            </h3>
            <p className="offer-advance__lede">
              In some situations we can advance a portion of your offer before closing — so you
              have cash in hand for moving, bills, or your next place while we handle the sale.
            </p>
            <ul className="offer-advance__list">
              {CASH_ADVANCE_BENEFITS.map((item) => (
                <li key={item}>
                  <span className="offer-advance__dot" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer-advance__action">
            <Link href="#offer" className="btn offer-advance__cta">
              Get a cash offer
              <Arr />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
