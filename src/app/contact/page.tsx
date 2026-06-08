import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { CONTACT_PAGE } from "@/lib/contact-content";

export const metadata: Metadata = {
  title: CONTACT_PAGE.meta.title,
  description: CONTACT_PAGE.meta.description,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
