"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { BlogTocItem } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export function BlogToc({ items }: { items: BlogTocItem[] }) {
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const links = asideRef.current?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    if (!links?.length) return;

    const sections = Array.from(links)
      .map((a) => {
        const id = a.getAttribute("href");
        if (!id) return null;
        try {
          return document.querySelector(id);
        } catch {
          return null;
        }
      })
      .filter(Boolean) as Element[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = `#${e.target.id}`;
            links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <aside className="toc" aria-label="Table of contents" ref={asideRef}>
      <h4>On this page</h4>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
      <div className="toc-cta">
        <Link href={SITE.cashOfferHref} className="btn btn--cta" style={{ justifyContent: "center" }}>
          Get my cash offer
        </Link>
        <a
          href={SITE.phoneHref}
          className="btn btn--ghost"
          style={{ justifyContent: "center", fontFamily: "var(--mono)", fontSize: 13 }}
        >
          {SITE.phone}
        </a>
      </div>
    </aside>
  );
}
