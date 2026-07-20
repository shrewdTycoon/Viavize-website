import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Absolute paths so section links work from capability subpages too
  const links = [
    { label: 'What We Do', href: '/#what-we-do' },
    { label: 'Capabilities', href: '/#capabilities' },
    { label: 'How We Work', href: '/#how-we-work' },
    { label: 'Why Viavize', href: '/#why-viavize' },
    { label: 'Insights', href: '/#insights' },
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
          {links.map(link => (
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
              {links.map(link => (
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
