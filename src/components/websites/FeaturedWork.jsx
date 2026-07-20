import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

/*
 * ── Adding a delivered project ─────────────────────────────────────────
 * 1. Capture a FULL-PAGE screenshot of the live site (Chrome DevTools →
 *    Cmd+Shift+P → "Capture full size screenshot", ~1440px wide) and drop
 *    it into public/images/work/. The frame auto-scrolls down the page
 *    and back, so the taller the capture, the more of the site is felt.
 * 2. Replace a placeholder entry below:
 *    {
 *      name: 'Client or project name',
 *      tag: 'Industry — e.g. B2B SaaS',
 *      summary: 'One line: what the site needed to achieve.',
 *      scope: ['Positioning', 'Copy', 'Design', 'Build'],
 *      url: 'https://livesite.com',          // or null while unlaunched
 *      image: '/images/work/client.jpg',     // full-page screenshot
 *      scrollSeconds: 34,                    // optional — raise for very tall pages
 *                                            // (frames only scroll while on screen)
 *      video: null,                          // optional /videos/work/client.mp4 —
 *    }                                       // muted scroll capture; overrides the
 *                                            // scrolling screenshot when present
 * ───────────────────────────────────────────────────────────────────────
 */
const projects = [
  {
    name: 'JLN Growth Management',
    tag: 'Growth Advisory & Consulting',
    summary: 'A growth advisory practice that needed its site to read the way it works: senior, hands-on, and measurable.',
    scope: ['Positioning', 'Copy', 'Design', 'Build'],
    url: 'https://jlngrowthmanagement.com',
    image: '/images/work/jlngrowthmanagement.com.jpg',
    scrollSeconds: 44,
  },
  {
    name: 'NexaIQ — Soterix Systems',
    tag: 'AI Video Security Platform',
    summary: 'An AI video-security platform with three deployment models — a deeply technical story turned into pages buyers can evaluate.',
    scope: ['Positioning', 'Copy', 'Design', 'Build'],
    url: 'https://soterixsystems.com',
    image: '/images/work/soterixsystems.com.jpg',
    scrollSeconds: 54,
  },
  {
    name: 'Alert Enterprise',
    tag: 'Enterprise Security Software',
    summary: 'An enterprise security platform trusted by the world’s largest brands — the site leads with the product story and backs it with customers and outcomes.',
    scope: ['Copy', 'Design', 'Build'],
    url: 'https://alertenterprise.com',
    image: '/images/work/alertenterprise.com.jpg',
    scrollSeconds: 40,
  },
  {
    name: 'STS 360',
    tag: 'Public-Sector Security Solutions',
    summary: 'A security integrator serving SLED and public-sector clients — turnkey services from consultation to 24/7 monitoring, told clearly.',
    scope: ['Positioning', 'Copy', 'Design', 'Build'],
    url: 'https://sts360.com',
    image: '/images/work/sts360.com.jpg',
    scrollSeconds: 54,
  },
]

/* A tall wireframe "page" that scrolls inside the placeholder frame */
function WireframePage({ playState }) {
  return (
    <div className="page-scroll w-full p-6 flex flex-col gap-2.5"
      style={{ '--scroll-duration': '26s', animationPlayState: playState }}>
      {/* Screen 1 — hero */}
      <div className="flex items-center justify-between mb-1">
        <div className="h-2 w-14 rounded bg-cyan/30" />
        <div className="flex gap-1.5">
          <div className="h-1.5 w-7 rounded bg-white/[0.08]" />
          <div className="h-1.5 w-7 rounded bg-white/[0.08]" />
          <div className="h-1.5 w-7 rounded bg-white/[0.08]" />
        </div>
      </div>
      <div className="h-3 w-2/3 rounded bg-white/[0.14]" />
      <div className="h-3 w-1/2 rounded bg-turmeric/25" />
      <div className="h-1.5 w-4/5 rounded bg-white/[0.07]" />
      <div className="h-1.5 w-3/5 rounded bg-white/[0.07]" />
      <div className="h-5 w-1/4 rounded-md bg-cyan/30 mt-1 mb-4" />
      {/* Screen 2 — content cards */}
      <div className="grid grid-cols-3 gap-2">
        <div className="h-14 rounded bg-white/[0.05] border border-white/[0.06]" />
        <div className="h-14 rounded bg-white/[0.05] border border-white/[0.06]" />
        <div className="h-14 rounded bg-white/[0.05] border border-white/[0.06]" />
      </div>
      <div className="h-2.5 w-1/3 rounded bg-white/[0.12] mt-3" />
      <div className="h-1.5 w-full rounded bg-white/[0.07]" />
      <div className="h-1.5 w-4/5 rounded bg-white/[0.07]" />
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="h-16 rounded bg-white/[0.05] border border-white/[0.06]" />
        <div className="h-16 rounded bg-white/[0.05] border border-white/[0.06]" />
      </div>
      {/* Screen 3 — stats + footer */}
      <div className="h-2.5 w-2/5 rounded bg-turmeric/20 mt-3" />
      <div className="grid grid-cols-4 gap-2">
        <div className="h-8 rounded bg-cyan/[0.12]" />
        <div className="h-8 rounded bg-cyan/[0.12]" />
        <div className="h-8 rounded bg-cyan/[0.12]" />
        <div className="h-8 rounded bg-cyan/[0.12]" />
      </div>
      <div className="h-1.5 w-3/4 rounded bg-white/[0.07] mt-2" />
      <div className="h-1.5 w-1/2 rounded bg-white/[0.07]" />
      <div className="h-6 w-1/3 rounded-md bg-cyan/30 mt-2 mb-4" />
      <div className="h-10 rounded bg-white/[0.04] border border-white/[0.05]" />
    </div>
  )
}

/* Live page preview in a branded browser chrome.
   Renders, in order of preference: a muted looping video, an auto-scrolling
   full-page screenshot, or a scrolling wireframe placeholder. */
function BrowserFrame({ project }) {
  const reduceMotion = useReducedMotion()
  // Fall back to the wireframe placeholder if the screenshot file isn't there yet
  const [imgFailed, setImgFailed] = useState(false)
  const image = imgFailed ? null : project.image
  const showVideo = project.video && !reduceMotion

  // Only scroll while the frame is actually on screen — it starts at the top
  // of the page when the visitor arrives, rather than mid-scroll.
  const frameRef = useRef(null)
  const inView = useInView(frameRef, { amount: 0.35 })
  const playState = inView ? 'running' : 'paused'

  return (
    <div className="rounded-xl overflow-hidden border border-[rgba(0,193,255,0.15)]
      shadow-[0_12px_44px_rgba(0,14,33,0.5)] group-hover:border-[rgba(0,193,255,0.3)]
      transition-colors duration-300"
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.08]"
        style={{ background: 'rgba(0,35,72,0.9)' }}>
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="ml-2 px-3 py-0.5 rounded text-[10px] font-medium text-white/35 bg-white/[0.06]">
          {project.url ? project.url.replace(/^https?:\/\//, '') : project.image ? project.name : 'coming-soon'}
        </span>
      </div>

      {/* Preview area */}
      <div ref={frameRef} className="scroll-frame relative aspect-[16/10] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}>
        {showVideo ? (
          <video
            src={project.video}
            poster={project.image || undefined}
            autoPlay muted loop playsInline preload="metadata"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : image ? (
          <img
            src={image}
            alt={`${project.name} website`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="page-scroll block w-full h-auto min-h-full object-cover object-top"
            style={{
              '--scroll-duration': `${project.scrollSeconds || 34}s`,
              animationPlayState: playState,
            }}
          />
        ) : (
          <>
            <WireframePage playState={playState} />
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full text-[11px] font-medium text-white/50
                bg-navy/70 border border-white/[0.12] backdrop-blur-sm">
                Live preview coming soon
              </span>
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #001838 0%, #002348 60%, #001838 100%)' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,193,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,193,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 20% 10%, rgba(0,193,255,0.05) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan mb-3 block">
            Our Work
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-white leading-tight mb-4">
            Websites we have delivered.
          </h2>
          <p className="text-[15px] text-white/55 leading-relaxed max-w-[560px]">
            Selected website and landing page projects. Every one started with
            positioning and ended as a live, measurable site.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 lg:gap-14">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              {...fadeUp(0.1)}
              className={`group grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center
                ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className="lg:[direction:ltr]">
                <BrowserFrame project={p} />
              </div>

              <div className="lg:[direction:ltr]">
                <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-turmeric-bright mb-3 block">
                  {p.tag}
                </span>
                <h3 className="text-[22px] font-semibold text-white mb-3 leading-snug">
                  {p.name}
                </h3>
                <p className="text-[14px] text-white/55 leading-relaxed mb-5">
                  {p.summary}
                </p>

                {/* Scope chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.scope.map(s => (
                    <span key={s}
                      className="px-3 py-1 rounded-full text-[11px] font-medium text-white/60
                        bg-white/[0.06] border border-white/[0.1]">
                      {s}
                    </span>
                  ))}
                </div>

                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-[13px] font-medium text-cyan"
                  >
                    Visit site
                    <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4m0 0H6m6 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
