import Link from "next/link";
import { Arr } from "@/components/ui/Arr";
import {
  buildCityBreadcrumb,
  buildCityIntro,
  CITY_BENEFITS,
  CITY_SECOND_INTRO,
  CITY_SITUATIONS_TEXT,
  type CityPageData,
} from "@/lib/cities";
import { SITE } from "@/lib/constants";

type Props = {
  page: CityPageData;
};

function CrumbChevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function CityPageContent({ page }: Props) {
  const breadcrumb = buildCityBreadcrumb(page.cityName);
  const intro = buildCityIntro(page.cityName, page.neighborhoods);

  return (
    <section className="landing-hero">
      <div className="landing-hero__bg" aria-hidden="true" />
      <div className="wrap">
        <nav className="crumbs situation-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <CrumbChevron />
          <span>{breadcrumb}</span>
        </nav>

        <h1 className="h-display situation-title">
          We buy houses in <em>{page.cityName}, FL</em> for cash.
        </h1>
        <p className="hero-sub situation-sub">{page.description}</p>

        <div className="situation-grid">
          <article className="situation-body">
            <p>{intro}</p>
            <p>{CITY_SECOND_INTRO}</p>
            <h2>What you get with a cash sale in {page.cityName}</h2>
            <ul className="situation-benefits">
              {CITY_BENEFITS.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.text}
                </li>
              ))}
            </ul>
            <h2>Common {page.cityName} seller situations</h2>
            <p>{CITY_SITUATIONS_TEXT}</p>
          </article>

          <aside className="situation-aside">
            <span className="situation-aside__eyebrow">Ready to sell?</span>
            <h2>Get a no-obligation cash offer.</h2>
            <p>Tell us about your property. Offer in 24 hours, close in as little as 7 days.</p>
            <div className="situation-aside__actions">
              <Link href="/get-cash-offer" className="btn btn--cta">
                Get my cash offer
                <Arr />
              </Link>
              <a href={SITE.phoneHref} className="btn btn--ghost">
                📞 {SITE.phone}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
