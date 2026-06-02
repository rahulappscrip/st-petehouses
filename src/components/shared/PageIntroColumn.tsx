import type { ReactNode } from "react";
import Link from "next/link";

type PageIntroColumnProps = {
  breadcrumbLabel: string;
  title: ReactNode;
  subtitle: string;
  children: ReactNode;
};

export function PageIntroColumn({ breadcrumbLabel, title, subtitle, children }: PageIntroColumnProps) {
  return (
    <article className="about-page__body">
      <nav className="crumbs about-page__crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 6l6 6-6 6" />
        </svg>
        <span>{breadcrumbLabel}</span>
      </nav>
      <h1 className="h-display about-page__title">{title}</h1>
      <p className="hero-sub about-page__subtitle">{subtitle}</p>
      {children}
    </article>
  );
}
