import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import Home from './pages/home/Home'
import Privacy from './pages/privacy/Privacy'

export const pages = {
  'index.html': () => renderToString(<StrictMode><Home /></StrictMode>),
  'privacy.html': () => renderToString(<StrictMode><Privacy /></StrictMode>),
}
