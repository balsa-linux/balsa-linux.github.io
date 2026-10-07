import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '../../styles/global.css'
import Privacy from './Privacy'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <Privacy />
  </StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
