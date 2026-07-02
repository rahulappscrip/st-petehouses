import { NextResponse } from "next/server";
import { DEFAULT_PHONE_COUNTRY, isSupportedPhoneCountry } from "@/lib/phone-countries";

const GEO_CACHE_SECONDS = 3600;
const INVALID_COUNTRY_CODES = new Set(["", "XX", "T1"]);

type GeoResponse = {
  countryCode: string;
  source: "vercel" | "cloudflare" | "ipapi" | "default";
};

function normalizeCountryCode(value: string | null): string | null {
  if (!value) return null;

  const code = value.trim().toUpperCase();
  if (INVALID_COUNTRY_CODES.has(code)) return null;
  if (!/^[A-Z]{2}$/.test(code)) return null;

  return code;
}

function getClientIp(request: Request): string | null {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const ip = forwarded.split(",")[0]?.trim();
    if (ip) return ip;
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  return realIp || null;
}

function jsonResponse(payload: GeoResponse) {
  const countryCode = isSupportedPhoneCountry(payload.countryCode)
    ? payload.countryCode
    : DEFAULT_PHONE_COUNTRY;

  return NextResponse.json(
    { countryCode, source: payload.source } satisfies GeoResponse,
    {
      headers: {
        "Cache-Control": `private, max-age=${GEO_CACHE_SECONDS}, stale-while-revalidate=86400`,
      },
    },
  );
}

async function fetchCountryFromIpApi(ip: string | null): Promise<string | null> {
  const url = ip ? `https://ipapi.co/${encodeURIComponent(ip)}/country_code/` : "https://ipapi.co/country_code/";

  const response = await fetch(url, {
    headers: { Accept: "text/plain" },
    next: { revalidate: GEO_CACHE_SECONDS },
  });

  if (!response.ok) return null;

  const text = (await response.text()).trim();
  return normalizeCountryCode(text);
}

export async function GET(request: Request) {
  const vercelCountry = normalizeCountryCode(request.headers.get("x-vercel-ip-country"));
  if (vercelCountry) {
    return jsonResponse({ countryCode: vercelCountry, source: "vercel" });
  }

  const cloudflareCountry = normalizeCountryCode(request.headers.get("cf-ipcountry"));
  if (cloudflareCountry) {
    return jsonResponse({ countryCode: cloudflareCountry, source: "cloudflare" });
  }

  try {
    const ip = getClientIp(request);
    const ipApiCountry = await fetchCountryFromIpApi(ip);
    if (ipApiCountry) {
      return jsonResponse({ countryCode: ipApiCountry, source: "ipapi" });
    }
  } catch (error) {
    console.error("Geo IP lookup failed:", error);
  }

  return jsonResponse({ countryCode: DEFAULT_PHONE_COUNTRY, source: "default" });
}
