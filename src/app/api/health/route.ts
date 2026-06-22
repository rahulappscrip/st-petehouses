export function GET() {
  return Response.json(
    { status: "ok", service: "webuystpetehouses.com" },
    {
      headers: {
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
