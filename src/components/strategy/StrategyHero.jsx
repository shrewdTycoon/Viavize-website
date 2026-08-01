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
  { label: 'Set priorities', dot: 'bg-cyan' },
  { label: 'Choose channels', dot: 'bg-turmeric-bright' },
  { label: 'Plan programs', dot: 'bg-cyan' },
]

/* Many candidate activities; a focused few chosen, the rest set aside */
function PriorityFocus() {
  const reduceMotion = useReducedMotion()

  const float = (delay, distance = 5, duration = 6) =>
    reduceMotion ? {} : {
      animate: { y: [0, -distance, 0] },
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    }

  const activities = [
    { label: 'Rebuild positioning', chosen: true },
    { label: 'Conference sponsorship', chosen: false },
    { label: 'Launch nurture program', chosen: true },
    { label: 'Start a podcast', chosen: false },
    { label: 'Website refresh', chosen: true },
    { label: 'Broad paid awareness', chosen: false },
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
              Where to focus
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[1px] text-turmeric-bright">
              This quarter
            </span>
          </div>

          <div className="px-4 py-4 flex flex-col gap-2">
            {activities.map((a, i) => (
              <motion.div key={a.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: a.chosen ? 1 : 0.4, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border
                  ${a.chosen
                    ? 'bg-cyan/[0.08] border-cyan/25'
                    : 'bg-white/[0.02] border-white/[0.06]'}`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0
                  ${a.chosen ? 'bg-cyan/20 border border-cyan/40' : 'border border-white/15'}`}>
                  {a.chosen && (
                    <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5">
                      <path d="M3.5 8.5l3 3L12.5 5" stroke="#00C1FF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                <span className={`text-[11px] font-medium
                  ${a.chosen ? 'text-white' : 'text-white/45 line-through decoration-white/20'}`}>
                  {a.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Mini roadmap */}
      <motion.div {...fade(1.9)}
        className="relative z-10 grid grid-cols-3 gap-2 mt-3">
        {['01', '02', '03'].map((n, i) => (
          <motion.div key={n} {...float(0.4 + i * 0.3, 4, 5.5)}
            className="rounded-lg border border-[rgba(184,134,11,0.22)] px-2.5 py-2.5
              shadow-[0_6px_20px_rgba(0,14,33,0.5)]"
            style={{ background: 'linear-gradient(135deg, rgba(40,30,4,0.5) 0%, rgba(0,26,60,0.95) 100%)' }}
          >
            <span className="text-[13px] font-semibold text-turmeric-bright leading-none block mb-1.5">{n}</span>
            <div className="h-1 w-full rounded bg-white/[0.1] mb-1" />
            <div className="h-1 w-2/3 rounded bg-white/[0.1]" />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating chips */}
      <motion.div {...fade(2.3)} className="absolute -left-3 top-[18%] z-20">
        <motion.div {...float(0.5, 4, 5)}
          className="px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/25">
          <span className="text-[9px] font-semibold text-cyan">Audiences</span>
        </motion.div>
      </motion.div>
      <motion.div {...fade(2.45)} className="absolute -right-2 top-[46%] z-20">
        <motion.div {...float(1.5, 4, 5.5)}
          className="px-2.5 py-1.5 rounded-lg bg-turmeric/10 border border-turmeric/25">
          <span className="text-[9px] font-semibold text-turmeric-bright">Channels</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function StrategyHero() {
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
                Marketing Strategy
              </span>
            </motion.div>

            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
              className="text-[clamp(30px,3.2vw,38px)] font-semibold leading-[1.14] tracking-[-0.02em] mb-7"
            >
              <span className="block text-turmeric">
                <Words text="A focused set of priorities," />
              </span>
              <span className="block text-cyan">
                <Words text="not a longer list of activities." />
              </span>
            </motion.h1>

            <motion.p {...fade(0.5)}
              className="text-[17px] leading-relaxed text-white/65 max-w-[520px] mb-4"
            >
              Viavize defines the priorities, audiences, channels, and programs
              that deserve your attention &mdash; and, just as important, what to
              stop doing.
            </motion.p>

            <motion.p {...fade(0.58)}
              className="text-[17px] leading-relaxed text-white/85 font-medium max-w-[520px] mb-8"
            >
              A plan your team can actually execute, tied to what the business
              needs next.
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
            <PriorityFocus />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
