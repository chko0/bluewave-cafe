import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "@svgr/rollup";
import { beasties } from "vite-plugin-beasties";
import path from "path";
import prerender from "vite-plugin-prerender";
import { NAVIGATION } from "./src/config/navigation";

const prerenderRoutes = NAVIGATION.map((item) => item.path);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    beasties({
      options: {
        preload: true,
        pruneSource: false,
      },
    }),
    prerender({
      // The paths from your navigation.js
      staticDir: path.join(__dirname, "dist"),
      routes: [...prerenderRoutes, "/feedback/success"],
      // Wait for the helmet tags to actually be injected
      renderAfterDocumentEvent: "custom-render-trigger",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
});
