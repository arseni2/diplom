import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [new URL("https://ik.imagekit.io/0xi06nwt9/**")]
  }
};

export default nextConfig;
