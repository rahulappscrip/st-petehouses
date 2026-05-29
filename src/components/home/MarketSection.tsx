import { Reveal } from "@/components/ui/Reveal";
import { MARKET_FACTORS, MARKET_SECTION } from "@/lib/constants";

export function MarketSection() {
  return (
    <section className="section section-alt market-section" id="market">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{MARKET_SECTION.eyebrow}</span>
          <h2 className="h-2">
            Understanding the St Petersburg <em>cash-offer market</em>.
          </h2>
          <p className="lede">{MARKET_SECTION.lede}</p>
        </Reveal>

        <div className="market-grid">
          <Reveal className="ph" data-tone="sun" data-label="[IMAGE: market_stats_chart]" style={{ minHeight: 380 }} aria-hidden>{null}</Reveal>

          <div className="factor-list">
            {MARKET_FACTORS.map((factor, i) => (
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
      </div>
    </section>
  );
}
