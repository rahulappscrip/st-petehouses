import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.endsWith(".md")) {
    return NextResponse.next();
  }

  const withoutExtension = pathname.slice(1, -3);
  const segments = withoutExtension === "index" || withoutExtension === "" ? [] : withoutExtension.split("/");
  const rewritePath =
    segments.length === 0 ? "/api/agent-md" : `/api/agent-md/${segments.join("/")}`;

  const url = request.nextUrl.clone();
  url.pathname = rewritePath;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)$).*)"],
};
