"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type FormToastProps = {
  message: string;
  onDismiss: () => void;
  durationMs?: number;
};

export function FormToast({ message, onDismiss, durationMs = 5000 }: FormToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(onDismiss, durationMs);
    return () => window.clearTimeout(timer);
  }, [message, onDismiss, durationMs]);

  if (!mounted) return null;

  return createPortal(
    <div className="form-toast" role="status" aria-live="polite">
      <span className="form-toast__icon" aria-hidden>
        ✓
      </span>
      <p className="form-toast__message">{message}</p>
      <button type="button" className="form-toast__close" onClick={onDismiss} aria-label="Dismiss">
        ×
      </button>
    </div>,
    document.body,
  );
}
