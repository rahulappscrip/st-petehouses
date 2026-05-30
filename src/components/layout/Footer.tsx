import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { NAV_LINKS, SITE } from "@/lib/constants";

const FOOTER_COMPANY = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Sell Your House", href: "/sell-your-house" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Cash vs Agent", href: "/compare" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Cash Offer", href: "/get-cash-offer" },
  { label: "We Buy Houses in Tampa", href: "/we-buy-houses-tampa-fl" },
  { label: "Privacy Policy", href: "/about" },
];

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <BrandLogo />
            <p className="blurb">Local cash home buyers serving St Petersburg, Tampa Bay and the surrounding counties.</p>
            <div className="foot-contact">
              <a href={SITE.phoneHref}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 3.2 2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 8.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16z" />
                </svg>
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                {SITE.email}
              </a>
<a href="https://maps.app.goo.gl/WLWfNKY5PqvBVPXy5"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:opacity-75 transition-opacity"
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
    {SITE.address}
  </span>
</a>
            </div>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            {FOOTER_COMPANY.map((l) => (
              <Link key={l.href + l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="foot-col">
            <h4>Cities</h4>
            {NAV_LINKS.locations.cities.slice(0, 9).map((c) => (
              <Link key={c.href} href={c.href}>
                {c.label}
              </Link>
            ))}
            <h4 style={{ marginTop: 28 }}>Counties</h4>
            {NAV_LINKS.locations.counties.map((c) => (
              <Link key={c.href} href={c.href}>
                {c.label}
              </Link>
            ))}
          </div>

          <div className="foot-col foot-col--2col">
            <h4>We Buy Houses In Any Situation</h4>
            <ul>
              {NAV_LINKS.situations.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/situations/mortgage">We assume your mortgage</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} We Buy St Pete Houses, LLC. All rights reserved.</span>
          <span className="mono-row">Local. Fast. Fair.</span>
        </div>
      </div>
    </footer>
  );
}
