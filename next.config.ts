import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ["192.168.18.177", "localhost"],
  },
};

export default nextConfig;
