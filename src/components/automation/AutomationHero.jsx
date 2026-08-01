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
  { label: 'Connect the stack', dot: 'bg-turmeric-bright' },
  { label: 'Nurture automatically', dot: 'bg-cyan' },
  { label: 'Scale without headcount', dot: 'bg-cyan' },
]

/* A workflow: a trigger branching through a condition into actions */
function WorkflowGraph() {
  const reduceMotion = useReducedMotion()

  const float = (delay, distance = 4, duration = 6) =>
    reduceMotion ? {} : {
      animate: { y: [0, -distance, 0] },
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    }

  const cardCls = accent => `rounded-lg border px-3 py-2.5 shadow-[0_8px_28px_rgba(0,14,33,0.5)]
    ${accent === 'turmeric' ? 'border-turmeric/30' : 'border-cyan/25'}`
  const cardStyle = { background: 'linear-gradient(135deg, rgba(0,40,78,0.96) 0%, rgba(0,26,60,0.96) 100%)' }

  const IconLabel = ({ label, accent = 'cyan', icon }) => (
    <div className="flex items-center gap-2">
      <span className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0
        ${accent === 'turmeric' ? 'bg-turmeric/15' : 'bg-cyan/15'}`}>
        {icon}
      </span>
      <div className="min-w-0">
        <span className={`text-[10px] font-semibold block leading-tight
          ${accent === 'turmeric' ? 'text-turmeric-bright' : 'text-cyan'}`}>{label}</span>
        <div className="h-1 w-10 rounded bg-white/[0.12] mt-1" />
      </div>
    </div>
  )

  return (
    <div className="relative w-full max-w-[400px] mx-auto aspect-[400/340]" aria-hidden="true">
      {/* Connectors */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none">
        {[
          { d: 'M50 14 L50 34', delay: 0.9 },
          { d: 'M50 50 L24 66', delay: 1.05 },
          { d: 'M50 50 L76 66', delay: 1.2 },
        ].map((c, i) => (
          <motion.path key={i} d={c.d} stroke="#00C1FF" strokeWidth="0.5" opacity="0.3"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: c.delay, ease: 'easeOut' }}
          />
        ))}
      </svg>

      {/* Travelling pulses down each branch */}
      {!reduceMotion && [
        { path: [[50, 14], [50, 40], [24, 66]], delay: 2 },
        { path: [[50, 14], [50, 40], [76, 66]], delay: 2.6 },
      ].map((p, i) => (
        <motion.div key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan"
          style={{ boxShadow: '0 0 8px rgba(0,193,255,0.8)' }}
          initial={{ left: '50%', top: '14%', opacity: 0 }}
          animate={{
            left: p.path.map(pt => `${pt[0]}%`),
            top: p.path.map(pt => `${pt[1]}%`),
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 2.6, delay: p.delay, repeat: Infinity, repeatDelay: 1.4, ease: 'linear' }}
        />
      ))}

      {/* Trigger */}
      <motion.div {...fade(0.5)} className="absolute z-10 left-[24%] top-0 w-[52%]">
        <div className={cardCls('turmeric')} style={cardStyle}>
          <IconLabel label="Form submitted" accent="turmeric" icon={
            <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          } />
        </div>
      </motion.div>

      {/* Condition */}
      <motion.div {...fade(0.85)} className="absolute z-10 left-[32%] top-[34%] w-[36%]">
        <div className="rounded-full border border-white/[0.14] px-3 py-2 text-center
          shadow-[0_8px_28px_rgba(0,14,33,0.5)]" style={cardStyle}>
          <span className="text-[10px] font-semibold text-white/70">Engaged?</span>
        </div>
      </motion.div>

      {/* Action 1 */}
      <motion.div {...fade(1.2)} className="absolute z-10 left-0 top-[66%] w-[48%]">
        <motion.div {...float(0.6)} className={cardCls('cyan')} style={cardStyle}>
          <IconLabel label="Send email" accent="cyan" icon={
            <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="#00C1FF" strokeWidth="2.4"/>
              <path d="M22 7l-10 6L2 7" stroke="#00C1FF" strokeWidth="2.4" strokeLinejoin="round"/>
            </svg>
          } />
        </motion.div>
      </motion.div>

      {/* Action 2 */}
      <motion.div {...fade(1.35)} className="absolute z-10 left-[52%] top-[66%] w-[48%]">
        <motion.div {...float(1.4)} className={cardCls('cyan')} style={cardStyle}>
          <IconLabel label="Notify sales" accent="cyan" icon={
            <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
              <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0" stroke="#00C1FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          } />
        </motion.div>
      </motion.div>

      {/* Floating chips */}
      <motion.div {...fade(1.7)} className="absolute -right-2 top-[26%] z-20">
        <motion.div {...float(0.5, 4, 5)}
          className="px-2.5 py-1.5 rounded-lg bg-turmeric/10 border border-turmeric/25">
          <span className="text-[9px] font-semibold text-turmeric-bright">If / then</span>
        </motion.div>
      </motion.div>
      <motion.div {...fade(1.85)} className="absolute -left-2 top-[52%] z-20">
        <motion.div {...float(1.5, 4, 5.5)}
          className="px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/25">
          <span className="text-[9px] font-semibold text-cyan">Runs 24/7</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function AutomationHero() {
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
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-16 items-center">
          <div>
            <motion.div {...fade(0.05)} className="flex items-center gap-2 mb-6">
              <a href="/#capabilities"
                className="text-[11px] font-semibold uppercase tracking-[2px] text-white/40 hover:text-white/70 transition-colors">
                Capabilities
              </a>
              <span className="text-white/25 text-[11px]">/</span>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan">
                Marketing Automation
              </span>
            </motion.div>

            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
              className="text-[clamp(30px,3.2vw,38px)] font-semibold leading-[1.14] tracking-[-0.02em] mb-7"
            >
              <span className="block text-turmeric">
                <Words text="Connect your stack," />
              </span>
              <span className="block text-cyan">
                <Words text="automate the follow-through." />
              </span>
            </motion.h1>

            <motion.p {...fade(0.5)}
              className="text-[17px] leading-relaxed text-white/65 max-w-[520px] mb-4"
            >
              Viavize builds the workflows and systems that connect your tools,
              nurture leads automatically, and keep marketing running consistently
              as you grow.
            </motion.p>

            <motion.p {...fade(0.58)}
              className="text-[17px] leading-relaxed text-white/85 font-medium max-w-[520px] mb-8"
            >
              So the right thing happens every time, without someone remembering
              to do it.
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

          <motion.div {...fade(0.4)} className="lg:pl-4">
            <WorkflowGraph />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
