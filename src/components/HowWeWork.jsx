import { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

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
    p1: 'We start with the business, not the channel.',
    p2: 'We look at the offering, audience, market, commercial priorities, existing activity, and internal capabilities.',
    color: 'cyan',
  },
  {
    num: '02',
    title: 'Identify What Matters',
    p1: 'We determine where stronger marketing thinking or execution can create the greatest value.',
    p2: 'The result is a focused set of priorities—not a longer list of activities.',
    color: 'turmeric',
  },
  {
    num: '03',
    title: 'Execute with the Right Team',
    p1: 'We bring together the strategists, writers, designers, campaign specialists, developers, and analysts required for the work.',
    p2: 'You get the capabilities you need without having to build or coordinate them all internally.',
    color: 'cyan',
  },
  {
    num: '04',
    title: 'Optimize and Improve',
    p1: 'We turn priorities into campaigns, content, assets, systems, and ongoing market activity.',
    p2: 'We review what is working, learn from the response, and improve the next cycle of execution.',
    color: 'turmeric',
  },
]

function TeamNetwork() {
  const reduceMotion = useReducedMotion()

  const nodes = [
    { x: 60, y: 40, r: 8, label: 'Content', type: 'primary' },
    { x: 150, y: 30, r: 10, label: 'Direction', type: 'hub' },
    { x: 250, y: 45, r: 8, label: 'Design', type: 'primary' },
    { x: 40, y: 100, r: 6, label: '', type: 'secondary' },
    { x: 105, y: 90, r: 7, label: '', type: 'secondary' },
    { x: 150, y: 110, r: 12, label: 'Strategy', type: 'hub' },
    { x: 200, y: 85, r: 7, label: '', type: 'secondary' },
    { x: 260, y: 105, r: 6, label: '', type: 'secondary' },
    { x: 70, y: 155, r: 7, label: 'Paid', type: 'primary' },
    { x: 150, y: 170, r: 6, label: '', type: 'secondary' },
    { x: 230, y: 160, r: 7, label: 'Data', type: 'primary' },
  ]

  const connections = [
    [0,1], [1,2], [0,3], [0,4], [1,4], [1,5], [1,6], [2,6], [2,7],
    [3,4], [4,5], [5,6], [6,7], [3,8], [4,8], [5,8], [5,9], [5,10],
    [6,10], [7,10], [8,9], [9,10]
  ]

  const nodeColor = '#001838'
  const accentColor = '#B8860B'

  return (
    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-border
      bg-gradient-to-br from-cyan-ultra to-cloud"
    >
      {/* Background dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, ${nodeColor} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 300 200" className="relative w-[85%] h-[85%]" fill="none">
          <defs>
            <radialGradient id="teamHubGlow">
              <stop offset="0%" stopColor="#B8860B" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Connection lines with animated draw */}
          {connections.map(([a, b], i) => (
            <motion.line
              key={`conn-${i}`}
              x1={nodes[a].x} y1={nodes[a].y}
              x2={nodes[b].x} y2={nodes[b].y}
              stroke={nodeColor}
              strokeWidth="1"
              opacity="0.12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.04, duration: 0.5, ease: 'easeOut' }}
            />
          ))}

          {/* Animated data pulses along connections */}
          {!reduceMotion && [
            [0, 1], [1, 5], [5, 10], [2, 7], [5, 8]
          ].map(([a, b], i) => (
            <motion.circle
              key={`pulse-${i}`}
              r="2"
              fill={i % 2 === 0 ? '#00A3D6' : '#B8860B'}
              opacity="0.6"
              animate={{
                cx: [nodes[a].x, nodes[b].x],
                cy: [nodes[a].y, nodes[b].y],
              }}
              transition={{
                duration: 2 + i * 0.5,
                delay: 1.5 + i * 0.8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.g
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4, ease: 'backOut' }}
            >
              {/* Glow for hubs */}
              {node.type === 'hub' && (
                <circle cx={node.x} cy={node.y} r={node.r * 3}
                  fill="url(#teamHubGlow)" />
              )}
              {/* Outer ring */}
              <circle cx={node.x} cy={node.y} r={node.r}
                fill={node.type === 'hub' ? accentColor : nodeColor}
                opacity={node.type === 'hub' ? 0.15 : node.type === 'primary' ? 0.12 : 0.08} />
              {/* Inner dot */}
              <circle cx={node.x} cy={node.y}
                r={node.type === 'hub' ? 4 : node.type === 'primary' ? 3 : 2}
                fill={node.type === 'hub' ? accentColor : nodeColor}
                opacity={node.type === 'hub' ? 0.5 : 0.35} />
              {/* Label */}
              {node.label && (
                <text x={node.x} y={node.y - node.r - 5}
                  textAnchor="middle"
                  fill={node.type === 'hub' ? accentColor : nodeColor}
                  fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif"
                  opacity="0.45">
                  {node.label}
                </text>
              )}
            </motion.g>
          ))}
        </svg>
      </div>

      {/* Floating specialist badges */}
      <motion.div
        className="absolute top-[10%] left-[8%] px-2.5 py-1.5 rounded-lg bg-turmeric/10 border border-turmeric/20"
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[9px] font-semibold text-turmeric">Strategists</span>
      </motion.div>
      <motion.div
        className="absolute top-[14%] right-[10%] px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/20"
        animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
        transition={{ duration: 5, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[9px] font-semibold text-cyan-dark">Writers &amp; Designers</span>
      </motion.div>
      <motion.div
        className="absolute bottom-[12%] right-[25%] px-2.5 py-1.5 rounded-lg bg-turmeric/10 border border-turmeric/20"
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 3.5, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[9px] font-semibold text-turmeric">Developers &amp; Analysts</span>
      </motion.div>

      {/* Pulsing ring on strategy hub */}
      {!reduceMotion && (
        <motion.div
          className="absolute rounded-full border border-turmeric/15"
          style={{ left: 'calc(50% - 20px)', top: 'calc(55% - 20px)', width: 40, height: 40 }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
    </div>
  )
}

export default function HowWeWork() {
  const stepsRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start 0.75', 'end 0.55'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 })

  return (
    <section id="how-we-work" className="py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #F5F7FA 0%, #EEF2F7 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Left: heading + network visual (sticky on desktop) */}
          <div className="lg:sticky lg:top-24">
            <motion.div {...fadeUp()}>
              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan-dark mb-3 block">
                How We Work
              </span>
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-navy leading-[1.15] mb-5">
                One partner across marketing direction and delivery.
              </h2>

              {/* Accent underline */}
              <div className="w-12 h-[3px] rounded-full bg-turmeric mb-10" />
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="hidden lg:block">
              <TeamNetwork />
            </motion.div>
          </div>

          {/* Right: numbered steps with scroll-drawn progress rail */}
          <div>
            <div ref={stepsRef} className="relative">
            {/* Track */}
            <div className="absolute left-[5px] top-[50px] bottom-[140px] w-[2px] rounded-full bg-border" />
            {/* Progress line draws with scroll */}
            <motion.div
              className="absolute left-[5px] top-[50px] bottom-[140px] w-[2px] rounded-full origin-top bg-cyan"
              style={{ scaleY: lineScale }}
            />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp(i * 0.08)}
                className="relative flex gap-6 md:gap-8 py-8 pl-9"
              >
                {/* Rail dot */}
                <span className={`absolute left-0 top-[44px] w-3 h-3 rounded-full
                  ${step.color === 'cyan' ? 'bg-cyan' : 'bg-turmeric'}`} />

                <div className={`text-[32px] md:text-[36px] font-semibold leading-none flex-shrink-0 w-14
                  ${step.color === 'cyan' ? 'text-cyan' : 'text-turmeric'}`}>
                  {step.num}
                </div>
                <div>
                  <h3 className="text-[19px] font-semibold text-navy mb-3">{step.title}</h3>
                  <p className="text-[15px] text-slate leading-relaxed mb-3">{step.p1}</p>
                  <p className="text-[15px] text-slate leading-relaxed">{step.p2}</p>
                </div>
              </motion.div>
            ))}
            </div>

            {/* Network visual shown below steps on mobile */}
            <motion.div {...fadeUp(0.1)} className="lg:hidden mt-6">
              <TeamNetwork />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
