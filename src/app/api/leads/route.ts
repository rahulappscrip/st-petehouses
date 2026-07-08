import { NextResponse } from "next/server";
import { createHouseOfAppsLead } from "@/lib/house-of-apps/create-lead";
import type { LeadFormInput } from "@/lib/house-of-apps/types";
import {
  getLeadFormErrorMessage,
  isValidInternationalPhone,
  validateLeadFormFields,
} from "@/lib/lead-form-validation";
import { isSupportedPhoneCountry } from "@/lib/phone-countries";
import { sendLeadNotificationEmail } from "@/lib/resend/send-lead-notification";
import { sendLeadSlackNotification } from "@/lib/slack/send-lead-notification";

type ParsedLeadInput = LeadFormInput & {
  sourcePage: string;
};

function parseLeadInput(body: unknown): ParsedLeadInput | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;

  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const phoneCountryCode =
    typeof data.phoneCountryCode === "string" ? data.phoneCountryCode.trim().toUpperCase() : "US";

  if (!isSupportedPhoneCountry(phoneCountryCode)) return null;
  if (!isValidInternationalPhone(phone, phoneCountryCode)) return null;

  const sourcePage =
    typeof data.sourcePage === "string" ? data.sourcePage.trim() : "";

  return {
    fullName: typeof data.fullName === "string" ? data.fullName.trim() : "",
    address: typeof data.address === "string" ? data.address.trim() : "",
    sellReason: typeof data.sellReason === "string" ? data.sellReason.trim() : "",
    phone,
    phoneCountryCode,
    email: typeof data.email === "string" ? data.email.trim() : "",
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
    phoneCountryCode:
      typeof data.phoneCountryCode === "string" ? data.phoneCountryCode : "US",
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
      await sendLeadNotificationEmail(input);
    } catch (emailError) {
      console.error("Failed to send lead notification email:", emailError);
    }

    try {
      await sendLeadSlackNotification(input);
    } catch (slackError) {
      console.error("Failed to send lead Slack notification:", slackError);
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Failed to create lead:", error);
    const message = error instanceof Error ? error.message : "Unable to submit lead.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
