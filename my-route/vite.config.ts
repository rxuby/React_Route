import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@functions": path.resolve(__dirname, "src/functions"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@images": path.resolve(__dirname, "src/images"),
      "@fonts": path.resolve(__dirname, "src/fonts"),
      "@api": path.resolve(__dirname, "src/api"),
      "@services": path.resolve(__dirname, "src/services")

    },
    extensions: ['.ts', '.tsx', '.js']
  },

  server: {
    open: true 
  },
})
