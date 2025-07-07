import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ignora errores de ESLint al hacer build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
