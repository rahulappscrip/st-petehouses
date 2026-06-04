import type { ReactNode } from "react";
import { FaqAccordionList } from "@/components/home/FaqAccordionList";
import { SectionHead } from "@/components/ui/SectionHead";
import { FAQ_ITEMS } from "@/lib/constants";

type FaqItem = { q: string; a: string; aLink?: { href: string; label: string } };

type FaqSectionProps = {
  items?: readonly FaqItem[];
  title?: ReactNode;
  eyebrow?: string;
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
      </div>
    </section>
  );
}
