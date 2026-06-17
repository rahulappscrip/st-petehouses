import { NextResponse } from "next/server";

const PLACES_AUTOCOMPLETE_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
/** Tampa Bay center — biases suggestions toward St. Pete / Pinellas service area. */
const SERVICE_AREA_CENTER = "27.7676,-82.6403";
const SERVICE_AREA_RADIUS_METERS = "80000";

type GoogleAutocompleteResponse = {
  status: string;
  error_message?: string;
  predictions?: Array<{
    description: string;
    place_id: string;
  }>;
};

export async function GET(request: Request) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Google Places API is not configured." },
      { status: 503 },
    );
  }

  const { searchParams } = new URL(request.url);
  const input = searchParams.get("input")?.trim() ?? "";

  if (input.length < 3) {
    return NextResponse.json({ predictions: [] });
  }

  const url = new URL(PLACES_AUTOCOMPLETE_URL);
  url.searchParams.set("input", input);
  url.searchParams.set("key", apiKey);
  url.searchParams.set("components", "country:us");
  url.searchParams.set("types", "address");
  url.searchParams.set("location", SERVICE_AREA_CENTER);
  url.searchParams.set("radius", SERVICE_AREA_RADIUS_METERS);

  const response = await fetch(url.toString(), {
    next: { revalidate: 0 },
  });

  const data = (await response.json()) as GoogleAutocompleteResponse;

  if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
    console.error("Google Places Autocomplete error:", data.status, data.error_message);
    return NextResponse.json(
      {
        error: data.error_message ?? `Places API returned ${data.status}`,
        status: data.status,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    predictions: (data.predictions ?? []).map((prediction) => ({
      description: prediction.description,
      placeId: prediction.place_id,
    })),
  });
}
