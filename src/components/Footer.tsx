import React from 'react';
import { Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-site">
      <div className="container">
        <div className="footer-mosaic">
          {/* CTA Pod */}
          <div className="bento-card cta-pod">
            <div className="cta-content">
              <h2>Let's build the next big thing.</h2>
              <p>Engineering robust systems and human-centric experiences.</p>
              <div className="social-links-row">
                <a href="https://github.com/rofiperlungoding" target="_blank" rel="noopener noreferrer" className="social-pill">
                  <Github size={18} /> GitHub
                </a>
                <a href="mailto:rofid@example.com" className="social-pill">
                  <Mail size={18} /> Email
                </a>
              </div>
            </div>
          </div>

          {/* Copyright/Meta Pod */}
          <div className="bento-card meta-pod">
            <div className="footer-brand">
              <img src="/Logo RDT Full.png" alt="RDT Logo" className="footer-logo" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Rofi's Portfolio</p>
        </div>
      </div>

      <style>{`
        .footer-site {
          padding: 80px 0 100px; /* Increased bottom padding to push it down */
          position: relative;
          z-index: 10;
        }

        .footer-mosaic {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .cta-pod {
          padding: 60px;
          background: linear-gradient(145deg, rgba(37, 99, 235, 0.05) 0%, rgba(255, 255, 255, 0) 100%) !important;
          border-color: rgba(37, 99, 235, 0.2) !important;
        }

        .cta-pod h2 {
          font-size: 2.5rem;
          margin-bottom: 16px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .cta-pod p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .social-links-row {
          display: flex;
          gap: 16px;
        }

        .social-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: var(--text-primary);
          color: white;
          border-radius: 99px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .social-pill:hover {
          opacity: 0.9;
        }

        .meta-pod {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .footer-logo {
          height: 60px;
          width: auto;
          margin-bottom: 12px;
          display: block;
        }

        .footer-copyright {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin: 0;
          opacity: 0.7;
        }

        .tech-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #94A3B8;
          padding: 8px 16px;
          background: rgba(0,0,0,0.03);
          border-radius: 8px;
          width: fit-content;
        }

        .footer-bottom {
          margin-top: 60px;
          text-align: center;
          border-top: 1px solid var(--border-subtle);
          padding-top: 40px;
        }

        .footer-bottom p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.6;
        }

        @media (max-width: 900px) {
          .footer-mosaic { grid-template-columns: 1fr; }
          .cta-pod { padding: 40px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
