import { Reveal } from "@/components/ui/Reveal";
import { MARKET_FACTORS } from "@/lib/constants";

export function MarketSection() {
  return (
    <section className="section" id="market">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Local market</span>
          <h2 className="h-2">
            Understanding the <em>St Petersburg</em> cash home market.
          </h2>
          <p className="lede">
            St Petersburg&apos;s real estate market has transformed into a vibrant, sought-after
            destination. Understanding local price trends and demand indicators helps us
            present strong, data-driven cash offers.
          </p>
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
      </div>
    </section>
  );
}
