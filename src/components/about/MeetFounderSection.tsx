import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Arr } from "@/components/ui/Arr";
import { SiteImg } from "@/components/ui/SiteImage";
import { ABOUT_PAGE } from "@/lib/about-content";
import { ASSETS, SITE } from "@/lib/constants";
import { PERSON_IMAGES } from "@/lib/image-accessibility";

function PhoneIcon() {
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

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MeetFounderSection() {
  const { founder } = ABOUT_PAGE;

  return (
    <section className="about-founder section" id="meet-founder">
      <div className="wrap">
        <div className="about-founder__grid">
          <Reveal className="about-founder__left">
            <div className="about-founder__avatar-wrap">
              <SiteImg
                src={ASSETS.ownerJohn}
                alt={PERSON_IMAGES.johnPortrait.alt}
                title={PERSON_IMAGES.johnPortrait.title}
                className="about-founder__photo"
                width={894}
                height={1302}
                sizes="(min-width: 900px) 45vw, 100vw"
              />
              <div className="about-founder__avatar-label">
                <strong>John Gardepe</strong>
                <span>Owner & Founder · We Buy St Pete Houses</span>
              </div>
            </div>

            <div className="about-founder__contact">
              <a href={SITE.phoneHref} className="about-founder__contact-item">
                <PhoneIcon />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="about-founder__contact-item">
                <MailIcon />
                {SITE.email}
              </a>
              <a
                href={founder.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="about-founder__contact-item"
              >
                <LinkedInIcon />
                LinkedIn Profile
              </a>
              <a
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="about-founder__contact-item"
              >
                <PinIcon />
                {SITE.address}
              </a>
            </div>
          </Reveal>

          <Reveal d={1} className="about-founder__right">
            <p className="eyebrow">{founder.eyebrow}</p>
            <h2 className="h-2 about-founder__title">
              {founder.titleLead}
              <em>{founder.titleEm}</em>
            </h2>

            <div className="about-founder__body">
              {founder.paragraphs.slice(0, 2).map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="body-standard">
                  {paragraph}
                </p>
              ))}

              <blockquote className="about-founder__pullquote">
                <p>{founder.quote}</p>
                <cite>{founder.quoteCite}</cite>
              </blockquote>

              {founder.paragraphs.slice(2).map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="body-standard">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-founder__actions">
              <Link href={SITE.cashOfferHref} className="btn btn--cta">
                {founder.primaryCta}
                <Arr />
              </Link>
              <a href={SITE.phoneHref} className="btn btn--ghost">
                {founder.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
