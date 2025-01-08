import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    ssr: false,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
});
