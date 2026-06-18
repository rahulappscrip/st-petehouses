import { NextResponse } from "next/server";
import { createHouseOfAppsLead } from "@/lib/house-of-apps/create-lead";
import type { LeadFormInput } from "@/lib/house-of-apps/types";
import { isValidEmail, isValidUsPhone } from "@/lib/lead-form-validation";
import { createWordPressLead } from "@/lib/wordpress/create-lead";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

type ParsedLeadInput = LeadFormInput & {
  sourcePage: string;
};

function parseLeadInput(body: unknown): ParsedLeadInput | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;

  if (
    !isNonEmptyString(data.fullName) ||
    !isNonEmptyString(data.address) ||
    !isNonEmptyString(data.sellReason) ||
    !isNonEmptyString(data.phone)
  ) {
    return null;
  }

  const email =
    typeof data.email === "string" ? data.email.trim() : "";

  if (email && !isValidEmail(email)) return null;

  const phone = data.phone.trim();
  if (!isValidUsPhone(phone)) return null;

  const sourcePage =
    typeof data.sourcePage === "string" ? data.sourcePage.trim() : "";

  return {
    fullName: data.fullName.trim(),
    address: data.address.trim(),
    sellReason: data.sellReason.trim(),
    phone,
    email,
    sourcePage,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = parseLeadInput(body);

    if (!input) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    const result = await createHouseOfAppsLead(input);

    try {
      await createWordPressLead(input);
    } catch (wpError) {
      console.error("Failed to save lead to WordPress:", wpError);
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Failed to create lead:", error);
    const message = error instanceof Error ? error.message : "Unable to submit lead.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
