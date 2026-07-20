import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WebsitesPage from './pages/WebsitesPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebsitesPage />
  </StrictMode>,
)
