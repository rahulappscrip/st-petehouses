import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ASSETS, MARKET_FACTORS, MARKET_SECTION } from "@/lib/constants";

export type MarketFactor = {
  letter: string;
  title: string;
  body: string;
};

type MarketSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
  factors?: readonly MarketFactor[];
  showLocal?: boolean;
  alt?: boolean;
};

export function MarketSection({
  eyebrow = MARKET_SECTION.eyebrow,
  title = (
    <>
      Understanding the St Petersburg <em>cash-offer market</em>.
    </>
  ),
  lede = MARKET_SECTION.lede,
  factors = MARKET_FACTORS,
  showLocal = true,
  alt = true,
}: MarketSectionProps = {}) {
  return (
    <section className={`section${alt ? " section-alt" : ""} market-section`} id="market">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-2">{title}</h2>
          {lede ? <p className="lede">{lede}</p> : null}
        </Reveal>

        <div className="market-grid">
          <Reveal className="market-chart">
            <Image
              src={ASSETS.marketChart}
              alt=""
              width={960}
              height={720}
              sizes="(min-width: 960px) 50vw, 100vw"
              className="market-chart__img"
            />
          </Reveal>

          <div className="factor-list">
            {factors.map((factor, i) => (
              <Reveal key={factor.letter} as="div" d={i > 0 ? 1 : undefined} className="factor">
                <span className="pre">{factor.letter}</span>
                <div>
                  <h3>{factor.title}</h3>
                  <p>{factor.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {showLocal ? (
          <div className="market-local">
            <Reveal className="market-local__col">
              <h3 className="market-local__title">{MARKET_SECTION.neighborhoodsTitle}</h3>
              <p className="market-local__body">{MARKET_SECTION.neighborhoodsBody}</p>
              <div className="market-chips">
                {MARKET_SECTION.neighborhoods.map((name) => (
                  <span key={name} className="market-chip">
                    {name}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="market-local__col" d={1}>
              <h3 className="market-local__title">{MARKET_SECTION.conditionsTitle}</h3>
              <p className="market-local__body">{MARKET_SECTION.conditionsBody1}</p>
              <p className="market-local__body">{MARKET_SECTION.conditionsBody2}</p>
            </Reveal>
          </div>
        ) : null}
      </div>
    </section>
  );
}
