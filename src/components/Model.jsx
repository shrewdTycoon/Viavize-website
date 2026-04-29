import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

const stats = [
  { value: '2x', label: 'Dimensions of Value', detail: 'Topline + Bottomline', color: 'cyan' },
  { value: '4', label: 'Practice Areas', detail: 'Marketing, GTM, AI Assistants', color: 'cyan' },
  { value: 'Embedded', label: 'Engagement Model', detail: 'Not outsourced', color: 'turmeric' },
  { value: 'Parallel', label: 'Execution Style', detail: 'Strategy + execution together', color: 'turmeric' },
]

export default function Model() {
  return (
    <section id="model" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <div>
            <motion.div {...fadeUp}>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
                The Model
              </span>
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-[1.15] mb-5">
                Not a consultant. Not an agency.<br />
                An operating partner.
              </h2>

              {/* Accent underline */}
              <div className="w-12 h-[3px] rounded-full bg-turmeric mb-8" />

              <p className="text-[15px] text-slate leading-relaxed mb-4 max-w-[520px]">
                Traditional consulting delivers a deck. Agencies deliver campaigns.
                Viavize embeds directly into your operations &mdash; owning strategy and
                execution across marketing, go-to-market, and AI implementation.
              </p>
              <p className="text-[15px] text-slate leading-relaxed max-w-[520px]">
                We work as an extension of your leadership team, bringing senior-level
                capability across multiple disciplines &mdash; without the overhead of
                building a full team from scratch.
              </p>
            </motion.div>
          </div>

          {/* Right: stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-2xl p-6 border border-border/80
                  shadow-[0_1px_3px_rgba(0,24,56,0.06),0_4px_12px_rgba(0,24,56,0.04)]
                  hover:shadow-[0_4px_20px_rgba(0,24,56,0.08)] hover:-translate-y-0.5
                  transition-all duration-300"
              >
                {/* Left accent bar */}
                <div className={`absolute top-4 bottom-4 left-0 w-[3px] rounded-r-full
                  ${s.color === 'cyan' ? 'bg-cyan' : 'bg-turmeric'}
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className={`text-[28px] font-semibold mb-1 leading-none
                  ${s.color === 'cyan' ? 'text-cyan' : 'text-turmeric'}
                  ${(s.value === 'Embedded' || s.value === 'Parallel') ? '!text-[20px]' : ''}`}>
                  {s.value}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[1.5px] text-muted mb-1">
                  {s.label}
                </div>
                <div className="text-[13px] text-cyan-dark">{s.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
