import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { CONTACT_PAGE } from "@/lib/contact-content";
import { SITE } from "@/lib/constants";
import { getPageOgImage, ogImageMeta } from "@/lib/og-images";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: CONTACT_PAGE.meta.title,
  description: CONTACT_PAGE.meta.description,
  keywords: PAGE_KEYWORDS.contact,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: CONTACT_PAGE.meta.title,
    description: CONTACT_PAGE.meta.description,
    url: `${SITE.url}contact/`,
    locale: "en_US",
    images: (() => {
      const file = getPageOgImage("/contact");
      return file ? ogImageMeta(file, CONTACT_PAGE.meta.title) : undefined;
    })(),
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
