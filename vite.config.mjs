import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false,
    modulePreload: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
      },
    },
    watch: true,
  },
  esbuild: {
    jsxFactory: 'createElement',
    jsxImportSource: '@/lib',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
