import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PositioningPage from './pages/PositioningPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PositioningPage />
  </StrictMode>,
)
