import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CampaignsPage from './pages/CampaignsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CampaignsPage />
  </StrictMode>,
)
