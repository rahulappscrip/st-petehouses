import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { CONTACT_PAGE } from "@/lib/contact-content";
import { PAGE_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: CONTACT_PAGE.meta.title,
  description: CONTACT_PAGE.meta.description,
  keywords: PAGE_KEYWORDS.contact,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
