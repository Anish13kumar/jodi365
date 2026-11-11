import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the Worker build available; opt into portable HTML with build:static.
  ...(process.env.JODI_STATIC_EXPORT === "1"
    ? { output: "export" }
    : {}),
};

export default nextConfig;
