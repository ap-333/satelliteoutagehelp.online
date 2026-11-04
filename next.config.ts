import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: hosted on GitHub Pages, which cannot set response headers or run server code.
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
