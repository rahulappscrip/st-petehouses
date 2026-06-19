/**
 * One-off Resend test. Usage:
 *   node scripts/test-resend-email.mjs rahul.s@appscrip.com
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resend } from "resend";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const to = process.argv[2] ?? "rahul.s@appscrip.com";

function loadEnvLocal() {
  try {
    const contents = readFileSync(join(ROOT, ".env.local"), "utf8");
    for (const line of contents.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const index = trimmed.indexOf("=");
      if (index === -1) continue;
      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // .env.local optional if vars already exported
  }
}

loadEnvLocal();

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.RESEND_EMAIL_FROM;

if (!apiKey || !from) {
  console.error("Missing RESEND_API_KEY or RESEND_EMAIL_FROM in .env.local");
  process.exit(1);
}

const resend = new Resend(apiKey);
const result = await resend.emails.send({
  from,
  to,
  subject: "Test: We Buy St Pete Houses lead notification (Resend)",
  text: "This is a test email to verify Resend lead notifications are working.",
  html: "<p>This is a <strong>test email</strong> to verify Resend lead notifications are working.</p>",
});

console.log(JSON.stringify(result, null, 2));
if (result.error) process.exit(1);
