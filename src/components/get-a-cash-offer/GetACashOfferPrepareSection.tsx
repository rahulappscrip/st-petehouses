import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { GET_A_CASH_OFFER_PAGE } from "@/lib/get-a-cash-offer-content";
import { SITE } from "@/lib/constants";

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" />
      <polyline points="14 2 14 8 20 8" strokeLinecap="round" />
    </svg>
  );
}

function PhoneDocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HouseDocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarDocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
    </svg>
  );
}

function FileDocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" />
      <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" />
      <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" />
    </svg>
  );
}

function CheckListIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const DOC_ICONS = [DocIcon, PhoneDocIcon, HouseDocIcon, CalendarDocIcon, FileDocIcon];

export function GetACashOfferPrepareSection() {
  const { prepare } = GET_A_CASH_OFFER_PAGE;

  return (
    <section className="section gaco-prepare">
      <div className="wrap">
        <SectionHead
          eyebrow={prepare.eyebrow}
          title={
            <>
              {prepare.titleLead}
              <em>{prepare.titleEm}</em>
              {prepare.titleTail}
            </>
          }
        />

        <div className="gaco-prepare__grid">
          <div className="gaco-prepare__list">
            {prepare.items.map((item, i) => {
              const Icon = DOC_ICONS[i] ?? DocIcon;
              return (
                <Reveal key={item.title} className="gaco-prepare__item" d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}>
                  <span className="gaco-prepare__icon" aria-hidden>
                    <Icon />
                  </span>
                  <div>
                    <h3 className="h-4">
                      {item.title}
                      {"optional" in item && item.optional ? (
                        <span className="gaco-prepare__optional">{item.optional}</span>
                      ) : null}
                    </h3>
                    <p className="body-standard">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="gaco-prepare__callout">
            <h3 className="h-4">{prepare.callout.title}</h3>
            <p className="body-standard">{prepare.callout.body}</p>
            <ul className="gaco-prepare__bullets">
              {prepare.callout.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckListIcon />
                  {bullet}
                </li>
              ))}
            </ul>
            <a href={SITE.phoneHref} className="btn btn--cta gaco-prepare__cta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {prepare.callout.ctaLabel}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
