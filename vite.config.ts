import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// change this to your repo name!
const repoName = 'xafladia'

export default defineConfig({
  base: `/${repoName}/`, // 👈 this is for GitHub Pages!
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
