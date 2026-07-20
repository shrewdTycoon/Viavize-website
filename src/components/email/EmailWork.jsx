import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

/*
 * ── NOT YET LIVE ────────────────────────────────────────────────────────
 * Built and ready, but commented out in src/pages/EmailPage.jsx until
 * there are real campaigns to show. To enable:
 * 1. Export a full-length email as an image (~700px wide) into
 *    public/images/email/ — the frame scrolls down it like an inbox.
 * 2. Replace the placeholder entries below.
 * 3. Uncomment <EmailWork /> in src/pages/EmailPage.jsx
 * ────────────────────────────────────────────────────────────────────────
 */
const campaigns = [
  {
    name: 'Campaign preview coming soon',
    sender: 'Client Name',
    subject: 'Subject line that earned the open',
    tag: 'Nurture Program',
    summary: 'A multi-step sequence built to turn early interest into sales conversations.',
    scope: ['Segmentation', 'Copy', 'Design', 'Automation'],
    image: null,
    scrollSeconds: 26,
  },
  {
    name: 'Campaign preview coming soon',
    sender: 'Client Name',
    subject: 'Subject line that earned the open',
    tag: 'Launch Campaign',
    summary: 'A launch send to a segmented list, supporting a wider go-to-market push.',
    scope: ['Copy', 'Design', 'Send'],
    image: null,
    scrollSeconds: 26,
  },
]

/* A tall placeholder "email" that scrolls inside the client frame */
function EmailBodyPlaceholder({ playState }) {
  return (
    <div className="page-scroll w-full p-5 flex flex-col gap-2.5"
      style={{ '--scroll-duration': '23s', animationPlayState: playState }}>
      <div className="h-16 rounded bg-gradient-to-br from-cyan/[0.14] to-turmeric/[0.08] mb-1" />
      <div className="h-2.5 w-3/4 rounded bg-white/[0.14]" />
      <div className="h-1.5 w-full rounded bg-white/[0.07]" />
      <div className="h-1.5 w-5/6 rounded bg-white/[0.07]" />
      <div className="h-5 w-1/3 rounded-md bg-cyan/30 mt-1 mb-3" />
      <div className="h-20 rounded bg-white/[0.05] border border-white/[0.06]" />
      <div className="h-2 w-1/2 rounded bg-turmeric/20 mt-2" />
      <div className="h-1.5 w-full rounded bg-white/[0.07]" />
      <div className="h-1.5 w-4/5 rounded bg-white/[0.07]" />
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="h-14 rounded bg-white/[0.05] border border-white/[0.06]" />
        <div className="h-14 rounded bg-white/[0.05] border border-white/[0.06]" />
      </div>
      <div className="h-5 w-2/5 rounded-md bg-cyan/30 mt-2" />
      <div className="h-1.5 w-3/5 rounded bg-white/[0.06] mt-3" />
      <div className="h-1.5 w-2/5 rounded bg-white/[0.06]" />
    </div>
  )
}

/* Email preview inside an email-client chrome */
function EmailFrame({ campaign }) {
  const reduceMotion = useReducedMotion()
  const [imgFailed, setImgFailed] = useState(false)
  const image = imgFailed ? null : campaign.image

  const frameRef = useRef(null)
  const inView = useInView(frameRef, { amount: 0.2 })
  const playState = inView ? 'running' : 'paused'

  return (
    <div className="rounded-xl overflow-hidden border border-[rgba(0,193,255,0.15)]
      shadow-[0_12px_44px_rgba(0,14,33,0.5)] group-hover:border-[rgba(0,193,255,0.3)]
      transition-colors duration-300"
    >
      {/* Client chrome — sender and subject */}
      <div className="px-4 py-3 border-b border-white/[0.08]"
        style={{ background: 'rgba(0,35,72,0.9)' }}>
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full bg-cyan/15 border border-cyan/25
            flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="#00C1FF" strokeWidth="2.5"/>
              <path d="M22 7l-10 6L2 7" stroke="#00C1FF" strokeWidth="2.5" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-white leading-tight truncate">
              {campaign.subject}
            </div>
            <div className="text-[10px] text-white/40 mt-0.5 truncate">
              from {campaign.sender}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div ref={frameRef} className="scroll-frame relative aspect-[4/5] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #002040 0%, #001838 100%)' }}>
        {image ? (
          <img
            src={image}
            alt={`${campaign.name} email`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="page-scroll block w-full h-auto min-h-full object-cover object-top"
            style={{
              '--scroll-duration': `${campaign.scrollSeconds || 26}s`,
              animationPlayState: playState,
            }}
          />
        ) : (
          <>
            <EmailBodyPlaceholder playState={reduceMotion ? 'paused' : playState} />
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full text-[11px] font-medium text-white/50
                bg-navy/70 border border-white/[0.12] backdrop-blur-sm">
                Campaign preview coming soon
              </span>
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default function EmailWork() {
  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #001838 0%, #002348 60%, #001838 100%)' }}
    >
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,193,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,193,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 20% 10%, rgba(0,193,255,0.05) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div {...fadeUp()} className="mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-cyan mb-3 block">
            Our Work
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-semibold text-white leading-tight mb-4">
            Campaigns we have sent.
          </h2>
          <p className="text-[15px] text-white/55 leading-relaxed max-w-[580px]">
            Selected email campaigns and programs, from single sends to
            sequences that run for months.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {campaigns.map((c, i) => (
            <motion.article key={i} {...fadeUp(i * 0.12)} className="group">
              <EmailFrame campaign={c} />
              <div className="mt-6">
                <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-turmeric-bright mb-2.5 block">
                  {c.tag}
                </span>
                <h3 className="text-[19px] font-semibold text-white mb-2.5 leading-snug">
                  {c.name}
                </h3>
                <p className="text-[14px] text-white/55 leading-relaxed mb-4">
                  {c.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.scope.map(s => (
                    <span key={s}
                      className="px-3 py-1 rounded-full text-[11px] font-medium text-white/60
                        bg-white/[0.06] border border-white/[0.1]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
