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
  { label: 'Reach buyers', dot: 'bg-cyan' },
  { label: 'Lower cost per lead', dot: 'bg-turmeric-bright' },
  { label: 'Prove ROAS', dot: 'bg-cyan' },
]

/* An ad performance card with metrics improving */
function PerformanceCard() {
  const reduceMotion = useReducedMotion()

  const float = (delay, distance = 5, duration = 6) =>
    reduceMotion ? {} : {
      animate: { y: [0, -distance, 0] },
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    }

  const bars = [30, 42, 38, 55, 60, 72, 84]
  const metrics = [
    { label: 'CTR', w: 'w-3/4' },
    { label: 'CPL', w: 'w-2/3' },
    { label: 'ROAS', w: 'w-4/5' },
  ]

  return (
    <div className="relative w-full max-w-[400px] mx-auto" aria-hidden="true">
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
              Campaign performance
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          </div>

          <div className="px-5 py-4">
            {/* Mini ad creative */}
            <div className="rounded-lg border border-white/[0.08] p-3 mb-4 bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[8px] font-semibold uppercase tracking-[0.5px] px-1.5 py-0.5 rounded
                  text-turmeric-bright bg-turmeric/10 border border-turmeric/25">Ad</span>
                <div className="h-1.5 w-16 rounded bg-white/[0.14]" />
              </div>
              <div className="h-1.5 w-full rounded bg-white/[0.08] mb-1.5" />
              <div className="h-1.5 w-3/5 rounded bg-white/[0.08] mb-2.5" />
              <div className="h-5 w-1/3 rounded-md bg-cyan/40" />
            </div>

            {/* Metric tiles */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {metrics.map((m, i) => (
                <motion.div key={m.label} {...fade(1 + i * 0.12)}
                  className="rounded-lg bg-white/[0.03] border border-white/[0.06] px-2.5 py-2">
                  <span className="text-[8.5px] font-semibold uppercase tracking-[0.5px] text-white/40 block mb-1.5">
                    {m.label}
                  </span>
                  <div className={`h-1.5 rounded bg-cyan/45 ${m.w}`} />
                </motion.div>
              ))}
            </div>

            {/* Climbing bars + callout */}
            <div className="flex items-end justify-between gap-1 h-10">
              {bars.map((h, i) => (
                <motion.span key={i}
                  className="flex-1 rounded-sm bg-cyan/30"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating chips */}
      <motion.div {...fade(1.9)} className="absolute -right-3 top-[10%] z-20">
        <motion.div {...float(0.4, 4, 5)}
          className="px-2.5 py-1.5 rounded-lg bg-turmeric/10 border border-turmeric/25">
          <span className="text-[9px] font-semibold text-turmeric-bright">+38% ROAS</span>
        </motion.div>
      </motion.div>
      <motion.div {...fade(2.05)} className="absolute -left-3 top-[40%] z-20">
        <motion.div {...float(1.5, 4, 5.5)}
          className="px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/25">
          <span className="text-[9px] font-semibold text-cyan">Google Ads</span>
        </motion.div>
      </motion.div>
      <motion.div {...fade(2.2)} className="absolute -left-2 bottom-[12%] z-20">
        <motion.div {...float(0.9, 4, 4.5)}
          className="px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/25">
          <span className="text-[9px] font-semibold text-cyan">LinkedIn</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function PaidHero() {
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
                Performance Marketing &mdash; Paid Media
              </span>
            </motion.div>

            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
              className="text-[clamp(30px,3.2vw,38px)] font-semibold leading-[1.14] tracking-[-0.02em] mb-7"
            >
              <span className="block text-turmeric">
                <Words text="Paid media that pays back," />
              </span>
              <span className="block text-cyan">
                <Words text="not just spends the budget." />
              </span>
            </motion.h1>

            <motion.p {...fade(0.5)}
              className="text-[17px] leading-relaxed text-white/65 max-w-[520px] mb-4"
            >
              Viavize plans, launches, and improves paid campaigns across the
              channels most relevant to your audience &mdash; managed to pipeline
              and return, not vanity metrics.
            </motion.p>

            <motion.p {...fade(0.58)}
              className="text-[17px] leading-relaxed text-white/85 font-medium max-w-[520px] mb-8"
            >
              Every dollar accountable to a number that matters.
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
            <PerformanceCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
