import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          rofi<span style={{ color: '#9CA3AF' }}>doesthings</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden-mobile nav-group">
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
          </div>
          <a href="mailto:rofi.darmawan@outlook.com" className="btn btn-cta">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="mailto:rofi.darmawan@outlook.com" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 94%;
          max-width: 1440px;
          height: 64px;
          z-index: 100;
          transition: all 0.3s ease;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding: 0 24px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
        }

        .logo {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: -0.5px;
          color: var(--text-primary);
          text-decoration: none;
        }

        .nav-group {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: #6B7280;
          transition: color 0.2s;
          text-decoration: none;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .btn-cta {
          background-color: #111827;
          color: white;
          padding: 8px 20px;
          border-radius: 99px;
          font-size: 0.9rem;
          font-weight: 600;
          transition: transform 0.2s, background-color 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }

        .btn-cta:hover {
          background-color: black;
          transform: translateY(-1px);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          padding: 0;
        }
        
        @media (max-width: 768px) {
          .navbar {
            left: 10px;
            right: 10px;
            top: 10px;
          }
          .nav-container {
            padding: 0 16px;
          }
          .hidden-mobile { display: none; }
          .mobile-toggle { display: block; }
          
          .mobile-menu {
            position: absolute;
            top: 74px;
            left: 0;
            right: 0;
            background: white;
            padding: 24px;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            text-align: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(0,0,0,0.05);
          }
          
          .mobile-menu a {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
            text-decoration: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
