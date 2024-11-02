import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: true,
    host: true,
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/vscode-material-icons/generated/icons/*", // Path to the icons folder
          dest: "icons", // Destination folder in the build output
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
