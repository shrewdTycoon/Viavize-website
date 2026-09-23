import { MotionConfig, motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function ThankYouPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden"
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

          <div className="relative z-10 max-w-[560px] mx-auto px-6 md:px-8 py-28 text-center">
            {/* Animated check */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="w-[72px] h-[72px] rounded-full mx-auto mb-7 flex items-center justify-center
                bg-cyan/10 border border-cyan/30"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <motion.path d="M4 12.5l5 5L20 6.5"
                  stroke="#00C1FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
            </motion.div>

            <motion.h1 {...fade(0.2)}
              className="text-[clamp(30px,4vw,42px)] font-semibold leading-[1.14] tracking-[-0.02em] mb-4"
            >
              <span className="text-white">Thank you. </span>
              <span className="text-cyan">Message received.</span>
            </motion.h1>

            <motion.p {...fade(0.3)}
              className="text-[16px] leading-relaxed text-white/60 mb-9 max-w-[460px] mx-auto"
            >
              We&rsquo;ve received your priorities and will get back to you shortly to
              explore where Viavize can add the right combination of thinking and
              execution.
            </motion.p>

            <motion.div {...fade(0.4)} className="flex flex-wrap items-center justify-center gap-3">
              <a href="/"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                  bg-cyan text-navy text-[15px] font-semibold
                  hover:bg-cyan-90 hover:-translate-y-0.5 active:translate-y-0
                  transition-all duration-200 shadow-[0_4px_24px_rgba(0,193,255,0.25)]"
              >
                Back to Home
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/#capabilities"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                  bg-white/[0.06] border border-white/[0.15] text-white text-[15px] font-medium
                  hover:bg-white/[0.1] hover:border-white/[0.25] transition-all duration-200"
              >
                Explore Capabilities
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </MotionConfig>
  )
}
