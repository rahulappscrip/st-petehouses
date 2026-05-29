import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "accent" | "outline" | "ghost" | "ghost-on-dark";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-white border-forest hover:opacity-90 px-6 py-3 rounded-[var(--radius-pill)]",
  accent:
    "bg-accent text-white border-accent hover:opacity-90 px-6 py-3 rounded-[var(--radius-pill)] shadow-[0_6px_14px_-6px_rgba(79,168,107,0.35)]",
  outline:
    "bg-transparent text-forest border-[1.5px] border-forest hover:bg-forest hover:text-white px-[22px] py-[11px] rounded-[var(--radius-pill)]",
  ghost:
    "bg-transparent text-forest border-transparent underline underline-offset-[3px] font-semibold px-0 py-0 rounded-none hover:opacity-70",
  "ghost-on-dark":
    "bg-transparent text-white border border-white/40 hover:bg-white/10 px-[22px] py-[11px] rounded-[var(--radius-pill)]",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  type = "button",
  onClick,
  fullWidth,
  disabled,
}: Props) {
  const base = `inline-flex items-center justify-center gap-2 text-[13px] font-bold transition-all disabled:cursor-not-allowed disabled:opacity-70 ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={base} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
