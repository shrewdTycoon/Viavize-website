import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

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
  { label: 'Create demand', dot: 'bg-cyan' },
  { label: 'Support sales', dot: 'bg-turmeric-bright' },
  { label: 'Grow revenue', dot: 'bg-cyan' },
]

const marqueeItems = [
  'Positioning & Messaging', 'Marketing Strategy', 'Campaign Development',
  'Content & Thought Leadership', 'SEO / AEO', 'Performance Marketing',
  'Email Marketing', 'Outbound', 'Sales Enablement',
  'Websites & Landing Pages', 'Marketing Analytics', 'Marketing Automation',
]

/* The "Direction → Execution" thread: a strategy brief dispatching into shipped work */
function ExecutionThread() {
  const reduceMotion = useReducedMotion()

  const cardEntrance = (delay, rotate) => ({
    initial: { opacity: 0, y: 32, rotate: 0 },
    animate: { opacity: 1, y: 0, rotate },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  })

  const float = (delay, distance = 6, duration = 6) =>
    reduceMotion ? {} : {
      animate: { y: [0, -distance, 0] },
      transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
    }

  const execCard = `absolute rounded-xl border border-[rgba(0,193,255,0.16)]
    shadow-[0_8px_32px_rgba(0,14,33,0.55)] backdrop-blur-sm`
  const execCardBg = { background: 'linear-gradient(135deg, rgba(0,32,64,0.92) 0%, rgba(0,24,56,0.92) 100%)' }

  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-[400/540]" aria-hidden="true">
      {/* Thread — drawn on load, pulse travels brief → shipped work */}
      <svg viewBox="0 0 400 540" fill="none" className="absolute inset-0 w-full h-full">
        <motion.path
          d="M128 45 L284 190 L116 331 L272 471"
          stroke="#00C1FF"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.9, ease: 'easeInOut' }}
        />
        {!reduceMotion && (
          <motion.circle
            r="3.5"
            fill="#00C1FF"
            initial={{ opacity: 0 }}
            animate={{
              cx: [128, 284, 116, 272],
              cy: [45, 190, 331, 471],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{ duration: 5, delay: 2.6, repeat: Infinity, repeatDelay: 1.2, ease: 'linear' }}
          />
        )}
      </svg>

      {/* 01 — Senior direction (turmeric brief) */}
      <motion.div {...cardEntrance(0.5, -2)} className="absolute top-0 left-[2%] w-[62%] z-10">
        <motion.div {...float(0)}
          className="rounded-xl border border-turmeric/30 shadow-[0_8px_32px_rgba(0,14,33,0.55)] p-4"
          style={{ background: 'linear-gradient(135deg, rgba(61,40,0,0.55) 0%, rgba(0,24,56,0.92) 70%)' }}
        >
          <span className="text-[9px] font-semibold uppercase tracking-[1.5px] text-turmeric-bright block mb-1.5">
            Senior Direction
          </span>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.12] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="12" cy="12" r="9" stroke="#D4A017" strokeWidth="2"/>
                <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" stroke="#D4A017" strokeWidth="1.8" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-white leading-tight">Strategy brief</div>
              <div className="text-[10.5px] text-white/45 mt-0.5">Positioning · Priorities · Plan</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 02 — Demand (campaign live) */}
      <motion.div {...cardEntrance(0.75, 1.5)} className="absolute top-[27%] right-0 w-[60%] z-10">
        <motion.div {...float(1.2)} className={`${execCard} static p-4`} style={execCardBg}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.12] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M3 11l14-5v12L3 13v-2z" stroke="#00C1FF" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M7 13v5a2 2 0 004 0v-4" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-white leading-tight">Campaign live</div>
              <div className="text-[10.5px] text-white/45 mt-0.5">Demand</div>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse flex-shrink-0" />
          </div>
          {/* Mini bars */}
          <div className="flex items-end gap-1 h-6 mt-3">
            {[8, 13, 10, 17, 14, 21, 24].map((h, i) => (
              <motion.span key={i}
                className="flex-1 rounded-sm bg-cyan/30"
                initial={{ height: 0 }}
                animate={{ height: h }}
                transition={{ delay: 1.3 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* 03 — Sales (enablement shipped) */}
      <motion.div {...cardEntrance(1.0, -1.5)} className="absolute top-[55%] left-0 w-[58%] z-10">
        <motion.div {...float(0.6)} className={`${execCard} static p-4`} style={execCardBg}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.12] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <rect x="2" y="3" width="20" height="13" rx="2" stroke="#00C1FF" strokeWidth="2"/>
                <path d="M8 21h8M12 16v5" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-white leading-tight">Sales deck shipped</div>
              <div className="text-[10.5px] text-white/45 mt-0.5">Sales</div>
            </div>
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 flex-shrink-0">
              <motion.path d="M2.5 8.5l3.5 3.5L13.5 4"
                stroke="#00C1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.7, duration: 0.5, ease: 'easeOut' }}
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* 04 — Revenue (pipeline trending) */}
      <motion.div {...cardEntrance(1.25, 1)} className="absolute top-[76%] right-[2%] w-[62%] z-10">
        <motion.div {...float(1.8)} className={`${execCard} static p-4`} style={execCardBg}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.12] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M4 14l4-4 4 4 8-8" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6h4v4" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-white leading-tight">Pipeline building</div>
              <div className="text-[10.5px] text-white/45 mt-0.5">Revenue</div>
            </div>
          </div>
          {/* Sparkline */}
          <svg viewBox="0 0 180 30" fill="none" className="w-full h-6 mt-3">
            <motion.path
              d="M2 26 C25 24, 40 20, 60 19 S95 16, 115 12 S155 6, 178 3"
              stroke="#00C1FF" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.8, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Parallax: visual drifts down slower than the scroll, text lifts away slightly
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden"
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

      {/* Drifting aurora glows */}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              top: '-15%', left: '-10%',
              background: 'radial-gradient(circle, rgba(0,193,255,0.08) 0%, transparent 60%)',
            }}
            animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              top: '30%', right: '-12%',
              background: 'radial-gradient(circle, rgba(184,134,11,0.07) 0%, transparent 60%)',
            }}
            animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
            transition={{ duration: 22, delay: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-center">
            {/* Text */}
            <motion.div style={{ y: textY }}>
              <motion.h1
                variants={headlineContainer}
                initial="hidden"
                animate="visible"
                className="text-[clamp(32px,3.6vw,42px)] font-semibold leading-[1.14] tracking-[-0.02em] mb-7"
              >
                <span className="block text-turmeric">
                  <Words text="Marketing direction," />
                </span>
                <span className="block text-cyan">
                  <Words text="and the muscle to execute." />
                </span>
              </motion.h1>

              <motion.p {...fade(0.5)}
                className="text-[17px] leading-relaxed text-white/65 max-w-[520px] mb-8"
              >
                Viavize is a marketing partner that combines senior consulting with
                embedded execution &mdash; helping you decide what marketing should do
                next, and bringing the expertise to get it done.
              </motion.p>

              {/* Outcome chips */}
              <motion.div {...fade(0.6)} className="flex flex-wrap gap-2.5 mb-10">
                {outcomes.map(o => (
                  <a key={o.label} href="#what-we-do"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                      border border-white/[0.12] bg-white/[0.05] text-[13px] font-medium text-white/75
                      hover:border-cyan/40 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${o.dot}`} />
                    {o.label}
                  </a>
                ))}
              </motion.div>

              <motion.div {...fade(0.7)} className="flex flex-wrap gap-3">
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
                <a href="#capabilities"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                    bg-white/[0.06] border border-white/[0.15] text-white text-[15px] font-medium
                    hover:bg-white/[0.1] hover:border-white/[0.25] transition-all duration-200"
                >
                  Explore Our Capabilities
                </a>
              </motion.div>
            </motion.div>

            {/* Visual: direction dispatching into shipped work */}
            <motion.div style={{ y: visualY }} className="lg:pl-4">
              <ExecutionThread />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Capability marquee along the fold */}
      <div className="relative z-10 border-t border-white/[0.08]">
        <div
          className="overflow-hidden py-4"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="marquee-track flex items-center w-max whitespace-nowrap">
            {[0, 1].map(copy => (
              <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
                {marqueeItems.map((item, i) => (
                  <span key={item} className="flex items-center">
                    <span className="text-[11px] font-medium uppercase tracking-[1.5px] text-white/35 px-5">
                      {item}
                    </span>
                    <span className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-cyan/40' : 'bg-turmeric/50'}`} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
