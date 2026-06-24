import { buildAiCatalog } from "@/lib/agent-discovery/ai-catalog";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
} as const;

export function GET() {
  return Response.json(buildAiCatalog(), {
    headers: {
      "Content-Type": "application/ai-catalog+json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      ...CORS_HEADERS,
    },
  });
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}
