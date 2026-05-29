"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Arr } from "@/components/ui/Arr";

const DEFAULTS = {
  homeValue: 350_000,
  repairs: 12_000,
  agentCommission: 6,
  sellerClosing: 2.5,
} as const;

const SLIDERS = [
  {
    id: "homeValue",
    label: "Estimated home value",
    min: 100_000,
    max: 1_000_000,
    step: 5_000,
    format: "currency" as const,
  },
  {
    id: "repairs",
    label: "Repairs needed before listing",
    min: 0,
    max: 100_000,
    step: 1_000,
    format: "currency" as const,
  },
  {
    id: "agentCommission",
    label: "Agent commission",
    min: 0,
    max: 10,
    step: 0.1,
    format: "percent" as const,
  },
  {
    id: "sellerClosing",
    label: "Seller closing costs",
    min: 0,
    max: 5,
    step: 0.1,
    format: "percent" as const,
  },
] as const;

type SliderId = (typeof SLIDERS)[number]["id"];

type Values = Record<SliderId, number>;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

function formatValue(value: number, format: "currency" | "percent") {
  return format === "currency" ? formatCurrency(value) : formatPercent(value);
}

export function SavingsEstimatorSection() {
  const [values, setValues] = useState<Values>({
    homeValue: DEFAULTS.homeValue,
    repairs: DEFAULTS.repairs,
    agentCommission: DEFAULTS.agentCommission,
    sellerClosing: DEFAULTS.sellerClosing,
  });

  const { commission, closing, total } = useMemo(() => {
    const commissionAmt = Math.round((values.homeValue * values.agentCommission) / 100);
    const closingAmt = Math.round((values.homeValue * values.sellerClosing) / 100);
    return {
      commission: commissionAmt,
      closing: closingAmt,
      total: commissionAmt + closingAmt + values.repairs,
    };
  }, [values]);

  const update = (id: SliderId, raw: string) => {
    setValues((prev) => ({ ...prev, [id]: Number(raw) }));
  };

  return (
    <section className="section savings-estimator" id="estimate">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Estimate</span>
          <h2 className="h-2">
            Estimate your <em>cash-sale savings.</em>
          </h2>
          <p className="lede">
            Move the sliders. We&apos;ll roughly estimate what you&apos;d pay an agent vs. a cash
            sale to us.
          </p>
        </Reveal>

        <Reveal className="calc-card" d={1}>
          <div className="calc-inputs">
            {SLIDERS.map((slider) => (
              <div key={slider.id} className="calc-field">
                <div className="calc-field__head">
                  <label htmlFor={slider.id}>{slider.label}</label>
                  <span className="calc-field__value" aria-live="polite">
                    {formatValue(values[slider.id], slider.format)}
                  </span>
                </div>
                <input
                  id={slider.id}
                  className="calc-slider"
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  value={values[slider.id]}
                  onChange={(e) => update(slider.id, e.target.value)}
                  aria-valuemin={slider.min}
                  aria-valuemax={slider.max}
                  aria-valuenow={values[slider.id]}
                  aria-valuetext={formatValue(values[slider.id], slider.format)}
                />
              </div>
            ))}
            <p className="calc-disclaimer">
              For illustration only. Your actual offer depends on local St. Petersburg comps and
              condition.
            </p>
          </div>

          <div className="calc-results" aria-live="polite">
            <span className="calc-results__lab">Potential savings with a cash sale</span>
            <p className="calc-results__total">{formatCurrency(total)}</p>
            <ul className="calc-breakdown">
              <li>
                <span>Agent commission</span>
                <span>{formatCurrency(commission)}</span>
              </li>
              <li>
                <span>Closing costs (seller)</span>
                <span>{formatCurrency(closing)}</span>
              </li>
              <li>
                <span>Repairs avoided</span>
                <span>{formatCurrency(values.repairs)}</span>
              </li>
              <li className="calc-breakdown__total">
                <span>Total avoided</span>
                <span>{formatCurrency(total)}</span>
              </li>
            </ul>
            <Link href="#offer" className="btn btn--calc-cta">
              Get my real cash offer
              <Arr />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
