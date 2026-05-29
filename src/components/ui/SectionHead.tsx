import { type ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  className?: string;
  centered?: boolean;
};

export function SectionHead({ eyebrow, title, lede, className = "", centered }: Props) {
  return (
    <div className={`mb-10 max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}>
      <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
        {eyebrow}
      </span>
      <h2 className="text-[clamp(22px,4vw,32px)] font-extrabold leading-tight text-forest [&_em]:text-accent-serif">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-mid">{lede}</p>
      )}
    </div>
  );
}
