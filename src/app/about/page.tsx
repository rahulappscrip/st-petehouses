import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { ABOUT_PAGE } from "@/lib/about-content";
import { getPageOgImage, ogImageMeta } from "@/lib/og-images";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: ABOUT_PAGE.meta.title,
  description: ABOUT_PAGE.meta.description,
  keywords: PAGE_KEYWORDS.about,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: ABOUT_PAGE.meta.title,
    description: ABOUT_PAGE.meta.description,
    url: `${SITE.url}about/`,
    locale: "en_US",
    images: (() => {
      const file = getPageOgImage("/about");
      return file ? ogImageMeta(file, ABOUT_PAGE.meta.title) : undefined;
    })(),
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
