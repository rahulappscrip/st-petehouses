import fs from "node:fs";
import path from "node:path";

const APP_DIR = "src/app";
const COMPONENTS_DIR = "src/components";

export type DiscoveredAppRoute = {
  path: string;
  pageFile: string;
  sources: string[];
};

function isNoIndexPage(absolutePageFile: string): boolean {
  const content = fs.readFileSync(absolutePageFile, "utf8");
  return /robots\s*:\s*\{[^}]*index\s*:\s*false/s.test(content);
}

function hasDynamicSegment(relativeDir: string): boolean {
  return relativeDir
    .split(path.sep)
    .filter(Boolean)
    .some((segment) => segment.includes("[") || segment.includes("]"));
}

function shouldSkipDir(segment: string): boolean {
  return segment === "api" || segment === ".well-known" || segment.startsWith("(");
}

function pageDirToUrl(relativeDir: string): string {
  const segments = relativeDir.split(path.sep).filter(Boolean);
  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
}

function componentSourcesForRoute(urlPath: string): string[] {
  if (urlPath === "/") {
    const home = path.join(COMPONENTS_DIR, "home");
    return fs.existsSync(path.join(process.cwd(), home)) ? [home] : [];
  }

  const segment = urlPath.replace(/^\//, "").split("/")[0];
  const componentDir = path.join(COMPONENTS_DIR, segment);
  return fs.existsSync(path.join(process.cwd(), componentDir)) ? [componentDir] : [];
}

function walkAppDir(absoluteDir: string, relativeDir = ""): DiscoveredAppRoute[] {
  const routes: DiscoveredAppRoute[] = [];

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
    const absolutePageFile = path.join(process.cwd(), pageFile);

    if (isNoIndexPage(absolutePageFile)) continue;

    const urlPath = pageDirToUrl(relativeDir);
    routes.push({
      path: urlPath,
      pageFile,
      sources: [pageFile, ...componentSourcesForRoute(urlPath)],
    });
  }

  return routes;
}

export function discoverAppRoutes(): DiscoveredAppRoute[] {
  return walkAppDir(path.join(process.cwd(), APP_DIR)).sort((a, b) =>
    a.path.localeCompare(b.path),
  );
}
