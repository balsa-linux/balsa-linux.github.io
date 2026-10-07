import { useEffect, useState } from 'react'
import wordmark from '../../assets/img/branding/balsa-horiz.png'
import './Nav.css'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="./">
        <img className="nav-logo" src={wordmark} alt="Balsa" />
      </a>
      <a
        className="nav-link"
        href="https://github.com/balsa-linux/balsa"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>
    </nav>
  )
}
