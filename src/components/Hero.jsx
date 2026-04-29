import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(0,193,255,0.07) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(184,134,11,0.04) 0%, transparent 40%),
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

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 pt-32 pb-40 w-full">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div {...fade(0.1)}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full
                border border-turmeric bg-transparent
                shadow-[0_2px_12px_rgba(184,134,11,0.2)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan">
                An Operating Partner for Growth
              </span>
            </motion.div>

            <motion.h1 {...fade(0.2)}
              className="text-[clamp(36px,5vw,56px)] font-semibold leading-[1.1] mb-6"
            >
              <span className="block text-turmeric">Unlock</span>
              <span className="block text-cyan">Business Value</span>
            </motion.h1>

            <motion.p {...fade(0.35)}
              className="text-[17px] leading-relaxed text-white/65 max-w-[540px] mb-10"
            >
              Viavize is an operating partner that helps leadership teams unlock
              business value &mdash; through topline expansion and capability creation.
            </motion.p>

            <motion.div {...fade(0.5)} className="flex flex-wrap gap-3">
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
              <a href="#practices"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                  bg-white/[0.06] border border-white/[0.15] text-white text-[15px] font-medium
                  hover:bg-white/[0.1] hover:border-white/[0.25] transition-all duration-200"
              >
                Our Practices
              </a>
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div {...fade(0.4)} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="/images/opportunity.jpg"
              alt="Operating partners collaborating"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Navy tint overlay */}
            <div className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(0,24,56,0.45) 0%, rgba(0,35,72,0.3) 50%, rgba(0,24,56,0.5) 100%)',
              }}
            />
          </motion.div>
        </div>
      </div>

    </section>
  )
}
