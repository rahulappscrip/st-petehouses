export type PhoneCountry = {
  code: string;
  name: string;
  dialCode: string;
};

export const DEFAULT_PHONE_COUNTRY = "US";

/** Curated list — US first, then alphabetical by name. */
export const PHONE_COUNTRIES: PhoneCountry[] = [
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "BR", name: "Brazil", dialCode: "+55" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "CO", name: "Colombia", dialCode: "+57" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "DO", name: "Dominican Republic", dialCode: "+1" },
  { code: "EG", name: "Egypt", dialCode: "+20" },
  { code: "ES", name: "Spain", dialCode: "+34" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "GT", name: "Guatemala", dialCode: "+502" },
  { code: "HN", name: "Honduras", dialCode: "+504" },
  { code: "HT", name: "Haiti", dialCode: "+509" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "IT", name: "Italy", dialCode: "+39" },
  { code: "JM", name: "Jamaica", dialCode: "+1" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "MX", name: "Mexico", dialCode: "+52" },
  { code: "NG", name: "Nigeria", dialCode: "+234" },
  { code: "NL", name: "Netherlands", dialCode: "+31" },
  { code: "PH", name: "Philippines", dialCode: "+63" },
  { code: "PK", name: "Pakistan", dialCode: "+92" },
  { code: "PL", name: "Poland", dialCode: "+48" },
  { code: "PR", name: "Puerto Rico", dialCode: "+1" },
  { code: "RU", name: "Russia", dialCode: "+7" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
  { code: "SV", name: "El Salvador", dialCode: "+503" },
  { code: "UA", name: "Ukraine", dialCode: "+380" },
  { code: "VE", name: "Venezuela", dialCode: "+58" },
  { code: "VN", name: "Vietnam", dialCode: "+84" },
];

const COUNTRY_BY_CODE = new Map(PHONE_COUNTRIES.map((country) => [country.code, country]));

export function countryCodeToFlag(code: string): string {
  const normalized = code.toUpperCase();
  if (normalized.length !== 2) return "";

  return normalized
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
}

export function getPhoneCountry(code: string): PhoneCountry | undefined {
  return COUNTRY_BY_CODE.get(code.toUpperCase());
}

export function resolvePhoneCountry(code: string | undefined | null): PhoneCountry {
  return getPhoneCountry(code ?? "") ?? COUNTRY_BY_CODE.get(DEFAULT_PHONE_COUNTRY)!;
}

export function isSupportedPhoneCountry(code: string): boolean {
  return COUNTRY_BY_CODE.has(code.toUpperCase());
}

export function formatPhoneForCountry(raw: string, countryCode: string): string {
  const digits = raw.replace(/\D/g, "");

  if (countryCode === "US" || countryCode === "CA") {
    let normalized = digits;
    if (normalized.length > 10 && normalized.startsWith("1")) {
      normalized = normalized.slice(1);
    }
    normalized = normalized.slice(0, 10);

    if (normalized.length === 0) return "";
    if (normalized.length <= 3) return `(${normalized}`;
    if (normalized.length <= 6) return `(${normalized.slice(0, 3)}) ${normalized.slice(3)}`;
    return `(${normalized.slice(0, 3)}) ${normalized.slice(3, 6)}-${normalized.slice(6)}`;
  }

  return digits.slice(0, 14);
}

export function formatInternationalPhoneDisplay(phone: string, countryCode: string): string {
  const country = resolvePhoneCountry(countryCode);
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";

  return `${country.dialCode} ${phone.trim()}`;
}
