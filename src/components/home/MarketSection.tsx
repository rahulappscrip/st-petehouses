import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
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
  badgeValue?: string;
  badgeLabel?: string;
  showChart?: boolean;
  showLocal?: boolean;
  alt?: boolean;
  chartImage?: string;
  chartImageAlt?: string;
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
  badgeValue,
  badgeLabel,
  showChart = true,
  showLocal = true,
  alt = true,
  chartImage = ASSETS.marketChart,
  chartImageAlt = "Chart illustrating the St. Petersburg cash home market",
}: MarketSectionProps = {}) {
  return (
    <section className={`section${alt ? " section-alt" : ""} market-section`} id="market">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

        <div className={showChart ? "market-grid" : "factor-list"} style={showChart ? undefined : { maxWidth: "100%" }}>
          {showChart ? (
            <Reveal className="market-chart">
              <Image
                src={chartImage}
                alt={chartImageAlt}
                width={960}
                height={720}
                sizes="(min-width: 960px) 50vw, 100vw"
                className="market-chart__img"
              />
              {badgeValue && badgeLabel ? (
                <div className="market-badge">
                  <span>{badgeValue}</span>
                  {badgeLabel}
                </div>
              ) : null}
            </Reveal>
          ) : null}

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
