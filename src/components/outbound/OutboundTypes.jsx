import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const stroke = c => (c === 'turmeric' ? '#B8860B' : '#00C1FF')

const theList = [
  'ICP & target list',
  'Contact sourcing',
  'Intent & timing signals',
  'Message & sequence design',
  'Personalization',
  'Deliverability & reply handling',
]

const types = [
  {
    title: 'Target Account Lists',
    desc: 'A tight, well-researched list of accounts worth pursuing — not a bulk list you bought.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke={stroke(c)} strokeWidth="2"/>
        <circle cx="12" cy="12" r="4.5" stroke={stroke(c)} strokeWidth="2" opacity="0.6"/>
        <circle cx="12" cy="12" r="1.5" fill={stroke(c)}/>
      </svg>
    ),
  },
  {
    title: 'Outreach Sequences',
    desc: 'Multi-touch email and LinkedIn sequences that read like a person wrote them, because one did.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="5" cy="6" r="2.5" stroke={stroke(c)} strokeWidth="2"/>
        <circle cx="5" cy="18" r="2.5" stroke={stroke(c)} strokeWidth="2"/>
        <circle cx="19" cy="12" r="2.5" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M7.5 6H14a2.5 2.5 0 012.5 2.5v1M7.5 18H14a2.5 2.5 0 002.5-2.5v-1" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'Messaging & Copy',
    desc: 'Outreach built around the account’s problem, not a paragraph about your feature list.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 11.5a8.38 8.38 0 01-9 8.35 8.5 8.5 0 01-3.4-.65L3 21l1.8-5.6A8.38 8.38 0 013 11.5a8.5 8.5 0 119 8.35" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Sales Rep Enablement',
    desc: 'Sequences and talk tracks your reps can actually send and use, without rewriting them.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M19 8v6M16 11h6" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'LinkedIn & Social Selling',
    desc: 'Outreach and presence where your buyers already spend their working day.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Deliverability & Ops',
    desc: 'Domain setup, inbox health, and the tooling that keeps outreach landing, not bouncing.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 3l8 4v5c0 4.5-3.4 7.7-8 9-4.6-1.3-8-4.5-8-9V7l8-4z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function OutboundTypes() {
  return (
    <section id="what-we-deliver" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            What We Deliver
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            The whole outbound motion,<br className="hidden md:block" /> built to get replies.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {types.map((t, i) => (
            <motion.div
              key={t.title}
              {...fadeUp((i % 3) * 0.1)}
              className="group relative bg-white rounded-2xl border border-border/80 overflow-hidden
                shadow-[0_1px_3px_rgba(0,24,56,0.06),0_4px_12px_rgba(0,24,56,0.04)]
                hover:shadow-[0_4px_20px_rgba(0,24,56,0.08),0_12px_40px_rgba(0,24,56,0.05)]
                hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className={`h-[2px] transition-opacity duration-300 opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-transparent ${t.color === 'cyan' ? 'via-cyan' : 'via-turmeric'} to-transparent`}
              />
              <div className="p-7 flex flex-col flex-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5
                  ${t.color === 'cyan' ? 'bg-cyan-tint' : 'bg-turmeric-tint'}`}>
                  {t.icon(t.color)}
                </div>
                <h3 className="text-[16px] font-semibold text-navy mb-2">{t.title}</h3>
                <p className="text-[14px] text-slate leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The List — better outbound is a sharper list */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-5 rounded-2xl p-8 md:p-10 border border-[rgba(0,193,255,0.15)]
            shadow-[0_4px_24px_rgba(0,24,56,0.2)]"
          style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-turmeric-bright mb-3 block">
                The List
              </span>
              <h3 className="text-[22px] md:text-[24px] font-semibold text-white leading-snug mb-4">
                Better outbound is a shorter, sharper list.
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed mb-3">
                Outbound fails when you send more, not better. We start from a
                tight ICP and real signals, then personalize to the account &mdash;
                so you send fewer messages that actually get replies.
              </p>
              <p className="text-[14px] text-white/75 leading-relaxed font-medium">
                Fewer, sharper touches beat a bigger blast every time.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {theList.map(item => (
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
