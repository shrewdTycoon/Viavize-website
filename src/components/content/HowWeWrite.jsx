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
    title: 'Research & Interviews',
    desc: 'We talk to the people who know — your executives, product team, and sales floor — and read the documentation before forming a view.',
    color: 'cyan',
  },
  {
    num: '02',
    title: 'Angle & Outline',
    desc: 'We agree the argument and structure before anyone starts writing, so the draft is a discussion about words, not direction.',
    color: 'turmeric',
  },
  {
    num: '03',
    title: 'Draft & Edit',
    desc: 'We write, revise, and fact-check — including a technical accuracy pass with your team on anything that has to be exactly right.',
    color: 'cyan',
  },
  {
    num: '04',
    title: 'Publish & Repurpose',
    desc: 'We get the piece live and turn it into the social posts, email, and sales material that make the effort go further.',
    color: 'turmeric',
  },
]

export default function HowWeWrite() {
  return (
    <section id="how-we-write" className="py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #F5F7FA 0%, #EEF2F7 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            How We Work
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            Research first. Then the angle.<br className="hidden md:block" /> Then the writing.
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
