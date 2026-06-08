import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { CASH_VS_AGENT_PAGE } from "@/lib/cash-vs-agent-content";

export function CashVsAgentFitSection() {
  const { fit } = CASH_VS_AGENT_PAGE;

  return (
    <section className="section" id="process">
      <div className="wrap">
        <SectionHead
          eyebrow={fit.eyebrow}
          title={
            <>
              {fit.titleLead}
              <em>{fit.titleEm}</em>
            </>
          }
          lede={fit.lede}
        />

        <div className="cva-process-fit__grid">
          <Reveal className="situation-key-steps situation-key-steps--in-process">
            <h4 className="feature-title">{fit.cash.title}</h4>
            <ul>
              {fit.cash.items.map((item) => (
                <li key={item} className="body-standard">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="situation-key-steps situation-key-steps--in-process" d={1}>
            <h4 className="feature-title">{fit.agent.title}</h4>
            <ul>
              {fit.agent.items.map((item) => (
                <li key={item} className="body-standard">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
