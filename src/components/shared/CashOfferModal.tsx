"use client";

import { useEffect, useId, useRef } from "react";
import { LeadOfferForm } from "@/components/shared/LeadOfferForm";

type CashOfferModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CashOfferModal({ open, onClose }: CashOfferModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const focusTarget = panelRef.current?.querySelector<HTMLElement>(
      "input, select, textarea, button",
    );
    focusTarget?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="cash-offer-modal" role="presentation">
      <button
        type="button"
        className="cash-offer-modal__backdrop"
        aria-label="Close cash offer form"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="cash-offer-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className="cash-offer-modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <LeadOfferForm
          id="offer-modal"
          className="cash-offer-modal__form"
          showBadges={false}
          formEyebrow=""
          formIntro=""
          formTitle={
            <span id={titleId}>
              Get Your <em>Cash Offer</em> Today.
            </span>
          }
          onSuccess={onClose}
        />
      </div>
    </div>
  );
}
