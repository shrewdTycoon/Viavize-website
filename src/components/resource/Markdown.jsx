// Minimal, dependency-free Markdown renderer for the positioning resource.
// Supports headings (# → h2, ## → h3, ### → h4), paragraphs, ordered and
// unordered lists, blockquotes, pipe tables, horizontal rules, and inline
// **bold** / *italic* / [links](url). Content is authored, not user input.

function renderInline(text, keyPrefix = '') {
  const nodes = []
  // Split on the inline tokens while keeping them.
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g
  let last = 0
  let m
  let i = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    const tok = m[0]
    const key = `${keyPrefix}-${i++}`
    if (tok.startsWith('**')) nodes.push(<strong key={key} className="font-semibold text-navy">{tok.slice(2, -2)}</strong>)
    else if (tok.startsWith('*')) nodes.push(<em key={key}>{tok.slice(1, -1)}</em>)
    else {
      const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok)
      nodes.push(
        <a key={key} href={mm[2]} className="text-cyan-dark underline underline-offset-2 hover:text-navy transition-colors">{mm[1]}</a>,
      )
    }
    last = m.index + tok.length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

export default function Markdown({ source }) {
  const lines = source.replace(/\r\n/g, '\n').split('\n')
  const blocks = []
  let i = 0

  const pushList = (ordered) => {
    const items = []
    while (i < lines.length && /^\s*(?:[-*]|\d+\.)\s+/.test(lines[i])) {
      items.push(lines[i].replace(/^\s*(?:[-*]|\d+\.)\s+/, ''))
      i++
    }
    blocks.push({ type: ordered ? 'ol' : 'ul', items })
  }

  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === '') { i++; continue }

    if (/^#{1,3}\s+/.test(line)) {
      const level = line.match(/^(#{1,3})/)[1].length
      blocks.push({ type: `h${level + 1}`, text: line.replace(/^#{1,3}\s+/, '') })
      i++
    } else if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      blocks.push({ type: 'hr' }); i++
    } else if (/^>\s?/.test(line)) {
      const quote = []
      while (i < lines.length && /^>\s?/.test(lines[i])) { quote.push(lines[i].replace(/^>\s?/, '')); i++ }
      blocks.push({ type: 'quote', text: quote.join(' ') })
    } else if (/^\s*\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1])) {
      const rows = []
      while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) {
        rows.push(lines[i].trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim()))
        i++
      }
      const header = rows[0]
      const body = rows.slice(2) // skip the |---| separator row
      blocks.push({ type: 'table', header, body })
    } else if (/^\s*(?:[-*]|\d+\.)\s+/.test(line)) {
      pushList(/^\s*\d+\.\s+/.test(line))
    } else {
      // paragraph: gather consecutive non-blank, non-special lines
      const para = []
      while (
        i < lines.length && lines[i].trim() !== '' &&
        !/^#{1,3}\s+/.test(lines[i]) && !/^>\s?/.test(lines[i]) &&
        !/^\s*(?:[-*]|\d+\.)\s+/.test(lines[i]) && !/^(-{3,}|\*{3,}|_{3,})\s*$/.test(lines[i]) &&
        !/^\s*\|.*\|\s*$/.test(lines[i])
      ) { para.push(lines[i]); i++ }
      blocks.push({ type: 'p', text: para.join(' ') })
    }
  }

  return (
    <div className="resource-prose">
      {blocks.map((b, idx) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={idx} className="text-[24px] md:text-[28px] font-bold text-navy tracking-tight mt-14 mb-4 scroll-mt-24">{renderInline(b.text, `h2${idx}`)}</h2>
          case 'h3':
            return <h3 key={idx} className="text-[19px] md:text-[21px] font-semibold text-navy mt-10 mb-3">{renderInline(b.text, `h3${idx}`)}</h3>
          case 'h4':
            return <h4 key={idx} className="text-[16px] md:text-[17px] font-semibold text-navy mt-8 mb-2">{renderInline(b.text, `h4${idx}`)}</h4>
          case 'hr':
            return <hr key={idx} className="my-10 border-0 border-t border-border" />
          case 'quote':
            return (
              <blockquote key={idx} className="my-7 pl-5 border-l-3 border-cyan/50 bg-cyan-ultra/40 rounded-r-lg py-3 pr-4 text-[16px] italic text-slate">
                {renderInline(b.text, `q${idx}`)}
              </blockquote>
            )
          case 'ul':
            return <ul key={idx} className="my-5 space-y-2 list-none">{b.items.map((it, j) => (
              <li key={j} className="relative pl-6 text-[16.5px] leading-[1.75] text-slate before:content-[''] before:absolute before:left-1 before:top-[0.7em] before:w-[6px] before:h-[6px] before:rounded-full before:bg-cyan">{renderInline(it, `ul${idx}-${j}`)}</li>
            ))}</ul>
          case 'ol':
            return <ol key={idx} className="my-5 space-y-2 list-decimal pl-6 marker:text-cyan-dark marker:font-semibold">{b.items.map((it, j) => (
              <li key={j} className="pl-1.5 text-[16.5px] leading-[1.75] text-slate">{renderInline(it, `ol${idx}-${j}`)}</li>
            ))}</ol>
          case 'table':
            return (
              <div key={idx} className="my-7 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-[15px] border-collapse">
                  <thead><tr className="bg-cloud">{b.header.map((h, j) => (
                    <th key={j} className="text-left font-semibold text-navy px-4 py-3 border-b border-border">{renderInline(h, `th${idx}-${j}`)}</th>
                  ))}</tr></thead>
                  <tbody>{b.body.map((row, j) => (
                    <tr key={j} className="odd:bg-white even:bg-cloud/50">{row.map((c, k) => (
                      <td key={k} className="align-top px-4 py-3 border-b border-border/60 text-slate">{renderInline(c, `td${idx}-${j}-${k}`)}</td>
                    ))}</tr>
                  ))}</tbody>
                </table>
              </div>
            )
          default:
            return <p key={idx} className="my-4 text-[16.5px] leading-[1.8] text-slate">{renderInline(b.text, `p${idx}`)}</p>
        }
      })}
    </div>
  )
}
