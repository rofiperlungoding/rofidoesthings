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
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1280px;
          height: 72px; /* Slightly taller for better proportions */
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding: 8px 12px 8px 32px; /* Asymmetric padding for pill button */
          background: rgba(255, 255, 255, 0.75); /* More opaque */
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 999px; /* Pill shape */
          box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.02);
        }

        .logo {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.5px;
          color: var(--text-primary);
          text-decoration: none;
        }

        .nav-group {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: #6B7280;
          transition: all 0.2s ease;
          text-decoration: none;
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }
        
        /* Underline effect on hover */
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--text-primary);
          transition: width 0.3s ease;
          border-radius: 99px;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }

        .btn-cta {
          background-color: #111827;
          color: white;
          padding: 12px 28px;
          border-radius: 999px; /* Perfect pill */
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .btn-cta:hover {
          background-color: black;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          padding: 0;
          margin-right: 16px; /* Adjust for padding change */
        }
        
        @media (max-width: 900px) {
           .nav-container { padding: 0 24px; }
           .mobile-toggle { margin-right: 0; }
        }
        
        @media (max-width: 768px) {
          .navbar {
            left: 10px;
            right: 10px;
            top: 10px;
            width: auto;
            transform: none;
            max-width: none;
          }
          .nav-container {
            padding: 0 20px;
          }
          .hidden-mobile { display: none; }
          .mobile-toggle { display: block; }
          
          .mobile-menu {
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background: white;
            padding: 24px;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            text-align: center;
            box-shadow: 0 20px 40px -4px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(0,0,0,0.05);
          }
          
          .mobile-menu a {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
            text-decoration: none;
            padding: 12px;
            border-radius: 12px;
          }
          .mobile-menu a:hover {
            background-color: #F3F4F6;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
