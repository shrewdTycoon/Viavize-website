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
        websites: resolve(__dirname, 'marketing/capabilities/websites/index.html'),
        email: resolve(__dirname, 'marketing/capabilities/email/index.html'),
        content: resolve(__dirname, 'marketing/capabilities/content/index.html'),
        positioning: resolve(__dirname, 'marketing/capabilities/positioning/index.html'),
        strategy: resolve(__dirname, 'marketing/capabilities/strategy/index.html'),
        campaigns: resolve(__dirname, 'marketing/capabilities/campaigns/index.html'),
        seo: resolve(__dirname, 'marketing/capabilities/seo/index.html'),
        paid: resolve(__dirname, 'marketing/capabilities/paid/index.html'),
        outbound: resolve(__dirname, 'marketing/capabilities/outbound/index.html'),
      },
    },
  },
})
