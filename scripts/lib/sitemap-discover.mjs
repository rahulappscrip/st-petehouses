import fs from "node:fs";
import path from "node:path";

const APP_DIR = "src/app";
const COMPONENTS_DIR = "src/components";
const PROJECT_ROOT = process.cwd();

function isNoIndexPage(absolutePageFile) {
  const content = fs.readFileSync(absolutePageFile, "utf8");
  return /robots\s*:\s*\{[\s\S]*?index\s*:\s*false/.test(content);
}

function hasDynamicSegment(relativeDir) {
  return relativeDir
    .split(path.sep)
    .filter(Boolean)
    .some((segment) => segment.includes("[") || segment.includes("]"));
}

function shouldSkipDir(segment) {
  return segment === "api" || segment === ".well-known" || segment.startsWith("(");
}

function pageDirToUrl(relativeDir) {
  const segments = relativeDir.split(path.sep).filter(Boolean);
  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
}

function walkAppDir(absoluteDir, relativeDir = "") {
  const routes = [];

  if (!fs.existsSync(absoluteDir)) return routes;

  for (const entry of fs.readdirSync(absoluteDir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;

    const entryRelativeDir = relativeDir ? path.join(relativeDir, entry.name) : entry.name;

    if (entry.isDirectory()) {
      if (shouldSkipDir(entry.name) || hasDynamicSegment(entryRelativeDir)) continue;
      routes.push(...walkAppDir(path.join(absoluteDir, entry.name), entryRelativeDir));
      continue;
    }

    if (entry.name !== "page.tsx") continue;
    if (hasDynamicSegment(relativeDir)) continue;

    const pageFile = path.join(APP_DIR, relativeDir, "page.tsx").replace(/\\/g, "/");
    const absolutePageFile = path.join(PROJECT_ROOT, pageFile);
    const urlPath = pageDirToUrl(relativeDir);

    routes.push({
      path: urlPath,
      pageFile,
      noindex: isNoIndexPage(absolutePageFile),
    });
  }

  return routes;
}

export function discoverAllAppPages() {
  return walkAppDir(path.join(PROJECT_ROOT, APP_DIR));
}

export function discoverIndexableAppRoutes() {
  return discoverAllAppPages()
    .filter((route) => !route.noindex)
    .map(({ path: routePath, pageFile }) => ({ path: routePath, pageFile }))
    .sort((a, b) => a.path.localeCompare(b.path));
}

export function assertSitemapDiscovery() {
  const allPages = discoverAllAppPages();
  const indexable = discoverIndexableAppRoutes();
  const indexablePaths = new Set(indexable.map((route) => route.path));
  const errors = [];

  for (const page of allPages) {
    if (page.noindex && indexablePaths.has(page.path)) {
      errors.push(`noindex page included in sitemap: ${page.path}`);
    }

    if (!page.noindex && !indexablePaths.has(page.path)) {
      errors.push(`indexable page missing from sitemap discovery: ${page.path}`);
    }
  }

  const requiredPaths = [
    "/",
    "/about",
    "/blog",
    "/contact",
    "/how-it-works",
    "/reviews",
    "/sell-your-house",
    "/get-a-cash-offer",
    "/cash-vs-agent",
    "/faq",
  ];

  for (const requiredPath of requiredPaths) {
    if (!indexablePaths.has(requiredPath)) {
      errors.push(`required route missing from sitemap discovery: ${requiredPath}`);
    }
  }

  return { indexable, errors };
}
