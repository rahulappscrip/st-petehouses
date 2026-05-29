"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeLabel: string;
  afterLabel: string;
  beforeTone?: "ink" | "sun" | "teal";
  afterTone?: "ink" | "sun" | "teal";
};

export function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  beforeTone = "ink",
  afterTone = "sun",
}: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const apply = useCallback((p: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const after = frame.querySelector(".ba-after") as HTMLElement | null;
    const handle = frame.querySelector(".ba-handle") as HTMLElement | null;
    if (after) after.style.clipPath = `inset(0 0 0 ${p}%)`;
    if (handle) handle.style.left = `${p}%`;
  }, []);

  const onMove = useCallback(
    (clientX: number) => {
      const frame = frameRef.current;
      if (!frame) return;
      const r = frame.getBoundingClientRect();
      const next = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
      setPos(next);
      apply(next);
    },
    [apply],
  );

  useEffect(() => {
    apply(pos);
  }, [apply, pos]);

  useEffect(() => {
    const start = (clientX: number) => {
      dragging.current = true;
      frameRef.current?.classList.add("is-dragging");
      onMove(clientX);
    };
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      onMove(clientX);
      if ("cancelable" in e && e.cancelable) e.preventDefault();
    };
    const end = () => {
      dragging.current = false;
      frameRef.current?.classList.remove("is-dragging");
    };

    const frame = frameRef.current;
    const handle = frame?.querySelector(".ba-handle");
    if (!frame || !handle) return;

    const onMouseDown = (e: Event) => start((e as MouseEvent).clientX);
    const onHandleDown = (e: Event) => {
      e.stopPropagation();
      start((e as MouseEvent).clientX);
    };
    const onTouchStart = (e: Event) => start((e as TouchEvent).touches[0].clientX);

    handle.addEventListener("mousedown", onHandleDown);
    frame.addEventListener("mousedown", onMouseDown);
    handle.addEventListener("touchstart", onTouchStart, { passive: true });
    frame.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", end);

    return () => {
      handle.removeEventListener("mousedown", onHandleDown);
      frame.removeEventListener("mousedown", onMouseDown);
      handle.removeEventListener("touchstart", onTouchStart);
      frame.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
  }, [onMove]);

  return (
    <div className="ba-frame" ref={frameRef}>
      <div className="ba-side ba-before">
        <div
          className="ph"
          data-tone={beforeTone}
          data-label={beforeLabel}
          style={{ border: "none", borderRadius: 0, height: "100%" }}
          aria-hidden
        />
      </div>
      <div className="ba-side ba-after">
        <div
          className="ph"
          data-tone={afterTone}
          data-label={afterLabel}
          style={{ border: "none", borderRadius: 0, height: "100%" }}
          aria-hidden
        />
      </div>
      <button className="ba-handle" type="button" aria-label="Drag to reveal">
        <span className="ba-handle-line" aria-hidden="true" />
        <span className="ba-handle-pill" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </button>
      <span className="ba-tag ba-tag--before">Before</span>
      <span className="ba-tag ba-tag--after">After</span>
    </div>
  );
}
