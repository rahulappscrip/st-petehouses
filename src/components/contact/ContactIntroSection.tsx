import { Reveal } from "@/components/ui/Reveal";
import { CONTACT_PAGE } from "@/lib/contact-content";

export function ContactIntroSection() {
  const { hero } = CONTACT_PAGE;

  return (
    <section className="contact-intro" aria-labelledby="contact-intro-title">
      <div className="wrap">
        <Reveal className="contact-intro__inner">
          <p className="eyebrow contact-intro__eyebrow">{hero.eyebrow}</p>
          <h1 id="contact-intro-title" className="h-display contact-intro__title">
            {hero.titleLead}
            <em>{hero.titleEm}</em>
          </h1>
          <p className="body-intro contact-intro__body">{hero.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
