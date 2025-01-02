import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // The port your React frontend runs on
    proxy: {
      "/api": {
        target: "http://localhost:5004", // Backend server URL
        changeOrigin: true,
      },
    },
  },
});
