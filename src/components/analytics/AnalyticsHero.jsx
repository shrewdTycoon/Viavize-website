import { motion, useReducedMotion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

const headlineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}

const headlineWord = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const Words = ({ text }) => text.split(' ').map((w, i) => (
  <motion.span key={i} variants={headlineWord} className="inline-block mr-[0.26em]">
    {w}
  </motion.span>
))

const outcomes = [
  { label: 'Track performance', dot: 'bg-cyan' },
  { label: 'Attribute results', dot: 'bg-turmeric-bright' },
  { label: 'Report clearly', dot: 'bg-cyan' },
]

/* A marketing dashboard: KPI tiles, a trend line, a funnel, and an insight */
function Dashboard() {
  const reduceMotion = useReducedMotion()

  const float = (delay, distance = 5, duration = 6) =>
    reduceMotion ? {} : {
      animate: { y: [0, -distance, 0] },
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    }

  const kpis = [{ w: 'w-3/4' }, { w: 'w-1/2' }, { w: 'w-4/5' }]
  const funnel = ['w-full', 'w-4/5', 'w-3/5', 'w-2/5']

  return (
    <div className="relative w-full max-w-[410px] mx-auto" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <motion.div {...float(0)}
          className="rounded-xl overflow-hidden border border-[rgba(0,193,255,0.18)]
            shadow-[0_12px_44px_rgba(0,14,33,0.6)]"
          style={{ background: 'linear-gradient(135deg, rgba(0,32,64,0.96) 0%, rgba(0,24,56,0.96) 100%)' }}
        >
          <div className="px-5 py-3 border-b border-white/[0.07] flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[1.5px] text-cyan">
              Marketing dashboard
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          </div>

          <div className="px-4 py-4">
            {/* KPI tiles */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {kpis.map((k, i) => (
                <motion.div key={i} {...fade(0.9 + i * 0.1)}
                  className="rounded-lg bg-white/[0.03] border border-white/[0.06] px-2.5 py-2">
                  <div className="h-1 w-2/3 rounded bg-white/[0.14] mb-1.5" />
                  <div className={`h-2 rounded bg-cyan/45 ${k.w}`} />
                </motion.div>
              ))}
            </div>

            {/* Trend line */}
            <div className="rounded-lg bg-white/[0.02] border border-white/[0.06] p-3 mb-3">
              <svg viewBox="0 0 200 56" fill="none" className="w-full h-14">
                {[14, 28, 42].map(y => (
                  <line key={y} x1="0" y1={y} x2="200" y2={y}
                    stroke="#00C1FF" strokeWidth="0.4" opacity="0.06" strokeDasharray="3 4" />
                ))}
                <motion.path
                  d="M4 48 C30 44, 46 40, 66 34 S104 24, 128 18 S172 8, 196 5"
                  stroke="#00C1FF" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.3, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.path
                  d="M4 50 C30 47, 46 44, 66 41 S104 35, 128 33 S172 27, 196 24"
                  stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.3, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
            </div>

            {/* Funnel */}
            <div className="flex flex-col gap-1.5">
              {funnel.map((w, i) => (
                <motion.div key={i}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`h-2.5 rounded origin-left ${w}
                    ${i === 3 ? 'bg-turmeric/45' : 'bg-cyan/25'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Insight callout */}
      <motion.div {...fade(2.1)}
        className="relative z-10 mt-3 rounded-xl border border-[rgba(184,134,11,0.22)] px-4 py-3
          shadow-[0_8px_28px_rgba(0,14,33,0.5)] flex items-center gap-3"
        style={{ background: 'linear-gradient(135deg, rgba(40,30,4,0.5) 0%, rgba(0,26,60,0.95) 100%)' }}
      >
        <span className="w-7 h-7 rounded-lg bg-turmeric/15 border border-turmeric/25
          flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.5 1 2.5h6c0-1 .4-1.9 1-2.5A6 6 0 0012 3z" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <div className="flex-1">
          <span className="text-[9px] font-semibold uppercase tracking-[1px] text-turmeric-bright block mb-1">
            Insight
          </span>
          <div className="h-1.5 w-4/5 rounded bg-white/[0.14]" />
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div {...fade(2.4)} className="absolute -left-3 top-[14%] z-20">
        <motion.div {...float(0.5, 4, 5)}
          className="px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/25">
          <span className="text-[9px] font-semibold text-cyan">Attribution</span>
        </motion.div>
      </motion.div>
      <motion.div {...fade(2.55)} className="absolute -right-2 top-[46%] z-20">
        <motion.div {...float(1.5, 4, 5.5)}
          className="px-2.5 py-1.5 rounded-lg bg-turmeric/10 border border-turmeric/25">
          <span className="text-[9px] font-semibold text-turmeric-bright">ROI</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function AnalyticsHero() {
  return (
    <section className="relative flex flex-col overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(0,193,255,0.07) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(184,134,11,0.05) 0%, transparent 40%),
          radial-gradient(ellipse at 50% 0%, #002B5C 0%, #001838 55%, #000E21 100%)
        `,
      }}
    >
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,193,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,193,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 pt-36 pb-24 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-20 items-center">
          <div>
            <motion.div {...fade(0.05)} className="flex items-center gap-2 mb-6">
              <a href="/#capabilities"
                className="text-[11px] font-semibold uppercase tracking-[2px] text-white/40 hover:text-white/70 transition-colors">
                Capabilities
              </a>
              <span className="text-white/25 text-[11px]">/</span>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan">
                Marketing Analytics
              </span>
            </motion.div>

            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
              className="text-[clamp(30px,3.2vw,38px)] font-semibold leading-[1.14] tracking-[-0.02em] mb-7"
            >
              <span className="block text-turmeric">
                <Words text="See what's working," />
              </span>
              <span className="block text-cyan">
                <Words text="and what to stop." />
              </span>
            </motion.h1>

            <motion.p {...fade(0.5)}
              className="text-[17px] leading-relaxed text-white/65 max-w-[520px] mb-4"
            >
              Viavize brings visibility to marketing performance &mdash; the
              dashboards, attribution, and reporting that show what is driving
              results, so you can decide what to continue, improve, or stop.
            </motion.p>

            <motion.p {...fade(0.58)}
              className="text-[17px] leading-relaxed text-white/85 font-medium max-w-[520px] mb-8"
            >
              Decisions based on what the data actually says.
            </motion.p>

            <motion.div {...fade(0.66)} className="flex flex-wrap gap-2.5 mb-10">
              {outcomes.map(o => (
                <span key={o.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                    border border-white/[0.12] bg-white/[0.05] text-[13px] font-medium text-white/75"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${o.dot}`} />
                  {o.label}
                </span>
              ))}
            </motion.div>

            <motion.div {...fade(0.74)} className="flex flex-wrap gap-3">
              <a href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                  bg-cyan text-navy text-[15px] font-semibold
                  hover:bg-cyan-90 hover:-translate-y-0.5 active:translate-y-0
                  transition-all duration-200 shadow-[0_4px_24px_rgba(0,193,255,0.25)]"
              >
                Contact Us
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#what-we-deliver"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                  bg-white/[0.06] border border-white/[0.15] text-white text-[15px] font-medium
                  hover:bg-white/[0.1] hover:border-white/[0.25] transition-all duration-200"
              >
                What We Deliver
              </a>
            </motion.div>
          </div>

          <motion.div {...fade(0.4)} className="lg:pl-6">
            <Dashboard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
