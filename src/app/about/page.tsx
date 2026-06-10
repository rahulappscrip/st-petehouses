import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { ABOUT_PAGE } from "@/lib/about-content";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: ABOUT_PAGE.meta.title,
  description: ABOUT_PAGE.meta.description,
  keywords: PAGE_KEYWORDS.about,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
