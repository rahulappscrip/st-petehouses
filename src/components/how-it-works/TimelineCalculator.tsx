"use client";

import { useMemo, useState } from "react";

const URGENCY = [
  { value: 7, label: "ASAP — in 7 days" },
  { value: 14, label: "Within 14 days" },
  { value: 30, label: "Within 30 days" },
  { value: 60, label: "Flexible — 30+ days" },
] as const;

const TITLE = [
  { value: 0, label: "Clean title" },
  { value: 3, label: "Probate / inherited" },
  { value: 5, label: "Liens or unclear ownership" },
] as const;

const OCCUPANCY = [
  { value: 0, label: "Vacant" },
  { value: 0, label: "Owner-occupied" },
  { value: 2, label: "Tenant-occupied" },
] as const;

export function TimelineCalculator() {
  const [urgency, setUrgency] = useState(14);
  const [title, setTitle] = useState(0);
  const [occupancy, setOccupancy] = useState(0);

  const estimate = useMemo(() => Math.max(7, urgency + title + occupancy), [urgency, title, occupancy]);

  return (
    <div className="timeline-widget" id="timeline">
      <h3>Estimate your closing timeline.</h3>
      <p className="sub">
        A rough estimate based on your situation. Your actual timeline depends on title work and your
        schedule.
      </p>
      <div className="controls">
        <label>
          How soon to sell
          <select value={urgency} onChange={(e) => setUrgency(Number(e.target.value))}>
            {URGENCY.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Title status
          <select value={title} onChange={(e) => setTitle(Number(e.target.value))}>
            {TITLE.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Occupancy
          <select value={occupancy} onChange={(e) => setOccupancy(Number(e.target.value))}>
            {OCCUPANCY.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="result">
        <div className="big">
          Estimated close: <em>{estimate} days</em>
        </div>
        <div className="note">
          We confirm the exact date once title work is in motion. You always pick the final closing
          day.
        </div>
      </div>
    </div>
  );
}
