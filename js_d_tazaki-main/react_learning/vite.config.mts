// vite.config.mts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    open: true,
    host: 'localhost',
    port: 33333
  },
  plugins: [react()]
})