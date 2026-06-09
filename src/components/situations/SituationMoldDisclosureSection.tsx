import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationMoldDisclosureContent } from "@/lib/situation-types";

const CARD_ICONS: Record<string, ReactNode> = {
  any: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  lead: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" />
      <path d="M14 2v6h6M16 13H8M16 17H8" strokeLinecap="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

type Props = {
  data: SituationMoldDisclosureContent;
  alt?: boolean;
  imageMap?: Record<string, { image: string; imageAlt: string }>;
};

export function SituationMoldDisclosureSection({ data, alt, imageMap }: Props) {
  return (
    <section className={`section situation-mold-disclosure${alt ? " section-alt" : ""}`}>
      <div className="wrap">
        <SectionHead
          eyebrow={data.eyebrow}
          title={
            <>
              {data.titleLead}
              <em>{data.titleEm}</em>
              {data.titleTail}
            </>
          }
          lede={data.lede}
        />
        <div className="situation-mold-disclosure__grid">
          {data.items.map((item, i) => {
            const icon = item.icon ? CARD_ICONS[item.icon] : null;
            const photo = imageMap?.[item.title];
            const links = item.links ?? (item.link ? [item.link] : []);

            return (
              <Reveal
                key={item.title}
                className={`situation-mold-disclosure-card${photo ? " situation-mold-disclosure-card--photo" : ""}`}
                d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
              >
                {photo ? (
                  <div className="situation-mold-disclosure-card__media">
                    <Image
                      src={photo.image}
                      alt={photo.imageAlt}
                      width={800}
                      height={500}
                      sizes="(min-width: 900px) 33vw, 100vw"
                      className="situation-mold-disclosure-card__img"
                    />
                  </div>
                ) : icon ? (
                  <span className="situation-mold-disclosure-card__icon">{icon}</span>
                ) : null}
                <div className={photo ? "situation-mold-disclosure-card__body" : undefined}>
                  <h3 className="h-4">{item.title}</h3>
                  <p className="body-standard">{item.body}</p>
                  {links.length > 0 ? (
                    <div className="situation-mold-disclosure-card__links">
                      {links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="situation-mold-disclosure-card__link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
        {data.legalNote ? (
          <div className="situation-mold-disclosure__note">
            <span className="situation-mold-disclosure__note-icon" aria-hidden>
              i
            </span>
            <p className="body-standard">{data.legalNote}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
