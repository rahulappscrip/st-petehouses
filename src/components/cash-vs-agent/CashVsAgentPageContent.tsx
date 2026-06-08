import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { CashVsAgentCompareSection } from "@/components/cash-vs-agent/CashVsAgentCompareSection";
import { CashVsAgentFitSection } from "@/components/cash-vs-agent/CashVsAgentFitSection";
import { CashVsAgentFormulaSection } from "@/components/cash-vs-agent/CashVsAgentFormulaSection";
import { CashVsAgentFramingSection } from "@/components/cash-vs-agent/CashVsAgentFramingSection";
import { CashVsAgentHeroSection } from "@/components/cash-vs-agent/CashVsAgentHeroSection";
import { CashVsAgentMathSection } from "@/components/cash-vs-agent/CashVsAgentMathSection";
import { CASH_VS_AGENT_PAGE } from "@/lib/cash-vs-agent-content";

export function CashVsAgentPageContent() {
  const { faq, cta } = CASH_VS_AGENT_PAGE;

  return (
    <div className="cash-vs-agent-page">
      <CashVsAgentHeroSection />
      <CashVsAgentFramingSection />
      <CashVsAgentCompareSection />
      <CashVsAgentMathSection />
      <CashVsAgentFitSection />
      <CashVsAgentFormulaSection />
      <FaqSection
        id="faq"
        eyebrow={faq.eyebrow}
        title={
          <>
            {faq.titleLead}
            <em>{faq.titleEm}</em>
          </>
        }
        items={faq.items}
      />
      <FinalCtaSection
        eyebrow={cta.eyebrow}
        title={
          <>
            {cta.titleLead}
            <em>{cta.titleEm}</em>
          </>
        }
        description={cta.body}
        offerHref="/contact"
      />
    </div>
  );
}
