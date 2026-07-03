import { getSiteOrigin } from "@/lib/site-url";

export function buildMcpServerCard() {
  const origin = getSiteOrigin();

  return {
    protocolVersion: "2025-11-25",
    serverInfo: {
      name: "com.webuystpetehouses/content",
      version: "1.0.0",
      description:
        "Read-only access to We Buy St Pete Houses site content, pages, and guidance for AI agents.",
    },
    transport: {
      type: "streamable-http",
      endpoint: `${origin}/api/mcp`,
    },
    capabilities: {
      tools: true,
      resources: true,
      prompts: false,
    },
    authentication: {
      required: false,
    },
    tools: [
      {
        name: "get_page_markdown",
        description:
          "Return markdown for a site page. Path examples: index, contact, stop-foreclosure-florida, blog/how-to-price-an-inherited-home-in-florida.",
      },
      {
        name: "get_site_index",
        description: "Return llms.txt — site index, contact info, and guidance for AI systems.",
      },
    ],
  };
}
