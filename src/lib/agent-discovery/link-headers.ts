export function buildHomepageLinkHeader(): string {
  return [
    "</.well-known/api-catalog>; rel=\"api-catalog\"",
    "</.well-known/mcp/server-card.json>; rel=\"service-desc\"; type=\"application/json\"; title=\"MCP Server Card\"",
    "</llms.txt>; rel=\"service-doc\"; type=\"text/plain\"",
    "</.well-known/openapi/agent-md.json>; rel=\"service-desc\"; type=\"application/json\"; title=\"Agent Markdown OpenAPI\"",
  ].join(", ");
}
