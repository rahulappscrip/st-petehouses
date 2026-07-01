import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { LeadOfferForm } from "@/components/shared/LeadOfferForm";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subheadline: string;
  formTitle?: ReactNode;
  formIntro?: string;
  formEyebrow?: string;
  cityName: string;
  authorRole?: string;
};

export function CityHeroSection({
  eyebrow,
  title,
  subheadline,
  formTitle,
  formIntro,
  formEyebrow = "Get your fair cash offer today",
  cityName,
  authorRole = "Principal Buyer · We Buy St. Pete Houses, LLC",
}: Props) {
  return (
    <section className="city-hero">
      <div className="city-hero__bg" aria-hidden="true" />
      <div className="wrap city-hero__grid">
        <Reveal className="city-hero__content">
          <p className="city-hero__eyebrow">{eyebrow}</p>
          <h1 className="h-display city-hero__title">{title}</h1>
          <p className="city-hero__sub">{subheadline}</p>
          <div className="city-hero__author">
            <span className="city-hero__avatar" aria-hidden="true">
              JG
            </span>
            <div>
              <strong>Bennett Andrews</strong>
              <span>{authorRole}</span>
            </div>
          </div>
        </Reveal>

        <Reveal d={1}>
          <LeadOfferForm
            formEyebrow={formEyebrow}
            formTitle={formTitle}
            formIntro={formIntro}
            addressPlaceholder={`123 Main St, ${cityName}, FL`}
          />
        </Reveal>
      </div>
    </section>
  );
}
