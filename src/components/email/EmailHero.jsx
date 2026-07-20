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
  { label: 'Nurture interest', dot: 'bg-cyan' },
  { label: 'Support sales', dot: 'bg-turmeric-bright' },
  { label: 'Retain customers', dot: 'bg-cyan' },
]

/* An automated sequence assembling: sends, waits, and a branch on engagement */
function SequenceFlow() {
  const reduceMotion = useReducedMotion()

  const float = (delay, distance = 5, duration = 6) =>
    reduceMotion ? {} : {
      animate: { y: [0, -distance, 0] },
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    }

  const cardEntrance = (delay, rotate = 0) => ({
    initial: { opacity: 0, y: 28, rotate: 0 },
    animate: { opacity: 1, y: 0, rotate },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  })

  const EmailCard = ({ subject, preview, accent = 'cyan', badge }) => (
    <div className="rounded-xl border overflow-hidden shadow-[0_8px_32px_rgba(0,14,33,0.5)]"
      style={{
        background: 'linear-gradient(135deg, rgba(0,32,64,0.95) 0%, rgba(0,24,56,0.95) 100%)',
        borderColor: accent === 'turmeric' ? 'rgba(184,134,11,0.3)' : 'rgba(0,193,255,0.16)',
      }}
    >
      <div className="flex items-center gap-2.5 px-3.5 py-2.5 border-b border-white/[0.07]">
        <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
          ${accent === 'turmeric' ? 'bg-turmeric/15' : 'bg-cyan/15'}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
            <rect x="2" y="4" width="20" height="16" rx="2"
              stroke={accent === 'turmeric' ? '#D4A017' : '#00C1FF'} strokeWidth="2.5"/>
            <path d="M22 7l-10 6L2 7"
              stroke={accent === 'turmeric' ? '#D4A017' : '#00C1FF'} strokeWidth="2.5" strokeLinejoin="round"/>
          </svg>
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[11.5px] font-semibold text-white leading-tight truncate">{subject}</div>
          <div className="text-[9.5px] text-white/40 mt-0.5 truncate">{preview}</div>
        </div>
        {badge && (
          <span className="text-[8.5px] font-semibold uppercase tracking-[0.5px] px-1.5 py-0.5 rounded
            text-cyan bg-cyan/10 border border-cyan/20 flex-shrink-0">
            {badge}
          </span>
        )}
      </div>
      <div className="px-3.5 py-3 flex flex-col gap-1.5">
        <div className="h-1.5 w-4/5 rounded bg-white/[0.09]" />
        <div className="h-1.5 w-3/5 rounded bg-white/[0.09]" />
        <div className={`h-4 w-1/3 rounded mt-1 ${accent === 'turmeric' ? 'bg-turmeric/40' : 'bg-cyan/40'}`} />
      </div>
    </div>
  )

  const StepChip = ({ label, icon }) => (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full
      bg-white/[0.05] border border-white/[0.12] w-fit">
      {icon}
      <span className="text-[9px] font-semibold uppercase tracking-[0.8px] text-white/50">{label}</span>
    </div>
  )

  return (
    <div className="relative w-full max-w-[380px] mx-auto" aria-hidden="true">
      {/* Connecting thread */}
      <div className="absolute left-[26px] top-[60px] bottom-[60px] w-px bg-gradient-to-b
        from-cyan/40 via-cyan/20 to-turmeric/30" />

      {/* Travelling pulse */}
      {!reduceMotion && (
        <motion.div
          className="absolute left-[23px] w-1.5 h-1.5 rounded-full bg-cyan"
          style={{ boxShadow: '0 0 8px rgba(0,193,255,0.8)' }}
          initial={{ top: 60, opacity: 0 }}
          animate={{ top: [60, 400], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4.5, delay: 2.2, repeat: Infinity, repeatDelay: 1.5, ease: 'linear' }}
        />
      )}

      <div className="relative flex flex-col gap-3.5">
        <motion.div {...cardEntrance(0.45, -1)}>
          <motion.div {...float(0)}>
            <EmailCard subject="Welcome — here's where to start" preview="A short intro to what we do" />
          </motion.div>
        </motion.div>

        <motion.div {...fade(0.75)} className="pl-14">
          <StepChip label="Wait 3 days" icon={
            <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5">
              <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5"/>
              <path d="M12 7v5l3 2" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          } />
        </motion.div>

        <motion.div {...cardEntrance(0.9, 1)}>
          <motion.div {...float(1.2)}>
            <EmailCard subject="How teams like yours solved this" preview="A two-minute customer story" badge="Opened" />
          </motion.div>
        </motion.div>

        <motion.div {...fade(1.2)} className="pl-14">
          <StepChip label="If engaged" icon={
            <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5">
              <path d="M6 3v12a3 3 0 003 3h9" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 15l3 3-3 3" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          } />
        </motion.div>

        <motion.div {...cardEntrance(1.35, -0.5)}>
          <motion.div {...float(0.6)}>
            <EmailCard subject="Want to see it on your data?" preview="Book 20 minutes with our team"
              accent="turmeric" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating engagement metrics */}
      <motion.div {...fade(1.7)} className="absolute -right-2 top-[16%]">
        <motion.div {...float(0.4, 4, 5)}
          className="px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/25">
          <span className="text-[9px] font-semibold text-cyan">Delivered</span>
        </motion.div>
      </motion.div>
      <motion.div {...fade(1.85)} className="absolute -right-3 top-[52%]">
        <motion.div {...float(1.5, 4, 5.5)}
          className="px-2.5 py-1.5 rounded-lg bg-turmeric/10 border border-turmeric/25">
          <span className="text-[9px] font-semibold text-turmeric-bright">Clicked</span>
        </motion.div>
      </motion.div>
      <motion.div {...fade(2)} className="absolute -right-1 bottom-[8%]">
        <motion.div {...float(0.9, 4, 4.5)}
          className="px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/25">
          <span className="text-[9px] font-semibold text-cyan">Replied</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function EmailHero() {
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
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,193,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,193,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 pt-36 pb-24 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div {...fade(0.05)} className="flex items-center gap-2 mb-6">
              <a href="/#capabilities"
                className="text-[11px] font-semibold uppercase tracking-[2px] text-white/40 hover:text-white/70 transition-colors">
                Capabilities
              </a>
              <span className="text-white/25 text-[11px]">/</span>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan">
                Email Marketing
              </span>
            </motion.div>

            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
              className="text-[clamp(30px,3.2vw,38px)] font-semibold leading-[1.14] tracking-[-0.02em] mb-7"
            >
              <span className="block text-turmeric">
                <Words text="Email that reaches the inbox," />
              </span>
              <span className="block text-cyan">
                <Words text="and earns the next step." />
              </span>
            </motion.h1>

            <motion.p {...fade(0.5)}
              className="text-[17px] leading-relaxed text-white/65 max-w-[520px] mb-4"
            >
              Viavize plans, writes, designs, and runs email campaigns and automated
              programs &mdash; from a single launch send to lifecycle programs that
              nurture interest over months.
            </motion.p>

            <motion.p {...fade(0.58)}
              className="text-[17px] leading-relaxed text-white/85 font-medium max-w-[520px] mb-8"
            >
              Built on your list, your platform, and the message that actually
              matters to your audience.
            </motion.p>

            {/* Outcome chips */}
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
              <a href="#what-we-run"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                  bg-white/[0.06] border border-white/[0.15] text-white text-[15px] font-medium
                  hover:bg-white/[0.1] hover:border-white/[0.25] transition-all duration-200"
              >
                What We Run
              </a>
            </motion.div>
          </div>

          {/* Visual: sequence flow */}
          <motion.div {...fade(0.4)} className="lg:pl-4">
            <SequenceFlow />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
