import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { AreaServiceMap } from "@/components/home/AreaServiceMap";
import { Arr } from "@/components/ui/Arr";
import { AREA_CITIES, SITE } from "@/lib/constants";
import type { ReactNode } from "react";

type AreasSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
  listHeading?: string;
  mapCity?: string;
  featuredCityHref?: string;
  areasNote?: string;
  areasNoteLink?: { href: string; label: string };
  areasNoteAfter?: string;
  areasAside?: { title: string; body: string };
  showMap?: boolean;
};

export function AreasSection({
  eyebrow = "Where we buy",
  title = (
    <>
      Areas we serve around <em>St Petersburg</em> and Tampa Bay.
    </>
  ),
  lede = "We serve St. Petersburg, Pinellas County, and the greater Tampa Bay area. Hyper-local coverage means we know the neighborhoods, market trends, and what makes each community unique — from Historic Kenwood to Disston Heights and beyond.",
  listHeading = "Service area — cities",
  mapCity,
  featuredCityHref,
  areasNote,
  areasNoteLink,
  areasNoteAfter,
  areasAside,
  showMap = true,
}: AreasSectionProps = {}) {
  return (
    <section className="areas-section section" id="areas">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />

        <div className={`areas-grid${showMap ? "" : " areas-grid--list-only"}`}>
          {showMap ? <AreaServiceMap cityName={mapCity} /> : null}

          <Reveal d={1} className="areas-aside">
            <h3>{listHeading}</h3>
            <ul className="area-list">
              {AREA_CITIES.map((city) => (
                <li
                  key={city.href}
                  className={featuredCityHref && city.href === featuredCityHref ? "featured" : undefined}
                >
                  <Link href={city.href}>{city.label}</Link>
                </li>
              ))}
            </ul>
            {areasNote ? (
              <p className="areas-note">
                {areasNote}
                {areasNoteLink ? (
                  <>
                    {" "}
                    <Link href={areasNoteLink.href}>{areasNoteLink.label}</Link>
                  </>
                ) : null}
                {areasNoteAfter ?? null}
              </p>
            ) : null}
            {areasAside ? (
              <div className="situation-areas-aside-cta">
                <h3>{areasAside.title}</h3>
                <p>{areasAside.body}</p>
                <a href={SITE.phoneHref} className="situation-areas-aside-cta__phone">
                  {SITE.phone}
                </a>
                <Link href="#offer" className="btn btn--cta" style={{ marginTop: 16, width: "100%", justifyContent: "center" }}>
                  Request my cash offer
                  <Arr />
                </Link>
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
