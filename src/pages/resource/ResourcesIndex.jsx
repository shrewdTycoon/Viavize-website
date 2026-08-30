import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { RESOURCES, RESOURCES_SEO } from '../../resources/index.js'

export default function ResourcesIndex() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <div className="border-b border-border"
          style={{ background: 'linear-gradient(135deg, #EBF9FF 0%, #F5F7FA 45%, #FDF3DC 100%)' }}>
          <div className="max-w-[960px] mx-auto px-6 md:px-8 pt-14 pb-12">
            <nav className="text-[13px] text-muted flex items-center gap-1.5" aria-label="Breadcrumb">
              <a href="/" className="hover:text-navy">Home</a><span>/</span>
              <span className="text-slate">Resources</span>
            </nav>
            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan-dark">
              Viavize · Marketing field guides
            </p>
            <h1 className="mt-3 text-[34px] md:text-[44px] font-bold text-navy tracking-tight leading-[1.1]">
              {RESOURCES_SEO.h1}
            </h1>
            <p className="mt-5 text-[17px] leading-[1.7] text-slate max-w-[620px]">
              Practical, applied guides to the parts of marketing that compound — frameworks you can
              put to work, not theory. More are on the way.
            </p>
          </div>
        </div>

        {/* Resource grid */}
        <section className="max-w-[960px] mx-auto px-6 md:px-8 py-14">
          <ul className="grid sm:grid-cols-2 gap-5">
            {RESOURCES.map((r) => {
              const soon = r.status === 'coming-soon'
              const Card = soon ? 'div' : 'a'
              return (
                <li key={r.slug}>
                  <Card
                    {...(soon ? {} : { href: r.url })}
                    className={`group block h-full rounded-2xl border border-border p-6 transition-all ${
                      soon ? 'opacity-70' : 'hover:border-cyan hover:shadow-[0_2px_20px_rgba(0,193,255,0.10)]'
                    }`}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      {r.tags.map((t) => (
                        <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-cyan-ultra text-cyan-dark">{t}</span>
                      ))}
                      {soon && <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-turmeric-tint text-turmeric-dark">Coming soon</span>}
                    </div>
                    <h2 className="mt-4 text-[22px] font-bold text-navy tracking-tight group-hover:text-cyan-dark transition-colors">{r.title}</h2>
                    <p className="mt-0.5 text-[14px] font-medium text-muted">{r.subtitle}</p>
                    <p className="mt-3 text-[15px] leading-[1.65] text-slate">{r.description}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-[13px] text-muted">{r.detail}</span>
                      {!soon && (
                        <span className="text-[13px] font-semibold text-cyan-dark group-hover:translate-x-0.5 transition-transform">Read the guide →</span>
                      )}
                    </div>
                  </Card>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
