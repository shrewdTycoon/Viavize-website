import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

/*
 * ── Adding a piece ─────────────────────────────────────────────────────
 * Content is judged by the writing, so these cards lead with the real
 * headline and a real excerpt — no thumbnails needed.
 *
 *   {
 *     client: 'Alert Enterprise',
 *     type: 'Whitepaper',            // Byline | Article | Whitepaper | Case Study
 *     title: 'The actual published headline',
 *     excerpt: 'A sentence or two lifted from the piece — pick the line
 *               that best shows the thinking, not the intro.',
 *     url: 'https://…',              // optional; omit if gated or unpublished
 *   }
 *
 * TODO: replace the `title` and `excerpt` fields below with the real
 * headlines and pull quotes from the Alert Enterprise / Soterix work.
 * ───────────────────────────────────────────────────────────────────────
 */
const pieces = [
  {
    client: 'Alert Enterprise',
    type: 'Thought Leadership',
    title: 'Add the real published headline here',
    excerpt: 'Replace this with a genuine excerpt from the piece — ideally the sentence that best demonstrates the argument and the subject-matter depth behind it.',
    url: null,
  },
  {
    client: 'Soterix Systems',
    type: 'Technical Content',
    title: 'Add the real published headline here',
    excerpt: 'Replace this with a genuine excerpt — for technical work, choose a passage that shows the writing stayed accurate without becoming unreadable.',
    url: null,
  },
  {
    client: 'Alert Enterprise',
    type: 'Case Study',
    title: 'Add the real published headline here',
    excerpt: 'Replace this with a genuine excerpt — for a case study, the strongest pull quote is usually the customer describing what changed.',
    url: null,
  },
  {
    client: 'Add client',
    type: 'Article',
    title: 'Add the real published headline here',
    excerpt: 'Replace this with a genuine excerpt from another piece worth showing.',
    url: null,
  },
]

const typeAccent = type => {
  const warm = ['Thought Leadership', 'Byline', 'Whitepaper']
  return warm.includes(type)
    ? 'text-turmeric-bright bg-turmeric/[0.12] border-turmeric/30'
    : 'text-cyan bg-cyan/[0.1] border-cyan/25'
}

export default function ContentWork() {
  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #001838 0%, #002348 60%, #001838 100%)' }}
    >
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,193,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,193,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 20% 10%, rgba(0,193,255,0.05) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan mb-3 block">
            Our Work
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-white leading-tight mb-4">
            Content we have written.
          </h2>
          <p className="text-[15px] text-white/55 leading-relaxed max-w-[580px]">
            Selected pieces written for clients in security, technology, and
            other technical markets &mdash; where getting the details right
            matters as much as the writing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {pieces.map((p, i) => (
            <motion.article
              key={i}
              {...fadeUp((i % 2) * 0.1)}
              className="group relative rounded-2xl p-8 flex flex-col
                border border-[rgba(0,193,255,0.15)] hover:border-[rgba(0,193,255,0.3)]
                shadow-[0_4px_24px_rgba(0,24,56,0.2)]
                hover:shadow-[0_8px_40px_rgba(0,24,56,0.3)]
                hover:-translate-y-1 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}
            >
              {/* Type + client */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full
                  text-[10px] font-semibold uppercase tracking-[1px] border ${typeAccent(p.type)}`}>
                  {p.type}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/40">
                  {p.client}
                </span>
              </div>

              {/* The headline — the actual proof */}
              <h3 className="text-[20px] md:text-[21px] font-semibold text-white leading-snug mb-4">
                {p.title}
              </h3>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-turmeric/40 pl-4 mb-6 flex-1">
                <p className="text-[14px] leading-[1.75] text-white/60 italic">
                  {p.excerpt}
                </p>
              </blockquote>

              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-[13px] font-medium text-cyan w-fit"
                >
                  Read the piece
                  <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4m0 0H6m6 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ) : (
                <span className="text-[12.5px] text-white/30">Available on request</span>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
