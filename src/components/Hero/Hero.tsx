import logo from '../../assets/img/branding/logo.png'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <img className="hero-logo" src={logo} alt="" />
      <p className="hero-eyebrow">Balsa Linux</p>
      <h1 className="hero-headline">Linux, simplified.</h1>
      <p className="hero-subhead">
        Lightweight, malleable, and built on Nix.
      </p>
      <p className="hero-release">Releasing Q1 2027</p>
    </section>
  )
}
