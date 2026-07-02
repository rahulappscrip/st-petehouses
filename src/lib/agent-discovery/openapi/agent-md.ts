import { getSiteOrigin } from "@/lib/site-url";

export function buildAgentMdOpenApi() {
  const origin = getSiteOrigin();

  return {
    openapi: "3.1.0",
    info: {
      title: "We Buy St Pete Houses — Agent Markdown API",
      version: "1.0.0",
      description:
        "Returns markdown representations of site pages for AI agents. Also available via content negotiation with Accept: text/markdown on any page URL, or by appending .md to page paths.",
    },
    servers: [{ url: origin }],
    paths: {
      "/api/agent-md": {
        get: {
          operationId: "getHomepageMarkdown",
          summary: "Homepage markdown",
          responses: {
            "200": {
              description: "Homepage markdown content",
              content: { "text/markdown": { schema: { type: "string" } } },
            },
          },
        },
      },
      "/api/agent-md/{path}": {
        get: {
          operationId: "getPageMarkdown",
          summary: "Page markdown by path",
          parameters: [
            {
              name: "path",
              in: "path",
              required: true,
              description: "Page path without leading slash (e.g. contact, situations/foreclosure, blog/slug)",
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "Page markdown content",
              content: { "text/markdown": { schema: { type: "string" } } },
            },
            "404": { description: "Page not found" },
          },
        },
      },
    },
  };
}
