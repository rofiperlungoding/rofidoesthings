import React from 'react';
import { Palette, Code, Terminal, Cloud, Shield, Cpu, Database, Video, Camera, Feather, Mic } from 'lucide-react';

const SkillBar = ({ label, percentage }) => (
  <div className="skill-bar-item">
    <div className="skill-label">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="progress-bg">
      <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const SkillCategory = ({ icon: Icon, title, items, color }) => (
  <div className="skill-category-card">
    <div className="category-header">
      <div className="icon-box" style={{ color: color, background: `${color}15` }}>
        <Icon size={24} />
      </div>
      <h4>{title}</h4>
    </div>
    <div className="skills-tags">
      {items.map((item, idx) => (
        <span key={idx} className="skill-tag">{item}</span>
      ))}
    </div>
  </div>
);

const SkillsGrid = () => {
  return (
    <section className="bento-card" id="skills">
      <div className="skills-container">

        <div className="skills-intro">
          <h2 className="section-title">Skills & Expertise</h2>
          <p>Tech Stack & Creative Tools yang saya kuasai dan gunakan dalam project.</p>
        </div>

        <div className="skills-main-grid">
          {/* Technical Column */}
          <div className="skills-column">
            <h3 className="column-title">Technical Proficiency</h3>

            <div className="skill-category-group">
              <div className="skill-bars-container">
                <SkillBar label="Python" percentage={80} />
                <SkillBar label="C Programming" percentage={70} />
                <SkillBar label="JavaScript" percentage={65} />
                <SkillBar label="HTML/CSS" percentage={80} />
              </div>

              <SkillCategory
                icon={Cloud}
                title="Cloud & DevOps"
                items={["AWS IoT Core", "AWS Lambda", "EC2", "S3", "Azure AI", "Git"]}
                color="#F59E0B"
              />

              <SkillCategory
                icon={Shield}
                title="Cybersecurity"
                items={["OWASP Top 10", "Secure Coding", "Risk Assessment", "SecOps"]}
                color="#10B981"
              />

              <SkillCategory
                icon={Cpu}
                title="IoT & Embedded"
                items={["Arduino", "ESP32", "MQTT", "Raspberry Pi", "Sensors"]}
                color="#3B82F6"
              />
            </div>
          </div>

          {/* Creative Column */}
          <div className="skills-column">
            <h3 className="column-title">Creative Mastery</h3>

            <div className="skill-category-group">
              <div className="skill-bars-container">
                <SkillBar label="Portrait Photography" percentage={80} />
                <SkillBar label="Event Documentation" percentage={90} />
                <SkillBar label="Landscape" percentage={70} />
              </div>

              <SkillCategory
                icon={Video}
                title="Videography & Edit"
                items={["Premiere Pro", "DaVinci Resolve", "Color Grading", "Cinematography"]}
                color="#EC4899"
              />

              <SkillCategory
                icon={Feather}
                title="Content Creation"
                items={["Storytelling", "Scriptwriting", "Visual Comm", "Copywriting"]}
                color="#8B5CF6"
              />

              <SkillCategory
                icon={Mic}
                title="Audio Production"
                items={["Sound Design", "Audio Mixing", "Music Composition"]}
                color="#F43F5E"
              />
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .skills-container {
           padding: 20px 0;
        }

        .skills-intro {
           text-align: center;
           margin-bottom: 50px;
        }
        .skills-intro p {
           color: var(--text-secondary);
           font-size: 1.1rem;
        }
        
        .skills-main-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 60px;
        }
        
        .column-title {
           font-size: 1.5rem;
           margin-bottom: 30px;
           padding-bottom: 15px;
           border-bottom: 2px solid #F3F4F6;
           color: var(--text-primary);
        }

        .skill-category-group {
           display: flex;
           flex-direction: column;
           gap: 24px;
        }

        .skill-bars-container {
           background: #F9FAFB;
           border-radius: 16px;
           padding: 24px;
           margin-bottom: 10px;
        }

        .skill-bar-item {
           margin-bottom: 16px;
        }
        .skill-bar-item:last-child { margin-bottom: 0; }
        
        .skill-label {
           display: flex;
           justify-content: space-between;
           margin-bottom: 8px;
           font-size: 0.9rem;
           font-weight: 500;
           color: #374151;
        }
        
        .progress-bg {
           height: 8px;
           background: #E5E7EB;
           border-radius: 4px;
           overflow: hidden;
        }
        
        .progress-fill {
           height: 100%;
           background: #4F46E5;
           border-radius: 4px;
        }
        
        /* Different colors for right column progress bars if needed, or keep uniform */
        .skills-column:nth-child(2) .progress-fill {
            background: #EC4899;
        }

        .skill-category-card {
           border: 1px solid #E5E7EB;
           border-radius: 16px;
           padding: 20px;
           transition: all 0.2s;
        }
        .skill-category-card:hover {
           border-color: #D1D5DB;
           background: #F9FAFB;
        }

        .category-header {
           display: flex;
           align-items: center;
           gap: 12px;
           margin-bottom: 16px;
        }
        
        .icon-box {
           width: 40px;
           height: 40px;
           border-radius: 10px;
           display: flex;
           align-items: center;
           justify-content: center;
        }
        
        .category-header h4 {
           font-size: 1.1rem;
           margin: 0;
           font-weight: 600;
        }

        .skills-tags {
           display: flex;
           flex-wrap: wrap;
           gap: 8px;
        }
        
        .skill-tag {
           font-size: 0.85rem;
           padding: 4px 10px;
           background: white;
           border: 1px solid #E5E7EB;
           border-radius: 6px;
           color: #4B5563;
        }

        @media (max-width: 900px) {
           .skills-main-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  );
};

export default SkillsGrid;
