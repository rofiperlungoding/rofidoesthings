import React from 'react';
import { ArrowRight, Download, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bento-card hero-card">
      <div className="hero-grid">
        <div className="hero-text-content">
          <div className="badge-wrapper">
            <div className="pill-badge">
              <span className="dot"></span> Brawijaya University • Gold Medalist
            </div>
          </div>

          <h1 className="hero-title">
            <span className="hero-highlight">Computer Engineering Student</span> <br />
            Tech Innovator & Creative Creator
          </h1>

          <p className="hero-subtitle">
            Bridging technology innovation with visual storytelling.
            Specializing in IoT, Cybersecurity, and Creative Documentation.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              View My Projects <ArrowRight size={18} style={{ marginLeft: 8 }} strokeWidth={2.5} />
            </a>
            <a href="/resume.pdf" target="_blank" className="btn btn-secondary" style={{ border: 'none', background: '#F3F4F6' }}>
              <Download size={20} style={{ marginRight: 8 }} strokeWidth={2.5} /> Download Resume
            </a>
            <a href="https://github.com/rofiperlungoding" target="_blank" className="btn btn-icon" aria-label="Github">
              <Github size={24} color="#374151" />
            </a>
          </div>
        </div>

        <div className="hero-photo-wrapper">
          <div className="photo-card">
            <img src="/profile-rofi.png" alt="Rofi Profile" />

          </div>
        </div>
      </div>

      {/* Abstract Visual Elements */}
      <div className="hero-visuals">
        <div className="abstract-shape shape-1"></div>
        <div className="abstract-shape shape-2"></div>
      </div>

      <style>{`
        .hero-card {
           min-height: 600px;
           padding: 60px;
           background: radial-gradient(circle at top right, #F0FDF4 0%, #FFFFFF 60%);
           display: flex;
           align-items: center;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .hero-text-content {
          text-align: left;
        }

        .badge-wrapper {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 24px;
        }

        .pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        .dot {
          width: 8px;
          height: 8px;
          background: #F59E0B; /* Gold color */
          border-radius: 50%;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 24px;
          color: var(--text-primary);
        }
        
        .hero-highlight {
          background: linear-gradient(135deg, #059669 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 0 40px 0;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: flex-start;
          align-items: center;
        }
        
        .btn-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #F3F4F6;
            transition: background 0.2s;
        }
        .btn-icon:hover {
            background: #E5E7EB;
        }

        .hero-photo-wrapper {
            position: relative;
        }

        .photo-card {
           height: 480px;
           width: 100%;
           padding: 0;
           background: rgba(255, 255, 255, 0.2);
           backdrop-filter: blur(20px);
           -webkit-backdrop-filter: blur(20px);
           border: 1px solid rgba(255, 255, 255, 0.4);
           border-radius: 24px;
           display: flex;
           align-items: flex-end;
           justify-content: center;
           overflow: visible; /* Changed to visible for floating badge */
           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
           position: relative;
        }
        
        .photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: bottom center;
          transition: transform 0.3s ease;
          border-radius: 24px;
        }

        .floating-badge {
            position: absolute;
            background: white;
            padding: 10px 20px;
            border-radius: 12px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            font-weight: 700;
            color: #D97706;
            border: 1px solid #FEF3C7;
            animation: float 3s ease-in-out infinite;
            z-index: 20;
        }
        
        .gold-medal-badge {
            top: 40px;
            right: -20px;
            background: #FFFBEB;
        }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }

        /* Abstract Shapes */
        .abstract-shape {
          position: absolute;
          filter: blur(80px);
          opacity: 0.4;
          z-index: 0;
        }
        .shape-1 {
          width: 400px;
          height: 400px;
          background: #34D399;
          top: -100px;
          left: -100px;
          border-radius: 50%;
        }
        .shape-2 {
          width: 300px;
          height: 300px;
          background: #60A5FA;
          bottom: -50px;
          right: -50px;
          border-radius: 50%;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .hero-text-content {
            text-align: center;
          }
          .badge-wrapper, .hero-actions {
            justify-content: center;
          }
          .hero-subtitle {
            margin: 0 auto 30px;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .photo-card {
            height: 400px;
            overflow: hidden; /* Reset overflow for mobile if needed */
          }
          .floating-badge {
             right: 10px;
             top: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
