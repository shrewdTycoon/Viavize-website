import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const steps = [
  {
    num: '01',
    title: 'Positioning & Message',
    desc: 'We start with what the site needs to say: the audience, the value, and the action we want visitors to take. Structure and copy come before visual design.',
    color: 'cyan',
  },
  {
    num: '02',
    title: 'Design & Content',
    desc: 'We design around the message — layout, copy, and visual identity working together, reviewed with you at every step.',
    color: 'turmeric',
  },
  {
    num: '03',
    title: 'Build & Launch',
    desc: 'We build fast, responsive, maintainable sites — connected to your analytics, forms, and tools — and handle the launch end to end.',
    color: 'cyan',
  },
  {
    num: '04',
    title: 'Measure & Improve',
    desc: 'After launch we watch how visitors actually use the site, and improve pages, messages, and conversion paths over time.',
    color: 'turmeric',
  },
]

export default function HowWeBuild() {
  return (
    <section id="how-we-build" className="py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #F5F7FA 0%, #EEF2F7 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            How We Build
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            Message first. Then design.<br className="hidden md:block" /> Then build.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              {...fadeUp(i * 0.1)}
              className="bg-white rounded-2xl p-7 border border-border/80
                shadow-[0_1px_3px_rgba(0,24,56,0.06),0_4px_12px_rgba(0,24,56,0.04)]
                hover:shadow-[0_4px_20px_rgba(0,24,56,0.08)] hover:-translate-y-1
                transition-all duration-300"
            >
              <div className={`text-[30px] font-semibold leading-none mb-4
                ${step.color === 'cyan' ? 'text-cyan' : 'text-turmeric'}`}>
                {step.num}
              </div>
              <h3 className="text-[16px] font-semibold text-navy mb-2.5">{step.title}</h3>
              <p className="text-[13.5px] text-slate leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
