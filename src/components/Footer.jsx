import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="py-10 relative"
      style={{ background: 'linear-gradient(180deg, #001225 0%, #000E21 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo variant="light" className="h-7 w-auto" />
            <p className="text-[12px] text-white/40">
              Marketing consulting + embedded execution.
            </p>
          </div>
          <p className="text-[12px] text-white/30">
            &copy; 2026 Viavize. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
