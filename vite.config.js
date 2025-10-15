import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Função inteligente para detectar o ambiente
function getBasePath() {
  if (process.env.GITHUB_ACTIONS === "true" || process.env.CI === "true") {
    return "/bolaCristal_frontEnd/"; // GitHub Pages
  }

  if (process.env.VERCEL || process.env.COOLIFY) {
    return "/"; // Coolify, Vercel, etc.
  }

  if (process.env.NODE_ENV === "development") {
    return "/"; // Localhost
  }

  return "/"; // fallback padrão
}

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
  },
});
