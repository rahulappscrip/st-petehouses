"use client";

import { useMemo, useState } from "react";
import { REVIEWS_FILTERS, REVIEWS_ITEMS, type ReviewCategory } from "@/lib/constants";

export function ReviewFiltersGrid() {
  const [active, setActive] = useState<ReviewCategory>("all");

  const visible = useMemo(
    () => (active === "all" ? REVIEWS_ITEMS : REVIEWS_ITEMS.filter((r) => r.category === active)),
    [active],
  );

  return (
    <>
      <div className="review-filters" role="tablist" aria-label="Filter reviews by situation">
        {REVIEWS_FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={active === filter.id}
            className={active === filter.id ? "active" : undefined}
            onClick={() => setActive(filter.id)}
          >
            {filter.label} <span className="count">{filter.count}</span>
          </button>
        ))}
      </div>

      <div className="reviews-grid">
        {visible.map((review) => (
          <article key={`${review.initials}-${review.location}`} className="review">
            <div className="head">
              <span className={`av${review.avatar ? ` ${review.avatar}` : ""}`}>{review.initials}</span>
              <div className="who">
                <b>{review.name}</b>
                <span>{review.location}</span>
              </div>
            </div>
            <div className="stars" aria-hidden>
              ★★★★★
            </div>
            <p className="quote">{review.quote}</p>
            <span className="tag">{review.tag}</span>
            <div className="src">
              <span>{review.source}</span>
              <b>{review.closedIn}</b>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
