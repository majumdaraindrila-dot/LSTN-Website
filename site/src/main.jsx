import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Pages are pre-rendered at build time → hydrate. In dev the root is empty → render.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
