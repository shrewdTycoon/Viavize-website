import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContentPage from './pages/ContentPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContentPage />
  </StrictMode>,
)
