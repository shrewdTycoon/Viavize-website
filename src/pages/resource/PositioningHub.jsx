import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Markdown from '../../components/resource/Markdown'
import guide from '../../resources/positioning/guide.md?raw'
import { CHAPTERS, HUB, BASE, chapterUrl, sliceBody } from '../../resources/positioning/chapters'

export default function PositioningHub() {
  const intro = sliceBody(guide, HUB)

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <div className="border-b border-border"
          style={{ background: 'linear-gradient(135deg, #EBF9FF 0%, #F5F7FA 45%, #FDF3DC 100%)' }}>
          <div className="max-w-[760px] mx-auto px-6 md:px-8 pt-14 pb-12">
            <nav className="text-[13px] text-muted flex items-center gap-1.5" aria-label="Breadcrumb">
              <a href="/" className="hover:text-navy">Home</a><span>/</span>
              <span className="text-slate">Product Positioning</span>
            </nav>
            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan-dark">
              A Viavize field guide · 13 chapters
            </p>
            <h1 className="mt-3 text-[34px] md:text-[46px] font-bold text-navy tracking-tight leading-[1.1]">
              {HUB.h1}
            </h1>
            <p className="mt-5 text-[17px] leading-[1.7] text-slate max-w-[620px]">
              A practical, workshop-style walk through positioning — part framework, part conversation.
              It defines who you are for, what you solve, and why it matters, and demonstrates the same
              process on the guide itself as a running example.
            </p>
            <a href={chapterUrl(CHAPTERS[0].slug)}
              className="mt-8 inline-flex items-center gap-1.5 px-6 py-3 rounded-lg bg-cyan text-navy text-[14px] font-semibold hover:bg-cyan-90 transition-colors">
              Start reading → {CHAPTERS[0].h1}
            </a>
          </div>
        </div>

        {/* Intro prose */}
        <section className="max-w-[760px] mx-auto px-6 md:px-8 pt-12">
          <Markdown source={intro} />
        </section>

        {/* Chapter list */}
        <section className="max-w-[760px] mx-auto px-6 md:px-8 py-14">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted mb-6">What’s inside</h2>
          <ol className="space-y-3">
            {CHAPTERS.map((c, i) => (
              <li key={c.slug}>
                <a href={chapterUrl(c.slug)}
                  className="group flex items-start gap-4 rounded-xl border border-border p-5 hover:border-cyan hover:shadow-[0_2px_16px_rgba(0,193,255,0.08)] transition-all">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-cyan-ultra text-cyan-dark font-bold text-[14px] flex items-center justify-center tabular-nums">{i + 1}</span>
                  <div>
                    <span className="block text-[16.5px] font-semibold text-navy group-hover:text-cyan-dark transition-colors">{c.h1}</span>
                    <span className="block mt-1 text-[14px] leading-[1.6] text-muted">{c.meta}</span>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  )
}
