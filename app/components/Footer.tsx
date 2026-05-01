import { Link } from 'react-router';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="navbar__logo-icon">☕</span>
          <p className="footer__logo">Joe's Coffee</p>
          <p className="footer__tagline">Premium commercial roasting<br/>for serious hospitality businesses.</p>
        </div>

        <div className="footer__links">
          <p className="footer__links-title">Navigate</p>
          <Link to="/">Home</Link>
          <Link to="/about">Our Story</Link>
          <a href="/#contact">Get a Quote</a>
        </div>

        <div className="footer__contact">
          <p className="footer__links-title">Contact</p>
          <a href="mailto:hello@joescoffee.com">hello@joescoffee.com</a>
          <a href="tel:+18005550199">1-800-555-0199</a>
          <p className="footer__address">123 Roast House Lane<br/>Portland, OR 97201</p>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {new Date().getFullYear()} Joe's Coffee. All rights reserved.</p>
        <p className="footer__mono">B2B Commercial Roasting</p>
      </div>
    </footer>
  );
}
