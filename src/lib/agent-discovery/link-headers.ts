export function buildHomepageLinkHeader(): string {
  return [
    "</.well-known/ai-catalog.json>; rel=\"ai-catalog\"; type=\"application/ai-catalog+json\"",
    "</.well-known/api-catalog>; rel=\"api-catalog\"",
    "</.well-known/mcp/server-card.json>; rel=\"service-desc\"; type=\"application/json\"; title=\"MCP Server Card\"",
    "</llms.txt>; rel=\"service-doc\"; type=\"text/plain\"",
    "</.well-known/openapi/agent-md.json>; rel=\"service-desc\"; type=\"application/json\"; title=\"Agent Markdown OpenAPI\"",
  ].join(", ");
}
