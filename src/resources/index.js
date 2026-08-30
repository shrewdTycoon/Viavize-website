// ─────────────────────────────────────────────────────────────────────────
// Marketing resources library — the index behind /marketing/resources/.
// Add a new field guide by appending one entry here (and its own pages);
// the index page and its SEO/JSON-LD pick it up automatically.
// ─────────────────────────────────────────────────────────────────────────

export const RESOURCES_BASE = '/marketing/resources'

export const RESOURCES_SEO = {
  h1: 'Marketing Resources & Field Guides',
  title: 'Marketing Resources & Field Guides | Viavize',
  meta:
    'Practical marketing field guides from Viavize — frameworks you can apply, starting with a step-by-step guide to product positioning.',
}

export const RESOURCES = [
  {
    slug: 'product-positioning',
    title: 'Product Positioning',
    subtitle: 'A Practical, Step-by-Step Framework',
    description:
      'A workshop-style walk through positioning — how to decide who you are for, what you solve, and why it matters, with a running real-world example.',
    url: `${RESOURCES_BASE}/product-positioning/`,
    tags: ['Positioning', 'Go-to-Market'],
    detail: '13 chapters',
    status: 'published', // 'published' | 'coming-soon'
  },
]
