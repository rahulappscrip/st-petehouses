import { getAgentMdContent } from "@/lib/agent-md-pages";
import { getBlogMdContent, isBlogAgentMdKey } from "@/lib/agent-md/get-blog-md-content";

export const revalidate = 60;

type RouteContext = {
  params: Promise<{ segments?: string[] }>;
};

function estimateMarkdownTokens(content: string): string {
  return String(Math.ceil(content.length / 4));
}

function agentMdHeaders(content: string): HeadersInit {
  return {
    "Content-Type": "text/markdown; charset=utf-8",
    "X-Robots-Tag": "noindex, nofollow",
    "Cache-Control": "public, max-age=60, s-maxage=60",
    "x-markdown-tokens": estimateMarkdownTokens(content),
  };
}

function agentMdResponse(content: string, status: number): Response {
  return new Response(content, {
    status,
    headers: agentMdHeaders(content),
  });
}

export async function GET(_request: Request, context: RouteContext) {
  const { segments } = await context.params;
  const key = segments?.length ? segments.join("/") : "index";

  if (isBlogAgentMdKey(key)) {
    const blogContent = await getBlogMdContent(key);
    if (blogContent) {
      return agentMdResponse(blogContent, 200);
    }

    return agentMdResponse("Not Found", 404);
  }

  const content = getAgentMdContent(key);

  if (!content) {
    return agentMdResponse("Not Found", 404);
  }

  return agentMdResponse(content, 200);
}
