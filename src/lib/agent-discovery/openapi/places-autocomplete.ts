import { getSiteOrigin } from "@/lib/site-url";

export function buildPlacesAutocompleteOpenApi() {
  const origin = getSiteOrigin();

  return {
    openapi: "3.1.0",
    info: {
      title: "We Buy St Pete Houses — Address Autocomplete API",
      version: "1.0.0",
      description:
        "Google Places-powered address autocomplete biased to the St. Petersburg / Tampa Bay service area.",
    },
    servers: [{ url: origin }],
    paths: {
      "/api/places/autocomplete": {
        get: {
          operationId: "autocompleteAddress",
          summary: "Autocomplete property addresses",
          parameters: [
            {
              name: "input",
              in: "query",
              required: true,
              description: "Partial address text (minimum 3 characters)",
              schema: { type: "string", minLength: 3 },
            },
          ],
          responses: {
            "200": {
              description: "Autocomplete predictions",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      predictions: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            description: { type: "string" },
                            placeId: { type: "string" },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            "502": { description: "Upstream Places API error" },
            "503": { description: "Places API not configured" },
          },
        },
      },
    },
  };
}
