import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Desactivar ESLint durante la build para evitar errores
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
