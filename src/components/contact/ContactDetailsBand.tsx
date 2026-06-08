import { Reveal } from "@/components/ui/Reveal";
import { CONTACT_BAND } from "@/lib/contact-content";

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

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const ICONS = [PhoneIcon, MailIcon, PinIcon];

export function ContactDetailsBand() {
  return (
    <section className="contact-band" aria-label="Contact details">
      <div className="wrap contact-band__inner">
        {CONTACT_BAND.map((item, i) => {
          const Icon = ICONS[i] ?? PhoneIcon;

          return (
            <Reveal
              key={item.label}
              d={i > 0 ? ((i % 3) as 1 | 2 | 3) : undefined}
              className="contact-band__item"
            >
              <div className="contact-band__icon" aria-hidden>
                <Icon />
              </div>
              <div className="contact-band__copy">
                <span className="contact-band__label">{item.label}</span>
                {"href" in item && item.href ? (
                  <a href={item.href} className="contact-band__value">
                    {item.value}
                  </a>
                ) : (
                  <span className="contact-band__value contact-band__value--static">{item.value}</span>
                )}
                <p className="contact-band__note">
                  {item.note}
                  {"noteLine2" in item && item.noteLine2 ? (
                    <>
                      <br />
                      {item.noteLine2}
                    </>
                  ) : null}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
