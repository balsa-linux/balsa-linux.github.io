import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../styles/global.css'
import { Nav } from '../../components/Nav/Nav'
import { PrivacyPolicy } from './PrivacyPolicy'
import { Footer } from '../../components/Footer/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <PrivacyPolicy />
    <Footer />
  </StrictMode>
)
