import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
    strictPort: Boolean(process.env.PORT),
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        websites: resolve(__dirname, 'capabilities/websites/index.html'),
        email: resolve(__dirname, 'capabilities/email/index.html'),
        content: resolve(__dirname, 'capabilities/content/index.html'),
      },
    },
  },
})
