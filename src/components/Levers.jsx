import { motion } from 'framer-motion'
import ImagePlaceholder from './ImagePlaceholder'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const levers = [
  {
    tag: 'Topline Expansion',
    headline: 'Accelerate Revenue Growth',
    desc: 'Build the systems that drive consistent revenue growth — from how your business is positioned to how demand is generated and converted into pipeline. Viavize helps strengthen the foundations required to grow revenue predictably.',
    practices: ['Marketing Practice', 'GTM Practice', 'Business Development'],
    color: 'cyan',
    visual: 'growth',
  },
  {
    tag: 'Capability Creation',
    headline: 'Build Capability Without Complexity',
    desc: 'Expand what your organization can execute — without the need to build entire teams internally. Viavize enables businesses to access and deploy capabilities across AI, global teams, and operational functions.',
    practices: ['Ready-to-Hire AI Assistants', 'Nano GCC', 'Managed Teams'],
    color: 'turmeric',
    visual: 'tech',
  },
]

export default function Levers() {
  return (
    <section className="py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #F5F7FA 0%, #EEF2F7 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            Two levers to
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            Unlock Business Value
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {levers.map((lever, i) => (
            <motion.div
              key={lever.tag}
              {...fadeUp(i * 0.15)}
              className="group relative rounded-2xl overflow-hidden
                bg-gradient-to-br from-[#002040] to-navy
                border border-cyan/[0.08] hover:border-cyan/[0.18]
                shadow-[0_4px_24px_rgba(0,24,56,0.2)]
                hover:shadow-[0_8px_40px_rgba(0,24,56,0.3)] transition-all duration-400"
            >
              {/* Top accent bar */}
              <div className={`h-[3px] ${lever.color === 'cyan' ? 'bg-gradient-to-r from-transparent via-cyan/60 to-transparent' : 'bg-gradient-to-r from-transparent via-turmeric/60 to-transparent'}`} />

              {/* Image area */}
              <ImagePlaceholder variant={lever.visual} dark className="aspect-[2.2/1] w-full rounded-none !rounded-b-none" />

              {/* Content */}
              <div className="p-8 pt-6">
                <span className={`text-[11px] font-semibold uppercase tracking-[1.5px] mb-3 block
                  ${lever.color === 'cyan' ? 'text-cyan' : 'text-turmeric-bright'}`}>
                  {lever.tag}
                </span>
                <h3 className="text-[22px] font-semibold text-white mb-4 leading-snug">
                  {lever.headline}
                </h3>
                <p className="text-[14px] text-white/55 leading-relaxed mb-6">
                  {lever.desc}
                </p>

                <div className="border-t border-white/[0.08] pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-white/30 block mb-3">
                    Practices
                  </span>
                  <ul className="flex flex-col gap-2.5">
                    {lever.practices.map(p => (
                      <li key={p} className="flex items-center gap-2.5 text-[13px] font-medium text-white/80">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0
                          ${lever.color === 'cyan' ? 'bg-cyan' : 'bg-turmeric-bright'}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
