import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <a href="#" className="logo">
            ROFI<br />DOES<br />THINGS
          </a>

          {/* Desktop Nav - Centered Pills */}
          <div className="nav-pill-container">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="nav-actions">
            <a href="mailto:rofi.darmawan@outlook.com" className="btn btn-primary nav-btn">
              Contact Me
            </a>
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X color="white" /> : <Menu color="white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="mailto:rofi.darmawan@outlook.com" className="btn btn-primary mobile-cta">
            Contact Me <ArrowRight size={16} style={{ marginLeft: 8 }} />
          </a>
        </div>
      </div>

      <style>{`
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            padding: 24px 0;
            transition: all 0.3s ease;
        }

        .navbar.scrolled {
            padding: 16px 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .nav-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo {
            font-size: 0.8rem;
            font-weight: 800;
            color: white;
            text-decoration: none;
            line-height: 1;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        /* Centered Pill Nav */
        .nav-pill-container {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            padding: 6px 8px;
            border-radius: 99px;
            backdrop-filter: blur(10px);
        }

        .nav-links {
            display: flex;
            gap: 4px;
            list-style: none;
        }

        .nav-link {
            color: #94A3B8;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            padding: 8px 20px;
            border-radius: 99px;
            transition: all 0.2s;
            display: block;
        }

        .nav-link:hover {
            color: white;
            background: rgba(255, 255, 255, 0.1);
        }

        .nav-actions {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .nav-btn {
            padding: 10px 24px;
            font-size: 0.85rem;
            min-height: 40px;
        }

        .mobile-toggle {
            display: none;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        /* Mobile Menu */
        .mobile-menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: black;
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s;
        }

        .mobile-menu.open {
            opacity: 1;
            pointer-events: all;
        }

        .mobile-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
        }

        .mobile-link {
            color: white;
            font-size: 2rem;
            font-weight: 800;
            text-decoration: none;
            letter-spacing: -0.02em;
        }
        
        @media (max-width: 900px) {
            .nav-pill-container, .nav-btn { display: none; }
            .mobile-toggle { display: block; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
