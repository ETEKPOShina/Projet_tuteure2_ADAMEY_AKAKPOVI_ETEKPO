import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    relay: {
      src: "./src",
      artifactDirectory: "./__generated__",
      language: "typescript",
      eagerEsModules: false,
    },
  },
  typescript: {
    ignoreBuildErrors: true, // À utiliser en dernier recours !
  },
  reactStrictMode: false, // Désactive les vérifications React
};

export default nextConfig;
