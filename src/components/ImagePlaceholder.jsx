import { motion } from 'framer-motion'

/**
 * Abstract visual placeholder for imagery spots.
 * Variants: 'meeting', 'growth', 'tech', 'global', 'strategy', 'team'
 */
export default function ImagePlaceholder({ variant = 'meeting', className = '', dark = false }) {
  const base = dark
    ? 'bg-gradient-to-br from-navy-mid to-navy'
    : 'bg-gradient-to-br from-cyan-ultra to-cloud'

  const compositions = {
    meeting: <MeetingVisual dark={dark} />,
    growth: <GrowthVisual dark={dark} />,
    tech: <TechVisual dark={dark} />,
    global: <GlobalVisual dark={dark} />,
    strategy: <StrategyVisual dark={dark} />,
    team: <TeamVisual dark={dark} />,
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${base} ${className}`}>
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      {compositions[variant] || compositions.meeting}
    </div>
  )
}

function MeetingVisual({ dark }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Abstract people silhouettes around a table */}
      <svg viewBox="0 0 400 280" className="w-3/4 h-3/4 opacity-[0.12]" fill="none">
        <ellipse cx="200" cy="160" rx="120" ry="50" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="1.5" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x = 200 + 120 * Math.cos((angle * Math.PI) / 180)
          const y = 160 + 50 * Math.sin((angle * Math.PI) / 180)
          return <circle key={i} cx={x} cy={y - 20} r="14" fill={dark ? '#00C1FF' : '#001838'} opacity="0.3" />
        })}
      </svg>
      {/* Floating accent shapes */}
      <motion.div
        className="absolute top-[15%] right-[18%] w-16 h-16 rounded-full border border-cyan/20"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[15%] w-10 h-10 rounded-lg bg-turmeric/10 rotate-12"
        animate={{ rotate: [12, -5, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

function GrowthVisual({ dark }) {
  const barHeights = [28, 48, 38, 65, 52, 80, 72, 95, 88, 110, 102, 128]
  const barCount = barHeights.length
  const chartLeft = 20
  const chartRight = 300
  const chartBottom = 180
  const barWidth = 16
  const barGap = (chartRight - chartLeft - barCount * barWidth) / (barCount - 1)

  const linePoints = barHeights.map((h, i) => {
    const x = chartLeft + i * (barWidth + barGap) + barWidth / 2
    const y = chartBottom - h * 0.85 - 8
    return [x, y]
  })
  const linePath = linePoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]} ${p[1]}`).join(' ')

  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 320 200" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="barGradCyan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00C1FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00C1FF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="barGradDark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#001838" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#001838" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[40, 80, 120, 160].map(y => (
          <line key={y} x1={chartLeft} y1={y} x2={chartRight} y2={y}
            stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="0.5" opacity="0.05" strokeDasharray="3 5" />
        ))}

        {/* Bars */}
        {barHeights.map((h, i) => (
          <motion.rect
            key={i}
            x={chartLeft + i * (barWidth + barGap)}
            y={chartBottom - h}
            width={barWidth}
            rx="3"
            fill={dark ? 'url(#barGradCyan)' : 'url(#barGradDark)'}
            initial={{ height: 0, y: chartBottom }}
            whileInView={{ height: h, y: chartBottom - h }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        {/* Trend line */}
        <motion.path
          d={linePath}
          stroke={dark ? '#D4A017' : '#B8860B'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Data points on trend line */}
        {linePoints.map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r="2.5"
            fill={dark ? '#002348' : '#F5F7FA'}
            stroke={dark ? '#D4A017' : '#B8860B'}
            strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.06, duration: 0.3, ease: 'backOut' }}
          />
        ))}

        {/* +42% callout — top right corner */}
        <motion.g
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <rect x="252" y="10" width="44" height="17" rx="4"
            fill={dark ? '#D4A017' : '#B8860B'} opacity="0.2" />
          <text x="274" y="22" textAnchor="middle" fill={dark ? '#D4A017' : '#B8860B'}
            fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif" opacity="0.7">
            +42%
          </text>
        </motion.g>
      </svg>
    </div>
  )
}

function TechVisual({ dark }) {
  const nodes = [
    { x: 60, y: 40, r: 8, label: 'AI', type: 'primary' },
    { x: 150, y: 30, r: 10, label: 'Ops', type: 'hub' },
    { x: 250, y: 45, r: 8, label: 'Dev', type: 'primary' },
    { x: 40, y: 100, r: 6, label: '', type: 'secondary' },
    { x: 105, y: 90, r: 7, label: '', type: 'secondary' },
    { x: 150, y: 110, r: 12, label: 'Core', type: 'hub' },
    { x: 200, y: 85, r: 7, label: '', type: 'secondary' },
    { x: 260, y: 105, r: 6, label: '', type: 'secondary' },
    { x: 70, y: 155, r: 7, label: 'GCC', type: 'primary' },
    { x: 150, y: 170, r: 6, label: '', type: 'secondary' },
    { x: 230, y: 160, r: 7, label: 'Team', type: 'primary' },
  ]

  const connections = [
    [0,1], [1,2], [0,3], [0,4], [1,4], [1,5], [1,6], [2,6], [2,7],
    [3,4], [4,5], [5,6], [6,7], [3,8], [4,8], [5,8], [5,9], [5,10],
    [6,10], [7,10], [8,9], [9,10]
  ]

  const nodeColor = dark ? '#00C1FF' : '#001838'
  const accentColor = dark ? '#D4A017' : '#B8860B'

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Background hex grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, ${dark ? '#00C1FF' : '#001838'} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <svg viewBox="0 0 300 200" className="relative w-[85%] h-[85%]" fill="none">
        <defs>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#00C1FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00C1FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hubGlow">
            <stop offset="0%" stopColor="#D4A017" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
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
        {[
          [0, 1], [1, 5], [5, 10], [2, 7], [5, 8]
        ].map(([a, b], i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="2"
            fill={i % 2 === 0 ? '#00C1FF' : '#D4A017'}
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
                fill="url(#hubGlow)" />
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
                opacity="0.4">
                {node.label}
              </text>
            )}
          </motion.g>
        ))}
      </svg>

      {/* Floating capability badges */}
      <motion.div
        className="absolute top-[10%] left-[8%] px-2.5 py-1.5 rounded-lg bg-turmeric/10 border border-turmeric/20"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[9px] font-semibold text-turmeric-bright">AI Agents</span>
      </motion.div>
      <motion.div
        className="absolute top-[14%] right-[10%] px-2.5 py-1.5 rounded-lg bg-cyan/10 border border-cyan/20"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 5, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[9px] font-semibold text-cyan">Global Teams</span>
      </motion.div>
      <motion.div
        className="absolute bottom-[12%] right-[25%] px-2.5 py-1.5 rounded-lg bg-turmeric/10 border border-turmeric/20"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.5, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[9px] font-semibold text-turmeric-bright">Managed Ops</span>
      </motion.div>

      {/* Pulsing rings on hub nodes */}
      <motion.div
        className="absolute rounded-full border border-turmeric/15"
        style={{ left: 'calc(50% - 20px)', top: 'calc(55% - 20px)', width: 40, height: 40 }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
      />
    </div>
  )
}

function GlobalVisual({ dark }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-2/3 h-2/3 opacity-[0.12]" fill="none">
        <circle cx="100" cy="100" r="80" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="1" />
        <ellipse cx="100" cy="100" rx="40" ry="80" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="1" />
        <ellipse cx="100" cy="100" rx="65" ry="80" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="0.5" />
        <line x1="20" y1="70" x2="180" y2="70" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="0.5" />
        <line x1="20" y1="100" x2="180" y2="100" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="0.5" />
        <line x1="20" y1="130" x2="180" y2="130" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="0.5" />
      </svg>
      {/* Accent dots for "locations" */}
      <motion.div className="absolute top-[32%] left-[55%] w-2.5 h-2.5 rounded-full bg-cyan"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }} />
      <motion.div className="absolute top-[45%] left-[38%] w-2 h-2 rounded-full bg-turmeric"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, delay: 0.7, repeat: Infinity }} />
      <motion.div className="absolute top-[55%] left-[62%] w-2 h-2 rounded-full bg-cyan"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, delay: 1.3, repeat: Infinity }} />
    </div>
  )
}

function StrategyVisual({ dark }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 300 200" className="w-3/4 h-3/4 opacity-[0.15]" fill="none">
        {/* Kanban/strategy board */}
        <rect x="20" y="20" width="80" height="160" rx="8" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="1" />
        <rect x="110" y="20" width="80" height="160" rx="8" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="1" />
        <rect x="200" y="20" width="80" height="160" rx="8" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="1" />
        {/* Cards in columns */}
        <rect x="30" y="45" width="60" height="28" rx="4" fill={dark ? '#00C1FF' : '#001838'} opacity="0.2" />
        <rect x="30" y="80" width="60" height="28" rx="4" fill={dark ? '#00C1FF' : '#001838'} opacity="0.12" />
        <rect x="120" y="45" width="60" height="28" rx="4" fill={dark ? '#D4A017' : '#B8860B'} opacity="0.2" />
        <rect x="120" y="80" width="60" height="28" rx="4" fill={dark ? '#D4A017' : '#B8860B'} opacity="0.12" />
        <rect x="120" y="115" width="60" height="28" rx="4" fill={dark ? '#D4A017' : '#B8860B'} opacity="0.08" />
        <rect x="210" y="45" width="60" height="28" rx="4" fill={dark ? '#00C1FF' : '#001838'} opacity="0.25" />
      </svg>
    </div>
  )
}

function TeamVisual({ dark }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 280 200" className="w-3/4 h-3/4 opacity-[0.12]" fill="none">
        {/* Org chart style */}
        <circle cx="140" cy="40" r="16" fill={dark ? '#00C1FF' : '#001838'} />
        <line x1="140" y1="56" x2="140" y2="80" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="1.5" />
        <line x1="60" y1="80" x2="220" y2="80" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="1.5" />
        {[60, 140, 220].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="80" x2={x} y2="100" stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="1.5" />
            <circle cx={x} cy="115" r="14" fill={dark ? '#00C1FF' : '#001838'} opacity="0.5" />
          </g>
        ))}
        {[30, 90, 110, 170, 190, 250].map((x, i) => (
          <g key={i}>
            <line x1={[60,60,140,140,220,220][i]} y1="129" x2={x} y2="148"
              stroke={dark ? '#00C1FF' : '#001838'} strokeWidth="1" opacity="0.5" />
            <circle cx={x} cy="160" r="10" fill={dark ? '#00C1FF' : '#001838'} opacity="0.25" />
          </g>
        ))}
      </svg>
      <motion.div
        className="absolute top-[18%] right-[15%] w-3 h-3 rounded-full bg-turmeric/30"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
