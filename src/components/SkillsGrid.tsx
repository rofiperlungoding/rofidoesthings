import React from 'react';
import { Cloud, Cpu, Video, Feather, Mic, LucideIcon, Layout } from 'lucide-react';

interface SkillBarProps {
  label: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ label, percentage }) => (
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

interface SkillCategoryProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  color: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon: Icon, title, items, color }) => (
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

const SkillsGrid: React.FC = () => {
  return (
    <section className="container bento-card" id="skills">
      <div className="section-header-center">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Comprehensive Technical & Creative Toolset</p>
      </div>

      <div className="skills-grid-wrapper">
        {/* Technical Column */}
        <div className="skills-column">
          <h3 className="column-title">Technical Proficiency</h3>

          <div className="skill-card-group">
            <div className="skill-bars-card-inner">
              <SkillBar label="Python" percentage={80} />
              <SkillBar label="C++ / Arduino" percentage={80} />
              <SkillBar label="TypeScript/JavaScript" percentage={85} />
              <SkillBar label="React & Frontend" percentage={90} />
            </div>

            <SkillCategory
              icon={Cloud}
              title="Cloud & DevOps"
              items={["AWS IoT Core", "AWS Lambda", "EC2", "S3", "Azure AI", "Git"]}
              color="#F59E0B"
            />

            <SkillCategory
              icon={Layout}
              title="Frontend Magic"
              items={["React", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX"]}
              color="#6366F1"
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

          <div className="skill-card-group">
            <div className="skill-bars-card-inner">
              <SkillBar label="Portrait Photography" percentage={80} />
              <SkillBar label="Event Documentation" percentage={90} />
              <SkillBar label="Landscape Composition" percentage={70} />
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

      <style>{`
        .section-header-center {
            text-align: center;
            margin-bottom: 60px;
        }

        .section-title {
            font-size: 2.5rem;
            color: white;
            margin-bottom: 16px;
        }
        
        .section-subtitle {
            color: var(--text-secondary);
            font-size: 1.1rem;
        }

        .skills-grid-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
        }

        .column-title {
            font-size: 1.5rem;
            margin-bottom: 24px;
            color: white;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--border-subtle);
        }

        .skill-card-group {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .skill-bars-card-inner {
            background: rgba(255,255,255,0.02);
            border: 1px solid var(--border-subtle);
            padding: 24px;
            border-radius: 20px;
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
            color: var(--text-secondary);
        }
        
        .progress-bg {
            height: 6px;
            background: rgba(255,255,255,0.1);
            border-radius: 99px;
            overflow: hidden;
        }
        
        .progress-fill {
            height: 100%;
            background: var(--accent-blue);
            border-radius: 99px;
        }
        
        .skills-column:nth-child(2) .progress-fill {
            background: #EC4899;
        }

        .skill-category-card {
           border: 1px solid var(--border-subtle);
           border-radius: 20px;
           padding: 24px;
           background: rgba(255,255,255,0.02);
           transition: all 0.2s;
        }
        .skill-category-card:hover {
           border-color: var(--border-highlight);
           background: rgba(255,255,255,0.04);
        }

        .category-header {
           display: flex;
           align-items: center;
           gap: 16px;
           margin-bottom: 16px;
        }
        
        .icon-box {
           width: 44px;
           height: 44px;
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
        }
        
        .category-header h4 {
           font-size: 1.1rem;
           margin: 0;
           font-weight: 600;
           color: white;
        }

        .skills-tags {
           display: flex;
           flex-wrap: wrap;
           gap: 8px;
        }
        
        .skill-tag {
           font-size: 0.8rem;
           padding: 6px 12px;
           background: rgba(255,255,255,0.05);
           border: 1px solid rgba(255,255,255,0.05);
           border-radius: 99px;
           color: var(--text-secondary);
           transition: all 0.2s;
        }
        .skill-tag:hover {
            color: white;
            background: rgba(255,255,255,0.1);
        }

        @media (max-width: 900px) {
            .skills-grid-wrapper { grid-template-columns: 1fr; gap: 60px; }
        }
      `}</style>
    </section>
  );
};

export default SkillsGrid;
