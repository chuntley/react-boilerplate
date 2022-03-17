import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import VitePluginLinaria from "vite-plugin-linaria";

export default defineConfig({
  plugins: [react(), VitePluginLinaria()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
