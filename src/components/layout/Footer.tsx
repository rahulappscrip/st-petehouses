import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FOOTER_SITUATIONS, NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

const FOOTER_COMPANY = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Sell Your House", href: "/sell-your-house" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Cash vs Agent", href: "/compare" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Cash Offer", href: SITE.cashOfferHref },
  { label: "Privacy Policy", href: "/about" },
];

function SocialIcon({ icon }: { icon: (typeof SOCIAL_LINKS)[number]["icon"] }) {
  switch (icon) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
        </svg>
      );
    case "google":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      );
  }
}

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
              <a
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                style={{ textDecoration: "none", color: "inherit" }}
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
            <div className="foot-social">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
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
            {NAV_LINKS.locations.cities.map((c) => (
              <Link key={c.href} href={c.href}>
                {c.label}
              </Link>
            ))}
          </div>

          <div className="foot-col foot-col--2col">
            <h4>We Buy Houses In Any Situation</h4>
            <ul>
              {FOOTER_SITUATIONS.map((s) => (
                <li key={`${s.href}-${s.label}`}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
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
