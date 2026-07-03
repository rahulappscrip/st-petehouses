/**
 * Splits webuystpetehouses-md-pages.md into src/data/agent-md-pages.json
 * for agent-facing .md route handlers.
 *
 * Always refreshes from live sources:
 * - FAQ + all situation pages → site content files
 * - Blog .md routes → generated live from WordPress at request time (not stored here)
 *
 * Usage: node scripts/sync-agent-md-pages.mjs
 *        npm run sync:agent-md
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { autoGenerateMissingPages, syncFaqAndSituationMdPages } from "./lib/agent-md-auto-generate.mjs";
import { getAllSiteRoutes } from "./lib/agent-md-site-routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SOURCE = join(ROOT, "webuystpetehouses-md-pages.md");
const OUTPUT = join(ROOT, "src/data/agent-md-pages.json");

const PAGE_DELIMITER = /<!-- ===== PAGE \d+\/\d+: ([^=]+?) ===== -->/g;

function routeToKey(route) {
  const normalized = route.trim();
  if (normalized === "/" || normalized === "") return "index";
  return normalized.replace(/^\//, "");
}

function stripHtmlComments(text) {
  return text
    .split("\n")
    .filter((line) => !line.trim().startsWith("<!--"))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parsePages(source) {
  const matches = [...source.matchAll(PAGE_DELIMITER)];

  if (matches.length === 0) {
    throw new Error("No page delimiters found in source file.");
  }

  const pages = {};

  for (let i = 0; i < matches.length; i++) {
    const route = matches[i][1];
    const key = routeToKey(route);
    const start = matches[i].index + matches[i][0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : source.length;
    const rawBody = source.slice(start, end);
    const body = stripHtmlComments(rawBody);

    if (!body) {
      throw new Error(`Empty markdown body for route: ${route}`);
    }

    if (pages[key]) {
      throw new Error(`Duplicate route key: ${key}`);
    }

    pages[key] = body;
  }

  return pages;
}

function removeBlogKeys(pages) {
  for (const key of Object.keys(pages)) {
    if (key === "blog" || key.startsWith("blog/")) {
      delete pages[key];
    }
  }
}

function removeStaleSituationKeys(pages, activeSituationKeys) {
  const active = new Set(activeSituationKeys);
  for (const key of Object.keys(pages)) {
    if (key.startsWith("situations/")) {
      delete pages[key];
      continue;
    }
    if (active.has(key)) continue;
    if (
      key.startsWith("sell-") ||
      key.startsWith("stop-") ||
      key.startsWith("selling-a-house-with-")
    ) {
      delete pages[key];
    }
  }
}

async function main() {
  const source = readFileSync(SOURCE, "utf8");
  const pages = parsePages(source);
  const routes = getAllSiteRoutes(ROOT);

  const { generated: generatedSituations, situationKeys } = syncFaqAndSituationMdPages(ROOT, pages);
  removeStaleSituationKeys(pages, situationKeys);

  const generatedStatic = autoGenerateMissingPages(ROOT, pages, routes);
  removeBlogKeys(pages);

  const count = Object.keys(pages).length;
  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, `${JSON.stringify(pages, null, 2)}\n`, "utf8");

  console.log(`Wrote ${count} agent markdown pages to ${OUTPUT}`);
  console.log(`Synced FAQ + ${generatedSituations.length - 1} situation pages from site content.`);
  if (generatedStatic.length) {
    console.log(`Auto-generated ${generatedStatic.length} other missing pages.`);
  }
  console.log("Blog .md routes are generated live from WordPress (not stored in JSON).");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
