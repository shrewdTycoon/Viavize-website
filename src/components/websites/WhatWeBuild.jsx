import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const stroke = c => (c === 'turmeric' ? '#B8860B' : '#00C1FF')

const buildTypes = [
  {
    title: 'Marketing Websites',
    desc: 'Complete company sites that explain what you do, who it is for, and why it matters — structured around how buyers actually evaluate you.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M2 8h20M6 5.5h.01M9 5.5h.01" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 13h6M6 17h9" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Landing Pages',
    desc: 'Focused pages for campaigns, offers, and audiences — built to match the message to the visitor and drive one clear action.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M7 9h10M7 12.5h6" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <rect x="7" y="15.5" width="6" height="2.5" rx="1" fill={stroke(c)}/>
      </svg>
    ),
  },
  {
    title: 'Product & Service Pages',
    desc: 'Pages that translate features into value — and give your sales team something worth sending.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 12l9-5M12 12v10M12 12L3 7" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Website Redesigns',
    desc: 'Rebuilds that fix positioning, structure, and performance — not just the visual layer.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 12a9 9 0 11-2.64-6.36" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 3v6h-6" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Campaign Microsites',
    desc: 'Standalone experiences for launches, events, and programs that need a space of their own.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 11l14-5v12L3 13v-2z" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 13v5a2 2 0 004 0v-4" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 9v4" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Landing Page Systems',
    desc: 'Reusable templates and components so your team can launch new pages without starting from scratch.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke={stroke(c)} strokeWidth="2"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke={stroke(c)} strokeWidth="2" opacity="0.6"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke={stroke(c)} strokeWidth="2" opacity="0.6"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke={stroke(c)} strokeWidth="2"/>
      </svg>
    ),
  },
]

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            What We Build
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            From full websites to<br className="hidden md:block" /> focused campaign pages.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {buildTypes.map((b, i) => (
            <motion.div
              key={b.title}
              {...fadeUp((i % 3) * 0.1)}
              className="group relative bg-white rounded-2xl border border-border/80 overflow-hidden
                shadow-[0_1px_3px_rgba(0,24,56,0.06),0_4px_12px_rgba(0,24,56,0.04)]
                hover:shadow-[0_4px_20px_rgba(0,24,56,0.08),0_12px_40px_rgba(0,24,56,0.05)]
                hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className={`h-[2px] transition-opacity duration-300 opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-transparent ${b.color === 'cyan' ? 'via-cyan' : 'via-turmeric'} to-transparent`}
              />
              <div className="p-7 flex flex-col flex-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5
                  ${b.color === 'cyan' ? 'bg-cyan-tint' : 'bg-turmeric-tint'}`}>
                  {b.icon(b.color)}
                </div>
                <h3 className="text-[16px] font-semibold text-navy mb-2">{b.title}</h3>
                <p className="text-[14px] text-slate leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
