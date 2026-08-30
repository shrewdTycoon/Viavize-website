// Generates the static HTML entry per resource page (hub + chapters) with SEO
// tags and JSON-LD baked in, so crawlers and answer engines get real metadata
// without executing JS. Re-run after editing chapters.js:  node scripts/gen-resource-pages.mjs
import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { HUB, CHAPTERS, BASE } from '../src/resources/positioning/chapters.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const SITE = 'https://viavize.com'
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function html({ title, description, canonical, entry, jsonld }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${esc(canonical)}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${esc(canonical)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/${entry}"></script>
  </body>
</html>
`
}

const crumb = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
})

// Hub
{
  const url = `${SITE}${BASE}/`
  writeFileSync(
    resolve(ROOT, `marketing/resources/product-positioning/index.html`),
    html({
      title: HUB.seoTitle, description: HUB.meta, canonical: url, entry: 'resource-hub-main.jsx',
      jsonld: {
        '@context': 'https://schema.org', '@graph': [
          { '@type': 'Article', headline: HUB.h1, description: HUB.meta, author: { '@type': 'Organization', name: 'Viavize' }, publisher: { '@type': 'Organization', name: 'Viavize' }, mainEntityOfPage: url },
          { '@type': 'ItemList', itemListElement: CHAPTERS.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.h1, url: `${SITE}${BASE}/${c.slug}` })) },
          crumb([{ name: 'Home', url: SITE }, { name: 'Product Positioning', url }]),
        ],
      },
    }),
  )
}

// Chapters
for (const c of CHAPTERS) {
  const url = `${SITE}${BASE}/${c.slug}`
  const dir = resolve(ROOT, `marketing/resources/product-positioning/${c.slug}`)
  mkdirSync(dir, { recursive: true })
  writeFileSync(
    resolve(dir, 'index.html'),
    html({
      title: c.seoTitle, description: c.meta, canonical: url, entry: 'resource-chapter-main.jsx',
      jsonld: {
        '@context': 'https://schema.org', '@graph': [
          { '@type': 'Article', headline: c.h1, description: c.meta, author: { '@type': 'Organization', name: 'Viavize' }, publisher: { '@type': 'Organization', name: 'Viavize' }, mainEntityOfPage: url, isPartOf: { '@type': 'CreativeWork', name: HUB.h1, url: `${SITE}${BASE}/` } },
          crumb([{ name: 'Home', url: SITE }, { name: 'Product Positioning', url: `${SITE}${BASE}/` }, { name: c.h1, url }]),
        ],
      },
    }),
  )
}

console.log(`Generated hub + ${CHAPTERS.length} chapter pages.`)
