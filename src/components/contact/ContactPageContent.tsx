import { ContactIntroSection } from "@/components/contact/ContactIntroSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ContactDetailsBand } from "@/components/contact/ContactDetailsBand";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { CONTACT_PAGE } from "@/lib/contact-content";

export function ContactPageContent() {
  const { nextSteps, faq } = CONTACT_PAGE;

  return (
    <div className="contact-page">
      <ContactIntroSection />
      <ContactFormSection />
      <ContactDetailsBand />
      <ProcessSection
        id="what-next"
        className="section-alt contact-next"
        eyebrow={nextSteps.eyebrow}
        title={
          <>
            {nextSteps.titleLead}
            <em>{nextSteps.titleEm}</em>
          </>
        }
        lede={nextSteps.body}
        steps={nextSteps.steps.map((step) => ({
          num: step.num,
          title: step.title,
          body: step.body,
          metaLabel: " ",
          metaValue: step.timing,
        }))}
        showStepMeta
        showCtas={false}
      />
      <FaqSection
        className="situation-faq"
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
    </div>
  );
}
