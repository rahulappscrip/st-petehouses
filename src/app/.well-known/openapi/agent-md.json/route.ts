import { buildAgentMdOpenApi } from "@/lib/agent-discovery/openapi/agent-md";

export function GET() {
  return Response.json(buildAgentMdOpenApi(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
