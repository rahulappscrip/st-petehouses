import { getAgentMdContent } from "@/lib/agent-md-pages";

const AGENT_MD_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  "X-Robots-Tag": "noindex, nofollow",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
} as const;

type RouteContext = {
  params: Promise<{ segments?: string[] }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { segments } = await context.params;
  const key = segments?.length ? segments.join("/") : "index";
  const content = getAgentMdContent(key);

  if (!content) {
    return new Response("Not Found", {
      status: 404,
      headers: AGENT_MD_HEADERS,
    });
  }

  return new Response(content, {
    status: 200,
    headers: AGENT_MD_HEADERS,
  });
}
