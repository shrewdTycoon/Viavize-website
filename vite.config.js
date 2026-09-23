import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { CHAPTERS } from './src/resources/positioning/chapters.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Google Tag Manager — injected into the <head> and <body> of every built HTML
// entry, so all current pages AND any future page added to the build get it
// automatically. Skipped on the dev server so localhost traffic doesn't hit
// analytics. (Only applies to Vite HTML entries; any raw static HTML added
// under public/ would need the snippet inline — there are none today.)
const GTM_ID = 'GTM-PVFG5TSF'
const gtmHead = `<!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');</script>
    <!-- End Google Tag Manager -->`
const gtmBody = `<!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`

function gtm() {
  return {
    name: 'inject-gtm',
    transformIndexHtml(html, ctx) {
      if (ctx.server) return html // dev server: don't load GTM on localhost
      return html
        .replace(/(<head[^>]*>)/i, `$1\n    ${gtmHead}`)
        .replace(/(<body[^>]*>)/i, `$1\n    ${gtmBody}`)
    },
  }
}

// Positioning resource: hub + one page per chapter (see chapters.js).
const resourceInputs = {
  resourcesIndex: resolve(__dirname, 'marketing/resources/index.html'),
  resPositioningHub: resolve(__dirname, 'marketing/resources/product-positioning/index.html'),
  ...Object.fromEntries(
    CHAPTERS.map((c) => [
      `res-${c.slug}`,
      resolve(__dirname, `marketing/resources/product-positioning/${c.slug}/index.html`),
    ]),
  ),
}

export default defineConfig({
  plugins: [react(), gtm()],
  server: {
    port: Number(process.env.PORT) || 5173,
    strictPort: Boolean(process.env.PORT),
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thankYou: resolve(__dirname, 'thank-you/index.html'),
        websites: resolve(__dirname, 'marketing/capabilities/websites/index.html'),
        email: resolve(__dirname, 'marketing/capabilities/email/index.html'),
        content: resolve(__dirname, 'marketing/capabilities/content/index.html'),
        positioning: resolve(__dirname, 'marketing/capabilities/positioning/index.html'),
        strategy: resolve(__dirname, 'marketing/capabilities/strategy/index.html'),
        campaigns: resolve(__dirname, 'marketing/capabilities/campaigns/index.html'),
        seo: resolve(__dirname, 'marketing/capabilities/seo/index.html'),
        paid: resolve(__dirname, 'marketing/capabilities/paid/index.html'),
        outbound: resolve(__dirname, 'marketing/capabilities/outbound/index.html'),
        salesEnablement: resolve(__dirname, 'marketing/capabilities/sales-enablement/index.html'),
        analytics: resolve(__dirname, 'marketing/capabilities/analytics/index.html'),
        automation: resolve(__dirname, 'marketing/capabilities/automation/index.html'),
        ...resourceInputs,
      },
    },
  },
})
