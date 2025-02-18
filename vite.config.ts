import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Quick workaround: cast import.meta to any
const __filename = fileURLToPath((import.meta as any).url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/personal-website",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
