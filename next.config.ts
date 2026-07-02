import type { NextConfig } from "next";
import { buildHomepageLinkHeader } from "./src/lib/agent-discovery/link-headers";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [{ key: "Link", value: buildHomepageLinkHeader() }],
      },
      {
        source: "/:path*.md",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/situations/probate", destination: "/situations/inherited", permanent: true },
      { source: "/situations/mortgage", destination: "/situations/lien", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-4ee5abe5561c4d33a588ca34bfa5d5a5.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wordpress-1628174-6490314.cloudwaysapps.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
