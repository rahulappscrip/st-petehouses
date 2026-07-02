import { NextResponse } from "next/server";
import { createHouseOfAppsLead } from "@/lib/house-of-apps/create-lead";
import type { LeadFormInput } from "@/lib/house-of-apps/types";
import { isValidEmail, isValidInternationalPhone } from "@/lib/lead-form-validation";
import { isSupportedPhoneCountry } from "@/lib/phone-countries";
import { sendLeadNotificationEmail } from "@/lib/resend/send-lead-notification";
import { createWordPressLead } from "@/lib/wordpress/create-lead";

type ParsedLeadInput = LeadFormInput & {
  sourcePage: string;
};

function parseLeadInput(body: unknown): ParsedLeadInput | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;

  const values = {
    fullName: typeof data.fullName === "string" ? data.fullName : "",
    address: typeof data.address === "string" ? data.address : "",
    sellReason: typeof data.sellReason === "string" ? data.sellReason : "",
    phone: typeof data.phone === "string" ? data.phone : "",
    email: typeof data.email === "string" ? data.email : "",
  };

  const phone = data.phone.trim();
  const phoneCountryCode =
    typeof data.phoneCountryCode === "string" ? data.phoneCountryCode.trim().toUpperCase() : "US";

  if (!isSupportedPhoneCountry(phoneCountryCode)) return null;
  if (!isValidInternationalPhone(phone, phoneCountryCode)) return null;

  const sourcePage =
    typeof data.sourcePage === "string" ? data.sourcePage.trim() : "";

  return {
    fullName: data.fullName.trim(),
    address: data.address.trim(),
    sellReason: data.sellReason.trim(),
    phone,
    phoneCountryCode,
    email,
    sourcePage,
  };
}

function getValidationError(body: unknown): string | null {
  if (!body || typeof body !== "object") return "Invalid form data.";

  const data = body as Record<string, unknown>;
  const errors = validateLeadFormFields({
    fullName: typeof data.fullName === "string" ? data.fullName : "",
    address: typeof data.address === "string" ? data.address : "",
    sellReason: typeof data.sellReason === "string" ? data.sellReason : "",
    phone: typeof data.phone === "string" ? data.phone : "",
    email: typeof data.email === "string" ? data.email : "",
  });

  return getLeadFormErrorMessage(errors);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = parseLeadInput(body);

    if (!input) {
      const validationError = getValidationError(body);
      return NextResponse.json(
        { error: validationError ?? "Invalid form data." },
        { status: 400 },
      );
    }

    const result = await createHouseOfAppsLead(input);

    try {
      await createWordPressLead(input);
    } catch (wpError) {
      console.error("Failed to save lead to WordPress:", wpError);
    }

    try {
      await sendLeadNotificationEmail(input);
    } catch (emailError) {
      console.error("Failed to send lead notification email:", emailError);
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Failed to create lead:", error);
    const message = error instanceof Error ? error.message : "Unable to submit lead.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
