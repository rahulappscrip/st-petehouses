import { buildPlacesAutocompleteOpenApi } from "@/lib/agent-discovery/openapi/places-autocomplete";

export function GET() {
  return Response.json(buildPlacesAutocompleteOpenApi(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
