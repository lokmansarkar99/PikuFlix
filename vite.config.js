import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Optional alias for cleaner imports
    },
  },
  server: {
    port: 5173, // Change if needed
    open: true, // Automatically open browser
  },
  build: {
    outDir: "dist", // Default output folder
    sourcemap: true, // Useful for debugging
  },
  define: {
    "process.env": {}, // Ensures compatibility with some libraries
  },
});
