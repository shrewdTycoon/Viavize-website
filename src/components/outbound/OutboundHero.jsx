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
  { label: 'Target accounts', dot: 'bg-turmeric-bright' },
  { label: 'Personalized outreach', dot: 'bg-cyan' },
  { label: 'Book meetings', dot: 'bg-cyan' },
]

/* A target account list with signals, plus a multi-touch sequence */
function TargetSequence() {
  const reduceMotion = useReducedMotion()

  const float = (delay, distance = 5, duration = 6) =>
    reduceMotion ? {} : {
      animate: { y: [0, -distance, 0] },
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    }

  const accounts = [
    { engaged: false, dot: 'bg-cyan/50' },
    { engaged: true, dot: 'bg-cyan' },
    { engaged: false, dot: 'bg-turmeric/50' },
    { engaged: false, dot: 'bg-cyan/40' },
  ]

  const touches = [
    { label: 'Email', done: true },
    { label: 'LinkedIn', done: true },
    { label: 'Email', done: true },
    { label: 'Call', done: false },
  ]

  return (
    <div className="relative w-full max-w-[400px] mx-auto" aria-hidden="true">
      {/* Target accounts card */}
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
              Target accounts
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[1px] text-white/35">4 of 40</span>
          </div>

          <div className="px-4 py-4 flex flex-col gap-2">
            {accounts.map((a, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border
                  ${a.engaged ? 'bg-cyan/[0.08] border-cyan/25' : 'bg-white/[0.02] border-white/[0.06]'}`}
              >
                <span className={`w-6 h-6 rounded-md flex-shrink-0 ${a.engaged ? 'bg-cyan/15 border border-cyan/30' : 'bg-white/[0.05] border border-white/[0.08]'}`} />
                <div className="flex-1 min-w-0">
                  <div className={`h-1.5 rounded ${a.engaged ? 'bg-white/25 w-2/3' : 'bg-white/[0.12] w-1/2'}`} />
                  <div className="h-1 w-1/3 rounded bg-white/[0.07] mt-1.5" />
                </div>
                {a.engaged ? (
                  <span className="text-[8.5px] font-semibold uppercase tracking-[0.5px] px-1.5 py-0.5 rounded
                    text-cyan bg-cyan/10 border border-cyan/25 flex-shrink-0">Engaged</span>
                ) : (
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.dot}`} />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Touch sequence */}
      <motion.div {...fade(1.7)}
        className="relative z-10 mt-3 rounded-xl border border-[rgba(184,134,11,0.22)] px-4 py-3.5
          shadow-[0_8px_28px_rgba(0,14,33,0.5)]"
        style={{ background: 'linear-gradient(135deg, rgba(40,30,4,0.5) 0%, rgba(0,26,60,0.95) 100%)' }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-[1px] text-turmeric-bright block mb-2.5">
          Sequence
        </span>
        <div className="flex items-center justify-between">
          {touches.map((t, i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center
                  ${t.done ? 'bg-cyan/15 border border-cyan/35' : 'bg-white/[0.04] border border-white/12'}`}>
                  {t.done ? (
                    <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5">
                      <path d="M3.5 8.5l3 3L12.5 5" stroke="#00C1FF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/25" />
                  )}
                </span>
                <span className="text-[7.5px] font-medium text-white/45">{t.label}</span>
              </div>
              {i < touches.length - 1 && (
                <span className={`h-px flex-1 mx-1 ${t.done ? 'bg-cyan/30' : 'bg-white/10'}`} />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div {...fade(2.2)} className="absolute -left-3 top-[14%] z-20">
        <motion.div {...float(0.5, 4, 5)}
          className="px-2.5 py-1.5 rounded-lg bg-turmeric/10 border border-turmeric/25">
          <span className="text-[9px] font-semibold text-turmeric-bright">ICP match</span>
        </motion.div>
      </motion.div>
      <motion.div {...fade(2.35)} className="absolute -right-2 bottom-[20%] z-20">
        <motion.div {...float(1.5, 4, 5.5)}
          className="px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/25">
          <span className="text-[9px] font-semibold text-cyan">Meeting booked</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function OutboundHero() {
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
                Outbound
              </span>
            </motion.div>

            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
              className="text-[clamp(30px,3.2vw,38px)] font-semibold leading-[1.14] tracking-[-0.02em] mb-7"
            >
              <span className="block text-turmeric">
                <Words text="Reach the right accounts," />
              </span>
              <span className="block text-cyan">
                <Words text="start the right conversations." />
              </span>
            </motion.h1>

            <motion.p {...fade(0.5)}
              className="text-[17px] leading-relaxed text-white/65 max-w-[520px] mb-4"
            >
              Viavize builds targeted outbound programs &mdash; the account list, the
              messaging, and the sequences &mdash; that reach the people worth
              reaching, and sound like a person wrote them.
            </motion.p>

            <motion.p {...fade(0.58)}
              className="text-[17px] leading-relaxed text-white/85 font-medium max-w-[520px] mb-8"
            >
              Outbound that opens doors instead of burning the list.
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
            <TargetSequence />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
