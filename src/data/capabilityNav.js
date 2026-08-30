// Lean capability list for the nav dropdown — concise labels (the homepage
// Capabilities section keeps its own richer copy + icons). Grouped to mirror
// that section so the two read consistently.
export const CAP_GROUPS = [
  {
    label: 'Strategy & Content',
    dot: 'bg-turmeric',
    items: [
      { title: 'Positioning & Messaging', href: '/marketing/capabilities/positioning/' },
      { title: 'Marketing Strategy', href: '/marketing/capabilities/strategy/' },
      { title: 'Campaign Development', href: '/marketing/capabilities/campaigns/' },
      { title: 'Content & Thought Leadership', href: '/marketing/capabilities/content/' },
    ],
  },
  {
    label: 'Demand & Visibility',
    dot: 'bg-cyan',
    items: [
      { title: 'SEO / AEO', href: '/marketing/capabilities/seo/' },
      { title: 'Performance Marketing', href: '/marketing/capabilities/paid/' },
      { title: 'Email Marketing', href: '/marketing/capabilities/email/' },
      { title: 'Outbound', href: '/marketing/capabilities/outbound/' },
    ],
  },
  {
    label: 'Sales & Systems',
    dot: 'bg-navy',
    items: [
      { title: 'Sales Enablement', href: '/marketing/capabilities/sales-enablement/' },
      { title: 'Websites & Landing Pages', href: '/marketing/capabilities/websites/' },
      { title: 'Marketing Analytics', href: '/marketing/capabilities/analytics/' },
      { title: 'Marketing Automation', href: '/marketing/capabilities/automation/' },
    ],
  },
]
