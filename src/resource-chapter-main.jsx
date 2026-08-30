import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PositioningChapter from './pages/resource/PositioningChapter.jsx'
import { BASE } from './resources/positioning/chapters'

// Every chapter page loads this same module; the slug comes from the URL.
const slug = window.location.pathname
  .replace(`${BASE}/`, '')
  .replace(/\/$/, '')
  .replace(/index\.html$/, '')
  .replace(/\/$/, '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PositioningChapter slug={slug} />
  </StrictMode>,
)
