import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">☕</span>
          <span className="navbar__logo-text">Joe's Coffee</span>
          <span className="navbar__logo-tag">Commercial Roasters</span>
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <NavLink to="/" end className="navbar__link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="navbar__link" onClick={() => setMenuOpen(false)}>Our Story</NavLink>
          <a href="/#contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </a>
        </nav>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
