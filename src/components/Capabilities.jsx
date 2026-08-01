import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const STROKE = { turmeric: '#B8860B', cyan: '#00C1FF', navy: '#001838' }

const groups = [
  {
    label: 'Strategy & Content',
    dotClass: 'bg-turmeric',
    chipClass: 'bg-turmeric-tint',
    hoverLine: 'via-turmeric',
    accent: 'turmeric',
    items: [
      {
        title: 'Positioning & Messaging',
        desc: 'Clarify what you offer, who it is for, why it matters, and how it should be communicated.',
        href: '/marketing/capabilities/positioning/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <circle cx="12" cy="12" r="9" stroke={s} strokeWidth="2"/>
            <circle cx="12" cy="12" r="4.5" stroke={s} strokeWidth="2" opacity="0.6"/>
            <circle cx="12" cy="12" r="1.5" fill={s}/>
          </svg>
        ),
      },
      {
        title: 'Marketing Strategy',
        desc: 'Define the priorities, audiences, channels, and programs that deserve attention.',
        href: '/marketing/capabilities/strategy/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" stroke={s} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 3v15M15 6v15" stroke={s} strokeWidth="2" opacity="0.5"/>
          </svg>
        ),
      },
      {
        title: 'Campaign Development',
        desc: 'Turn business priorities, launches, events, and market opportunities into focused campaigns.',
        href: '/marketing/capabilities/campaigns/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M3 11l14-5v12L3 13v-2z" stroke={s} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 13v5a2 2 0 004 0v-4" stroke={s} strokeWidth="2" strokeLinecap="round"/>
            <path d="M21 9v4" stroke={s} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          </svg>
        ),
      },
      {
        title: 'Content & Thought Leadership',
        desc: 'Create useful content that builds awareness, establishes credibility, and supports customer decisions.',
        href: '/marketing/capabilities/content/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M12 19l7-7 3 3-7 7-3-3z" stroke={s} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke={s} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Demand & Visibility',
    dotClass: 'bg-cyan',
    chipClass: 'bg-cyan-tint',
    hoverLine: 'via-cyan',
    accent: 'cyan',
    items: [
      {
        title: 'SEO / AEO — Search & AI Visibility',
        desc: 'Improve how your business is discovered across search engines and other digital discovery channels.',
        href: '/marketing/capabilities/seo/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <circle cx="11" cy="11" r="7" stroke={s} strokeWidth="2"/>
            <path d="M21 21l-4.35-4.35" stroke={s} strokeWidth="2" strokeLinecap="round"/>
            <path d="M11 8v6M8 11h6" stroke={s} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          </svg>
        ),
      },
      {
        title: 'Performance Marketing — Paid Media',
        desc: 'Plan, launch, and improve paid campaigns across the channels most relevant to your audience.',
        href: '/marketing/capabilities/paid/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M4 14l4-4 4 4 8-8" stroke={s} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 6h4v4" stroke={s} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        title: 'Email Marketing',
        desc: 'Develop campaigns and automated programs that nurture interest and maintain engagement.',
        href: '/marketing/capabilities/email/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke={s} strokeWidth="2"/>
            <path d="M22 7l-10 6L2 7" stroke={s} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        title: 'Outbound',
        desc: 'Target the right accounts with outreach that starts conversations.',
        href: '/marketing/capabilities/outbound/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M22 2L11 13" stroke={s} strokeWidth="2" strokeLinecap="round"/>
            <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke={s} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Sales & Systems',
    dotClass: 'bg-navy',
    chipClass: 'bg-cloud border border-border',
    hoverLine: 'via-navy',
    accent: 'navy',
    items: [
      {
        title: 'Sales Enablement',
        desc: 'Create presentations, case studies, messaging, collateral, and content that help sales teams sell more effectively.',
        href: '/marketing/capabilities/sales-enablement/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <rect x="2" y="3" width="20" height="13" rx="2" stroke={s} strokeWidth="2"/>
            <path d="M8 21h8M12 16v5" stroke={s} strokeWidth="2" strokeLinecap="round"/>
            <path d="M7 11l3-3 2 2 4-4" stroke={s} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          </svg>
        ),
      },
      {
        title: 'Websites & Landing Pages',
        desc: 'Build digital experiences that communicate value clearly and guide visitors toward the next step.',
        href: '/marketing/capabilities/websites/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <rect x="2" y="3" width="20" height="18" rx="2" stroke={s} strokeWidth="2"/>
            <path d="M2 8h20M6 5.5h.01M9 5.5h.01" stroke={s} strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 13h6M6 17h9" stroke={s} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          </svg>
        ),
      },
      {
        title: 'Marketing Analytics',
        desc: 'Bring greater visibility to performance so teams can make better decisions about what to continue, improve, or stop.',
        href: '/marketing/capabilities/analytics/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M12 20V10" stroke={s} strokeWidth="2" strokeLinecap="round"/>
            <path d="M18 20V4" stroke={s} strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 20v-4" stroke={s} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title: 'Marketing Automation',
        desc: 'Build the workflows and systems that connect your tools, nurture leads automatically, and keep marketing running consistently as you grow.',
        href: '/marketing/capabilities/automation/',
        icon: s => (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <circle cx="5" cy="6" r="3" stroke={s} strokeWidth="2"/>
            <circle cx="19" cy="18" r="3" stroke={s} strokeWidth="2"/>
            <path d="M8 6h8a3 3 0 013 3v1M16 18H8a3 3 0 01-3-3v-1" stroke={s} strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          </svg>
        ),
      },
    ],
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            Strategy, Campaigns, Content, and Execution
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            The capabilities required to<br className="hidden md:block" /> move marketing forward.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {groups.map(group => (
            <div key={group.label}>
              <motion.div {...fadeUp()} className="flex items-center gap-2.5 mb-6">
                <span className={`w-2.5 h-2.5 rounded-full ${group.dotClass}`} />
                <span className="text-[11px] font-semibold uppercase tracking-[2px] text-navy">
                  {group.label}
                </span>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {group.items.map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    {...fadeUp(i * 0.08)}
                    className="group relative bg-white rounded-2xl border border-border/80 overflow-hidden
                      shadow-[0_1px_3px_rgba(0,24,56,0.06),0_4px_12px_rgba(0,24,56,0.04)]
                      hover:shadow-[0_4px_20px_rgba(0,24,56,0.08),0_12px_40px_rgba(0,24,56,0.05)]
                      hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    {/* Gradient border top on hover */}
                    <div className={`h-[2px] transition-opacity duration-300 opacity-0 group-hover:opacity-100
                      bg-gradient-to-r from-transparent ${group.hoverLine} to-transparent`}
                    />
                    <div className="p-6 flex flex-col flex-1">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${group.chipClass}`}>
                        {cap.icon(STROKE[group.accent])}
                      </div>
                      <h3 className="text-[15px] font-semibold text-navy mb-2 leading-snug">{cap.title}</h3>
                      <p className="text-[13px] text-slate leading-relaxed flex-1">{cap.desc}</p>
                      {cap.href && (
                        <a href={cap.href}
                          className="group/link inline-flex items-center gap-1.5 text-[13px] font-medium
                            text-cyan-dark mt-4"
                        >
                          Learn more
                          <span className="transition-transform group-hover/link:translate-x-1">&rarr;</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
