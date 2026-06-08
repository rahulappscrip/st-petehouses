"use client";

import { useLayoutEffect, useRef, useState } from "react";

type ReviewQuoteProps = {
  quote: string;
};

export function ReviewQuote({ quote }: ReviewQuoteProps) {
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);

  useLayoutEffect(() => {
    setExpanded(false);
    setCanExpand(false);
  }, [quote]);

  useLayoutEffect(() => {
    const el = quoteRef.current;
    if (!el || expanded) return;

    const checkOverflow = () => {
      setCanExpand(el.scrollHeight > el.clientHeight + 1);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [quote, expanded]);

  return (
    <div className="quote-wrap">
      <p
        ref={quoteRef}
        className={`quote${expanded ? "" : " quote--clamped"}`}
      >
        &ldquo;{quote}&rdquo;
      </p>
      {canExpand ? (
        <button
          type="button"
          className="quote-read-more"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
