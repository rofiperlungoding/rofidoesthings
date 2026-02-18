import React from 'react';
import { ArrowRight, Code, Terminal, Cpu, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">



        {/* Main Heading */}
        <h1 className="hero-title">
          Tingkatkan Kualitas Digital<br />
          <span className="text-gradient-blue">Dengan Frontend Engineering</span>
        </h1>

        {/* Description */}
        <p className="hero-desc">
          Solusi one-stop untuk kebutuhan website modern. Kualitas premium,
          performa tinggi, dan detail estetika yang memukau.
        </p>

        {/* Buttons */}
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Mulai Konsultasi
          </a>
          <a href="#portfolio" className="btn btn-secondary">
            Lihat Portfolio
          </a>
        </div>

        {/* Tech Stack Strip (Logos) - Replaced with Icons for now */}
        <div className="tech-strip">
          <div className="tech-logos">
            <div className="tech-item"><Code size={20} /> <span>React</span></div>
            <div className="tech-item"><Terminal size={20} /> <span>TypeScript</span></div>
            <div className="tech-item"><Cpu size={20} /> <span>IoT Core</span></div>
            <div className="tech-item"><Globe size={20} /> <span>Next.js</span></div>
            <div className="tech-item"><Code size={20} /> <span>Framer Motion</span></div>
          </div>
        </div>

      </div>

      <style>{`
        .hero-section {
            padding-top: 100px; /* Reduced space since navbar is gone */
            padding-bottom: 100px;
            text-align: center;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            /* Background Spotlights - Super Soft & Wide */
            background: radial-gradient(130% 90% at 50% -20%, rgba(37, 99, 235, 0.1) 0%, rgba(255,255,255,0) 100%);
        }
        
        .hero-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 1000px;
            position: relative;
            z-index: 2;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 8px 16px;
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 99px;
            font-size: 0.7rem;
            color: #94A3B8;
            font-weight: 600;
            margin-bottom: 40px;
            backdrop-filter: blur(8px);
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

        .badge-dot {
            width: 6px;
            height: 6px;
            background: var(--accent-blue);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--accent-blue);
        }

        .hero-title {
            font-size: 5rem; /* Huge impact */
            line-height: 1.05;
            margin-bottom: 32px;
            font-weight: 700;
            letter-spacing: -0.03em;
            color: var(--text-primary);
        }

        .hero-desc {
            font-size: 1.25rem;
            color: var(--text-secondary);
            max-width: 640px;
            margin-bottom: 50px;
            line-height: 1.6;
            font-weight: 400;
        }

        .hero-actions {
            display: flex;
            gap: 20px;
            margin-bottom: 80px;
        }

        /* Tech Strip */
        .tech-strip {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        
        .tech-logos {
            display: flex;
            justify-content: center;
            gap: 60px;
            flex-wrap: wrap;
            opacity: 0.4;
            transition: opacity 0.3s;
        }
        .tech-logos:hover {
            opacity: 0.8;
        }
        
        .tech-item {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--text-secondary);
            font-weight: 600;
            font-size: 1rem;
        }

        @media (max-width: 768px) {
            .hero-section { padding-top: 140px; }
            .hero-title { font-size: 2.75rem; }
            .hero-desc { font-size: 1.1rem; padding: 0 20px; }
            .hero-actions { flex-direction: column; width: 100%; max-width: 320px; gap: 12px; }
            .btn { width: 100%; }
            .tech-logos { gap: 30px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
