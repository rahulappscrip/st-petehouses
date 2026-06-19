export function isRudderEnabled(): boolean {
  return process.env.NEXT_PUBLIC_RUDDER_ENABLED !== "false";
}

export function getRudderWriteKey(): string {
  return process.env.NEXT_PUBLIC_RUDDER_WRITE_KEY ?? "3FLxWuiFHMPKMB2wrYU5fpfZugV";
}

export function getRudderDataPlaneUrl(): string {
  return (
    process.env.NEXT_PUBLIC_RUDDER_DATA_PLANE_URL ??
    "https://reibarmarkpzik.dataplane.rudderstack.com"
  );
}

export function isRudderGeoEnabled(): boolean {
  return process.env.NEXT_PUBLIC_RUDDER_GEO_ENABLED === "true";
}
