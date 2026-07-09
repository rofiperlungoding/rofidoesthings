import React from 'react';

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
            font-size: 1.1rem;
            color: #475569;
            max-width: 600px;
            margin-bottom: 48px;
            line-height: 1.6;
            font-weight: 400;
            text-align: center;
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

        @media (max-width: 768px) {
            .hero-title { font-size: 3rem; }
            .hero-desc { font-size: 1rem; }
            .hero-actions { flex-direction: column; width: 100%; }
            .hero-eyebrow { letter-spacing: 0.2em; font-size: 0.7rem; }
        }
    `}</style>
    </section>
  );
};

export default Hero;
