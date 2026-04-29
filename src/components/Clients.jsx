import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const clients = [
  {
    title: 'Tech Startups',
    p1: 'Product-led and tech-driven companies that need to move from early traction to structured growth.',
    p2: 'Viavize helps establish the foundations across marketing, go-to-market, and execution — enabling startups to scale without prematurely building large internal teams.',
    image: '/images/tech-startup.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Founder-Led SMBs',
    p1: 'Businesses where growth, sales, and operations are still heavily dependent on the founder.',
    p2: 'Viavize acts as an operating partner to build the systems and capabilities needed to transition toward scalable, independent execution.',
    image: '/images/founder-smb.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M20 7h-9M20 12h-9M20 17h-9M7 7v10M4 7l3-3 3 3M4 17l3 3 3-3" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Clients() {
  return (
    <section id="clients" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3D2800 0%, #1A1000 30%, #001838 100%)' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(184,134,11,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184,134,11,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      {/* Warm radial glow */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(184,134,11,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,193,255,0.04) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-turmeric-bright mb-3 block">
            Ideal Clients
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-white leading-tight">
            Who we work with
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {clients.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(i * 0.15)}
              className="group rounded-2xl overflow-hidden
                border border-turmeric/[0.1] hover:border-turmeric/[0.25]
                transition-all duration-400"
              style={{
                background: 'linear-gradient(160deg, #2A1A00 0%, #1A1000 40%, #001228 100%)',
              }}
            >
              {/* Image area */}
              <div className="relative aspect-[2.4/1] w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover
                    group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay to blend into card */}
                <div className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 30%, rgba(26,16,0,0.6) 70%, rgba(26,16,0,0.95) 100%)',
                  }}
                />
              </div>

              <div className="p-8 pt-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-turmeric/[0.08] border border-turmeric/[0.12]
                    flex items-center justify-center">
                    {c.icon}
                  </div>
                  <h3 className="text-[20px] font-semibold text-white">{c.title}</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-white/55 mb-3">{c.p1}</p>
                <p className="text-[14px] leading-relaxed text-white/55">{c.p2}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
