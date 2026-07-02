import { Resend } from "resend";
import { SELL_REASON_OPTIONS, SITE } from "@/lib/constants";
import type { LeadFormInput } from "@/lib/house-of-apps/types";
import { formatInternationalPhoneDisplay } from "@/lib/phone-countries";

export type LeadNotificationInput = LeadFormInput & {
  sourcePage?: string;
};

const DEFAULT_EMAIL_TO = "rahul@reibarmarketing.com";

function resolveSellReasonLabel(value: string): string {
  const match = SELL_REASON_OPTIONS.find((option) => option.value === value);
  return match?.label ?? value;
}

function formatPhone(input: LeadNotificationInput): string {
  return formatInternationalPhoneDisplay(input.phone, input.phoneCountryCode);
}

function formatSubmittedAt(): string {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function buildPlainText(input: LeadNotificationInput): string {
  const lines = [
    "New cash offer lead submission",
    "",
    `Full name: ${input.fullName}`,
    `Property address: ${input.address}`,
    `Sell reason: ${resolveSellReasonLabel(input.sellReason)}`,
    `Phone: ${formatPhone(input)}`,
    `Email: ${input.email || "Not provided"}`,
    `Source page: ${input.sourcePage || "/"}`,
    `Submitted: ${formatSubmittedAt()} (ET)`,
  ];

  return lines.join("\n");
}

function buildHtml(input: LeadNotificationInput): string {
  const rows = [
    ["Full name", input.fullName],
    ["Property address", input.address],
    ["Sell reason", resolveSellReasonLabel(input.sellReason)],
    ["Phone", formatPhone(input)],
    ["Email", input.email || "Not provided"],
    ["Source page", input.sourcePage || "/"],
    ["Submitted", `${formatSubmittedAt()} (ET)`],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;vertical-align:top;">${label}</td><td style="padding:8px 12px;border:1px solid #e5e5e5;">${value}</td></tr>`,
    )
    .join("");

  return `
    <p>New cash offer lead submission from <strong>${SITE.name}</strong>.</p>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:15px;">
      <tbody>${tableRows}</tbody>
    </table>
  `.trim();
}

export async function sendLeadNotificationEmail(input: LeadNotificationInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_EMAIL_FROM;

  if (!apiKey) {
    throw new Error("Resend API key is not configured.");
  }

  if (!from) {
    throw new Error("Resend sender address is not configured.");
  }

  const to = process.env.RESEND_EMAIL_TO?.trim() || DEFAULT_EMAIL_TO;
  const bcc = process.env.RESEND_EMAIL_BCC?.trim();

  const resend = new Resend(apiKey);
  const subject = `New lead: ${input.fullName} — ${input.address}`;

  const { data, error } = await resend.emails.send({
    from,
    to,
    ...(bcc ? { bcc } : {}),
    subject,
    text: buildPlainText(input),
    html: buildHtml(input),
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
