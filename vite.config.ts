import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const repoName = 'xafladia'

export default defineConfig({
  base: `/${repoName}/`, // 👈 THIS IS REQUIRED FOR GITHUB PAGES!
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // Enable chunk size warnings
    chunkSizeWarningLimit: 600,
    // Improve code splitting
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          'ui-vendor': ['@heroicons/vue']
        },
        // Ensure clean chunk filenames
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Enable minification and compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Generate sourcemaps for production
    sourcemap: false
  }
})
