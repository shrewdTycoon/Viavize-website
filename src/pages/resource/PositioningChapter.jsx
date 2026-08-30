import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Markdown from '../../components/resource/Markdown'
import guide from '../../resources/positioning/guide.md?raw'
import { CHAPTERS, HUB, BASE, bySlug, chapterUrl, sliceBody } from '../../resources/positioning/chapters'

export default function PositioningChapter({ slug }) {
  const chapter = bySlug(slug)
  if (!chapter) {
    return (
      <>
        <Nav />
        <main className="pt-28 pb-24 max-w-[720px] mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-navy">Chapter not found</h1>
          <p className="mt-3 text-slate">
            Head back to the <a className="text-cyan-dark underline" href={`${BASE}/`}>positioning guide</a>.
          </p>
        </main>
        <Footer />
      </>
    )
  }

  const idx = CHAPTERS.findIndex((c) => c.slug === slug)
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null
  const body = sliceBody(guide, chapter)

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header band */}
        <div className="border-b border-border"
          style={{ background: 'linear-gradient(135deg, #EBF9FF 0%, #F5F7FA 45%, #FDF3DC 100%)' }}>
          <div className="max-w-[760px] mx-auto px-6 md:px-8 pt-12 pb-10">
            <nav className="text-[13px] text-muted flex items-center gap-1.5 flex-wrap" aria-label="Breadcrumb">
              <a href="/" className="hover:text-navy">Home</a><span>/</span>
              <a href={`${BASE}/`} className="hover:text-navy">Product Positioning</a><span>/</span>
              <span className="text-slate">{chapter.h1}</span>
            </nav>
            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-cyan-dark">
              Product Positioning · Chapter {idx + 1} of {CHAPTERS.length}
            </p>
            <h1 className="mt-3 text-[30px] md:text-[40px] font-bold text-navy tracking-tight leading-[1.12]">
              {chapter.h1}
            </h1>
          </div>
        </div>

        {/* Body */}
        <article className="max-w-[760px] mx-auto px-6 md:px-8 py-12">
          <Markdown source={body} />

          {/* Prev / next */}
          <nav className="mt-16 pt-8 border-t border-border grid sm:grid-cols-2 gap-4" aria-label="Chapter navigation">
            {prev ? (
              <a href={chapterUrl(prev.slug)} className="group rounded-xl border border-border p-5 hover:border-cyan hover:shadow-[0_2px_16px_rgba(0,193,255,0.08)] transition-all">
                <span className="text-[12px] font-medium text-muted">← Previous</span>
                <span className="block mt-1 text-[15px] font-semibold text-navy group-hover:text-cyan-dark transition-colors">{prev.h1}</span>
              </a>
            ) : (
              <a href={`${BASE}/`} className="group rounded-xl border border-border p-5 hover:border-cyan transition-all">
                <span className="text-[12px] font-medium text-muted">← Back to</span>
                <span className="block mt-1 text-[15px] font-semibold text-navy group-hover:text-cyan-dark transition-colors">Guide overview</span>
              </a>
            )}
            {next && (
              <a href={chapterUrl(next.slug)} className="group rounded-xl border border-border p-5 text-right hover:border-cyan hover:shadow-[0_2px_16px_rgba(0,193,255,0.08)] transition-all">
                <span className="text-[12px] font-medium text-muted">Next →</span>
                <span className="block mt-1 text-[15px] font-semibold text-navy group-hover:text-cyan-dark transition-colors">{next.h1}</span>
              </a>
            )}
          </nav>

          {/* Series index */}
          <div className="mt-12 rounded-2xl bg-cloud border border-border p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">The full guide</p>
            <ol className="mt-4 space-y-1.5">
              {CHAPTERS.map((c, i) => (
                <li key={c.slug}>
                  <a href={chapterUrl(c.slug)}
                    className={`flex gap-3 text-[14.5px] py-1 ${c.slug === slug ? 'text-navy font-semibold' : 'text-slate hover:text-navy'}`}>
                    <span className="text-muted tabular-nums w-5 shrink-0">{i + 1}.</span>
                    <span>{c.h1}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
