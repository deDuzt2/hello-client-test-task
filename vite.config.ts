import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: false,
        svgo: false,
        titleProp: true,
      },

      include: "**/*.svg",
    }),
  ],
  base: "/hello-client-test-task/",
});
