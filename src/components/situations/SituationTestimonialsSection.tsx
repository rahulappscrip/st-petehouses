import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationTestimonialsContent } from "@/lib/situation-types";

type Props = {
  data: SituationTestimonialsContent;
  title?: ReactNode;
  className?: string;
};

export function SituationTestimonialsSection({ data, title, className = "" }: Props) {
  const sectionTitle =
    title ?? (
      <>
        {data.titleLead}
        <em>{data.titleEm}</em>
        {data.titleTail}
      </>
    );

  return (
    <section className={`section situation-testimonials${className ? ` ${className}` : ""}`}>
      <div className="wrap">
        <SectionHead eyebrow={data.eyebrow} title={sectionTitle} lede={data.lede} />

        <div className="situation-testimonials__grid">
          {data.items.map((t, i) => (
            <Reveal
              key={t.reviewId ?? `${t.initials}-${t.name}`}
              as="article"
              className="situation-testimonials__card"
              d={i > 0 ? 1 : undefined}
            >
              <span className="situation-testimonials__quote-mark h-2" aria-hidden>
                &ldquo;
              </span>
              <p className="situation-testimonials__quote body-standard">{t.quote}</p>
              <div className="situation-testimonials__author">
                <div className="situation-testimonials__avatar body-standard" aria-hidden>
                  {t.initials}
                </div>
                <div className="situation-testimonials__author-info">
                  <div className="situation-testimonials__name feature-title">{t.name}</div>
                  <div className="situation-testimonials__meta body-standard">{t.meta}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
