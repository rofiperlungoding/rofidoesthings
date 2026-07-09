import React from 'react';
import { Code, Settings, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Main Heading */}
        <h1 className="hero-title">
          <span className="accent-text">Built to Build</span><br />
          What Doesn't Exist Yet.
        </h1>

        {/* Description */}
        <p className="hero-desc">
          Computer Engineer. Creator. Driven by purpose, defined by craft.
        </p>

        {/* Buttons */}
        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-dark">
            See My Work
          </a>
          <a href="mailto:rofi.darmawan@outlook.com" className="btn btn-outline accent-border-btn">
            Get in Touch
          </a>
        </div>

        {/* Tech Stack Strip */}
        <div className="tech-strip">
          <div className="tech-logos">
            <div className="tech-item"><Code size={16} className="accent-text" /> <span>React & TypeScript</span></div>
            <div className="tech-item"><Settings size={16} className="accent-text" /> <span>IoT Systems</span></div>
            <div className="tech-item"><Cloud size={16} className="accent-text" /> <span>Cloud Architecture</span></div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 24px;
            position: relative;
        }

        
        .hero-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 800px;
            text-align: center;
            z-index: 2;
            padding-bottom: 8vh;
        }

        .hero-title {
            font-size: 4.2rem;
            line-height: 1.15;
            margin-bottom: 48px;
            font-weight: 700;
            letter-spacing: -0.03em;
            color: #000000;
            max-width: 800px;
        }

        .accent-text {
            color: #2563EB;
        }

        .hero-desc {
            font-size: 1.25rem;
            color: #475569;
            max-width: 600px;
            margin-bottom: 56px;
            line-height: 1.6;
            font-weight: 400;
        }

        .hero-actions {
            display: flex;
            gap: 20px;
            margin-bottom: 120px;
        }

        .btn-dark {
            background: #000;
            color: #fff;
            padding: 16px 36px;
            border-radius: 99px;
            font-weight: 600;
            font-size: 0.95rem;
            text-decoration: none;
            transition: all 0.2s ease;
        }

        .btn-dark:hover {
            opacity: 0.85;
            transform: translateY(-1px);
        }

        .btn-outline {
            background: transparent;
            color: #1E293B;
            padding: 16px 40px;
            border-radius: 999px;
            font-weight: 600;
            font-size: 0.95rem;
            text-decoration: none;
            border: 1px solid #E2E8F0;
            transition: all 0.2s ease;
        }

        .accent-border-btn {
            border-color: rgba(37, 99, 235, 0.2);
            color: #2563EB;
        }

        .btn-outline:hover {
            background: rgba(37, 99, 235, 0.04);
            border-color: #2563EB;
            color: #2563EB;
        }

        .tech-strip {
            opacity: 0.6;
            transition: opacity 0.3s ease;
        }

        .tech-strip:hover {
            opacity: 1;
        }
        
        .tech-logos {
            display: flex;
            gap: 40px;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .tech-item {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #1E293B;
            font-weight: 600;
            font-size: 0.85rem;
        }

        @media (max-width: 768px) {
            .hero-title { font-size: 3rem; }
            .hero-desc { font-size: 1.1rem; }
            .hero-actions { flex-direction: column; width: 100%; }
            .tech-logos { gap: 24px; }
            .hero-eyebrow { letter-spacing: 0.2em; font-size: 0.7rem; }
        }
    `}</style>
    </section>
  );
};

export default Hero;
