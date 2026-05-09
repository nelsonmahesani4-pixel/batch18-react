import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Featured", href: "#featured" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "/Login" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-icon">🍽</span>
          <span className="navbar__logo-text">
            Savour<em>Nest</em>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__actions">
          <Link to="/Login">
          <a href="/Login" className="btn-primary navbar__cta">
            Order Now
          </a>
          </Link>
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Link to="/Login">
        <a href="#menu" className="btn-primary" onClick={() => setMenuOpen(false)}>
          Order Now
        </a> 
        </Link>
        
      </div>
      <div>
        <style>
          {`
           .navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition);
}

.navbar--scrolled {
  background: rgba(13, 13, 13, 0.92);
  backdrop-filter: blur(20px);
  padding: 14px 0;
  border-bottom: 1px solid var(--clr-border);
  box-shadow: 0 4px 30px rgba(0,0,0,0.3);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--clr-text);
  transition: var(--transition);
}

.navbar__logo:hover { opacity: 0.85; }

.navbar__logo-icon {
  font-size: 1.8rem;
  animation: float 3s ease-in-out infinite;
}

.navbar__logo-text em {
  font-style: italic;
  color: var(--clr-accent);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
}

.navbar__link {
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--clr-muted);
  transition: var(--transition);
}

.navbar__link:hover {
  color: var(--clr-text);
  background: rgba(255,255,255,0.06);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.navbar__cta {
  font-size: 0.875rem;
  padding: 10px 24px;
}

.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  cursor: pointer;
  background: none;
  border: none;
}

.navbar__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--clr-text);
  border-radius: 2px;
  transition: var(--transition);
}

.navbar__hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar__hamburger.open span:nth-child(2) {
  opacity: 0;
}

.navbar__hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.navbar__mobile {
  display: none;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 0 24px 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.3s ease;
}

.navbar__mobile--open {
  max-height: 400px;
  padding-bottom: 20px;
}

.navbar__mobile-link {
  display: block;
  width: 100%;
  padding: 12px 16px;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--clr-muted);
  border-radius: 10px;
  transition: var(--transition);
}

.navbar__mobile-link:hover {
  color: var(--clr-text);
  background: rgba(255,255,255,0.05);
}

@media (max-width: 900px) {
  .navbar__links {
    display: none;
  }
  .navbar__cta {
    display: none;
  }
  .navbar__hamburger {
    display: flex;
  }
  .navbar__mobile {
    display: flex;
  }
}

          `}
        </style>
      </div>
    </nav>
    
  );
  
}
