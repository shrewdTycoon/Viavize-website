import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const stroke = c => (c === 'turmeric' ? '#B8860B' : '#00C1FF')

const toDecisions = [
  'Funnel & pipeline metrics',
  'Channel attribution',
  'Campaign reporting',
  'Conversion tracking',
  'Dashboards',
  'Executive reporting',
]

const types = [
  {
    title: 'Marketing Dashboards',
    desc: 'Live views of the metrics that matter, in one place your team actually checks.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke={stroke(c)} strokeWidth="2"/>
        <rect x="13" y="3" width="8" height="5" rx="1.5" stroke={stroke(c)} strokeWidth="2" opacity="0.6"/>
        <rect x="13" y="10" width="8" height="11" rx="1.5" stroke={stroke(c)} strokeWidth="2"/>
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke={stroke(c)} strokeWidth="2" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'Attribution & Reporting',
    desc: 'See which channels and campaigns actually drive pipeline and revenue, not just clicks.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M12 3a9 9 0 019 9h-9V3z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round" opacity="0.55"/>
        <circle cx="12" cy="12" r="1.5" fill={stroke(c)}/>
      </svg>
    ),
  },
  {
    title: 'Funnel & Pipeline Analytics',
    desc: 'Where leads come from, where they stall, and what actually converts to revenue.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Campaign Measurement',
    desc: 'A clear read on what each campaign returned, not just what it cost to run.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 20V4M4 20h16" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 16l3-4 3 2 5-7" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Tracking & Data Setup',
    desc: 'The tags, events, and integrations that make the numbers actually trustworthy.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <ellipse cx="12" cy="5" rx="8" ry="3" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke={stroke(c)} strokeWidth="2" opacity="0.55"/>
      </svg>
    ),
  },
  {
    title: 'Executive Reporting',
    desc: 'The concise report leadership needs to make a call, without the noise.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 2v6h6M8 13l2 2 4-4" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
      </svg>
    ),
  },
]

export default function AnalyticsTypes() {
  return (
    <section id="what-we-deliver" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            What We Deliver
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            Clear visibility, from the<br className="hidden md:block" /> first touch to closed revenue.
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

        {/* From Data to Decisions */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-5 rounded-2xl p-8 md:p-10 border border-[rgba(0,193,255,0.15)]
            shadow-[0_4px_24px_rgba(0,24,56,0.2)]"
          style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-turmeric-bright mb-3 block">
                From Data to Decisions
              </span>
              <h3 className="text-[22px] md:text-[24px] font-semibold text-white leading-snug mb-4">
                The point isn’t the dashboard. It’s the decision.
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed mb-3">
                Plenty of teams have dashboards nobody acts on. We turn scattered
                numbers into a clear read on what is working &mdash; so you know what
                to double down on and what to cut.
              </p>
              <p className="text-[14px] text-white/75 leading-relaxed font-medium">
                Reporting built for decisions, not just charts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {toDecisions.map(item => (
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
