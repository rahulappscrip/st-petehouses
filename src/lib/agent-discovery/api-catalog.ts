import { getSiteOrigin } from "@/lib/site-url";

type LinkHref = { href: string; type?: string };

type ApiCatalogEntry = {
  anchor: string;
  "service-desc": LinkHref[];
  "service-doc": LinkHref[];
  status: LinkHref[];
};

export function buildApiCatalog() {
  const origin = getSiteOrigin();

  const linkset: ApiCatalogEntry[] = [
    {
      anchor: `${origin}/api/agent-md`,
      "service-desc": [
        {
          href: `${origin}/.well-known/openapi/agent-md.json`,
          type: "application/json",
        },
      ],
      "service-doc": [
        {
          href: `${origin}/llms.txt`,
          type: "text/plain",
        },
      ],
      status: [{ href: `${origin}/api/health`, type: "application/json" }],
    },
    {
      anchor: `${origin}/api/places/autocomplete`,
      "service-desc": [
        {
          href: `${origin}/.well-known/openapi/places-autocomplete.json`,
          type: "application/json",
        },
      ],
      "service-doc": [
        {
          href: `${origin}/llms.txt`,
          type: "text/plain",
        },
      ],
      status: [{ href: `${origin}/api/health`, type: "application/json" }],
    },
  ];

  return { linkset };
}
