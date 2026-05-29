import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AREA_CITIES, AREA_COUNTIES } from "@/lib/constants";

const PIN_CLASSES = ["you l1", "l2", "l3", "l4", "l5", "l6"] as const;
const PIN_LABELS = ["St Petersburg", "Dunedin", "Tampa", "Largo", "Bradenton", "Clearwater"] as const;

export function AreasSection() {
  return (
    <section className="areas-section section" id="areas">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Where we buy</span>
          <h2 className="h-2">
            Areas we serve around <em>St Petersburg</em> and Tampa Bay.
          </h2>
          <p className="lede">
            We serve St. Petersburg, Pinellas County, and the greater Tampa Bay area. Hyper-local
            coverage means we know the neighborhoods, market trends, and what makes each community
            unique — from Historic Kenwood to Disston Heights and beyond.
          </p>
        </Reveal>

        <div className="areas-grid">
          <Reveal className="area-map" role="img" aria-label="Map highlighting Tampa Bay service area">
            {PIN_LABELS.map((label, i) => (
              <span key={label} className={`pin-label ${PIN_CLASSES[i]}`}>
                {label}
              </span>
            ))}
          </Reveal>

          <Reveal d={1} className="areas-aside">
            <h3>Service area &mdash; cities</h3>
            <ul className="area-list">
              {AREA_CITIES.map((city) => (
                <li key={city.href} className={"featured" in city && city.featured ? "featured" : undefined}>
                  <Link href={city.href}>{city.label}</Link>
                </li>
              ))}
            </ul>
            <h3 style={{ marginTop: 30 }}>Counties</h3>
            <ul className="area-list">
              {AREA_COUNTIES.map((c) => (
                <li key={c.label}>
                  <Link href={c.href}>{c.label}</Link>
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
