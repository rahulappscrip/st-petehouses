"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

type Props = {
  as?: ElementType;
  d?: 1 | 2 | 3;
  className?: string;
  children?: ReactNode;
  id?: string;
  style?: CSSProperties;
  "data-tone"?: string;
  "data-label"?: string;
  "aria-hidden"?: boolean | "true" | "false";
  role?: string;
  href?: string;
  target?: string;
  rel?: string;
};

export function Reveal({
  as: Tag = "div",
  d,
  className = "",
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const delayClass = d === 1 ? "reveal-d1" : d === 2 ? "reveal-d2" : d === 3 ? "reveal-d3" : "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("in");

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show();
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    io.observe(el);
    const fallback = setTimeout(show, 1800);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const combinedClass = `reveal ${delayClass} ${className}`.trim();

  return (
    <Tag ref={ref as never} className={combinedClass} {...rest}>
      {children}
    </Tag>
  );
}
