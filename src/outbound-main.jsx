import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OutboundPage from './pages/OutboundPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OutboundPage />
  </StrictMode>,
)
