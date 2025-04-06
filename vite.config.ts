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
  }
})
