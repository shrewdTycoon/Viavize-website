import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

/*
 * ── NOT YET LIVE ────────────────────────────────────────────────────────
 * This section is built and ready but commented out in WebsitesPage.jsx
 * until real client quotes arrive. To enable:
 * 1. Replace the placeholder entries below with real quotes
 * 2. Uncomment <Testimonials /> in src/pages/WebsitesPage.jsx
 * ────────────────────────────────────────────────────────────────────────
 */
const quotes = [
  {
    quote: 'Replace with a real client quote about the website Viavize delivered.',
    name: 'Client Name',
    role: 'Role, Company',
  },
  {
    quote: 'Replace with a real client quote about working with Viavize.',
    name: 'Client Name',
    role: 'Role, Company',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            What Clients Say
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            Trusted with the site, and the message behind it.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              {...fadeUp(i * 0.12)}
              className="rounded-2xl p-8 border border-[rgba(0,193,255,0.15)]
                shadow-[0_4px_24px_rgba(0,24,56,0.2)]"
              style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}
            >
              {/* Quote mark */}
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 mb-5">
                <path d="M10 8c-3 1-5 3.5-5 7v1h5v-6H7.5C8 9 9 8.5 10 8zm9 0c-3 1-5 3.5-5 7v1h5v-6h-2.5c.5-1 1.5-1.5 2.5-2z"
                  fill="#D4A017" opacity="0.8"/>
              </svg>
              <p className="text-[15px] leading-[1.8] text-white/80 mb-6">
                &ldquo;{q.quote}&rdquo;
              </p>
              <footer>
                <div className="text-[14px] font-semibold text-white">{q.name}</div>
                <div className="text-[12.5px] text-white/45 mt-0.5">{q.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
