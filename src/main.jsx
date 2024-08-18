import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Intro from './intro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Intro>
      <App />
    </Intro>
  </StrictMode>,
)
