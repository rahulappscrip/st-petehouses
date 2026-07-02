import type { LeadFormInput } from "@/lib/house-of-apps/types";
import { formatInternationalPhoneDisplay } from "@/lib/phone-countries";
import { wordpressFetch } from "@/lib/wordpress/fetch";

export type WordPressLeadInput = LeadFormInput & {
  sourcePage?: string;
};

type WordPressLeadResponse = {
  success?: boolean;
  id?: number;
  error?: string;
};

export async function createWordPressLead(input: WordPressLeadInput): Promise<WordPressLeadResponse> {
  const apiUrl = process.env.WORDPRESS_LEAD_API_URL;
  const apiSecret = process.env.WORDPRESS_LEAD_API_SECRET;

  if (!apiUrl || !apiSecret) {
    throw new Error("WordPress lead API is not configured.");
  }

  const response = await wordpressFetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Stpete-Lead-Secret": apiSecret,
    },
    body: JSON.stringify({
      full_name: input.fullName,
      property_address: input.address,
      sell_reason: input.sellReason,
      phone: formatInternationalPhoneDisplay(input.phone, input.phoneCountryCode),
      email: input.email,
      source_page: input.sourcePage ?? "",
    }),
  });

  const data = (await response.json().catch(() => null)) as WordPressLeadResponse | null;

  if (!response.ok) {
    const message = data?.error ?? `WordPress lead API failed with status ${response.status}`;
    throw new Error(message);
  }

  return data ?? { success: true };
}
