"use client";

import { formatUsPhoneInput } from "@/lib/lead-form-validation";

type UsPhoneInputProps = {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

export function UsPhoneInput({
  id,
  name,
  value,
  onChange,
  placeholder = "(727) 477-8998",
  disabled = false,
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedBy,
}: UsPhoneInputProps) {
  return (
    <input
      id={id}
      name={name}
      className="input"
      type="tel"
      inputMode="numeric"
      autoComplete="tel-national"
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      maxLength={14}
      aria-invalid={ariaInvalid}
      aria-describedby={ariaDescribedBy}
      onChange={(event) => onChange(formatUsPhoneInput(event.target.value))}
      onPaste={(event) => {
        event.preventDefault();
        const pasted = event.clipboardData.getData("text");
        onChange(formatUsPhoneInput(pasted));
      }}
    />
  );
}
