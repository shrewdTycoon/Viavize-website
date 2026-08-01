import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const stroke = c => (c === 'turmeric' ? '#B8860B' : '#00C1FF')

const theIdea = [
  'Campaign concept & theme',
  'Key message & offer',
  'Channel plan',
  'Creative & copy',
  'Landing pages',
  'Tracking & measurement',
]

const types = [
  {
    title: 'Launch Campaigns',
    desc: 'Bring products, features, and offerings to market with a coordinated push instead of a quiet release.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 00-3 0z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 12l3 3m8.5-13.5c-4 .5-8 3-11 6l-1 3 3-1c3-3 5.5-7 6-8.5z" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Demand Generation',
    desc: 'Programs designed to create pipeline — not just impressions — with a clear path from interest to conversation.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" stroke={stroke(c)} strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Event & Webinar',
    desc: 'Fill the room or the call, and follow up so the effort turns into actual pipeline afterward.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M8 3l4 4 4-4" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="14" r="2.5" stroke={stroke(c)} strokeWidth="2" opacity="0.55"/>
      </svg>
    ),
  },
  {
    title: 'Account-Based Campaigns',
    desc: 'Focused campaigns aimed at a specific set of target accounts, with messaging built for them.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke={stroke(c)} strokeWidth="2"/>
        <circle cx="12" cy="12" r="4.5" stroke={stroke(c)} strokeWidth="2" opacity="0.6"/>
        <circle cx="12" cy="12" r="1.5" fill={stroke(c)}/>
      </svg>
    ),
  },
  {
    title: 'Seasonal & Moment',
    desc: 'Campaigns tied to the moments your market is already paying attention, so timing works for you.',
    color: 'cyan',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke={stroke(c)} strokeWidth="2"/>
        <path d="M12 7v5l3 2" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Always-On Programs',
    desc: 'Ongoing campaigns that keep generating demand in the gaps between the big pushes.',
    color: 'turmeric',
    icon: c => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 12a9 9 0 11-2.64-6.36" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 3v6h-6" stroke={stroke(c)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function CampaignsTypes() {
  return (
    <section id="what-we-deliver" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            Types of Campaigns
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            The right campaign for<br className="hidden md:block" /> the moment you are in.
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

        {/* The Idea — one concept, carried across every channel */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-5 rounded-2xl p-8 md:p-10 border border-[rgba(0,193,255,0.15)]
            shadow-[0_4px_24px_rgba(0,24,56,0.2)]"
          style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-turmeric-bright mb-3 block">
                The Idea
              </span>
              <h3 className="text-[22px] md:text-[24px] font-semibold text-white leading-snug mb-4">
                A campaign is one idea, told well, everywhere.
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed mb-3">
                We start from a concept and a message, then build the assets around
                it &mdash; so the email, the ad, the landing page, and the social
                post all feel like one campaign, not four disconnected tasks.
              </p>
              <p className="text-[14px] text-white/75 leading-relaxed font-medium">
                One idea, produced end to end and wired for measurement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {theIdea.map(item => (
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
