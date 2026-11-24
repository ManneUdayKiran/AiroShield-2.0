/// <reference types="vitest" />
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

function inlineCss(): Plugin {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html;
        let modifiedHtml = html;
        for (const [fileName, asset] of Object.entries(ctx.bundle)) {
          if (fileName.endsWith('.css') && 'source' in asset) {
            const css = typeof asset.source === 'string' ? asset.source : asset.source.toString();
            const escaped = fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const linkRegex = new RegExp(`<link[^>]+href=["'][^"']*${escaped}["'][^>]*>`, 'g');
            modifiedHtml = modifiedHtml.replace(linkRegex, '');
            modifiedHtml = modifiedHtml.replace('</head>', `<style>${css}</style></head>`);
            delete ctx.bundle[fileName];
          }
        }
        return modifiedHtml;
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  build: {
    target: 'es2022',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@google/generative-ai')) return 'vendor-ai';
            if (id.includes('firebase')) return 'vendor-firebase';
            return 'vendor-core';
          }
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
});
