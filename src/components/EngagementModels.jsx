import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const models = [
  {
    title: 'Embedded Marketing Partner',
    p1: 'Ongoing consulting and execution across agreed marketing priorities.',
    p2: 'Best suited for businesses that need consistent senior involvement and delivery capacity.',
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3.5" stroke="#00C1FF" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Focused Marketing Project',
    p1: 'A defined engagement for a positioning exercise, campaign, launch, website, content program, or other clear priority.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 22V4a2 2 0 012-2h12l-3 5 3 5H6" stroke="#00A3D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Marketing Advisory',
    p1: 'Senior guidance for leadership or internal teams that already have execution capacity but need stronger direction, structure, or specialist input.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" stroke="#B8860B" strokeWidth="2"/>
        <path d="M16.2 7.8l-2 6.3-6.3 2 2-6.3 6.3-2z" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function EngagementModels() {
  return (
    <section id="engagement-models" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            Engagement Models
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            Engage Viavize at the level<br className="hidden md:block" /> your business needs.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              {...fadeUp(i * 0.1)}
              className={`rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1
                ${m.featured
                  ? 'border border-[rgba(0,193,255,0.15)] shadow-[0_4px_24px_rgba(0,24,56,0.2)] hover:shadow-[0_8px_40px_rgba(0,24,56,0.3)]'
                  : 'bg-white border border-border/80 shadow-[0_1px_3px_rgba(0,24,56,0.06),0_4px_12px_rgba(0,24,56,0.04)] hover:shadow-[0_4px_20px_rgba(0,24,56,0.08)]'}`}
              style={m.featured ? { background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' } : undefined}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6
                ${m.featured
                  ? 'bg-white/[0.08] border border-white/[0.12]'
                  : i === 2 ? 'bg-turmeric-tint' : 'bg-cyan-tint'}`}>
                {m.icon}
              </div>
              <h3 className={`text-[19px] font-semibold mb-3 ${m.featured ? 'text-white' : 'text-navy'}`}>
                {m.title}
              </h3>
              <p className={`text-[14px] leading-relaxed ${m.featured ? 'text-white/65' : 'text-slate'} ${m.p2 ? 'mb-3' : ''}`}>
                {m.p1}
              </p>
              {m.p2 && (
                <p className={`text-[14px] leading-relaxed ${m.featured ? 'text-white/55' : 'text-slate'}`}>
                  {m.p2}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
