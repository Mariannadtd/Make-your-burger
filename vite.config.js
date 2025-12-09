import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/Make-your-burger/",

  plugins: [vue()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    port: 5500,
    onListening: async (server) => {
      const address = server.httpServer.address();
      if (typeof address === "object") {
        const open = (await import("open")).default;
        open(`http://localhost:${address.port}`);
      }
    },
  },
});
