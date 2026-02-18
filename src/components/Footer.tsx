import React from 'react';
import { Github, Linkedin, Instagram, Youtube, Mail, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        {/* Brand & Contact */}
        <div className="footer-col">
          <h3 className="footer-brand">Rofi.</h3>
          <p className="footer-tagline">Building the web of tomorrow, one pixel at a time.</p>

          <div className="contact-list">
            <div className="contact-item">
              <Mail size={18} /> <span>rofi.darmawan@outlook.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} /> <span>South Tangerang, Indonesia</span>
            </div>
            <div className="contact-item">
              <Globe size={18} /> <span>Bahasa Indonesia (Native) / English (C1)</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>Menu</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#achievements">Achievements</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-col">
          <h4>Connect</h4>

          <div className="social-group">
            <span className="group-label">Tech Profile</span>
            <div className="social-icons">
              <a href="https://github.com/rofiperlungoding" target="_blank" rel="noreferrer"><Github size={20} /></a>
              <a href="#" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="social-group">
            <span className="group-label">Creative Profile</span>
            <div className="social-icons">
              <a href="https://instagram.com/rofidoesthings" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
              <a href="#" target="_blank" rel="noreferrer"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; {currentYear} Rofi Does Things. All rights reserved.</p>
        <p className="built-with">Built with React + Vite. Designed in Dark.</p>
      </div>

      <style>{`
        .site-footer {
           background: black;
           padding: 80px 0 30px;
           border-top: 1px solid var(--border-subtle);
           margin-top: 80px;
           color: white;
        }

        .footer-grid {
           display: grid;
           grid-template-columns: 2fr 1fr 1fr;
           gap: 40px;
           margin-bottom: 60px;
        }

        .footer-brand {
           font-size: 2rem;
           font-weight: 800;
           margin-bottom: 16px;
           background: linear-gradient(135deg, white 0%, #94A3B8 100%);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
           color: var(--text-secondary);
           margin-bottom: 30px;
           max-width: 300px;
           line-height: 1.6;
           font-size: 1.1rem;
        }

        .contact-list {
           display: flex;
           flex-direction: column;
           gap: 16px;
        }
        .contact-item {
           display: flex;
           align-items: center;
           gap: 12px;
           color: var(--text-secondary);
           font-size: 0.95rem;
           transition: color 0.2s;
        }
        .contact-item:hover {
            color: white;
        }

        .footer-col h4 {
           font-size: 1.2rem;
           margin-bottom: 24px;
           color: white;
           font-weight: 600;
        }

        .footer-col ul {
           list-style: none;
           padding: 0;
           margin: 0;
        }
        .footer-col ul li {
           margin-bottom: 16px;
        }
        .footer-col ul li a {
           color: #94A3B8;
           text-decoration: none;
           transition: color 0.2s;
           font-size: 1rem;
        }
        .footer-col ul li a:hover {
           color: var(--accent-blue);
        }

        .social-group {
           margin-bottom: 24px;
        }
        .group-label {
           display: block;
           font-size: 0.75rem;
           text-transform: uppercase;
           color: #64748B;
           margin-bottom: 12px;
           font-weight: 700;
           letter-spacing: 0.05em;
        }
        .social-icons {
           display: flex;
           gap: 14px;
        }
        .social-icons a {
           width: 42px;
           height: 42px;
           border-radius: 12px;
           background: rgba(255,255,255,0.05);
           display: flex;
           align-items: center;
           justify-content: center;
           color: white;
           transition: all 0.2s;
           border: 1px solid rgba(255,255,255,0.05);
        }
        .social-icons a:hover {
           background: var(--accent-blue);
           border-color: var(--accent-blue);
           transform: translateY(-3px);
        }

        .footer-bottom {
           padding-top: 30px;
           border-top: 1px solid rgba(255,255,255,0.05);
           display: flex;
           justify-content: space-between;
           color: #64748B;
           font-size: 0.9rem;
        }

        @media (max-width: 768px) {
           .footer-grid { grid-template-columns: 1fr; gap: 40px; }
           .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
