import { SELL_REASON_OPTIONS, SITE } from "@/lib/constants";
import type { LeadFormInput } from "@/lib/house-of-apps/types";
import { formatInternationalPhoneDisplay } from "@/lib/phone-countries";
import { getSiteOrigin } from "@/lib/site-url";

export type LeadSlackInput = LeadFormInput & {
  sourcePage?: string;
};

function resolveSellReasonLabel(value: string): string {
  const match = SELL_REASON_OPTIONS.find((option) => option.value === value);
  return match?.label ?? value;
}

function formatSubmittedAt(): string {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function buildSourcePageUrl(sourcePage?: string): string {
  const path = sourcePage?.trim() || "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteOrigin()}${normalized}`;
}

function buildSlackPayload(input: LeadSlackInput) {
  const phone = formatInternationalPhoneDisplay(input.phone, input.phoneCountryCode);
  const sellReason = resolveSellReasonLabel(input.sellReason);
  const submittedAt = formatSubmittedAt();
  const sourcePage = input.sourcePage?.trim() || "/";
  const sourceUrl = buildSourcePageUrl(sourcePage);

  return {
    text: `New lead: ${input.fullName} — ${input.address}`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "New cash offer lead",
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Hey Bennett,\nWe just received the following information for a potential property and it looks like it could be a great fit for us!\nWhat do you say?",
        },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Full name*\n${input.fullName}` },
          { type: "mrkdwn", text: `*Property address*\n${input.address}` },
          { type: "mrkdwn", text: `*Sell reason*\n${sellReason}` },
          { type: "mrkdwn", text: `*Phone*\n${phone}` },
          { type: "mrkdwn", text: `*Email*\n${input.email || "Not provided"}` },
          { type: "mrkdwn", text: `*Source page*\n<${sourceUrl}|${sourcePage}>` },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `${SITE.name} · Submitted ${submittedAt} (ET)`,
          },
        ],
      },
    ],
  };
}

export async function sendLeadSlackNotification(input: LeadSlackInput) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    console.warn("SLACK_WEBHOOK_URL is not configured; skipping Slack notification.");
    return null;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildSlackPayload(input)),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Slack webhook failed (${response.status}): ${body || response.statusText}`);
  }

  return { ok: true };
}
