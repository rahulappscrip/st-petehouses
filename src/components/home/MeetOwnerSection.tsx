import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Arr } from "@/components/ui/Arr";
import { SiteImage } from "@/components/ui/SiteImage";
import { ASSETS, MEET_OWNER, SITE } from "@/lib/constants";
import { PERSON_IMAGES } from "@/lib/image-accessibility";

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
    </svg>
  );
}

export function MeetOwnerSection() {
  const [first, second, third] = MEET_OWNER.paragraphs;

  return (
    <section className="section meet-owner" id="meet-owner">
      <div className="wrap">
        <div className="meet-owner__top">
          <Reveal className="meet-owner__media">
            <div className="meet-owner__photo-frame">
              <SiteImage
                src={ASSETS.ownerJohn}
                alt={PERSON_IMAGES.johnPortrait.alt}
                title={PERSON_IMAGES.johnPortrait.title}
                className="meet-owner__photo"
                width={894}
                height={1302}
                sizes="(min-width: 900px) 50vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal d={1} className="meet-owner__copy">
            <span className="eyebrow">{MEET_OWNER.eyebrow}</span>
            <h2 className="h-2 meet-owner__title">{MEET_OWNER.title}</h2>
            <p className="meet-owner__subtitle">
              <em>{MEET_OWNER.subtitle}</em>
            </p>
            <hr className="meet-owner__rule" />
            <div className="meet-owner__prose">
              {typeof first === "object" && (
                <p>
                  {first.intro}{" "}
                  <Link href="/about" className="meet-owner__highlight">
                    <strong>{first.lead}</strong>
                  </Link>
                  {first.rest}
                </p>
              )}
              <p>{second}</p>
              <p>{third}</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="meet-owner__panel">
          <blockquote className="meet-owner__quote">
            <span className="meet-owner__quote-mark" aria-hidden>
              &ldquo;
            </span>
            <p>{MEET_OWNER.quote}</p>
          </blockquote>

          <div className="meet-owner__cta">
            <span className="meet-owner__cta-icon" aria-hidden>
              <HouseIcon />
            </span>
            <div className="meet-owner__cta-text">
              <h3>{MEET_OWNER.ctaTitle}</h3>
              <p>{MEET_OWNER.ctaBody}</p>
            </div>
            <Link href={SITE.cashOfferHref} className="meet-owner__cta-btn">
              {MEET_OWNER.ctaButton}
              <Arr />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
