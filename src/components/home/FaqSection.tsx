import type { ReactNode } from "react";
import Link from "next/link";
import { FaqAccordionList } from "@/components/home/FaqAccordionList";
import { SectionHead } from "@/components/ui/SectionHead";
import { FAQ_ITEMS } from "@/lib/constants";

type FaqItem = { q: string; a: string; aLink?: { href: string; label: string } };

type FaqSectionProps = {
  items?: readonly FaqItem[];
  title?: ReactNode;
  eyebrow?: string;
  showFullLink?: boolean;
  className?: string;
  id?: string;
};

export function FaqSection({
  items = FAQ_ITEMS,
  title = (
    <>
      Frequently asked questions about <em>selling for cash</em> in St. Pete.
    </>
  ),
  eyebrow = "FAQ",
  showFullLink = true,
  className = "",
  id = "faq",
}: FaqSectionProps) {
  return (
    <section
      className={`section ${className}`.trim()}
      id={id}
      style={{ background: "var(--paper)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}
    >
      <div className="wrap" style={{ maxWidth: 920 }}>
        <SectionHead eyebrow={eyebrow} title={title} />

        <FaqAccordionList items={items} />

        {showFullLink ? (
          <div style={{ marginTop: 22 }}>
            <Link href="/faq" className="btn btn--link">
              Visit our full FAQ page →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
