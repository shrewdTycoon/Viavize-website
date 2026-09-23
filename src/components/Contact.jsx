import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const inputClasses = `w-full rounded-lg bg-white/[0.06] border border-white/[0.12]
  px-4 py-3 text-[14px] text-white placeholder-white/30
  focus:outline-none focus:border-cyan/60 transition-colors`

export default function Contact() {
  // Formspark redirects here after a successful submission
  const redirectUrl = `${window.location.origin}/thank-you/`

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

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <motion.span {...fadeUp()}
              className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan mb-4 block"
            >
              Contact
            </motion.span>
            <motion.h2 {...fadeUp(0.05)}
              className="text-[clamp(28px,4vw,44px)] font-semibold text-white leading-[1.15] mb-6"
            >
              <span className="block text-turmeric-bright">Your priorities.</span>
              <span className="block">Our marketing expertise.</span>
            </motion.h2>
            <motion.p {...fadeUp(0.12)}
              className="text-[16px] text-white/60 leading-relaxed mb-4 max-w-[480px]"
            >
              Tell us what you are trying to achieve, where execution is slowing
              down, or which marketing priorities need greater momentum.
            </motion.p>
            <motion.p {...fadeUp(0.18)}
              className="text-[16px] text-white/75 leading-relaxed max-w-[480px]"
            >
              We will explore where Viavize can add the right combination of
              thinking and execution.
            </motion.p>
          </div>

          {/* Right: form card */}
          <motion.div {...fadeUp(0.15)}>
            <form
              action="https://submit-form.com/GKbfRQpQR"
              method="POST"
              className="rounded-2xl p-7 md:p-8 bg-white/[0.04] border border-white/[0.1]
                backdrop-blur-sm flex flex-col gap-5"
            >
              <input type="hidden" name="_redirect" value={redirectUrl} />
              {/* Formspark honeypot — hidden from humans, catches bots */}
              <input type="checkbox" name="_honeypot" style={{ display: 'none' }}
                tabIndex="-1" autoComplete="off" />
              <div>
                <label htmlFor="contact-name"
                  className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/40 block mb-2">
                  Name
                </label>
                <input id="contact-name" name="name" type="text" required
                  placeholder="Your name" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="contact-email"
                  className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/40 block mb-2">
                  Work Email
                </label>
                <input id="contact-email" name="email" type="email" required
                  placeholder="you@company.com" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="contact-message"
                  className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/40 block mb-2">
                  What are you trying to achieve?
                </label>
                <textarea id="contact-message" name="message" required rows="4"
                  placeholder="Your goals, priorities, or where execution is slowing down"
                  className={`${inputClasses} resize-none`} />
              </div>
              <button type="submit"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl
                  bg-cyan text-navy text-[15px] font-semibold border-none cursor-pointer
                  hover:bg-cyan-90 hover:-translate-y-0.5 active:translate-y-0
                  transition-all duration-200 shadow-[0_4px_32px_rgba(0,193,255,0.3)]"
              >
                Contact Us
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
