import React, { useState } from 'react';
import { Menu, X, User, Briefcase, Cpu, History, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Portfolio', href: '#portfolio', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Experience', href: '#experience', icon: History },
  ];

  return (
    <nav className="navbar-overlay">

      {/* Left Column: Logo */}
      <div className="nav-left">
        <a href="#" className="nav-card logo-card">
          <div className="logo-icon-box">
            <span className="logo-initial">R</span>
          </div>
          <span className="logo-text">rofi<span className="text-muted">doesthings</span></span>
        </a>
      </div>

      {/* Right Column: Navigation Stack (Desktop) */}
      <div className="nav-right hidden-mobile">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="nav-card nav-link-item">
            <link.icon size={18} className="nav-icon" />
            <span>{link.name}</span>
          </a>
        ))}
        <a href="mailto:rofi.darmawan@outlook.com" className="nav-card nav-cta">
          <Mail size={18} className="nav-icon" />
          <span>Contact</span>
        </a>
      </div>

      {/* Mobile Toggle (Right Top) */}
      <div className="nav-right mobile-only">
        <button
          className="nav-card mobile-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu-container">
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="mobile-nav-item" onClick={() => setIsOpen(false)}>
                <link.icon size={20} />
                <span>{link.name}</span>
              </a>
            ))}
            <a href="mailto:rofi.darmawan@outlook.com" className="mobile-nav-item highlight" onClick={() => setIsOpen(false)}>
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        /* Overlay Container - allows clicking through to page content */
        .navbar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          pointer-events: none;
          height: 0; /* Don't block bottom content */
          overflow: visible;
        }

        /* Floating Columns */
        .nav-left {
          position: fixed;
          top: 24px;
          left: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          pointer-events: auto;
          z-index: 1001;
        }

        .nav-right {
          position: fixed;
          top: 24px;
          right: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          pointer-events: auto;
          align-items: flex-end; /* Align cards to the right */
          z-index: 1001;
        }

        /* Common Card Style */
        .nav-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 12px 20px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #4B5563;
          font-weight: 600;
          font-size: 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .nav-card:hover {
          transform: translateY(-2px);
          background: white;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
          color: #111827;
        }

        .nav-icon {
          color: #9CA3AF;
          transition: color 0.2s;
        }
        .nav-card:hover .nav-icon {
          color: #4F46E5;
        }

        /* Specific Item Styles */
        .logo-card {
          padding: 10px 16px;
          border-radius: 99px; /* Pill shape for logo */
        }
        
        .logo-icon-box {
            width: 32px;
            height: 32px;
            background: #111827;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        
        .logo-initial {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 800;
            font-size: 1rem;
        }

        .logo-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          color: #111827;
          font-size: 1.05rem;
          letter-spacing: -0.5px;
        }
        .text-muted { color: #9CA3AF; }

        .nav-link-item {
            width: fit-content;
        }
        
        .nav-cta {
           background: #111827;
           color: white;
           border: 1px solid #111827;
        }
        .nav-cta .nav-icon { color: rgba(255,255,255,0.7); }
        .nav-cta:hover {
           background: #282F3C;
           transform: translateY(-2px);
           color: white;
           box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .nav-cta:hover .nav-icon { color: white; }

        .mobile-only { display: none; }
        .hidden-mobile { display: flex; }

        /* Mobile Menu */
        .mobile-menu-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0,0,0,0.2);
            backdrop-filter: blur(4px);
            z-index: 1000;
            display: flex;
            justify-content: flex-end;
            pointer-events: auto;
        }
        
        .mobile-menu-content {
            width: 280px;
            height: 100%;
            background: white;
            padding: 80px 24px 24px 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            animation: slideIn 0.3s ease-out;
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
        
        .mobile-nav-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px;
            border-radius: 16px;
            color: #4B5563;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s;
        }
        .mobile-nav-item:hover {
            background: #F3F4F6;
            color: #111827;
        }
        .mobile-nav-item.highlight {
            background: #EEF2FF;
            color: #4F46E5;
        }

        @media (max-width: 900px) {
            .hidden-mobile { display: none; }
            .mobile-only { display: flex; }
            
            .nav-left { top: 20px; left: 20px; }
            .nav-right { top: 20px; right: 20px; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
