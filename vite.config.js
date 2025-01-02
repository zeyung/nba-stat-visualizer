import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://nba-stat-visualizer.onrender.com", // Replace with your live backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
