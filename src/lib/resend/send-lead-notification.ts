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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildPlainText(input: LeadNotificationInput): string {
  const lines = [
    "Hey Bennett,",
    "",
    "We just received the following information for a potential property and it looks like it could be a great fit for us!",
    "What do you say?",
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
    <p>Hey Bennett,</p>
    <p>We just received the following information for a potential property and it looks like it could be a great fit for us!</p>
    <p>What do you say?</p>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:15px;">
      <tbody>${tableRows}</tbody>
    </table>
  `.trim();
}

function buildUserPlainText(input: LeadNotificationInput): string {
  return [
    "Hi there!",
    "",
    "My assistant just forwarded me your info that you submitted on our site a few mins ago.",
    "",
    "And I wanted to reach out to talk to you about the property.",
    "",
    `Quick question... the house on ${input.address}, how can we best assist you...and how fast are you looking to sell?`,
    "",
    "I'd like to discuss your property further. What day and time work best for you?",
    "",
    "I'd love to answer any questions you have and make you an offer that works for you.",
    "",
    "Thanks!",
    "",
    "Bennett Andrews",
    "Owner & CEO",
    "M: (727) 477-8998",
    "E: SellFast@WeBuyStPeteHouses.com",
    "",
    "https://webuystpetehouses.com/",
  ].join("\n");
}

function buildUserHtml(input: LeadNotificationInput): string {
  const address = escapeHtml(input.address);

  return `
    <p>Hi there!</p>
    <p>My assistant just forwarded me your info that you submitted on our site a few mins ago.</p>
    <p>And I wanted to reach out to talk to you about the property.</p>
    <p>Quick question... the house on <strong>${address}</strong>, how can we best assist you...and how fast are you looking to sell?</p>
    <p>I'd like to discuss your property further. What day and time work best for you?</p>
    <p>I'd love to answer any questions you have and make you an offer that works for you.</p>
    <p>Thanks!</p>
    <p>
      <strong>Bennett Andrews</strong><br />
      Owner &amp; CEO<br />
      M: <a href="tel:+17274778998">(727) 477-8998</a><br />
      E: <a href="mailto:SellFast@WeBuyStPeteHouses.com">SellFast@WeBuyStPeteHouses.com</a>
    </p>
    <p><a href="https://webuystpetehouses.com/">https://webuystpetehouses.com/</a></p>
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

  const userEmail = input.email?.trim();
  if (userEmail) {
    const userSubject = `We received your property details for ${input.address}`;
    const { error: userEmailError } = await resend.emails.send({
      from,
      to: userEmail,
      subject: userSubject,
      text: buildUserPlainText(input),
      html: buildUserHtml(input),
      replyTo: "SellFast@WeBuyStPeteHouses.com",
    });

    if (userEmailError) {
      throw new Error(userEmailError.message);
    }
  }

  return data;
}
