import { isWordPressMediaUrl, wordpressFetch } from "@/lib/wordpress/fetch";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const src = new URL(request.url).searchParams.get("src");

  if (!src || !isWordPressMediaUrl(src)) {
    return new Response("Invalid image source", { status: 400 });
  }

  try {
    const upstream = await wordpressFetch(src);

    if (!upstream.ok) {
      return new Response("Image not found", { status: upstream.status });
    }

    const contentType = upstream.headers.get("content-type") ?? "image/jpeg";
    const cacheControl = upstream.headers.get("cache-control") ?? "public, max-age=86400, s-maxage=86400";
    const body = await upstream.arrayBuffer();

    return new Response(body, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": cacheControl,
      },
    });
  } catch (error) {
    console.error("[wordpress-image] Failed to proxy image:", error);
    return new Response("Failed to load image", { status: 502 });
  }
}
