import { buildMcpServerCard } from "@/lib/agent-discovery/mcp-server-card";

export function GET() {
  return Response.json(buildMcpServerCard(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
