import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const stroke = c => (c === 'turmeric' ? '#B8860B' : '#00C1FF')

const aeo = [
  'Structured data & schema',
  'Answer-ready content',
  'Entity & topical authority',
  'Technical SEO health',
  'AI crawlability',
  'Citations & mentions',
]

const types = [
  {
    title: 'Technical SEO',
    desc: 'Site health, speed, crawlability, and the structure search engines need to index you properly.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-2.9.68V22a2 2 0 01-4 0v-.09A1.65 1.65 0 006.6 20.4l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.46 15H4a2 2 0 010-4h.09A1.65 1.65 0 005.6 9.1l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 0011 6.46V6a2 2 0 014 0v.09a1.65 1.65 0 002.9.66l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.54 13H20a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51.99z" stroke={stroke(c)} strokeWidth="2" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Content & On-Page SEO',
    desc: 'Pages built to answer real search intent, optimized to rank without keyword stuffing.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M8 8h8M8 12h8M8 16h5" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'Answer Engine Optimization',
    desc: 'Structure and content that make you the source AI tools quote when your buyers ask.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M19 16l.7 2L22 18.7l-2.3.7L19 22l-.7-2.3L16 18.7l2.3-.7L19 16z" stroke={stroke(c)} strokeWidth="1.6" strokeLinejoin="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'Keyword & Topic Strategy',
    desc: 'The terms and topics worth owning, chosen for real intent and winnability, not vanity volume.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="11" cy="11" r="7" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M21 21l-4.35-4.35" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Authority & Links',
    desc: 'Earning the mentions and links that tell search engines you are worth trusting.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Schema & Local',
    desc: 'Structured data and markup that make your pages machine-readable and locally discoverable.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function SeoTypes() {
  return (
    <section id="what-we-deliver" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            What We Deliver
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            The work that gets you<br className="hidden md:block" /> found, and chosen.
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

        {/* AEO — search is changing */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-5 rounded-2xl p-8 md:p-10 border border-[rgba(0,193,255,0.15)]
            shadow-[0_4px_24px_rgba(0,24,56,0.2)]"
          style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-turmeric-bright mb-3 block">
                Answer Engine Optimization
              </span>
              <h3 className="text-[22px] md:text-[24px] font-semibold text-white leading-snug mb-4">
                Search is changing. So is being found.
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed mb-3">
                More buyers now get their answer from an AI summary than a list of
                blue links. We structure your content and site so you are the
                source those answers cite &mdash; not just a result on page one.
              </p>
              <p className="text-[14px] text-white/75 leading-relaxed font-medium">
                Optimized for the search engines and the answer engines.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {aeo.map(item => (
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
