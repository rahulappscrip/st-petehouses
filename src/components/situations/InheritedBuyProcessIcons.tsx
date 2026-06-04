import type { ReactNode } from "react";

function SvgIcon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      {children}
    </svg>
  );
}

export const INHERITED_BUY_FEATURE_ICONS: Record<string, ReactNode> = {
  probate: (
    <SvgIcon>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 15l2 2 4-4" />
    </SvgIcon>
  ),
  asis: (
    <SvgIcon>
      <path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    </SvgIcon>
  ),
  fees: (
    <SvgIcon>
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </SvgIcon>
  ),
  calendar: (
    <SvgIcon>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </SvgIcon>
  ),
};

export const INHERITED_BUY_STEP_ICONS: Record<string, ReactNode> = {
  phone: (
    <SvgIcon>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </SvgIcon>
  ),
  house: (
    <SvgIcon>
      <path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    </SvgIcon>
  ),
  handshake: (
    <SvgIcon>
      <path d="M4 12l3 3 5-6 4 5 6-7" />
      <path d="M14 8l2-2M10 8L8 6" />
    </SvgIcon>
  ),
  cash: (
    <SvgIcon>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 10h.01M18 10h.01" />
    </SvgIcon>
  ),
};
