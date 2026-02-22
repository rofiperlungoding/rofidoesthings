import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <a href="#" className="logo">
            <img
              src={scrolled ? "/Logo RDT.png" : "/Logo RDT Full.png"}
              alt="RDT Logo"
              className={`logo-img ${scrolled ? 'logo-compact' : 'logo-full'}`}
            />
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
              Consultation
            </a>
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} color="#000" /> : <Menu size={24} color="#000" />}
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
        </div>
      </div>

      <style>{`
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            padding: 32px 0;
            transition: padding 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease, backdrop-filter 0.4s ease;
            will-change: padding;
        }

        .navbar.scrolled {
            padding: 12px 0;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
        }

        .nav-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 48px; /* Lock height to prevent vertical jump */
        }

        .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            width: 200px; /* Locked width for vertical stability */
            flex-shrink: 0;
        }

        .logo-img {
            height: 42px;
            width: auto;
            display: block;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-img.logo-compact {
            height: 36px;
        }

        .nav-pill-container {
            background: rgba(0, 0, 0, 0.03);
            padding: 4px;
            border-radius: 99px;
        }

        .nav-links {
            display: flex;
            list-style: none;
        }

        .nav-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
            padding: 8px 20px;
            border-radius: 99px;
            transition: all 0.2s;
            display: block;
        }

        .nav-link:hover {
            color: var(--text-primary);
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .nav-actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 16px;
            width: 200px; /* Symmetrical width to logo locks center pill position */
            flex-shrink: 0;
        }

        .nav-btn {
            padding: 10px 24px;
            font-size: 0.85rem;
        }

        .mobile-toggle {
            display: none;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        .mobile-menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: white;
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: all 0.4s ease;
            transform: translateY(-20px);
        }

        .mobile-menu.open {
            opacity: 1;
            pointer-events: all;
            transform: translateY(0);
        }

        .mobile-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
        }

        .mobile-link {
            color: var(--text-primary);
            font-size: 2.5rem;
            font-weight: 700;
            text-decoration: none;
            letter-spacing: -0.04em;
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
