"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Arr } from "@/components/ui/Arr";
import { NAV_LINKS, SITE, SITUATIONS_MENU_LEFT_COLUMN_COUNT } from "@/lib/constants";

function Caret() {
  return (
    <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function MenuToggleIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function MenuItem({
  href,
  label,
  className,
  onNavigate,
}: {
  href: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      className={className ? `menu-item ${className}` : "menu-item"}
      role="menuitem"
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}

function MobileNavPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <nav className="mobile-nav-panel" id="nav-drawer" aria-label="Mobile navigation">
      <Link href="/how-it-works" className="top-link" onClick={onNavigate}>
        How It Works
      </Link>
      <Link href="/reviews" className="top-link" onClick={onNavigate}>
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
            <Link key={c.href} href={c.href} onClick={onNavigate}>
              {c.label}
            </Link>
          ))}
          <Link href="/#areas" onClick={onNavigate}>
            All service areas →
          </Link>
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
            <Link key={s.href} href={s.href} onClick={onNavigate}>
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
            <Link key={c.href} href={c.href} onClick={onNavigate}>
              {c.label}
            </Link>
          ))}
        </div>
      </details>
      <div className="drawer-cta">
        <a href={SITE.phoneHref} className="btn btn--ghost">
          📞 {SITE.phone}
        </a>
        <Link href={SITE.cashOfferHref} className="btn btn--cta">
          Get Cash Offer →
        </Link>
      </div>
    </nav>
  );
}

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeMenuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clearCloseMenuTimer = useCallback(() => {
    if (closeMenuTimerRef.current) {
      clearTimeout(closeMenuTimerRef.current);
      closeMenuTimerRef.current = null;
    }
  }, []);

  const closeMenus = useCallback(() => {
    clearCloseMenuTimer();
    setOpenMenu(null);
  }, [clearCloseMenuTimer]);

  const openMenuNow = useCallback(
    (id: string) => {
      clearCloseMenuTimer();
      setOpenMenu(id);
    },
    [clearCloseMenuTimer],
  );

  const scheduleCloseMenu = useCallback(() => {
    clearCloseMenuTimer();
    closeMenuTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      closeMenuTimerRef.current = null;
    }, 80);
  }, [clearCloseMenuTimer]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((v) => !v);
  }, []);

  const handleMenuNavigate = useCallback(() => {
    closeMenus();
    setDrawerOpen(false);
  }, [closeMenus]);

  useEffect(() => {
    closeMenus();
    setDrawerOpen(false);
  }, [pathname, closeMenus]);

  useEffect(() => () => clearCloseMenuTimer(), [clearCloseMenuTimer]);

  useEffect(() => {
    document.body.classList.toggle("nav-drawer-open", drawerOpen);
    return () => document.body.classList.remove("nav-drawer-open");
  }, [drawerOpen]);

  useLayoutEffect(() => {
    if (!drawerOpen) {
      document.documentElement.style.removeProperty("--mobile-nav-top");
      return;
    }

    const updateTop = () => {
      const header = headerRef.current;
      if (!header) return;

      const rect = header.getBoundingClientRect();
      const measured = Math.round(rect.bottom);

      // On some scroll/lay-out combinations, measurements can briefly be 0.
      // If that happens, the drawer panel starts at the very top and covers the header.
      // Keep a sensible fallback (mobile header height is ~72px).
      const top = Number.isFinite(measured) && measured >= 40 ? measured : 72;
      document.documentElement.style.setProperty("--mobile-nav-top", `${top}px`);
    };

    updateTop();
    requestAnimationFrame(updateTop);
    window.addEventListener("resize", updateTop);
    window.addEventListener("scroll", updateTop, { passive: true });
    return () => {
      window.removeEventListener("resize", updateTop);
      window.removeEventListener("scroll", updateTop);
      document.documentElement.style.removeProperty("--mobile-nav-top");
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      closeMenus();
      closeDrawer();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenus, closeDrawer]);

  useEffect(() => {
    if (!openMenu) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (headerRef.current?.contains(target)) return;
      closeMenus();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [closeMenus, openMenu]);

  const toggleMenu = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    clearCloseMenuTimer();
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  const locationCities = NAV_LINKS.locations.cities;
  const locationCitiesMid = Math.ceil(locationCities.length / 2);

  const mobileNav =
    drawerOpen && typeof document !== "undefined"
      ? createPortal(
          <>
            <button
              type="button"
              className="mobile-nav-overlay"
              aria-label="Close menu"
              onClick={closeDrawer}
            />
            <MobileNavPanel onNavigate={handleMenuNavigate} />
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header${scrolled ? " is-scrolled" : ""}${drawerOpen ? " is-drawer-open" : ""}${openMenu ? " is-menu-open" : ""}`}
      >
        <div className="wrap nav">
          <BrandLogo />

          <ul
            className="nav-links"
            aria-label="Primary"
            onMouseLeave={scheduleCloseMenu}
          >
            {NAV_LINKS.primary.map((link) => (
              <li key={link.href} onMouseEnter={closeMenus}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}

            <li
              data-menu
              data-open={openMenu === "locations" ? "" : undefined}
              onMouseEnter={() => openMenuNow("locations")}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openMenu === "locations"}
                onClick={(e) => toggleMenu("locations", e)}
                onFocus={() => openMenuNow("locations")}
              >
                Locations
                <Caret />
              </button>
              <div className="menu menu-2col menu-2col--locations" role="menu" onClick={(e) => e.stopPropagation()}>
                <div className="menu-col">
                  <div className="menu-h">Cities</div>
                  {locationCities.slice(0, locationCitiesMid).map((c) => (
                    <MenuItem key={c.href} href={c.href} label={c.label} onNavigate={handleMenuNavigate} />
                  ))}
                </div>
                <div className="menu-col">
                  <div className="menu-h menu-h--spacer" aria-hidden="true">
                    Cities
                  </div>
                  {locationCities.slice(locationCitiesMid).map((c) => (
                    <MenuItem key={c.href} href={c.href} label={c.label} onNavigate={handleMenuNavigate} />
                  ))}
                  <Link href="/#areas" className="menu-item menu-all" role="menuitem" onClick={handleMenuNavigate}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                    All service areas
                  </Link>
                </div>
              </div>
            </li>

            <li
              data-menu
              data-open={openMenu === "situations" ? "" : undefined}
              onMouseEnter={() => openMenuNow("situations")}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openMenu === "situations"}
                onClick={(e) => toggleMenu("situations", e)}
                onFocus={() => openMenuNow("situations")}
              >
                Situations
                <Caret />
              </button>
              <div className="menu menu-2col" role="menu" onClick={(e) => e.stopPropagation()}>
                <div className="menu-col">
                  {NAV_LINKS.situations.slice(0, SITUATIONS_MENU_LEFT_COLUMN_COUNT).map((s) => (
                    <MenuItem key={s.href} href={s.href} label={s.label} onNavigate={handleMenuNavigate} />
                  ))}
                </div>
                <div className="menu-col">
                  {NAV_LINKS.situations.slice(SITUATIONS_MENU_LEFT_COLUMN_COUNT).map((s) => (
                    <MenuItem key={s.href} href={s.href} label={s.label} onNavigate={handleMenuNavigate} />
                  ))}
                </div>
              </div>
            </li>

            <li
              data-menu
              data-open={openMenu === "company" ? "" : undefined}
              onMouseEnter={() => openMenuNow("company")}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openMenu === "company"}
                onClick={(e) => toggleMenu("company", e)}
                onFocus={() => openMenuNow("company")}
              >
                Company
                <Caret />
              </button>
              <div className="menu menu-single" role="menu" onClick={(e) => e.stopPropagation()}>
                {NAV_LINKS.company.map((c) => (
                  <MenuItem key={c.href} href={c.href} label={c.label} onNavigate={handleMenuNavigate} />
                ))}
              </div>
            </li>
          </ul>

          <div className="nav-cta">
            <Link href={SITE.cashOfferHref} className="btn btn--cta">
              Get Cash Offer
              <Arr />
            </Link>
            <button
              className="nav-burger"
              type="button"
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={drawerOpen}
              aria-controls="nav-drawer"
              data-drawer-toggle
              data-open={drawerOpen ? "" : undefined}
              onClick={toggleDrawer}
            >
              <MenuToggleIcon open={drawerOpen} />
            </button>
          </div>
        </div>
      </header>
      {mobileNav}
    </>
  );
}
