import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  centered?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function SectionHead({ eyebrow, title, lede, centered, className = "", style }: Props) {
  return (
    <Reveal
      className={`section-head${centered ? " section-head--center" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      <span className="eyebrow">{eyebrow}</span>
      <div className="section-head__copy">
        <h2 className="h-2">{title}</h2>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </Reveal>
  );
}
