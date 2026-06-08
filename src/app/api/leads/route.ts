import { NextResponse } from "next/server";
import { createHouseOfAppsLead } from "@/lib/house-of-apps/create-lead";
import type { LeadFormInput } from "@/lib/house-of-apps/types";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parseLeadInput(body: unknown): LeadFormInput | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;

  if (
    !isNonEmptyString(data.firstName) ||
    !isNonEmptyString(data.lastName) ||
    !isNonEmptyString(data.address) ||
    !isNonEmptyString(data.sellReason) ||
    !isNonEmptyString(data.phone) ||
    !isNonEmptyString(data.email)
  ) {
    return null;
  }

  if (!isValidEmail(data.email.trim())) return null;

  return {
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    address: data.address.trim(),
    sellReason: data.sellReason.trim(),
    phone: data.phone.trim(),
    email: data.email.trim(),
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
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Failed to create lead:", error);
    const message = error instanceof Error ? error.message : "Unable to submit lead.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
