import { getAgentMdContent } from "@/lib/agent-md-pages";
import { getBlogMdContent, isBlogAgentMdKey } from "@/lib/agent-md/get-blog-md-content";

const AGENT_MD_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  "X-Robots-Tag": "noindex, nofollow",
  "Cache-Control": "public, max-age=60, s-maxage=60",
} as const;

export const revalidate = 60;

type RouteContext = {
  params: Promise<{ segments?: string[] }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { segments } = await context.params;
  const key = segments?.length ? segments.join("/") : "index";

  if (isBlogAgentMdKey(key)) {
    const blogContent = await getBlogMdContent(key);
    if (blogContent) {
      return new Response(blogContent, {
        status: 200,
        headers: AGENT_MD_HEADERS,
      });
    }

    return new Response("Not Found", {
      status: 404,
      headers: AGENT_MD_HEADERS,
    });
  }

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
