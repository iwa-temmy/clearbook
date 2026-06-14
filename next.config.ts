import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    forceSwcTransforms: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
