import { readFileSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://webuystpetehouses.com";
const COMPANY_LINE = "We Buy St Pete Houses · (727) 477-8998 · SellFast@WeBuyStPeteHouses.com";

export function pageHeader({ title, description, canonicalPath, keyword }) {
  const canonical = `${SITE_URL}${canonicalPath.replace(/\/$/, "")}`;
  const lines = [
    `# ${title}`,
    "",
    `> ${description}`,
    "",
    `- **Canonical URL:** ${canonical}`,
  ];
  if (keyword) lines.push(`- **Primary keyword:** ${keyword}`);
  lines.push(`- **Company:** ${COMPANY_LINE}`, "");
  return lines.join("\n");
}

/** Static routes that must have agent-facing markdown. */
export const STATIC_ROUTES = [
  { key: "index", path: "/", label: "Homepage" },
  { key: "sell-your-house", path: "/sell-your-house", label: "Sell your house" },
  { key: "how-it-works", path: "/how-it-works", label: "How it works" },
  { key: "get-a-cash-offer", path: "/get-a-cash-offer", label: "Get a cash offer" },
  { key: "cash-vs-agent", path: "/cash-vs-agent", label: "Cash vs agent" },
  { key: "about", path: "/about", label: "About" },
  { key: "contact", path: "/contact", label: "Contact" },
  { key: "reviews", path: "/reviews", label: "Reviews" },
  { key: "blog", path: "/blog", label: "Blog" },
  { key: "faq", path: "/faq", label: "FAQ" },
];

export function routeToKey(route) {
  const normalized = route.trim();
  if (normalized === "/" || normalized === "") return "index";
  return normalized.replace(/^\//, "");
}

export function getAllSiteRoutes(root) {
  const routes = [...STATIC_ROUTES];

  const citiesSource = readFileSync(join(root, "src/lib/cities.ts"), "utf8");
  for (const match of citiesSource.matchAll(/route:\s*"([^"]+)"/g)) {
    const route = match[1];
    routes.push({ key: route, path: `/${route}`, label: route });
  }

  const situations = JSON.parse(
    readFileSync(join(root, "src/lib/situation-content-data.json"), "utf8"),
  );
  for (const page of situations) {
    routes.push({
      key: `situations/${page.slug}`,
      path: `/situations/${page.slug}`,
      label: page.label,
    });
  }

  const seen = new Set();
  return routes.filter((route) => {
    if (seen.has(route.key)) return false;
    seen.add(route.key);
    return true;
  });
}

export { SITE_URL, COMPANY_LINE };
