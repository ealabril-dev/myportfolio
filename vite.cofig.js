import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 👇 Force Vite to use the ESM entry for react-router
      "react-router": "react-router/dist/index.mjs",
    },
  },
  // For Vercel, base is usually just "/"
  // If you only care about Vercel, set base: "/"
  base: process.env.VITE_BASE_PATH || "/",
});
