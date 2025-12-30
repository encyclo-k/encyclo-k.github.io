import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // GitHub Pages 根路径，如果是子目录则改为 '/repo-name/'
})
