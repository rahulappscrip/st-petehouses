import { Reveal } from "@/components/ui/Reveal";
import { CASH_VS_AGENT_PAGE } from "@/lib/cash-vs-agent-content";

export function CashVsAgentFramingSection() {
  const { framing } = CASH_VS_AGENT_PAGE;
  const cards = [framing.cash, framing.agent];

  return (
    <section className="section situation-insurance">
      <div className="wrap">
        <div className="situation-insurance__grid">
          {cards.map((card, index) => (
            <Reveal key={card.tag} className="situation-insurance-card" d={index > 0 ? 1 : undefined}>
              <span className="situation-insurance-card__tag">{card.tag}</span>
              <h3>{card.title}</h3>
              {card.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                <strong>Best For:</strong> {card.bestFor}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
