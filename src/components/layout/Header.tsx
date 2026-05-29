"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Arr } from "@/components/ui/Arr";
import { NAV_LINKS, SITE } from "@/lib/constants";

function Caret() {
  return (
    <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = useCallback(() => setOpenMenu(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenus();
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (document.querySelector(".nav-links")?.contains(target)) return;
      closeMenus();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [closeMenus]);

  const toggleMenu = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap nav">
        <BrandLogo showName={false} />

        <ul className="nav-links" aria-label="Primary">
          {NAV_LINKS.primary.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}

          <li data-menu data-open={openMenu === "locations" ? "" : undefined}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={openMenu === "locations"}
              onClick={(e) => toggleMenu("locations", e)}
            >
              Locations
              <Caret />
            </button>
            <div className="menu menu-2col" role="menu" onClick={(e) => e.stopPropagation()}>
              <div>
                <div className="menu-h">Cities</div>
                {NAV_LINKS.locations.cities.map((c) => (
                  <Link key={c.href} href={c.href} role="menuitem">
                    {c.label}
                  </Link>
                ))}
              </div>
              <div>
                <div className="menu-h">Counties</div>
                {NAV_LINKS.locations.counties.map((c) => (
                  <Link key={c.href} href={c.href} role="menuitem">
                    {c.label}
                  </Link>
                ))}
                <Link href="/#areas" className="menu-all" role="menuitem">
                  All service areas
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </li>

          <li data-menu data-open={openMenu === "situations" ? "" : undefined}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={openMenu === "situations"}
              onClick={(e) => toggleMenu("situations", e)}
            >
              Situations
              <Caret />
            </button>
            <div className="menu menu-2col" role="menu" onClick={(e) => e.stopPropagation()}>
              <div>
                {NAV_LINKS.situations.slice(0, 6).map((s) => (
                  <Link key={s.href} href={s.href} role="menuitem">
                    {s.label}
                  </Link>
                ))}
              </div>
              <div>
                {NAV_LINKS.situations.slice(6).map((s) => (
                  <Link key={s.href} href={s.href} role="menuitem">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li data-menu data-open={openMenu === "company" ? "" : undefined}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={openMenu === "company"}
              onClick={(e) => toggleMenu("company", e)}
            >
              Company
              <Caret />
            </button>
            <div className="menu" role="menu" onClick={(e) => e.stopPropagation()}>
              {NAV_LINKS.company.map((c) => (
                <Link key={c.href} href={c.href} role="menuitem">
                  {c.label}
                </Link>
              ))}
            </div>
          </li>
        </ul>

        <div className="nav-cta">
          <a className="nav-phone" href={SITE.phoneHref}>
            <span className="ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 3.2 2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 8.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16z" />
              </svg>
            </span>
            {SITE.phone}
          </a>
          <Link href="/get-cash-offer" className="btn btn--cta">
            Get Cash Offer
            <Arr />
          </Link>
          <button
            className="nav-burger"
            type="button"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            data-drawer-toggle
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="nav-drawer" id="nav-drawer" data-open={drawerOpen ? "" : undefined}>
        <Link href="/how-it-works" className="top-link">
          How It Works
        </Link>
        <Link href="/reviews" className="top-link">
          Reviews
        </Link>
        <details>
          <summary>
            Locations{" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="sub">
            {NAV_LINKS.locations.cities.map((c) => (
              <Link key={c.href} href={c.href}>
                {c.label}
              </Link>
            ))}
            <Link href="/#areas">All service areas →</Link>
          </div>
        </details>
        <details>
          <summary>
            Situations{" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="sub">
            {NAV_LINKS.situations.map((s) => (
              <Link key={s.href} href={s.href}>
                {s.label}
              </Link>
            ))}
          </div>
        </details>
        <details>
          <summary>
            Company{" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="sub">
            {NAV_LINKS.company.map((c) => (
              <Link key={c.href} href={c.href}>
                {c.label}
              </Link>
            ))}
          </div>
        </details>
        <div className="drawer-cta">
          <a href={SITE.phoneHref} className="btn btn--ghost">
            📞 {SITE.phone}
          </a>
          <Link href="/get-cash-offer" className="btn btn--cta">
            Get Cash Offer →
          </Link>
        </div>
      </div>
    </header>
  );
}
