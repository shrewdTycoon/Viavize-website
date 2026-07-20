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
  { label: 'Communicate value', dot: 'bg-cyan' },
  { label: 'Convert visitors', dot: 'bg-turmeric-bright' },
  { label: 'Support campaigns', dot: 'bg-cyan' },
]

/* Layered browser-frame composition — wireframe pages assembling */
function SiteStack() {
  const reduceMotion = useReducedMotion()

  const float = (delay, distance = 6, duration = 6) =>
    reduceMotion ? {} : {
      animate: { y: [0, -distance, 0] },
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    }

  const Chrome = ({ label }) => (
    <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-white/[0.08]"
      style={{ background: 'rgba(0,35,72,0.85)' }}>
      <span className="w-2 h-2 rounded-full bg-white/15" />
      <span className="w-2 h-2 rounded-full bg-white/15" />
      <span className="w-2 h-2 rounded-full bg-white/15" />
      <span className="ml-2 px-2.5 py-0.5 rounded text-[9px] font-medium text-white/35 bg-white/[0.06]">
        {label}
      </span>
    </div>
  )

  return (
    <div className="relative w-full max-w-[440px] mx-auto aspect-[440/480]" aria-hidden="true">
      {/* Back frame — landing page */}
      <motion.div
        initial={{ opacity: 0, y: 32, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[10%] right-0 w-[74%] z-0"
      >
        <motion.div {...float(1.4)}
          className="rounded-xl overflow-hidden border border-[rgba(0,193,255,0.14)]
            shadow-[0_8px_32px_rgba(0,14,33,0.55)]"
          style={{ background: 'linear-gradient(135deg, rgba(0,32,64,0.95) 0%, rgba(0,24,56,0.95) 100%)' }}
        >
          <Chrome label="yourbrand.com/launch" />
          <div className="p-4 flex flex-col gap-2.5">
            <div className="h-2.5 w-3/5 rounded bg-turmeric/45" />
            <div className="h-1.5 w-full rounded bg-white/10" />
            <div className="h-1.5 w-5/6 rounded bg-white/10" />
            <div className="h-6 w-2/5 rounded-md bg-cyan/50 mt-1" />
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="h-9 rounded bg-white/[0.06] border border-white/[0.07]" />
              <div className="h-9 rounded bg-white/[0.06] border border-white/[0.07]" />
              <div className="h-9 rounded bg-white/[0.06] border border-white/[0.07]" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Front frame — full site */}
      <motion.div
        initial={{ opacity: 0, y: 32, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5 }}
        transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[38%] left-0 w-[80%] z-10"
      >
        <motion.div {...float(0.5)}
          className="rounded-xl overflow-hidden border border-[rgba(0,193,255,0.18)]
            shadow-[0_12px_44px_rgba(0,14,33,0.65)]"
          style={{ background: 'linear-gradient(135deg, rgba(0,32,64,0.97) 0%, rgba(0,24,56,0.97) 100%)' }}
        >
          <Chrome label="yourbrand.com" />
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="h-2 w-14 rounded bg-cyan/50" />
              <div className="flex gap-1.5">
                <div className="h-1.5 w-8 rounded bg-white/12" />
                <div className="h-1.5 w-8 rounded bg-white/12" />
                <div className="h-1.5 w-8 rounded bg-white/12" />
              </div>
            </div>
            <div className="h-3 w-4/5 rounded bg-white/25 mb-1.5" />
            <div className="h-3 w-3/5 rounded bg-cyan/40 mb-2.5" />
            <div className="h-1.5 w-full rounded bg-white/10 mb-1" />
            <div className="h-1.5 w-4/5 rounded bg-white/10 mb-3" />
            <div className="flex gap-2">
              <div className="h-6 w-1/3 rounded-md bg-cyan/50" />
              <div className="h-6 w-1/3 rounded-md bg-white/[0.08] border border-white/[0.12]" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating scope chips */}
      <motion.div {...fade(1.1)} className="absolute top-[2%] left-[4%] z-20">
        <motion.div {...float(0.2, 5, 5)}
          className="px-2.5 py-1.5 rounded-lg bg-turmeric/10 border border-turmeric/25">
          <span className="text-[9px] font-semibold text-turmeric-bright">Message</span>
        </motion.div>
      </motion.div>
      <motion.div {...fade(1.25)} className="absolute top-[30%] right-[2%] z-20">
        <motion.div {...float(1.0, 5, 5.5)}
          className="px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/25">
          <span className="text-[9px] font-semibold text-cyan">Design</span>
        </motion.div>
      </motion.div>
      <motion.div {...fade(1.4)} className="absolute bottom-[4%] left-[55%] z-20">
        <motion.div {...float(1.8, 4, 4.5)}
          className="px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/25">
          <span className="text-[9px] font-semibold text-cyan">Build</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function WebsitesHero() {
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
                Websites &amp; Landing Pages
              </span>
            </motion.div>

            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
              className="text-[clamp(30px,3.2vw,38px)] font-semibold leading-[1.14] tracking-[-0.02em] mb-7"
            >
              <span className="block text-turmeric">
                <Words text="Websites that communicate value," />
              </span>
              <span className="block text-cyan">
                <Words text="and move visitors to act." />
              </span>
            </motion.h1>

            <motion.p {...fade(0.5)}
              className="text-[17px] leading-relaxed text-white/65 max-w-[520px] mb-4"
            >
              Viavize plans, writes, designs, and builds marketing websites and
              landing pages &mdash; starting from positioning and message, not
              from a template.
            </motion.p>

            <motion.p {...fade(0.58)}
              className="text-[17px] leading-relaxed text-white/85 font-medium max-w-[520px] mb-8"
            >
              The result is a site that says the right things to the right
              audience, and guides them toward the next step.
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
              <a href="#work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                  bg-white/[0.06] border border-white/[0.15] text-white text-[15px] font-medium
                  hover:bg-white/[0.1] hover:border-white/[0.25] transition-all duration-200"
              >
                See Our Work
              </a>
            </motion.div>
          </div>

          {/* Visual: browser frames assembling */}
          <motion.div {...fade(0.4)} className="lg:pl-4">
            <SiteStack />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
