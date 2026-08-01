import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    target: 'es2020',
    // Adapted from 'terser' to avoid requiring new dependencies. 
    // Esbuild is Vite's default and is significantly faster.
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Code splitting strategy for better caching
        manualChunks: {
          // Note: react-helmet-async removed from vendor chunk
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['lucide-react'],
          'markdown': ['react-markdown', 'remark-gfm'],
          'carousel': ['embla-carousel-react']
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && (assetInfo.name.endsWith('.png') || assetInfo.name.endsWith('.jpg') || assetInfo.name.endsWith('.webp'))) {
            return 'assets/images/[name].[hash][extname]'
          }
          if (assetInfo.name && assetInfo.name.endsWith('.woff2')) {
            return 'assets/fonts/[name].[hash][extname]'
          }
          return 'assets/[name].[hash][extname]'
        }
      }
    },
    assetsInlineLimit: 4096 // Inline SVGs < 4KB
  },
  esbuild: {
    // Native Vite way to drop console logs in production
    drop: ['console', 'debugger'],
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600'
    }
  }
})