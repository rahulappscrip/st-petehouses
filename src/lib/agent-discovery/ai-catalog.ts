import { getSiteOrigin } from "@/lib/site-url";

type AiCatalogEntry = {
  identifier: string;
  displayName: string;
  mediaType: string;
  url: string;
  description?: string;
  tags?: string[];
  version?: string;
};

export function buildAiCatalog() {
  const origin = getSiteOrigin();

  const entries: AiCatalogEntry[] = [
    {
      identifier: "urn:webuystpetehouses:mcp:content",
      displayName: "We Buy St Pete Houses Content MCP Server",
      version: "1.0.0",
      mediaType: "application/mcp-server-card+json",
      url: `${origin}/.well-known/mcp/server-card.json`,
      description:
        "Read-only MCP server for site pages, blog posts, and llms.txt guidance.",
      tags: ["mcp", "content", "real-estate"],
    },
    {
      identifier: "urn:webuystpetehouses:api-catalog",
      displayName: "We Buy St Pete Houses API Catalog",
      version: "1.0.0",
      mediaType: 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
      url: `${origin}/.well-known/api-catalog`,
      description: "RFC 9727 linkset catalog of HTTP APIs for AI agents.",
      tags: ["api", "discovery"],
    },
    {
      identifier: "urn:webuystpetehouses:openapi:agent-md",
      displayName: "Agent Markdown API",
      version: "1.0.0",
      mediaType: "application/openapi+json",
      url: `${origin}/.well-known/openapi/agent-md.json`,
      description: "OpenAPI spec for fetching site pages as markdown.",
      tags: ["api", "markdown", "content"],
    },
    {
      identifier: "urn:webuystpetehouses:openapi:places-autocomplete",
      displayName: "Places Autocomplete API",
      version: "1.0.0",
      mediaType: "application/openapi+json",
      url: `${origin}/.well-known/openapi/places-autocomplete.json`,
      description: "OpenAPI spec for address autocomplete on lead forms.",
      tags: ["api", "places", "forms"],
    },
    {
      identifier: "urn:webuystpetehouses:llms-txt",
      displayName: "llms.txt Site Index",
      mediaType: "text/plain",
      url: `${origin}/llms.txt`,
      description: "Site index, contact info, and guidance for AI systems.",
      tags: ["documentation", "llms-txt"],
    },
  ];

  return {
    specVersion: "1.0",
    host: {
      displayName: "We Buy St Pete Houses",
      identifier: origin.replace(/^https?:\/\//, ""),
      documentationUrl: `${origin}/llms.txt`,
    },
    entries,
  };
}
