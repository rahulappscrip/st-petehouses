import https from "node:https";

const WORDPRESS_HOST = "wordpress-1628174-6490314.cloudwaysapps.com";

export function isWordPressMediaUrl(url: string): boolean {
  try {
    return new URL(url).hostname === WORDPRESS_HOST;
  } catch {
    return false;
  }
}

export function toWordPressImageProxy(sourceUrl: string): string {
  return `/api/wordpress-image?src=${encodeURIComponent(sourceUrl)}`;
}

type WordPressFetchInit = RequestInit & {
  next?: { revalidate?: number };
};

export function wordpressFetch(url: string, init: WordPressFetchInit = {}): Promise<Response> {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const method = init.method ?? "GET";
    const headers = init.headers as Record<string, string> | undefined;
    const body = typeof init.body === "string" ? init.body : undefined;

    const req = https.request(
      {
        protocol: parsed.protocol,
        hostname: parsed.hostname,
        port: parsed.port || 443,
        path: `${parsed.pathname}${parsed.search}`,
        method,
        headers,
        rejectUnauthorized: false,
        servername: parsed.hostname,
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (chunk) => chunks.push(chunk as Buffer));
        res.on("end", () => {
          resolve(
            new Response(Buffer.concat(chunks), {
              status: res.statusCode ?? 500,
              statusText: res.statusMessage,
              headers: res.headers as HeadersInit,
            }),
          );
        });
      },
    );

    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}
