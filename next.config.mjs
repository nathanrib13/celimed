import { fileURLToPath } from "node:url";

// Definido pelo workflow do GitHub Pages (ex.: "/celimed"). Vazio em ambiente local.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Exportação estática para hospedagem no GitHub Pages.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  // Remove o indicador flutuante do Next em desenvolvimento.
  devIndicators: false,
  // Evita que o Next infira a raiz do workspace a partir de outro lockfile.
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
};

export default nextConfig;
