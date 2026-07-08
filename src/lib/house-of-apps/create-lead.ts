import type { HouseOfAppsLeadPayload, LeadFormInput } from "@/lib/house-of-apps/types";
import { resolvePhoneCountry } from "@/lib/phone-countries";

const HOU_API_URL = "https://api-v2.houseofapps.ai/v1/integrations/leads";
const HOU_WEBSITE_LEAD_CUSTOM_FIELD = {
  field_id: "05837193-f94f-47a5-8c5b-b28d574da47f",
  value: true as const,
};

function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(" ");

  if (spaceIndex === -1) {
    return { firstName: trimmed, lastName: "" };
  }

  return {
    firstName: trimmed.slice(0, spaceIndex).trim(),
    lastName: trimmed.slice(spaceIndex + 1).trim(),
  };
}

function normalizePhone(phone: string, countryCode: string): string {
  const digits = phone.replace(/\D/g, "");
  const country = resolvePhoneCountry(countryCode);

  if (country.code === "US" || country.code === "CA") {
    if (digits.length === 11 && digits.startsWith("1")) {
      return digits.slice(1);
    }
    return digits;
  }

  return digits;
}

export function buildLeadPayload(input: LeadFormInput): HouseOfAppsLeadPayload {
  const stageId = process.env.HOU_STAGE_ID ?? "";
  const sellReasonFieldId = process.env.HOU_SELL_REASON_FIELD_ID ?? "";
  const sellReasonSubFieldId = process.env.HOU_SELL_REASON_SUB_FIELD_ID ?? "";

  const { firstName, lastName } = splitFullName(input.fullName);
  const phoneCountry = resolvePhoneCountry(input.phoneCountryCode);

  const payload: HouseOfAppsLeadPayload = {
    lead: {
      name: input.sellReason ? input.sellReason + " - " + input.address.trim() : input.address.trim(),
      stage_id: stageId,
      lead_source: "Website",
      custom_fields: [HOU_WEBSITE_LEAD_CUSTOM_FIELD],
    },
    contact: {
      email: input.email,
      portal_access: false,
      first_name: firstName,
      last_name: lastName,
      phones: [
        {
          phone_number: normalizePhone(input.phone, phoneCountry.code),
          phone_isd_code: phoneCountry.dialCode,
          label: "mobile",
          is_primary: true,
        },
      ],
      addresses: [
        {
          address_line1: input.address,
          is_primary: true,
        },
      ],
    },
  };

  if (sellReasonFieldId && sellReasonSubFieldId) {
    payload.lead.custom_fields.push({
      field_id: sellReasonFieldId,
      sub_fields: [
        {
          field_id: sellReasonSubFieldId,
          value: input.sellReason,
        },
      ],
    });
  }

  return payload;
}

export async function createHouseOfAppsLead(input: LeadFormInput) {
  const licenseKey = process.env.HOU_LICENSE_KEY;
  const appSecret = process.env.HOU_APP_SECRET;

  if (!licenseKey || !appSecret) {
    throw new Error("House of Apps credentials are not configured.");
  }

  if (!process.env.HOU_STAGE_ID) {
    throw new Error("House of Apps stage ID is not configured.");
  }

  const payload = buildLeadPayload(input);

  const response = await fetch(HOU_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      licenseKey,
      appSecret,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      typeof data === "object" && data && "message" in data && typeof data.message === "string"
        ? data.message
        : `Lead API request failed with status ${response.status}`;
    throw new Error(message);
  }

  return data;
}
