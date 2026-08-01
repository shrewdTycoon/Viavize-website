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
    title: 'Understand the Business',
    desc: 'We start with your commercial goals, the market, and an honest read on what is working now and what is not.',
    color: 'cyan',
  },
  {
    num: '02',
    title: 'Prioritize',
    desc: 'We identify where stronger marketing creates the most value — and what to pause, so effort is not spread thin.',
    color: 'turmeric',
  },
  {
    num: '03',
    title: 'Build the Plan',
    desc: 'We turn priorities into a plan: audiences, channels, programs, budget, and the metrics that define success.',
    color: 'cyan',
  },
  {
    num: '04',
    title: 'Review & Adjust',
    desc: 'We check the plan against real results and reset priorities each cycle, so the strategy stays alive.',
    color: 'turmeric',
  },
]

export default function StrategyProcess() {
  return (
    <section id="how-we-work" className="py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #F5F7FA 0%, #EEF2F7 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            How We Work
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            Understand. Prioritize.<br className="hidden md:block" /> Plan. Adjust.
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
