import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
  },
  plugins: [
    react(),
    /** Для работы с иконками как компонентами */
    svgr(),
    /** Для проверки типов */
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      '@/assets': '/src/assets',
      '@/pages': '/src/assets',
      '@/components': '/src/components',
      '@/store': '/src/store',
      '@/hooks': '/src/hooks',
      '@/utils': '/src/utils',
      '@/constants': '/src/constants',
      '@/types': '/src/types',
    },
    /** Список расширений файлов, которые будут импортированы без расширений. */
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx'],
  },
});
