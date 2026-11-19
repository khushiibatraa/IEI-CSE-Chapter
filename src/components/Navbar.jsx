import React, { useState, useEffect } from 'react';
import { clubData } from '../data/clubData';

export default function Navbar({ onOpenJoinModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = ['hero', 'about', 'activities', 'events', 'team', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { href: '#hero', id: 'hero', label: 'Home' },
    { href: '#about', id: 'about', label: 'About' },
    { href: '#activities', id: 'activities', label: 'Activities' },
    { href: '#events', id: 'events', label: 'Events' },
    { href: '#team', id: 'team', label: 'Team' },
    { href: '#contact', id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Top Institutional Bar */}
      <div className="navbar-top-strip">
        <div className="container strip-content">
          <div className="strip-left">
            <span className="strip-pill">ESTD 1920</span>
            <span>{clubData.chapter.parentBody} • Incorporated by Royal Charter 1935</span>
          </div>
          <span className="strip-motto">{clubData.chapter.motto}</span>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <nav className="navbar-main" aria-label="Main Navigation">
        <div className="container navbar-container">
          {/* Logo and Club Identity */}
          <a href="#hero" className="navbar-brand" onClick={closeMobileMenu}>
            <div className="logo-frame">
              <img
                src="/iei-logo.jpg"
                alt="The Institution of Engineers (India) Official Seal"
                className="iei-navbar-logo"
                loading="eager"
              />
            </div>
            <div className="brand-text">
              <span className="brand-primary">IEI CSE Chapter</span>
              <span className="brand-secondary">{clubData.chapter.department}</span>
            </div>
          </a>

          {/* Desktop Navigation Links with Animated Underlines */}
          <div className="nav-desktop">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <a
                href="#join"
                className="btn btn-gold btn-sm nav-cta"
                onClick={() => {
                  if (onOpenJoinModal) onOpenJoinModal();
                }}
              >
                <span>Join Us</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={activeSection === item.id ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-cta-item">
            <a
              href="#join"
              className="btn btn-gold btn-lg mobile-cta-btn"
              onClick={() => {
                closeMobileMenu();
                if (onOpenJoinModal) onOpenJoinModal();
              }}
            >
              Become a Member (Join Us)
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
