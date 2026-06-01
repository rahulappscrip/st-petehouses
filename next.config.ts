import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/assets/images/we-buy-st-pete-favicon-res.png",
      },
    ];
  },
};

export default nextConfig;
