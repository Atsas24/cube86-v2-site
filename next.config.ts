import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to out/ so it can be served from a CDN with no Node
  // server. Every route here is already prerendered, so nothing is lost, and a
  // static host does not spin down the way a free Render web service does.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
