import React from 'react';
import { ArrowRight, Settings, Zap, ShieldCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="container" id="about" style={{ padding: '100px 0' }}>
      <div className="about-mosaic">
        {/* Main Bio Card */}
        <div className="bento-card mosaic-main">
          <div className="badge-pill">About Me</div>
          <h2>
            <span className="accent-text">Bridging Logic & Imagination</span>
            <br />To Build Digital Excellence.
          </h2>
          <p>
            Hello! I'm <strong>Muhammad Rofi Darmawan</strong>. Technology isn't just about code for me;
            it's the medium to translate complex ideas into intuitive, useful, and beautiful digital experiences.
          </p>
          <p className="sub-bio">
            From robotics championships to modern web engineering, my journey is defined by a relentless pursuit
            of quality and innovation.
          </p>

          <div className="action-row" style={{ marginTop: '32px' }}>
            <a href="#portfolio" className="btn btn-primary">
              View My Work <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </a>
          </div>
        </div>

        {/* Sidebar: Technical Pillars */}
        <div className="bento-card mosaic-sidebar">
          <h3 style={{ marginBottom: '24px' }}>Core Engineering</h3>
          <ul className="focus-list">
            <li>
              <div className="focus-icon focus-icon-animate"><Settings size={22} color="#2563EB" /></div>
              <div>
                <strong>System Architecture</strong>
                <span className="sub-text">Scalable Hardware-to-Cloud Integration</span>
              </div>
            </li>
            <li>
              <div className="focus-icon focus-icon-animate"><Zap size={22} color="#F59E0B" /></div>
              <div>
                <strong>Human-Centric Design</strong>
                <span className="sub-text">Optimizing Performance & Technical UX</span>
              </div>
            </li>
            <li>
              <div className="focus-icon focus-icon-animate"><ShieldCheck size={22} color="#10B981" /></div>
              <div>
                <strong>Infrastructure Automation</strong>
                <span className="sub-text">Efficient Workflows & Smart Systems</span>
              </div>
            </li>
          </ul>

          <div className="user-profile-card">
            <div className="profile-image">
              {/* Using an icon as fallback for profile image */}
              <Settings size={20} color="white" />
            </div>
            <div className="profile-details">
              <div className="profile-name">
                Rofi Darmawan
                <svg className="verified-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.6026 2.40187C11.2468 1.28597 12.7532 1.28597 13.3974 2.40187L14.2888 3.94586C14.5492 4.39703 15.0211 4.66946 15.5332 4.66418L17.3149 4.64579C18.6044 4.63249 19.5768 5.79097 19.317 7.037L18.9576 8.76103C18.8533 9.26162 19.034 9.7753 19.421 10.0818L20.8069 11.1798C21.7853 11.9548 21.7853 13.4357 20.8069 14.2107L19.421 15.3087C19.034 15.6152 18.8533 16.1289 18.9576 16.6295L19.317 18.3535C19.317 18.3535 18.6044 20.758 17.3149 20.7447L15.5332 20.7263C15.0211 20.721 14.5492 20.9935 14.2888 21.4446L13.3974 22.9886C12.7532 24.1045 11.2468 24.1045 10.6026 22.9886L9.71117 21.4446C9.45084 20.9935 8.97889 20.721 8.46684 20.7263L6.68512 20.7447C5.39564 20.758 4.42319 19.5995 4.68305 18.3535L5.04236 16.6295C5.14668 16.1289 4.96596 15.6152 4.57896 15.3087L3.19313 14.2107C2.21469 13.4357 2.21469 11.9548 3.19313 11.1798L4.57896 10.0818C4.96596 9.7753 5.14668 9.26162 5.04236 8.76103L4.68305 7.037C4.42319 5.79097 5.39564 4.63249 6.68512 4.64579L8.46684 4.66418C8.97889 4.66946 9.45084 4.39703 9.71117 3.94586L10.6026 2.40187Z" />
                  <path d="M9.5 12.5L11.5 14.5L15.5 10.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="profile-handle">@rofidoesthings</div>
            </div>
          </div>
        </div>

        {/* Metric Pod 1: Competitions */}
        <div className="bento-card mosaic-metric metric-card">
          <span className="stat-num">10+</span>
          <span className="stat-lbl">Competitions Won</span>
        </div>

        {/* Metric Pod 2: Certifications */}
        <div className="bento-card mosaic-metric metric-card">
          <span className="stat-num">15+</span>
          <span className="stat-lbl">Certifications</span>
        </div>
      </div>

      <style>{`
        .badge-pill {
            display: inline-block;
            padding: 6px 14px;
            background: rgba(0,0,0,0.05);
            border: 1px solid rgba(0,0,0,0.1);
            border-radius: 99px;
            font-size: 0.8rem;
            color: #94A3B8;
            margin-bottom: 24px;
            font-weight: 600;
        }

        .accent-text {
            color: #2563EB;
        }

        .sub-bio {
            font-size: 1rem !important;
            opacity: 0.8;
            margin-top: 16px;
        }

        .stat-lbl {
            font-size: 0.75rem;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 700;
        }

        .focus-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 32px;
        }

        .focus-list li {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .sub-text {
            display: block;
            font-size: 0.85rem;
            color: #64748B;
            margin-top: 2px;
        }

        .user-profile-card {
            background: rgba(0,0,0,0.03);
            border: 1px solid rgba(0,0,0,0.05);
            padding: 16px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            gap: 16px;
            margin-top: auto;
        }

        .profile-image {
            width: 40px;
            height: 40px;
            background: var(--accent-blue);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .profile-name {
            font-weight: 700;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.95rem;
        }
        
        .verified-icon {
            color: var(--accent-blue);
        }

        .profile-handle {
            font-size: 0.8rem;
            color: #64748B;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
