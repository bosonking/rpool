import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mockServer from "vite-plugin-mock-server";

export default defineConfig({
  envPrefix: "PUBLIC_",
  plugins: [
    react(),
    mockServer({
      mockRootDir: "./src/mock",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
