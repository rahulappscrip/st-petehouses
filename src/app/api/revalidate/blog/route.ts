import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

type RevalidateBody = {
  slug?: string;
};

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");
  const expectedSecret = process.env.REVALIDATE_BLOG_SECRET;

  if (!expectedSecret || secret !== expectedSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as RevalidateBody;
  const slug = typeof body.slug === "string" ? body.slug.trim() : "";

  revalidateTag("wordpress-posts");

  const paths = ["/blog", "/blogs/sitemap.xml"];

  if (slug) {
    paths.push(`/blog/${slug}`);
  }

  for (const path of paths) {
    revalidatePath(path);
  }

  return NextResponse.json({
    revalidated: true,
    slug: slug || "all",
    paths,
  });
}
