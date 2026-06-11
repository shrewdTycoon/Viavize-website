import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const reasons = [
  {
    title: 'Consulting and Execution Together',
    desc: 'We do not stop at recommendations. We execute to turn them into campaigns, content, systems, and finished work.',
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="9" cy="12" r="6" stroke="#00C1FF" strokeWidth="2"/>
        <circle cx="15" cy="12" r="6" stroke="#D4A017" strokeWidth="2" opacity="0.7"/>
      </svg>
    ),
  },
  {
    title: 'Embedded With Your Team',
    desc: 'We work closely with leadership, marketing, sales, product, and external partners.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#00C1FF" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Connected Marketing',
    desc: 'Positioning, campaigns, content, paid media, email, websites, and sales support should reinforce one another.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Comfortable With Complexity',
    desc: 'We take the time to understand the product, market, customer, and technical detail behind what we are marketing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 11l8-4.5M12 11v9M12 11L4 6.5" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Flexible Specialist Depth',
    desc: 'Different priorities require different expertise.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
        <path d="M1 14h6M9 8h6M17 16h6" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function WhyViavize() {
  return (
    <section id="why-viavize" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #003A5C 0%, #001838 60%, #001838 100%)' }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,193,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,193,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 80% 10%, rgba(0,193,255,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan mb-3 block">
            Why Leaders Work With Us
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-white leading-tight max-w-[640px]">
            Senior thinking that goes beyond strategy-only handoff.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              {...fadeUp(i * 0.08)}
              className={`rounded-2xl p-7
                border border-[rgba(0,193,255,0.15)] hover:border-[rgba(0,193,255,0.3)]
                hover:-translate-y-1 transition-all duration-300
                ${r.featured ? 'lg:col-span-2' : ''}`}
              style={{
                background: 'linear-gradient(135deg, #002040 0%, #001838 100%)',
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5
                bg-white/[0.08] border border-white/[0.12]">
                {r.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-white mb-2">{r.title}</h3>
              <p className={`text-[14px] leading-relaxed text-white/55 ${r.featured ? 'max-w-[480px]' : ''}`}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
