import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { ABOUT_PAGE } from "@/lib/about-content";

export const metadata: Metadata = {
  title: ABOUT_PAGE.meta.title,
  description: ABOUT_PAGE.meta.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
