"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FaqAccordionList } from "@/components/home/FaqAccordionList";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { StageCardsSection } from "@/components/situations/StageCardsSection";
import { Arr } from "@/components/ui/Arr";
import { SITE } from "@/lib/constants";
import {
  FAQ_PAGE_CATEGORIES,
  FAQ_PAGE_INLINE_CTAS,
  FAQ_PAGE_STILL_HAVE_QUESTIONS,
  type FaqPageCategory,
} from "@/lib/faq-page-content";

type FilteredFaqCategory = {
  id: string;
  label: string;
  title: string;
  dotColor: string;
  items: FaqPageCategory["items"];
};

function filterCategories(query: string): FilteredFaqCategory[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return FAQ_PAGE_CATEGORIES.map((category) => ({
      id: category.id,
      label: category.label,
      title: category.title,
      dotColor: category.dotColor,
      items: category.items,
    }));
  }

  return FAQ_PAGE_CATEGORIES.flatMap((category) => {
    const items = category.items.filter((item) => {
      const haystack = [item.q, item.a, item.aAfter ?? "", ...(item.list ?? [])].join(" ").toLowerCase();
      return haystack.includes(normalized);
    });

    return items.length
      ? [{ id: category.id, label: category.label, title: category.title, dotColor: category.dotColor, items }]
      : [];
  });
}

function FaqInlineCta({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: (typeof FAQ_PAGE_INLINE_CTAS)[number]) {
  return (
    <div className="faq-page-inline-cta">
      <div>
        <p className="faq-page-inline-cta__title">{title}</p>
        <span className="faq-page-inline-cta__subtitle">{subtitle}</span>
      </div>
      <div className="faq-page-inline-cta__actions">
        <Link href={primaryHref} className="btn btn--cta">
          {primaryLabel}
          <Arr />
        </Link>
        <Link href={secondaryHref} className="btn btn--ghost">
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}

export function FaqPageContent() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(FAQ_PAGE_CATEGORIES[0]?.id ?? "process");

  const visibleCategories = useMemo(() => filterCategories(query), [query]);

  const scrollToCategory = useCallback((id: string) => {
    const target = document.querySelector<HTMLElement>(`section.faq-page-group#${CSS.escape(id)}`);
    if (!target) return;

    const offset = window.innerWidth < 900 ? 96 : 120;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const sectionIds = FAQ_PAGE_CATEGORIES.map((category) => category.id);
    const sections = sectionIds
      .map((id) => document.querySelector<HTMLElement>(`section.faq-page-group#${CSS.escape(id)}`))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [visibleCategories.length]);

  return (
    <>
      <div className="faq-page-search">
        <div className="wrap">
          <label className="faq-page-search__field">
            <span className="sr-only">Search FAQ questions</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={'Search questions — e.g. "how fast", "liens", "fees"...'}
              autoComplete="off"
            />
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
          </label>
        </div>
      </div>

      <div className="faq-page-layout wrap">
        <aside className="faq-page-sidebar" aria-label="FAQ categories">
          <nav className="faq-page-cat-nav">
            <h2 className="faq-page-cat-nav__title">Categories</h2>
            <ul>
              {FAQ_PAGE_CATEGORIES.map((category) => {
                const count = query
                  ? visibleCategories.find((entry) => entry.id === category.id)?.items.length ?? 0
                  : category.items.length;

                if (query && count === 0) return null;

                return (
                  <li key={category.id}>
                    <button
                      type="button"
                      className={activeId === category.id ? "active" : undefined}
                      onClick={() => scrollToCategory(category.id)}
                    >
                      {category.label}
                      <span className="faq-page-cat-nav__count">{count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <div className="faq-page-main">
          {visibleCategories.length === 0 ? (
            <div className="faq-page-empty">
              <h2 className="h-3">No matching questions</h2>
              <p className="body-standard">
                Try a different search term, or{" "}
                <button type="button" className="faq-page-empty__reset" onClick={() => setQuery("")}>
                  view all FAQs
                </button>
                .
              </p>
            </div>
          ) : (
            visibleCategories.map((category, index) => (
              <div key={category.id}>
                <section
                  id={category.id}
                  className="faq-page-group"
                  aria-labelledby={`${category.id}-heading`}
                >
                  <header className="faq-page-group__header">
                    <span
                      className="faq-page-group__dot"
                      style={{ background: category.dotColor }}
                      aria-hidden="true"
                    />
                    <h2 id={`${category.id}-heading`} className="h-3">
                      {category.title}
                    </h2>
                  </header>
                  <FaqAccordionList
                    items={category.items}
                    defaultOpenIndex={query ? null : index === 0 ? 0 : null}
                  />
                </section>

                {FAQ_PAGE_INLINE_CTAS.filter((cta) => cta.afterCategoryId === category.id).map(
                  (cta) => (
                    <FaqInlineCta key={cta.title} {...cta} />
                  ),
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <StageCardsSection
        data={{
          ...FAQ_PAGE_STILL_HAVE_QUESTIONS,
          items: [...FAQ_PAGE_STILL_HAVE_QUESTIONS.items],
        }}
        alt
      />

      <FinalCtaSection
        eyebrow="We Buy St Pete Houses"
        title={
          <>
            Ready to see what your St Pete home is <em>worth in cash?</em>
          </>
        }
        description="No repairs. No fees. No obligation. Written offer within 24 hours, close in as little as 7 days. BBB A+ Accredited · 5.0 ★ Google Reviews · 500+ homes purchased since 2014."
        offerHref={SITE.cashOfferHref}
      />
    </>
  );
}
