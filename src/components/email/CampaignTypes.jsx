import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const stroke = c => (c === 'turmeric' ? '#B8860B' : '#00C1FF')

const deliverability = [
  'Domain authentication (SPF, DKIM, DMARC)',
  'Sender reputation & warm-up',
  'List hygiene & suppression',
  'Inbox placement testing',
  'Bounce & complaint monitoring',
  'Compliance (CAN-SPAM, GDPR)',
]

const campaignTypes = [
  {
    title: 'Campaign Sends',
    desc: 'One-off campaigns for launches, events, announcements, and offers — planned, written, designed, and sent.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M22 2L11 13" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Nurture Programs',
    desc: 'Multi-step sequences that educate over time, so interest turns into a conversation instead of going cold.',
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
    title: 'Lifecycle & Automation',
    desc: 'Onboarding, re-engagement, and retention programs triggered by what people actually do.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 12a9 9 0 11-2.64-6.36" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 3v6h-6" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2.5" stroke={stroke(c)} strokeWidth="2" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Newsletters',
    desc: 'A regular publication that keeps you present with your audience between buying moments.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M6 9h7M6 13h9M6 16h5" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.55"/>
      </svg>
    ),
  },
  {
    title: 'Sales Outreach Sequences',
    desc: 'Email that supports the sales team — sequences reps can send that sound like people, not templates.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 11.5a8.38 8.38 0 01-9 8.35 8.5 8.5 0 01-3.4-.65L3 21l1.8-5.6A8.38 8.38 0 013 11.5a8.5 8.5 0 119 8.35" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11h8M8 14h5" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" opacity="0.55"/>
      </svg>
    ),
  },
  {
    title: 'Segmentation & List Strategy',
    desc: 'Who gets what, and when — so the right message reaches the right part of your list.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 5h18M6 12h12M10 19h4" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function CampaignTypes() {
  return (
    <section id="what-we-run" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            What We Run
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            From a single send to<br className="hidden md:block" /> programs that run for months.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {campaignTypes.map((c, i) => (
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

        {/* Deliverability — the unglamorous half of email that decides everything */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-5 rounded-2xl p-8 md:p-10 border border-[rgba(0,193,255,0.15)]
            shadow-[0_4px_24px_rgba(0,24,56,0.2)]"
          style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-turmeric-bright mb-3 block">
                Deliverability
              </span>
              <h3 className="text-[22px] md:text-[24px] font-semibold text-white leading-snug mb-4">
                A campaign that lands in spam never had a chance.
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed mb-3">
                Getting to the inbox is a technical problem before it is a creative
                one. We handle the authentication, list health, and sender reputation
                work that decides whether your email is seen at all.
              </p>
              <p className="text-[14px] text-white/75 leading-relaxed font-medium">
                Most email problems we are asked to fix turn out to start here.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {deliverability.map(item => (
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
