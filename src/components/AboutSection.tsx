import { User, ArrowRight, Award, Trophy, ScrollText } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="about-grid-wrapper">
      {/* Introduction Card (Blue) */}
      <section className="bento-card dark" id="about">
        <div className="feature-content">
          <div className="badge-dark">About Me</div>
          <h2>Tech-Creative Hybrid: Merging Logic & Aesthetics</h2>
          <p>
            Hello! I'm <strong>Muhammad Rofi Darmawan</strong>, a Computer Engineering student at Brawijaya University.
          </p>
          <p>
            I believe technology isn't just about code, but also about communicating complex ideas into something easy to understand and visually compelling.
          </p>
          <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>
            Starting from robotics competitions, I now focus on IoT, Cybersecurity, and Creative Documentation.
          </p>

          <div className="feature-actions">
            <a href="#contact" className="btn" style={{ background: 'white', color: '#1E1B4B' }}>
              Let's Collaborate <ArrowRight size={16} style={{ marginLeft: 8 }} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <div className="feature-visual">
          <div className="stats-grid-visual">
            <div className="stat-box">
              <span className="stat-number">10+</span>
              <span className="stat-label">Competitions</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">5+</span>
              <span className="stat-label">Awards</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">15+</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column Stack */}
      <div className="about-sidebar-stack">

        {/* Focus Areas Card */}
        <section className="bento-card focus-card">
          <h3>Current Focus</h3>
          <ul className="focus-list">
            <li>
              <div className="focus-icon"><Award size={18} color="#EF4444" /></div>
              <div>
                <strong>Tech Innovation</strong>
                <span className="sub-text">IoT, CyberSec, Cloud</span>
              </div>
            </li>
            <li>
              <div className="focus-icon"><Trophy size={18} color="#F59E0B" /></div>
              <div>
                <strong>Creative Docs</strong>
                <span className="sub-text">Photo & Video Storytelling</span>
              </div>
            </li>
            <li>
              <div className="focus-icon"><ScrollText size={18} color="#10B981" /></div>
              <div>
                <strong>Bridging Worlds</strong>
                <span className="sub-text">Making tech accessible</span>
              </div>
            </li>
          </ul>

          <div className="user-mini-profile">
            <div className="avatar-circle">
              <User strokeWidth={2.5} />
            </div>
            <div>
              <strong>Rofi Darmawan</strong>
              <span>@rofidoesthings</span>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .about-grid-wrapper {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 24px;
        }
        
        .about-sidebar-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
          height: 100%;
        }

        .bento-card.dark {
          background: #4338CA;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 60px;
          height: 100%;
          color: white;
        }

        .focus-card {
           flex: 1;
           display: flex;
           flex-direction: column;
           justify-content: center;
           margin-bottom: 0;
           background: white;
        }

        .feature-content {
          max-width: 55%;
        }
        
        .badge-dark {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: #E0E7FF;
        }

        .dark h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          line-height: 1.2;
          color: white;
        }
        .dark p {
          color: #E0E7FF;
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .feature-visual {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .stats-grid-visual {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
        }
        
        .stat-box {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            padding: 20px 30px;
            border-radius: 16px;
            text-align: center;
            backdrop-filter: blur(10px);
            transition: transform 0.2s;
        }
        .stat-box:hover {
            transform: translateY(-5px);
            background: rgba(255,255,255,0.15);
        }

        .stat-number {
            display: block;
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 4px;
            background: linear-gradient(to right, #ffffff, #a5b4fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .stat-label {
            font-size: 0.9rem;
            color: #C7D2FE;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
        }

        .focus-list {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .focus-list li {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .focus-icon {
            width: 40px;
            height: 40px;
            background: #F3F4F6;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .sub-text {
            display: block;
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-top: 2px;
        }
        
        .user-mini-profile {
          margin-top: auto;
          padding-top: 30px;
          border-top: 1px solid #E5E7EB;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .avatar-circle {
          width: 40px; 
          height: 40px; 
          background: #EEF2FF;
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          color: #4F46E5;
        }
        .user-mini-profile strong { display: block; font-size: 0.95rem; }
        .user-mini-profile span { font-size: 0.8rem; color: #666; }

        @media (max-width: 900px) {
          .about-grid-wrapper { grid-template-columns: 1fr; }
          .bento-card.dark { flex-direction: column; text-align: center; height: auto; padding: 40px; }
          .feature-content { max-width: 100%; margin-bottom: 40px; }
          .stats-grid-visual { grid-template-columns: repeat(3, 1fr); width: 100%; }
        }
        @media (max-width: 600px) {
            .stats-grid-visual { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default AboutSection;
