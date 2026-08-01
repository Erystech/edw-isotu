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
    minify: 'oxc',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom') || id.includes('/react/') || id.includes('/react-dom/')) {
              return 'vendor';
            }
            if (id.includes('lucide-react')) {
              return 'ui';
            }
          }
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
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600'
    }
  }
})