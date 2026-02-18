import React from 'react';
import { User, ArrowRight, Award, Trophy, ScrollText } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="container bento-card" id="about">
      <div className="about-grid-wrapper">
        {/* Main Introduction Grid Item */}
        <div className="about-main">
          <div className="badge-pill">About Me</div>
          <h2>
            <span className="text-gradient-blue">Bridging Logic & Imagination</span>
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

          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-lbl">Competitions Won</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">5+</span>
              <span className="stat-lbl">Major Awards</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">15+</span>
              <span className="stat-lbl">Certifications</span>
            </div>
          </div>

          <div className="action-row">
            <a href="#contact" className="btn btn-primary">
              Let's Collaborate <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </a>
          </div>
        </div>

        {/* Right Column: Focus Areas */}
        <div className="about-sidebar">
          <h3>Current Focus</h3>
          <ul className="focus-list">
            <li>
              <div className="focus-icon"><Award size={20} color="#3B82F6" /></div>
              <div>
                <strong>Tech Innovation</strong>
                <span className="sub-text">Frontend, IoT, Cloud Architecture</span>
              </div>
            </li>
            <li>
              <div className="focus-icon"><Trophy size={20} color="#F59E0B" /></div>
              <div>
                <strong>Creative Documentation</strong>
                <span className="sub-text">Storytelling through Photo & Video</span>
              </div>
            </li>
            <li>
              <div className="focus-icon"><ScrollText size={20} color="#10B981" /></div>
              <div>
                <strong>Knowledge Sharing</strong>
                <span className="sub-text">Making technology accessible to all</span>
              </div>
            </li>
          </ul>

          <div className="user-profile-card">
            <div className="profile-image">
              <User size={24} color="white" />
            </div>
            <div className="profile-details">
              <div className="profile-name">
                Rofi Darmawan
                <svg className="verified-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.6026 2.40187C11.2468 1.28597 12.7532 1.28597 13.3974 2.40187L14.2888 3.94586C14.5492 4.39703 15.0211 4.66946 15.5332 4.66418L17.3149 4.64579C18.6044 4.63249 19.5768 5.79097 19.317 7.037L18.9576 8.76103C18.8533 9.26162 19.034 9.7753 19.421 10.0818L20.8069 11.1798C21.7853 11.9548 21.7853 13.4357 20.8069 14.2107L19.421 15.3087C19.034 15.6152 18.8533 16.1289 18.9576 16.6295L19.317 18.3535C19.5768 19.5995 18.6044 20.758 17.3149 20.7447L15.5332 20.7263C15.0211 20.721 14.5492 20.9935 14.2888 21.4446L13.3974 22.9886C12.7532 24.1045 11.2468 24.1045 10.6026 22.9886L9.71117 21.4446C9.45084 20.9935 8.97889 20.721 8.46684 20.7263L6.68512 20.7447C5.39564 20.758 4.42319 19.5995 4.68305 18.3535L5.04236 16.6295C5.14668 16.1289 4.96596 15.6152 4.57896 15.3087L3.19313 14.2107C2.21469 13.4357 2.21469 11.9548 3.19313 11.1798L4.57896 10.0818C4.96596 9.7753 5.14668 9.26162 5.04236 8.76103L4.68305 7.037C4.42319 5.79097 5.39564 4.63249 6.68512 4.64579L8.46684 4.66418C8.97889 4.66946 9.45084 4.39703 9.71117 3.94586L10.6026 2.40187Z" />
                  <path d="M9.5 12.5L11.5 14.5L15.5 10.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="profile-handle">@rofidoesthings</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid-wrapper {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 60px; /* Increased gap */
        }

        .badge-pill {
            display: inline-block;
            padding: 6px 14px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 99px;
            font-size: 0.8rem;
            color: #94A3B8;
            margin-bottom: 24px;
        }

        .about-main h2 {
            font-size: 2.5rem;
            margin-bottom: 24px;
            line-height: 1.2;
        }

        .about-main p {
            color: var(--text-secondary);
            font-size: 1.1rem;
            margin-bottom: 24px;
            line-height: 1.6;
        }
        
        .sub-bio {
            font-size: 1rem !important;
            opacity: 0.8;
            margin-bottom: 40px !important;
        }

        .stats-row {
            display: flex;
            gap: 40px;
            padding-top: 30px;
            border-top: 1px solid var(--border-subtle);
            margin-bottom: 40px;
            flex-wrap: wrap;
        }

        .stat-item {
            display: flex;
            flex-direction: column;
        }

        .stat-num {
            font-size: 2rem;
            font-weight: 700;
            color: white;
            line-height: 1;
            margin-bottom: 4px;
        }

        .stat-lbl {
            font-size: 0.85rem;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .about-sidebar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-left: 1px solid var(--border-subtle);
            padding-left: 60px;
        }

        .about-sidebar h3 {
            font-size: 1.5rem;
            margin-bottom: 30px;
            color: white;
        }

        .focus-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-bottom: 40px;
        }

        .focus-list li {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .focus-icon {
            width: 44px;
            height: 44px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.05);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .sub-text {
            display: block;
            font-size: 0.85rem;
            color: #64748B;
            margin-top: 2px;
        }

        .user-profile-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.05);
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
            color: white;
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

        @media (max-width: 900px) {
            .about-grid-wrapper { grid-template-columns: 1fr; gap: 40px; }
            .about-sidebar { border-left: none; padding-left: 0; border-top: 1px solid var(--border-subtle); padding-top: 40px; }
            .about-main, .about-sidebar { text-align: center; }
            .stats-row { justify-content: center; }
            .focus-list li { text-align: left; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
