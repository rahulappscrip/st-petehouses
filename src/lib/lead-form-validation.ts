import { SELL_REASON_OPTIONS } from "@/lib/constants";
import { resolvePhoneCountry } from "@/lib/phone-countries";

export type LeadFormFieldErrors = {
  fullName?: string;
  address?: string;
  sellReason?: string;
  phone?: string;
  email?: string;
};

export type LeadFormValues = {
  fullName: string;
  address: string;
  sellReason: string;
  phone: string;
  phoneCountryCode: string;
  email: string;
};

const VALID_SELL_REASON_VALUES = new Set(SELL_REASON_OPTIONS.map((option) => option.value));
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const MAX_EMAIL_LENGTH = 254;
const MIN_FULL_NAME_LENGTH = 2;
const MIN_ADDRESS_LENGTH = 5;

/** Strip formatting and normalize US numbers to 10 digits when possible. */
export function normalizePhoneDigits(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    return digits.slice(1);
  }
  return digits;
}

export function formatUsPhoneInput(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.length > 10 && digits.startsWith("1")) {
    digits = digits.slice(1);
  }
  digits = digits.slice(0, 10);

  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function isValidUsPhone(phone: string): boolean {
  const digits = normalizePhoneDigits(phone);
  if (digits.length !== 10) return false;
  if (/^(\d)\1{9}$/.test(digits)) return false;

  const areaCode = digits.slice(0, 3);
  const exchange = digits.slice(3, 6);

  if (areaCode[0] === "0" || areaCode[0] === "1") return false;
  if (exchange[0] === "0" || exchange[0] === "1") return false;

  return true;
}

export function isValidInternationalPhone(phone: string, countryCode: string): boolean {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return false;
  if (/^(\d)\1{5,}$/.test(digits)) return false;

  const country = resolvePhoneCountry(countryCode);
  if (country.code === "US" || country.code === "CA") {
    return isValidUsPhone(phone);
  }

  return digits.length >= 6 && digits.length <= 14;
}

export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  if (!trimmed || trimmed.length > MAX_EMAIL_LENGTH) return false;
  if (trimmed.includes("..")) return false;
  return EMAIL_PATTERN.test(trimmed);
}

export function validateLeadFormFields(input: LeadFormValues): LeadFormFieldErrors {
  const fullName = input.fullName.trim();
  const address = input.address.trim();
  const sellReason = input.sellReason.trim();
  const phone = input.phone.trim();
  const email = input.email.trim();
  const errors: LeadFormFieldErrors = {};

  if (!fullName) {
    errors.fullName = "Full name is required.";
  } else if (fullName.length < MIN_FULL_NAME_LENGTH) {
    errors.fullName = "Please enter your full name.";
  }

  if (!address) {
    errors.address = "Property address is required.";
  } else if (address.length < MIN_ADDRESS_LENGTH) {
    errors.address = "Please enter a complete property address.";
  }

  if (!sellReason) {
    errors.sellReason = "Please select a reason for selling.";
  } else if (!VALID_SELL_REASON_VALUES.has(sellReason as (typeof SELL_REASON_OPTIONS)[number]["value"])) {
    errors.sellReason = "Please select a valid reason.";
  }

  const phoneCountryCode = input.phoneCountryCode.trim().toUpperCase() || "US";

  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!isValidInternationalPhone(phone, phoneCountryCode)) {
    errors.phone =
      phoneCountryCode === "US" || phoneCountryCode === "CA"
        ? "Please enter a valid 10-digit phone number."
        : "Please enter a valid phone number.";
  }

  if (email && !isValidEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
}

export function getLeadFormErrorMessage(errors: LeadFormFieldErrors): string | null {
  return (
    errors.fullName ??
    errors.address ??
    errors.sellReason ??
    errors.phone ??
    errors.email ??
    null
  );
}
