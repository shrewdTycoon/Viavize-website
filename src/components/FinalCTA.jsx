import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #000E21 0%, #001838 40%, #002B5C 100%)' }}
    >
      {/* Radial glow — cyan accent */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0,193,255,0.06) 0%, transparent 55%)',
        }}
      />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,193,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,193,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 text-center">
        <motion.div {...fadeUp()}>
          <h2 className="text-[clamp(28px,4vw,44px)] font-semibold text-white leading-[1.15] mb-5">
            Unlock the Next Phase of Growth
          </h2>
        </motion.div>
        <motion.p {...fadeUp(0.1)}
          className="text-[17px] text-white/60 max-w-[520px] mx-auto mb-10 leading-relaxed"
        >
          Viavize helps leadership teams identify where value can be created and
          turn it into outcomes that compound.
        </motion.p>
        <motion.div {...fadeUp(0.2)}>
          <a href="mailto:hello@viavize.com"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl
              bg-cyan text-navy text-[16px] font-semibold
              hover:bg-cyan-90 hover:-translate-y-0.5 active:translate-y-0
              transition-all duration-200 shadow-[0_4px_32px_rgba(0,193,255,0.3)]"
          >
            Contact Us
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
