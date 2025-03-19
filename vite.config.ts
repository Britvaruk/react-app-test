import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      app: resolve(__dirname, './src/app'),
      pages: resolve(__dirname, './src/pages'),
      features: resolve(__dirname, './src/features'),
      shared: resolve(__dirname, './src/shared'),
    },
  },
  plugins: [react()],
})