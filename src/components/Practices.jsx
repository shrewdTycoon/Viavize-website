import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const topline = [
  {
    title: 'GTM Practice',
    sub: 'Launch new products and offerings',
    desc: 'Design and operationalize go-to-market systems that consistently generate pipeline — moving beyond founder-led or opportunistic sales toward a structured revenue engine.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M22 2L11 13" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Marketing Practice',
    sub: 'Build Marketing That Drives Revenue',
    desc: 'Strengthen how your business creates demand, communicates value, and supports growth — with systems designed to improve marketing\'s contribution to revenue over time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 20V10" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 20V4" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 20v-4" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Business Development',
    sub: 'Expand Into New Markets and Partnerships',
    desc: 'Drive growth through international expansion, strategic partnerships, and new business channels — opening up new avenues for revenue beyond existing markets.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" stroke="#00C1FF" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#00C1FF" strokeWidth="2"/>
      </svg>
    ),
  },
]

const capability = [
  {
    title: 'Ready-to-Hire AI Assistants',
    sub: 'Deploy AI to Expand Operational Capacity',
    desc: 'Use prebuilt AI assistants to handle repetitive workflows, enabling teams to focus on higher-value work while increasing overall output.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="#B8860B" strokeWidth="2"/>
        <path d="M7 20h10M9 16v4M15 16v4" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="10" r="2" stroke="#B8860B" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Nano GCC',
    sub: 'Build Global Capability Without the Overhead',
    desc: 'Establish lean, high-performance global teams to extend execution capacity across engineering, operations, and business functions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#B8860B" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Managed Teams',
    sub: 'Access Dedicated Execution Capability',
    desc: 'Deploy managed teams aligned to your business priorities — providing consistent execution without the need to build and manage internal departments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M9 11l3 3L22 4" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

function PracticeCard({ practice, index, color }) {
  return (
    <motion.div
      {...fadeUp(index * 0.1)}
      className="group relative bg-white rounded-2xl border border-border/80 overflow-hidden
        shadow-[0_1px_3px_rgba(0,24,56,0.06),0_4px_12px_rgba(0,24,56,0.04)]
        hover:shadow-[0_4px_20px_rgba(0,24,56,0.08),0_12px_40px_rgba(0,24,56,0.05)]
        hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Gradient border top on hover */}
      <div className={`h-[2px] transition-opacity duration-300 opacity-0 group-hover:opacity-100
        ${color === 'cyan'
          ? 'bg-gradient-to-r from-transparent via-cyan to-transparent'
          : 'bg-gradient-to-r from-transparent via-turmeric to-transparent'}`}
      />
      <div className="p-7 flex flex-col flex-1">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5
          ${color === 'cyan' ? 'bg-cyan-tint' : 'bg-turmeric-tint'}`}>
          {practice.icon}
        </div>
        <h4 className="text-[16px] font-semibold text-navy mb-1">{practice.title}</h4>
        <p className={`text-[13px] font-medium mb-3
          ${color === 'cyan' ? 'text-cyan-dark' : 'text-turmeric'}`}>
          {practice.sub}
        </p>
        <p className="text-[14px] text-slate leading-relaxed flex-1 mb-5">
          {practice.desc}
        </p>
        <a href="#"
          className={`group/link inline-flex items-center gap-1.5 text-[13px] font-medium
            ${color === 'cyan' ? 'text-cyan-dark' : 'text-turmeric'}`}
        >
          Learn more
          <span className="transition-transform group-hover/link:translate-x-1">&rarr;</span>
        </a>
      </div>
    </motion.div>
  )
}

export default function Practices() {
  return (
    <section id="practices" className="py-24 md:py-32 bg-cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            What we do
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            Our Practices
          </h2>
        </motion.div>

        {/* Topline Expansion */}
        <div className="mb-14">
          <motion.div {...fadeUp()} className="flex items-center gap-2.5 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan" />
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-navy">
              Topline Expansion
            </span>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {topline.map((p, i) => (
              <PracticeCard key={p.title} practice={p} index={i} color="cyan" />
            ))}
          </div>
        </div>

        {/* Capability Creation */}
        <div>
          <motion.div {...fadeUp()} className="flex items-center gap-2.5 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-turmeric-bright" />
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-navy">
              Capability Creation
            </span>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {capability.map((p, i) => (
              <PracticeCard key={p.title} practice={p} index={i} color="turmeric" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
