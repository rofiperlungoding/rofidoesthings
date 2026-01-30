import React from 'react';
import { Github, Linkedin, Instagram, Youtube, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
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
        <p className="built-with">Built with React + Vite + Passion ❤️</p>
      </div>

      <style>{`
        .site-footer {
           background: white;
           padding: 80px 0 30px;
           border-top: 1px solid #E5E7EB;
           margin-top: 80px;
        }

        .footer-grid {
           display: grid;
           grid-template-columns: 2fr 1fr 1fr;
           gap: 40px;
           margin-bottom: 60px;
        }

        .footer-brand {
           font-size: 1.8rem;
           font-weight: 800;
           margin-bottom: 12px;
           background: linear-gradient(135deg, #1E1B4B 0%, #4338CA 100%);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
           color: var(--text-secondary);
           margin-bottom: 24px;
           max-width: 300px;
           line-height: 1.6;
        }

        .contact-list {
           display: flex;
           flex-direction: column;
           gap: 12px;
        }
        .contact-item {
           display: flex;
           align-items: center;
           gap: 10px;
           color: #4B5563;
           font-size: 0.95rem;
        }

        .footer-col h4 {
           font-size: 1.1rem;
           margin-bottom: 24px;
           color: #111827;
        }

        .footer-col ul {
           list-style: none;
           padding: 0;
           margin: 0;
        }
        .footer-col ul li {
           margin-bottom: 12px;
        }
        .footer-col ul li a {
           color: #6B7280;
           text-decoration: none;
           transition: color 0.2s;
        }
        .footer-col ul li a:hover {
           color: #4F46E5;
        }

        .social-group {
           margin-bottom: 20px;
        }
        .group-label {
           display: block;
           font-size: 0.8rem;
           text-transform: uppercase;
           color: #9CA3AF;
           margin-bottom: 8px;
           font-weight: 600;
           letter-spacing: 0.5px;
        }
        .social-icons {
           display: flex;
           gap: 12px;
        }
        .social-icons a {
           width: 36px;
           height: 36px;
           border-radius: 8px;
           background: #F3F4F6;
           display: flex;
           align-items: center;
           justify-content: center;
           color: #374151;
           transition: all 0.2s;
        }
        .social-icons a:hover {
           background: #4F46E5;
           color: white;
        }

        .footer-bottom {
           padding-top: 30px;
           border-top: 1px solid #F3F4F6;
           display: flex;
           justify-content: space-between;
           color: #9CA3AF;
           font-size: 0.9rem;
        }

        @media (max-width: 768px) {
           .footer-grid { grid-template-columns: 1fr; gap: 40px; }
           .footer-bottom { flex-direction: column; gap: 10px; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
