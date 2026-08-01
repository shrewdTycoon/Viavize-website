import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnalyticsPage from './pages/AnalyticsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnalyticsPage />
  </StrictMode>,
)
