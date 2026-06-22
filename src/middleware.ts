import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function wantsMarkdown(request: NextRequest): boolean {
  const accept = request.headers.get("accept") ?? "";
  return accept.includes("text/markdown");
}

function resolveAgentMdRewritePath(pathname: string): string {
  let path = pathname;

  if (path.endsWith(".md")) {
    path = path.slice(0, -3);
  }

  path = path.replace(/^\/+/, "").replace(/\/+$/, "");
  const segments = !path || path === "index" ? [] : path.split("/");
  return segments.length === 0 ? "/api/agent-md" : `/api/agent-md/${segments.join("/")}`;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isMdPath = pathname.endsWith(".md");
  const acceptMarkdown = wantsMarkdown(request);

  if (!isMdPath && !acceptMarkdown) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/") || pathname.startsWith("/.well-known/")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = resolveAgentMdRewritePath(pathname);

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)$).*)"],
};
