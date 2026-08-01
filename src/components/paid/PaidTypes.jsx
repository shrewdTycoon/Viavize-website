import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const stroke = c => (c === 'turmeric' ? '#B8860B' : '#00C1FF')

const accountability = [
  'Conversion tracking',
  'Audience targeting',
  'Bid & budget management',
  'Creative testing',
  'Landing page alignment',
  'ROAS reporting',
]

const types = [
  {
    title: 'Paid Search',
    desc: 'Capture demand at the exact moment buyers are searching for a solution like yours.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="11" cy="11" r="7" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M21 21l-4.35-4.35" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Paid Social',
    desc: 'Reach the right audiences on the platforms where they already spend their time.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Display & Retargeting',
    desc: 'Stay in front of the people who already showed interest but have not converted yet.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M3 9h18" stroke={stroke(c)} strokeWidth="2"/>
        <rect x="6" y="12" width="6" height="3" rx="1" fill={stroke(c)} opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Demand Gen & Video',
    desc: 'Build awareness with the right audiences before they are actively in-market.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M10 9l5 3-5 3V9z" fill={stroke(c)} opacity="0.7"/>
      </svg>
    ),
  },
  {
    title: 'Campaign Management',
    desc: 'Ongoing optimization of bids, budgets, audiences, and creative — not set and forget.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 20V4M4 20h16" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 16l3-4 3 2 5-7" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Tracking & Attribution',
    desc: 'The measurement that ties spend to pipeline and revenue, not just clicks.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M12 12l5-3" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill={stroke(c)}/>
      </svg>
    ),
  },
]

export default function PaidTypes() {
  return (
    <section id="what-we-deliver" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            What We Deliver
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            Across every channel worth<br className="hidden md:block" /> putting a budget behind.
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

        {/* Accountability — making media pay back */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-5 rounded-2xl p-8 md:p-10 border border-[rgba(0,193,255,0.15)]
            shadow-[0_4px_24px_rgba(0,24,56,0.2)]"
          style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-turmeric-bright mb-3 block">
                Accountability
              </span>
              <h3 className="text-[22px] md:text-[24px] font-semibold text-white leading-snug mb-4">
                Buying media is easy. Making it pay back is the job.
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed mb-3">
                Anyone can spend a budget. We set up the tracking, targeting, and
                testing that turn spend into pipeline &mdash; and we cut what is not
                working instead of defending it.
              </p>
              <p className="text-[14px] text-white/75 leading-relaxed font-medium">
                Managed to return, and reported honestly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {accountability.map(item => (
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
