import logo from '../../assets/img/branding/logo.png'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <a className="footer-name" href="./">
        <img className="footer-logo" src={logo} alt="" />
        Balsa Linux
      </a>
      <ul className="footer-links">
        <li>
          <a className="footer-link" href="./privacy.html">Privacy</a>
        </li>
        <li>
          <a
            className="footer-link"
            href="https://github.com/balsa-linux/balsa"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </li>
        <li>
          <a
            className="footer-link"
            href="https://github.com/balsa-linux/balsa/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT License
          </a>
        </li>
      </ul>
    </footer>
  )
}
