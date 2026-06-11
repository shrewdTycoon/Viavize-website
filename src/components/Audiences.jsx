import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const audiences = [
  {
    title: 'For Founders',
    p1: 'You need marketing to create momentum, but you do not want to build and manage a large internal team too early.',
    p2: 'Viavize helps clarify the priorities, build the plan, and execute the work.',
    image: '/images/opportunity.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'For Marketing Leaders',
    p1: 'You have a strategy and an internal team, but need additional thinking, specialist expertise, or execution capacity.',
    p2: 'Viavize works alongside your team to move important initiatives forward.',
    image: '/images/tech-startup.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#00C1FF" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#00C1FF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'For Sales Leaders',
    p1: 'You need stronger market awareness, clearer messaging, better sales material, and more consistent support from marketing.',
    p2: 'Viavize helps connect marketing activity with the needs of the sales organization.',
    image: '/images/founder-smb.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke="#D4A017" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" stroke="#D4A017" strokeWidth="2" opacity="0.6"/>
        <circle cx="12" cy="12" r="1.5" fill="#D4A017"/>
      </svg>
    ),
  },
]

export default function Audiences() {
  return (
    <section id="who-we-work-with" className="py-24 md:py-32 relative overflow-hidden"
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
            Built for Leaders Who Need Marketing to Deliver
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-white leading-tight">
            Who We Work With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              {...fadeUp(i * 0.12)}
              className="group rounded-2xl overflow-hidden
                border border-turmeric/[0.1] hover:border-turmeric/[0.25]
                transition-all duration-400 flex flex-col"
              style={{
                background: 'linear-gradient(160deg, #2A1A00 0%, #1A1000 40%, #001228 100%)',
              }}
            >
              {/* Image area */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale
                    group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Navy colorize — unifies all photography into the brand grade */}
                <div className="absolute inset-0 mix-blend-color" style={{ background: '#1A3A5C' }} />
                {/* Gradient overlay to blend into card */}
                <div className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 30%, rgba(26,16,0,0.6) 70%, rgba(26,16,0,0.95) 100%)',
                  }}
                />
              </div>

              <div className="p-7 pt-4 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-turmeric/[0.08] border border-turmeric/[0.12]
                    flex items-center justify-center flex-shrink-0">
                    {a.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold text-white">{a.title}</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-white/55 mb-3">{a.p1}</p>
                <p className="text-[14px] leading-relaxed text-white/75 font-medium">{a.p2}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
