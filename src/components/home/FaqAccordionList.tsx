"use client";

import { useState } from "react";
import Link from "next/link";

export type FaqAccordionItem = {
  q: string;
  a: string;
  list?: readonly string[];
  aAfter?: string;
  aLink?: { href: string; label: string };
};

type FaqAccordionListProps = {
  items: readonly FaqAccordionItem[];
  /** Index of the initially open item; null for all collapsed. */
  defaultOpenIndex?: number | null;
};

export function FaqAccordionList({ items, defaultOpenIndex = 0 }: FaqAccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details
          key={item.q}
          className="faq-item"
          open={openIndex === i}
          onToggle={(e) => {
            if (e.currentTarget.open) {
              setOpenIndex(i);
            } else {
              setOpenIndex((prev) => (prev === i ? null : prev));
            }
          }}
        >
          <summary className="faq-q">
            {item.q}
            <span className="plus" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <div className="faq-a">
            <p>
              {item.a}
              {item.aLink ? (
                <>
                  {" "}
                  <Link href={item.aLink.href}>{item.aLink.label}</Link>
                </>
              ) : null}
            </p>
            {item.list?.length ? (
              <ul>
                {item.list.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            ) : null}
            {item.aAfter ? <p>{item.aAfter}</p> : null}
          </div>
        </details>
      ))}
    </div>
  );
}
