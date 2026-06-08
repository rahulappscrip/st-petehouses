import { Reveal } from "@/components/ui/Reveal";
import { CASH_VS_AGENT_PAGE } from "@/lib/cash-vs-agent-content";

export function CashVsAgentHeroSection() {
  const { hero } = CASH_VS_AGENT_PAGE;

  return (
    <section className="cva-hero" aria-labelledby="cva-hero-title">
      <div className="wrap">
        <Reveal className="cva-hero__inner">
          <p className="eyebrow cva-hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="cva-hero-title" className="h-display cva-hero__title">
            {hero.titleLead}
            <em>{hero.titleEm}</em>
          </h1>
          <p className="body-intro cva-hero__body">{hero.body}</p>
          <div className="cva-hero__disclaimer">
            <svg viewBox="0 0 24 24" aria-hidden>
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {hero.disclaimer}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
