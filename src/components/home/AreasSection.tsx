import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AreaServiceMap } from "@/components/home/AreaServiceMap";
import { AREA_CITIES } from "@/lib/constants";
import type { ReactNode } from "react";

type AreasSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
  listHeading?: string;
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
}: AreasSectionProps = {}) {
  return (
    <section className="areas-section section" id="areas">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-2">{title}</h2>
          <p className="lede">{lede}</p>
        </Reveal>

        <div className="areas-grid">
          <AreaServiceMap />

          <Reveal d={1} className="areas-aside">
            <h3>{listHeading}</h3>
            <ul className="area-list">
              {AREA_CITIES.map((city) => (
                <li key={city.href} className={"featured" in city && city.featured ? "featured" : undefined}>
                  <Link href={city.href}>{city.label}</Link>
                </li>
              ))}
            </ul>
            <Link href="/#areas" className="btn btn--link" style={{ marginTop: 18 }}>
              All service areas →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
