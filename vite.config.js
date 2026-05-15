import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    // CSS in separate Datei extrahieren (besser für Caching)
    cssCodeSplit: true,
    // Sourcemaps nur im Dev-Mode
    sourcemap: false,
    // Minifizierung aktivieren (esbuild ist Standard und sehr schnell)
    minify: 'esbuild',
    // Größere Chunks erlauben für Vendor-Libraries
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Vendor-Code in eigene Chunks aufteilen
        // -> Browser kann Libraries cachen, auch wenn sich dein Code ändert
        manualChunks: {
          'react-vendor':   ['react', 'react-dom', 'react-router-dom'],
          'emailjs-vendor': ['@emailjs/browser'],
          'markdown':       ['marked'],
        },
      },
    },
  },
})
