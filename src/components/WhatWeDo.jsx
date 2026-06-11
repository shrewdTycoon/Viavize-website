import { motion, useReducedMotion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const pillars = [
  {
    title: 'Create Demand',
    desc: 'Build awareness, establish relevance, and give the right audience a reason to pay attention.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 11l14-5v12L3 13v-2z" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 13v5a2 2 0 004 0v-4M21 9v4" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Support Sales',
    desc: 'Help sales teams communicate value clearly and move conversations forward.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 11.5a8.38 8.38 0 01-9 8.35 8.5 8.5 0 01-3.4-.65L3 21l1.8-5.6A8.38 8.38 0 013 11.5a8.5 8.5 0 119 8.35" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11h8M8 14h5" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Grow Revenue',
    desc: 'Strengthen the marketing foundations that help your business attract, educate, convert, and retain customers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 14l4-4 4 4 8-8" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 6h4v4" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 20h16" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
]

function MarketingRadar() {
  const reduceMotion = useReducedMotion()
  const cx = 150, cy = 105
  const rings = [30, 55, 80]

  // Marketing signals detected by the radar sweep
  const blips = [
    { angle: 35, r: 68, label: 'Awareness', color: '#00C1FF', size: 5 },
    { angle: 110, r: 45, label: 'Pipeline', color: '#00C1FF', size: 4 },
    { angle: 165, r: 72, label: 'Content', color: '#D4A017', size: 5 },
    { angle: 220, r: 38, label: 'Campaigns', color: '#00C1FF', size: 4 },
    { angle: 285, r: 60, label: 'Search', color: '#D4A017', size: 4.5 },
    { angle: 330, r: 50, label: 'Email', color: '#D4A017', size: 3.5 },
  ]

  // Compass cardinal labels
  const cardinals = [
    { angle: 0, label: 'DEMAND' },
    { angle: 90, label: 'SALES' },
    { angle: 180, label: 'REVENUE' },
    { angle: 270, label: 'RETENTION' },
  ]

  return (
    <div className="relative overflow-hidden rounded-2xl aspect-[4/3]
      border border-[rgba(0,193,255,0.15)] shadow-[0_8px_40px_rgba(0,24,56,0.18)]"
      style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}
    >
      {/* Radial glow at center */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 52%, rgba(0,193,255,0.12) 0%, transparent 55%)' }}
      />

      <svg viewBox="0 0 300 210" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00C1FF" stopOpacity="0" />
            <stop offset="70%" stopColor="#00C1FF" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#00C1FF" stopOpacity="0.32" />
          </linearGradient>
          <radialGradient id="blipGlow">
            <stop offset="0%" stopColor="#00C1FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00C1FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Concentric rings */}
        {rings.map((r, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx={cx} cy={cy} r={r}
            stroke="#D4A017" strokeWidth="0.6" opacity="0.25"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.25 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
          />
        ))}

        {/* Cross-hair lines */}
        {[0, 45, 90, 135].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const len = 82
          return (
            <line key={`cross-${i}`}
              x1={cx - Math.cos(rad) * len} y1={cy - Math.sin(rad) * len}
              x2={cx + Math.cos(rad) * len} y2={cy + Math.sin(rad) * len}
              stroke="#D4A017" strokeWidth="0.4" opacity={i % 2 === 0 ? 0.18 : 0.1}
              strokeDasharray={i % 2 === 0 ? 'none' : '2 4'}
            />
          )
        })}

        {/* Cardinal labels */}
        {cardinals.map((c, i) => {
          const rad = ((c.angle - 90) * Math.PI) / 180
          const dist = 92
          const x = cx + Math.cos(rad) * dist
          const y = cy + Math.sin(rad) * dist
          return (
            <motion.text
              key={`card-${i}`}
              x={x} y={y}
              textAnchor="middle" dominantBaseline="middle"
              fill="#FFFFFF" fontSize="5.5" fontWeight="600"
              fontFamily="Inter, sans-serif" opacity="0.4"
              letterSpacing="1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            >
              {c.label}
            </motion.text>
          )
        })}

        {/* Radar sweep — CSS animation rotating around cx,cy */}
        <g
          className="radar-sweep"
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <path
            d={`M${cx},${cy} L${cx},${cy - 80} A80,80 0 0,1 ${cx + 80 * Math.sin(Math.PI / 4)},${cy - 80 * Math.cos(Math.PI / 4)} Z`}
            fill="url(#sweepGrad)"
          />
          {/* Sweep line */}
          <line x1={cx} y1={cy} x2={cx} y2={cy - 80}
            stroke="#00C1FF" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Blips — marketing signals */}
        {blips.map((b, i) => {
          const rad = ((b.angle - 90) * Math.PI) / 180
          const bx = cx + Math.cos(rad) * b.r
          const by = cy + Math.sin(rad) * b.r
          return (
            <motion.g key={`blip-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.4, ease: 'backOut' }}
            >
              {/* Glow */}
              <circle cx={bx} cy={by} r={b.size * 3} fill="url(#blipGlow)" />
              {/* Outer ring */}
              <circle cx={bx} cy={by} r={b.size}
                fill={b.color} opacity="0.3" />
              {/* Core dot */}
              <circle cx={bx} cy={by} r={b.size * 0.5}
                fill={b.color} opacity="0.95" />
              {/* Label */}
              <text x={bx} y={by - b.size - 4}
                textAnchor="middle" fill={b.color}
                fontSize="6" fontWeight="600" fontFamily="Inter, sans-serif" opacity="0.9">
                {b.label}
              </text>
            </motion.g>
          )
        })}

        {/* Center point */}
        <motion.g
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'backOut' }}
        >
          <circle cx={cx} cy={cy} r="6" fill="#00C1FF" opacity="0.18" />
          <circle cx={cx} cy={cy} r="2.5" fill="#00C1FF" opacity="0.7" />
        </motion.g>
      </svg>

      {/* Pulsing detection rings */}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute rounded-full border border-cyan/30"
            style={{ left: 'calc(50% - 40px)', top: 'calc(52% - 40px)', width: 80, height: 80 }}
            animate={{ scale: [1, 2.5, 1], opacity: [0.25, 0, 0.25] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute rounded-full border border-turmeric/25"
            style={{ left: 'calc(50% - 30px)', top: 'calc(52% - 30px)', width: 60, height: 60 }}
            animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
        </>
      )}
    </div>
  )
}

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 md:py-32"
      style={{ background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FBFF 50%, #EBF9FF 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
            What We Help You Do
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-tight">
            Create demand. Support sales. Grow revenue.
          </h2>
        </motion.div>

        {/* Two-column: visual left, pillar cards right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: SVG animation */}
          <motion.div {...fadeUp(0)}>
            <MarketingRadar />
          </motion.div>

          {/* Right: pillar cards — navy-to-turmeric inset style */}
          <div className="flex flex-col gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl px-7 py-6
                  border border-[rgba(0,193,255,0.15)]
                  shadow-[0_2px_8px_rgba(0,24,56,0.2),0_4px_16px_rgba(0,24,56,0.15)]
                  hover:shadow-[0_4px_24px_rgba(0,24,56,0.3),0_12px_40px_rgba(0,24,56,0.2)]
                  hover:-translate-y-1 transition-all duration-300
                  flex items-start gap-4"
                style={{
                  background: 'linear-gradient(135deg, #001838 0%, #3D2800 100%)',
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                  bg-white/[0.08] border border-white/[0.12]">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-white mb-1.5">{p.title}</h3>
                  <p className="text-[14px] leading-relaxed text-white/60">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
