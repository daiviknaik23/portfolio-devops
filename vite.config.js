import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',

    rollupOptions: {
      output: {

        manualChunks(id) {

          if (id.includes('react-router-dom')) {
            return 'router'
          }

          if (id.includes('framer-motion')) {
            return 'animations'
          }

          if (
            id.includes('chart.js') ||
            id.includes('react-chartjs-2')
          ) {
            return 'charts'
          }

          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }

      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
})