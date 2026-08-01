import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PaidPage from './pages/PaidPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaidPage />
  </StrictMode>,
)
