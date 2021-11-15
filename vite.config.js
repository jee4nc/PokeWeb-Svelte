import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
// Esto sirve para ocupar tailwind

// Please use normal declarative names in paths
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $src: path.resolve("./src"),
      $services: path.resolve("./src/services"),
      $share: path.resolve("./src/share/"),
      $components: path.resolve("./src/components"),
      $interfaces: path.resolve("./src/interfaces"),
      $utils: path.resolve("./src/utils"),
    },
  },
});
