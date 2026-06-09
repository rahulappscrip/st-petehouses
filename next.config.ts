import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/situations/probate", destination: "/situations/inherited", permanent: true },
      { source: "/situations/mold-damage", destination: "/situations/storm-damage", permanent: true },
      { source: "/situations/hoarder-house", destination: "/situations/sell-as-is", permanent: true },
      { source: "/situations/bankruptcy", destination: "/situations/foreclosure", permanent: true },
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
    ],
  },
};

export default nextConfig;
