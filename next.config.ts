import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // Páginas retiradas (automatización de documentos): sus enlaces viejos llevan a la home.
  async redirects() {
    return ["/cotizador", "/modulos", "/neural-docs"].map((source) => ({
      source,
      destination: "/",
      permanent: true,
    }));
  },
};

export default nextConfig;
