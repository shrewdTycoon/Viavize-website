import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ResourcesIndex from './pages/resource/ResourcesIndex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResourcesIndex />
  </StrictMode>,
)
