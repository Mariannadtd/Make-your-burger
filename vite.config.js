import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5500, // Установите порт, если он отличается от порта по умолчанию (3000)
    onListening: async (server) => {
      const address = server.httpServer.address();
      const isAddressInfo = (x) => typeof x === 'object';
      if (isAddressInfo(address)) {
        // Динамический импорт пакета 'open'
        const open = (await import('open')).default;
        open(`http://localhost:${address.port}`);
      }
    }
  },
});
