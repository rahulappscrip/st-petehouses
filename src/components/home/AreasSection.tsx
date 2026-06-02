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
  /** Plain city names (situation pages); falls back to linked AREA_CITIES when omitted. */
  areaNames?: string[];
  areasNote?: string;
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
  areaNames,
  areasNote,
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
              {areaNames
                ? areaNames.map((name) => <li key={name}>{name}</li>)
                : AREA_CITIES.map((city) => (
                    <li
                      key={city.href}
                      className={
                        featuredCityHref
                          ? city.href === featuredCityHref
                            ? "featured"
                            : undefined
                          : "featured" in city && city.featured
                            ? "featured"
                            : undefined
                      }
                    >
                      <Link href={city.href}>{city.label}</Link>
                    </li>
                  ))}
            </ul>
            {areasNote ? <p className="areas-note">{areasNote}</p> : null}
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
            {areaNames ? null : (
              <Link href="/#areas" className="btn btn--link" style={{ marginTop: 18 }}>
                All service areas →
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
