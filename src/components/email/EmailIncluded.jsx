import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const items = [
  'Audience segmentation',
  'Campaign strategy & calendar',
  'Copywriting',
  'Email design',
  'Template build',
  'Automation & triggers',
  'Deliverability setup',
  'A/B testing',
  'CRM & platform integration',
  'Analytics & reporting',
]

/* Platforms Viavize works in — edit to match reality */
const platforms = ['HubSpot', 'Mailchimp', 'Klaviyo', 'Marketo', 'Salesforce', 'Brevo']

export default function EmailIncluded() {
  return (
    <section className="py-24 md:py-32"
      style={{ background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 50%, #EBF9FF 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: heading */}
          <motion.div {...fadeUp()}>
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
              What's Included
            </span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-[1.15] mb-5">
              Everything from the list to the last click.
            </h2>

            <div className="w-12 h-[3px] rounded-full bg-turmeric mb-6" />

            <p className="text-[15px] text-slate leading-relaxed max-w-[440px] mb-8">
              One engagement covers strategy, words, design, and the technical
              build — in the platform you already use, with no handoffs between
              a strategist, a copywriter, and a developer.
            </p>

            {/* Platforms */}
            <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-muted mb-3 block">
              We work in your platform
            </span>
            <div className="flex flex-wrap gap-2">
              {platforms.map(p => (
                <span key={p}
                  className="px-3 py-1.5 rounded-lg text-[12.5px] font-medium text-navy
                    bg-white border border-border">
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: checklist */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item}
                {...fadeUp(0.1 + i * 0.05)}
                className="flex items-center gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-cyan-tint border border-cyan/25
                  flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                    <path d="M3.5 8.5l3 3L12.5 5" stroke="#00A3D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-[14px] font-medium text-navy">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
