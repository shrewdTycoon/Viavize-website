// ─────────────────────────────────────────────────────────────────────────
// Positioning resource — chapter manifest.
//
// The full essay lives verbatim in ./guide.md (single source of truth). Each
// chapter is a SLICE of that file, bounded by the author's own headings
// (startMarker → endMarker). Nothing is retyped per page, so no sentence is
// ever altered — the slice points are pure config and trivially adjustable.
//
// `h1` / `seoTitle` / `meta` are SEO packaging (SERP-informed): the page H1
// replaces the chapter's first author heading; the body renders verbatim.
// Primary/secondary keywords come from the SEMrush research.
// ─────────────────────────────────────────────────────────────────────────

export const BASE = '/marketing/resources/product-positioning'

export const HUB = {
  slug: '',
  h1: 'Product Positioning: A Practical, Step-by-Step Framework',
  seoTitle: 'Product Positioning: A Practical Framework (with Examples) | Viavize',
  meta:
    'A practical, workshop-style guide to product positioning — how to decide who you are for, what you solve, and why it matters, with a running real-world example.',
  primary: 'product positioning',
  secondary: ['positioning in marketing', 'positioning strategy', 'brand positioning', 'what is positioning'],
  // The hub's lede is the essay's opening section.
  startMarker: 'Why Write About Positioning?',
  endMarker: 'Why Positioning Is Important',
}

export const CHAPTERS = [
  {
    slug: 'why-product-positioning-matters',
    h1: 'Why Positioning Is Important in Marketing',
    seoTitle: 'Why Positioning Is Important in Marketing | Viavize',
    meta:
      'Why positioning matters more than ever in an over-communicated, AI-saturated market — and how it turns communication from a flood into a signal.',
    primary: 'why is positioning important',
    secondary: ['positioning in marketing', 'what is positioning', 'meaning of positioning', 'positioning business definition'],
    startMarker: 'Why Positioning Is Important',
    endMarker: 'If It Takes a Prospect Many Meetings to Figure Out What Your Product Even Is, You Have a Positioning Problem',
  },
  {
    slug: 'what-is-product-positioning',
    h1: 'What Is Product Positioning? Definition and Frame of Reference',
    seoTitle: 'What Is Product Positioning? Definition & Examples | Viavize',
    meta:
      'Product positioning defined: it is not what you do to a product, it is what you do to the mind of the prospect. How context and frame of reference shape perceived value.',
    primary: 'what is positioning',
    secondary: ['definition of marketing positioning', 'definition for positioning', 'explain positioning', 'positioning battle for your mind'],
    startMarker: 'If It Takes a Prospect Many Meetings to Figure Out What Your Product Even Is, You Have a Positioning Problem',
    endMarker: 'The Position Created by Default Messaging',
  },
  {
    slug: 'product-messaging-framework',
    h1: 'Product Messaging: Why Feature-First Messaging Falls Flat',
    seoTitle: 'Product Messaging Framework: Inside-Out vs Outside-In | Viavize',
    meta:
      'Most product messaging is built inside-out — a list of features. Why that fails, and how outside-in messaging frames your product the way customers actually think.',
    primary: 'messaging framework',
    secondary: ['brand messaging', 'product messaging', 'messaging strategy', 'messaging vs positioning'],
    startMarker: 'The Position Created by Default Messaging',
    endMarker: 'We want to get started with positioning - should we fill out a Positioning Statement?',
  },
  {
    slug: 'positioning-statement-template-examples',
    h1: 'The Positioning Statement: Template, Examples, and Why It Comes Last',
    seoTitle: 'Positioning Statement: Template & Examples (and the Trap) | Viavize',
    meta:
      'The classic positioning statement template, worked examples, and why filling one in first is a trap — a statement can articulate a position, but it cannot create one.',
    primary: 'positioning statement',
    secondary: ['positioning statement examples', 'positioning statement template', 'brand positioning statement', 'what is a positioning statement'],
    startMarker: 'We want to get started with positioning - should we fill out a Positioning Statement?',
    endMarker: '1. Competing Alternatives',
  },
  {
    slug: 'competitive-alternatives-analysis',
    h1: 'Competitive Alternatives: What Customers Would Use Instead',
    seoTitle: 'Competitive Alternatives in Positioning (with Examples) | Viavize',
    meta:
      'Your real competition is not always another vendor — it is a spreadsheet, a manual process, or doing nothing. How to find the alternatives customers judge you against.',
    primary: 'competitor analysis framework',
    secondary: ['competitive alternatives', 'indirect competitors', 'direct vs indirect competition'],
    startMarker: '1. Competing Alternatives',
    endMarker: '2. Unique Attributes',
  },
  {
    slug: 'product-differentiation-strategy',
    h1: 'Product Differentiation: Finding Your Unique Attributes',
    seoTitle: 'Product Differentiation Strategy: Unique Attributes | Viavize',
    meta:
      'How to uncover the unique attributes only you can credibly claim — the differentiators that become your reason to be chosen. With prompts and examples.',
    primary: 'product differentiation',
    secondary: ['differentiation strategy', 'product differentiation examples', 'what is product differentiation', 'point of differentiation'],
    startMarker: '2. Unique Attributes',
    endMarker: '3. Value Proposition',
  },
  {
    slug: 'value-proposition-framework-examples',
    h1: 'Value Proposition: From Features to Benefits to Value',
    seoTitle: "Value Proposition Framework: The 'So What' Method | Viavize",
    meta:
      "Turn features into a value proposition with the 'So What' method — climb from attribute to benefit to value, and find the level specific enough to own.",
    primary: 'value proposition examples',
    secondary: ['how to write a value proposition', 'value positioning', 'unique value proposition', 'features vs benefits'],
    startMarker: '3. Value Proposition',
    endMarker: '4. Target Audience / Target Market Characteristics',
  },
  {
    slug: 'target-audience-vs-target-market',
    h1: 'Target Audience vs Target Market: Segmentation That Drives Positioning',
    seoTitle: 'Target Audience vs Target Market: Actionable Segmentation | Viavize',
    meta:
      'Demographics and firmographics do not explain why customers buy. Define your target audience by motivation and jobs-to-be-done, then narrow with segmentation.',
    primary: 'target audience vs target market',
    secondary: ['how to identify target audience', 'target audience examples', 'ideal customer profile', 'jobs to be done framework'],
    startMarker: '4. Target Audience / Target Market Characteristics',
    endMarker: 'Iterating Through Four Components and Making Positioning Decisions',
  },
  {
    slug: 'product-positioning-process-framework',
    h1: 'The Positioning Process: Making the Core Decisions',
    seoTitle: 'Product Positioning Process: Locking the Four Components | Viavize',
    meta:
      'How the components of positioning connect — and how to move from exploration to decision: choosing your audience, value proposition, attributes, and alternatives.',
    primary: 'positioning framework',
    secondary: ['positioning process', 'positioning strategy', 'brand positioning strategy', 'market segmentation'],
    startMarker: 'Iterating Through Four Components and Making Positioning Decisions',
    endMarker: '5. Market Category',
  },
  {
    slug: 'market-category-positioning',
    h1: 'Market Category: The Mental Box Customers Put You In',
    seoTitle: 'Market Category in Positioning (with Examples) | Viavize',
    meta:
      'Your market category is the frame customers use to understand what you are. How to choose the category that makes your value obvious — and when to redefine it.',
    primary: 'market category',
    secondary: ['product category', 'category creation', 'category design', 'product category examples'],
    startMarker: '5. Market Category',
    endMarker: '6. Associations',
  },
  {
    slug: 'brand-associations-examples',
    h1: 'Brand Associations: Building Mental Shortcuts to Your Product',
    seoTitle: 'Brand Associations: Examples and How They Work | Viavize',
    meta:
      'Associations are the mental shortcuts that make customers recall you at the right moment. Examples — an enemy, a weakness, an origin story — and how to build your own.',
    primary: 'brand associations',
    secondary: ['brand association examples', 'brand perception', 'brand recall', 'mental availability'],
    startMarker: '6. Associations',
    endMarker: '7. Trends',
  },
  {
    slug: 'positioning-trends-why-now',
    h1: "Trends and the 'Why Now': Making Your Positioning Timely",
    seoTitle: "Positioning and Trends: Nailing the 'Why Now' | Viavize",
    meta:
      'A well-chosen trend answers the buyer’s real question: why should I care now? How to ride a movement your audience already cares about — without chasing hype.',
    primary: 'why now slide',
    secondary: ['marketing trends 2026', 'positioning trends', 'trend based marketing'],
    startMarker: '7. Trends',
    endMarker: 'Bringing It All Together',
  },
  {
    slug: 'positioning-framework-one-pager',
    h1: 'Bringing It Together: Your Positioning on One Page',
    seoTitle: 'Positioning Framework: The One-Page Summary & Alignment | Viavize',
    meta:
      'Turn seven components into a single, unified positioning narrative — a one-page articulation, the positioning cube, and how to align the whole team behind it.',
    primary: 'positioning framework',
    secondary: ['brand positioning statement', 'go to market strategy', 'positioning template'],
    startMarker: 'Bringing It All Together',
    endMarker: null, // to end of file
  },
]

export const bySlug = (slug) => CHAPTERS.find((c) => c.slug === slug) || null
export const chapterUrl = (slug) => (slug ? `${BASE}/${slug}` : `${BASE}/`)

/**
 * Slice the chapter's verbatim body out of the full guide, between its
 * startMarker heading and the next chapter's (endMarker). The first heading
 * line is dropped — the SEO H1 replaces it — everything else is untouched.
 */
export function sliceBody(guide, chapter) {
  const startIdx = guide.indexOf(`# ${chapter.startMarker}`)
  if (startIdx === -1) return ''
  const afterHeading = guide.indexOf('\n', startIdx)
  const endIdx = chapter.endMarker ? guide.indexOf(`# ${chapter.endMarker}`) : guide.length
  return guide.slice(afterHeading + 1, endIdx === -1 ? guide.length : endIdx).trim()
}
