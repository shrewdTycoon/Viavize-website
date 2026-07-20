import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EmailPage from './pages/EmailPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmailPage />
  </StrictMode>,
)
