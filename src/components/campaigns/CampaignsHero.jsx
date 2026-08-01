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
  { label: 'One clear idea', dot: 'bg-turmeric-bright' },
  { label: 'Every channel', dot: 'bg-cyan' },
  { label: 'Built to convert', dot: 'bg-cyan' },
]

/* One central idea radiating into channel outputs */
function CampaignSpokes() {
  const reduceMotion = useReducedMotion()

  const float = (delay, distance = 5, duration = 6) =>
    reduceMotion ? {} : {
      animate: { y: [0, -distance, 0] },
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    }

  // Channel nodes positioned around the centre (percentages of the box)
  const channels = [
    { label: 'Email', x: 8, y: 6, color: 'cyan' },
    { label: 'Landing page', x: 58, y: 4, color: 'cyan' },
    { label: 'Paid ad', x: 58, y: 66, color: 'turmeric' },
    { label: 'Social', x: 4, y: 66, color: 'cyan' },
  ]
  // Centre in percentages
  const cx = 42, cy = 40

  return (
    <div className="relative w-full max-w-[400px] mx-auto aspect-[400/360]" aria-hidden="true">
      {/* Connector lines from centre to each channel */}
      <svg viewBox="0 0 100 90" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none">
        {channels.map((ch, i) => (
          <motion.line key={i}
            x1={cx} y1={cy} x2={ch.x + 12} y2={ch.y + 8}
            stroke={ch.color === 'turmeric' ? '#B8860B' : '#00C1FF'}
            strokeWidth="0.4" opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.9 + i * 0.15, ease: 'easeOut' }}
          />
        ))}
      </svg>

      {/* Travelling pulses from centre outward */}
      {!reduceMotion && channels.map((ch, i) => (
        <motion.div key={`p-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: ch.color === 'turmeric' ? '#D4A017' : '#00C1FF',
            boxShadow: `0 0 8px ${ch.color === 'turmeric' ? 'rgba(212,160,23,0.8)' : 'rgba(0,193,255,0.8)'}`,
          }}
          initial={{ left: `${cx}%`, top: `${cy}%`, opacity: 0 }}
          animate={{ left: `${ch.x + 12}%`, top: `${ch.y + 8}%`, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, delay: 2 + i * 0.5, repeat: Infinity, repeatDelay: 1.6, ease: 'linear' }}
        />
      ))}

      {/* Centre idea card — centering lives on a plain wrapper so framer's
          scale animation can't override the translate */}
      <div className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${cx}%`, top: `${cy}%`, width: '46%' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div {...float(0)}
            className="rounded-xl border border-turmeric/35 p-4
              shadow-[0_12px_44px_rgba(0,14,33,0.65)]"
            style={{ background: 'linear-gradient(135deg, rgba(40,30,4,0.6) 0%, rgba(0,24,56,0.97) 65%)' }}
          >
            <span className="text-[9px] font-semibold uppercase tracking-[1px] text-turmeric-bright block mb-2">
              Campaign idea
            </span>
            <div className="h-2 w-full rounded bg-white/[0.2] mb-1.5" />
            <div className="h-2 w-2/3 rounded bg-turmeric/45" />
          </motion.div>
        </motion.div>
      </div>

      {/* Channel cards */}
      {channels.map((ch, i) => (
        <motion.div key={ch.label}
          {...fade(1.3 + i * 0.12)}
          className="absolute z-10"
          style={{ left: `${ch.x}%`, top: `${ch.y}%`, width: '34%' }}
        >
          <motion.div {...float(0.4 + i * 0.3, 4, 5.5)}
            className={`rounded-lg border px-3 py-2.5 shadow-[0_8px_24px_rgba(0,14,33,0.5)]
              ${ch.color === 'turmeric' ? 'border-turmeric/25' : 'border-cyan/22'}`}
            style={{ background: 'linear-gradient(135deg, rgba(0,40,78,0.96) 0%, rgba(0,26,60,0.96) 100%)' }}
          >
            <span className={`text-[9px] font-semibold uppercase tracking-[0.5px] block mb-1.5
              ${ch.color === 'turmeric' ? 'text-turmeric-bright' : 'text-cyan'}`}>
              {ch.label}
            </span>
            <div className="h-1 w-full rounded bg-white/[0.1] mb-1" />
            <div className="h-1 w-3/5 rounded bg-white/[0.1]" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default function CampaignsHero() {
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
                Campaign Development
              </span>
            </motion.div>

            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
              className="text-[clamp(30px,3.2vw,38px)] font-semibold leading-[1.14] tracking-[-0.02em] mb-7"
            >
              <span className="block text-turmeric">
                <Words text="Campaigns built on an idea," />
              </span>
              <span className="block text-cyan">
                <Words text="not just a list of assets." />
              </span>
            </motion.h1>

            <motion.p {...fade(0.5)}
              className="text-[17px] leading-relaxed text-white/65 max-w-[520px] mb-4"
            >
              Viavize turns business priorities, launches, events, and market
              moments into focused campaigns &mdash; with one message carried
              across every channel it runs on.
            </motion.p>

            <motion.p {...fade(0.58)}
              className="text-[17px] leading-relaxed text-white/85 font-medium max-w-[520px] mb-8"
            >
              From the concept to every asset the campaign needs to work.
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
                Types of Campaigns
              </a>
            </motion.div>
          </div>

          <motion.div {...fade(0.4)} className="lg:pl-4">
            <CampaignSpokes />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
