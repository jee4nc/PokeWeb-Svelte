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
      $static: path.resolve("./static"),
      $services: path.resolve("./src/lib/services"),
      $share: path.resolve("./src/lib/share"),
      $components: path.resolve("./src/lib/components"),
      $interfaces: path.resolve("./src/lib/interfaces"),
      $constants: path.resolve("src/lib/constants"),
      $store: path.resolve("src/lib/store"),
      $utils: path.resolve("./src/lib/utils"),
    },
  },
});
