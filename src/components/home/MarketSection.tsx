import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { SiteImage } from "@/components/ui/SiteImage";
import { ASSETS, MARKET_FACTORS, MARKET_SECTION } from "@/lib/constants";
import { MARKET_IMAGES } from "@/lib/image-accessibility";

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
  chartImageTitle?: string;
  sideImage?: string;
  sideImageAlt?: string;
  sideImageTitle?: string;
};

export function MarketSection({
  eyebrow = MARKET_SECTION.eyebrow,
  title = (
    <>
      Understanding the Local <em>cash-offer market</em>.
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
  chartImageAlt = MARKET_IMAGES.defaultChart.alt,
  chartImageTitle,
  sideImage,
  sideImageAlt = MARKET_IMAGES.localContext.alt,
  sideImageTitle,
}: MarketSectionProps = {}) {
  const resolvedChartTitle = chartImageTitle ?? chartImageAlt;
  const resolvedSideTitle = sideImageTitle ?? sideImageAlt;
  const useTwoColumn = showChart || Boolean(sideImage);

  return (
    <section className={`section${alt ? " section-alt" : ""} market-section`} id="market">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

        <div className={useTwoColumn ? "market-grid" : "factor-list"}>
          {showChart ? (
            <Reveal className="market-chart">
              <SiteImage
                src={chartImage}
                alt={chartImageAlt}
                title={resolvedChartTitle}
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
          ) : sideImage ? (
            <Reveal className="market-chart">
              <SiteImage
                src={sideImage}
                alt={sideImageAlt}
                title={resolvedSideTitle}
                width={960}
                height={720}
                sizes="(min-width: 960px) 50vw, 100vw"
                className="market-chart__img"
              />
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
