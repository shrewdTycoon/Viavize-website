import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PositioningHub from './pages/resource/PositioningHub.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PositioningHub />
  </StrictMode>,
)
