import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { CAP_GROUPS } from '../data/capabilityNav'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [capsOpen, setCapsOpen] = useState(false)          // desktop dropdown
  const [mobileCapsOpen, setMobileCapsOpen] = useState(false) // mobile accordion

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Absolute paths so section links work from capability subpages too
  const links = [
    { label: 'What We Do', href: '/#what-we-do' },
    { label: 'How We Work', href: '/#how-we-work' },
    { label: 'Why Viavize', href: '/#why-viavize' },
    { label: 'Resources', href: '/marketing/resources/' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        border-b border-[#B8860B]/10
        ${scrolled ? 'shadow-[0_2px_16px_rgba(184,134,11,0.08)]' : ''}`}
      style={{
        background: 'linear-gradient(135deg, #EBF9FF 0%, #F5F7FA 40%, #FDF3DC 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex-shrink-0">
          <Logo variant="dark" className="h-9 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="/#what-we-do" className="text-[13px] font-medium text-navy/70 hover:text-navy transition-colors">What We Do</a>

          {/* Capabilities dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCapsOpen(true)}
            onMouseLeave={() => setCapsOpen(false)}
          >
            <a
              href="/#capabilities"
              className="inline-flex items-center gap-1 text-[13px] font-medium text-navy/70 hover:text-navy transition-colors"
              aria-haspopup="true"
              aria-expanded={capsOpen}
              onFocus={() => setCapsOpen(true)}
            >
              Capabilities
              <svg viewBox="0 0 12 12" className={`w-2.5 h-2.5 mt-px transition-transform ${capsOpen ? 'rotate-180' : ''}`} fill="none">
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <AnimatePresence>
              {capsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                >
                  <div className="w-[620px] rounded-2xl border border-border bg-white shadow-[0_12px_40px_rgba(0,24,56,0.12)] p-5 grid grid-cols-3 gap-5">
                    {CAP_GROUPS.map(group => (
                      <div key={group.label}>
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`} />
                          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">{group.label}</span>
                        </div>
                        <ul className="space-y-0.5">
                          {group.items.map(cap => (
                            <li key={cap.href}>
                              <a
                                href={cap.href}
                                className="block rounded-lg px-2.5 py-1.5 -mx-1 text-[13.5px] text-slate hover:text-navy hover:bg-cloud transition-colors"
                              >
                                {cap.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <a href="/#capabilities" className="col-span-3 mt-1 pt-3 border-t border-border text-[12.5px] font-semibold text-cyan-dark hover:text-navy transition-colors">
                      See all capabilities →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.slice(1).map(link => (
            <a key={link.href} href={link.href}
              className="text-[13px] font-medium text-navy/70 hover:text-navy transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg
              bg-cyan text-navy text-[13px] font-semibold
              hover:bg-cyan-90 active:bg-cyan-80 transition-colors
              hover:-translate-y-px active:translate-y-0 transition-transform">
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1 p-1 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <motion.span animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-navy rounded-sm" />
          <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-navy rounded-sm" />
          <motion.span animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-navy rounded-sm" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-b border-[#B8860B]/10"
            style={{ background: 'linear-gradient(180deg, #FDF3DC 0%, #FFFDF8 100%)' }}
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <a href="/#what-we-do" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-navy">What We Do</a>

              {/* Capabilities accordion */}
              <div>
                <button
                  onClick={() => setMobileCapsOpen(v => !v)}
                  className="w-full flex items-center justify-between text-sm font-medium text-navy bg-transparent border-none p-0 cursor-pointer"
                  aria-expanded={mobileCapsOpen}
                >
                  Capabilities
                  <svg viewBox="0 0 12 12" className={`w-3 h-3 transition-transform ${mobileCapsOpen ? 'rotate-180' : ''}`} fill="none">
                    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileCapsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pl-3 flex flex-col gap-3 border-l border-turmeric/20 ml-1 mt-2">
                        {CAP_GROUPS.map(group => (
                          <div key={group.label}>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-1.5">{group.label}</p>
                            <div className="flex flex-col gap-1.5">
                              {group.items.map(cap => (
                                <a key={cap.href} href={cap.href} onClick={() => setMobileOpen(false)}
                                  className="text-[13.5px] text-slate">
                                  {cap.title}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {links.slice(1).map(link => (
                <a key={link.href} href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-navy">
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg
                  bg-cyan text-navy text-sm font-semibold">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
