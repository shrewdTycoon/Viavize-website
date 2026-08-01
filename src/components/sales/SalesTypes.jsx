import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const stroke = c => (c === 'turmeric' ? '#B8860B' : '#00C1FF')

const alignment = [
  'Sales narrative',
  'Pitch deck',
  'One-pagers & sell sheets',
  'Case studies',
  'Battlecards',
  'Email & call templates',
]

const types = [
  {
    title: 'Pitch & Sales Decks',
    desc: 'The core presentation reps use to tell your story the same strong way, every time.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="13" rx="2" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M8 21h8M12 16v5" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 11l3-3 2 2 4-4" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'One-Pagers & Sell Sheets',
    desc: 'Leave-behinds that make the value obvious at a glance, for buyers who skim.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 2v6h6M8 13h8M8 17h5" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'Case Studies',
    desc: 'Proof in your buyers’ words, structured around the objection each one answers.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M9 11l3 3L22 4" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Battlecards',
    desc: 'Competitive and objection-handling cards reps can reach for in the moment.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 3l8 4v5c0 4.5-3.4 7.7-8 9-4.6-1.3-8-4.5-8-9V7l8-4z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 8v4M12 15v.01" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'Sales Messaging & Scripts',
    desc: 'The talk tracks, emails, and follow-ups that keep deals moving between meetings.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 11.5a8.38 8.38 0 01-9 8.35 8.5 8.5 0 01-3.4-.65L3 21l1.8-5.6A8.38 8.38 0 013 11.5a8.5 8.5 0 119 8.35" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11h8M8 14h5" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.55"/>
      </svg>
    ),
  },
  {
    title: 'Sales Content & Collateral',
    desc: 'Product sheets, ROI tools, and the rest of the kit reps need to close.',
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

export default function SalesTypes() {
  return (
    <section id="what-we-deliver" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            What We Deliver
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            The kit your reps reach for<br className="hidden md:block" /> on every deal.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {types.map((t, i) => (
            <motion.div
              key={t.title}
              {...fadeUp((i % 3) * 0.1)}
              className="group relative bg-white rounded-2xl border border-border/80 overflow-hidden
                shadow-[0_1px_3px_rgba(0,24,56,0.06),0_4px_12px_rgba(0,24,56,0.04)]
                hover:shadow-[0_4px_20px_rgba(0,24,56,0.08),0_12px_40px_rgba(0,24,56,0.05)]
                hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className={`h-[2px] transition-opacity duration-300 opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-transparent ${t.color === 'cyan' ? 'via-cyan' : 'via-turmeric'} to-transparent`}
              />
              <div className="p-7 flex flex-col flex-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5
                  ${t.color === 'cyan' ? 'bg-cyan-tint' : 'bg-turmeric-tint'}`}>
                  {t.icon(t.color)}
                </div>
                <h3 className="text-[16px] font-semibold text-navy mb-2">{t.title}</h3>
                <p className="text-[14px] text-slate leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alignment — the collateral reps actually use */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-5 rounded-2xl p-8 md:p-10 border border-[rgba(0,193,255,0.15)]
            shadow-[0_4px_24px_rgba(0,24,56,0.2)]"
          style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-turmeric-bright mb-3 block">
                Sales &amp; Marketing Alignment
              </span>
              <h3 className="text-[22px] md:text-[24px] font-semibold text-white leading-snug mb-4">
                The best collateral is the collateral reps actually use.
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed mb-3">
                A beautiful deck no one sends changes nothing. We build material
                around how your deals actually progress &mdash; on-message, easy to
                use, and tied to the moments reps need it.
              </p>
              <p className="text-[14px] text-white/75 leading-relaxed font-medium">
                Built with sales, not just handed to them.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {alignment.map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan/[0.12] border border-cyan/25
                    flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5">
                      <path d="M3.5 8.5l3 3L12.5 5" stroke="#00C1FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[13.5px] text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
