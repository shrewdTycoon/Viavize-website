import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const stroke = c => (c === 'turmeric' ? '#B8860B' : '#00C1FF')

/* How we get technical accuracy — the part that separates real content
   from generic agency output */
const homework = [
  'SME & executive interviews',
  'Product & technical documentation',
  'Market and competitor research',
  'Customer & sales team input',
  'Technical accuracy review',
  'Your voice and terminology',
]

const contentTypes = [
  {
    title: 'Thought Leadership & Bylines',
    desc: 'Point-of-view pieces published under your executives’ names, built from what they actually think — not from a generic outline.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 19l7-7 3 3-7 7-3-3z" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'Long-Form Articles & Guides',
    desc: 'Depth pieces that answer the questions buyers are actually researching, and that keep earning traffic long after publishing.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M8 7h8M8 11h6" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Whitepapers & Reports',
    desc: 'Substantial, research-backed assets that give demand generation something worth trading an email address for.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 2v6h6" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M8 13h8M8 17h5" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Case Studies & Customer Stories',
    desc: 'Proof told in your buyers’ language — the problem, what changed, and what it was worth.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M9 11l3 3L22 4" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Blog & Editorial Programs',
    desc: 'Consistent publishing on a real editorial calendar, so the site keeps growing instead of going quiet for a quarter.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="17" rx="2" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M3 9h18M8 2v4M16 2v4" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 13h5M7 17h8" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Product & Technical Content',
    desc: 'Explainers, solution pages, and technical material that make a complex product understandable without dumbing it down.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function ContentTypes() {
  return (
    <section id="what-we-write" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            What We Write
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            From a single byline to<br className="hidden md:block" /> a full editorial program.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {contentTypes.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp((i % 3) * 0.1)}
              className="group relative bg-white rounded-2xl border border-border/80 overflow-hidden
                shadow-[0_1px_3px_rgba(0,24,56,0.06),0_4px_12px_rgba(0,24,56,0.04)]
                hover:shadow-[0_4px_20px_rgba(0,24,56,0.08),0_12px_40px_rgba(0,24,56,0.05)]
                hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className={`h-[2px] transition-opacity duration-300 opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-transparent ${c.color === 'cyan' ? 'via-cyan' : 'via-turmeric'} to-transparent`}
              />
              <div className="p-7 flex flex-col flex-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5
                  ${c.color === 'cyan' ? 'bg-cyan-tint' : 'bg-turmeric-tint'}`}>
                  {c.icon(c.color)}
                </div>
                <h3 className="text-[16px] font-semibold text-navy mb-2">{c.title}</h3>
                <p className="text-[14px] text-slate leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The research behind the writing */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-5 rounded-2xl p-8 md:p-10 border border-[rgba(0,193,255,0.15)]
            shadow-[0_4px_24px_rgba(0,24,56,0.2)]"
          style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-turmeric-bright mb-3 block">
                The Homework
              </span>
              <h3 className="text-[22px] md:text-[24px] font-semibold text-white leading-snug mb-4">
                Credibility comes from knowing the subject.
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed mb-3">
                Content that sounds like it was written by someone who has never
                used the product is worse than no content at all. We interview your
                experts, read the documentation, and learn the market before we
                write a word.
              </p>
              <p className="text-[14px] text-white/75 leading-relaxed font-medium">
                This is why we are comfortable with technical products other
                writers avoid.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {homework.map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan/[0.12] border border-cyan/25
                    flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5">
                      <path d="M3.5 8.5l3 3L12.5 5" stroke="#00C1FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[13.5px] text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
