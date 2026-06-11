import agentMdPages from "@/data/agent-md-pages.json";

const PAGES = agentMdPages as Record<string, string>;

export const AGENT_MD_ROUTES = Object.keys(PAGES);

/** Normalize a public .md pathname (e.g. /contact.md) to a lookup key (e.g. contact). */
export function resolveAgentMdKey(pathname: string): string {
  let path = pathname.trim();

  if (path.endsWith(".md")) {
    path = path.slice(0, -3);
  }

  path = path.replace(/^\/+/, "").replace(/\/+$/, "");

  if (!path || path === "index") {
    return "index";
  }

  return path;
}

export function getAgentMdContent(key: string): string | undefined {
  return PAGES[key];
}

export function getAgentMdContentByPathname(pathname: string): string | undefined {
  return getAgentMdContent(resolveAgentMdKey(pathname));
}
