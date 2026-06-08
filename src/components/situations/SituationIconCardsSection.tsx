import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import type { SituationFullContent } from "@/lib/situation-types";

const CARD_ICONS: Record<string, ReactNode> = {
  tax: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" strokeLinecap="round" />
    </svg>
  ),
  mortgage: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  judgment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" />
      <path d="M14 2v6h6M16 13H8M16 17H8" strokeLinecap="round" />
    </svg>
  ),
  mechanic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path
        d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  hoa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
    </svg>
  ),
  multiple: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" strokeLinecap="round" />
    </svg>
  ),
  roof: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  flood: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  hurricane: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mold: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 2v2M12 20v2M2 12h2M20 12h2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M18.36 5.64l-1.42 1.42M5.64 18.36l-1.42 1.42"
        strokeLinecap="round"
      />
    </svg>
  ),
  structural: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 3h16a2 2 0 012 2v6a10 10 0 01-10 9A10 10 0 012 11V5a2 2 0 012-2z" strokeLinecap="round" />
    </svg>
  ),
  any: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  smoke: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  disposal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polyline points="3 6 5 6 21 6" />
      <path
        d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  foundation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" strokeLinecap="round" />
    </svg>
  ),
};

type Props = {
  data: NonNullable<SituationFullContent["cards"]>;
  alt?: boolean;
  imageMap?: Record<string, { image: string; imageAlt: string }>;
};

export function SituationIconCardsSection({ data, alt, imageMap }: Props) {
  return (
    <section className={`section situation-icon-cards${alt ? " section-alt" : ""}`}>
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

        <div className="situation-icon-cards__grid">
          {data.items.map((item, i) => {
            const iconKey = item.icon?.toLowerCase();
            const icon = iconKey ? CARD_ICONS[iconKey] : null;
            const photo = imageMap?.[item.title];
            const featured = iconKey === "multiple" || iconKey === "any";

            return (
              <Reveal
                key={item.title}
                as="article"
                className={`situation-icon-cards__card${photo ? " situation-icon-cards__card--photo" : ""}${featured ? " situation-icon-cards__card--featured" : ""}`}
                d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
              >
                {photo ? (
                  <div className="situation-icon-cards__media">
                    <Image
                      src={photo.image}
                      alt={photo.imageAlt}
                      width={800}
                      height={500}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="situation-icon-cards__img"
                    />
                  </div>
                ) : icon ? (
                  <span
                    className={`situation-icon-cards__icon${iconKey === "any" ? " situation-icon-cards__icon--accent" : ""}`}
                  >
                    {icon}
                  </span>
                ) : null}
                <div className={photo ? "situation-icon-cards__body" : undefined}>
                  {item.label ? <span className="situation-icon-cards__tag">{item.label}</span> : null}
                  <h3 className="h-4">{item.title}</h3>
                  <p className="body-standard">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        {data.exclusionNote ? (
          <div className="situation-exclusion-note">
            <p className="body-standard">
              <strong>What we don&apos;t purchase:</strong> {data.exclusionNote}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
