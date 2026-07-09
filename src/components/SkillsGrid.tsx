import React from 'react';
import { Cloud, Cpu, Video, LucideIcon, Layout } from 'lucide-react';

const SkillsGrid: React.FC = () => {
  return (
    <section className="container" id="skills" style={{ padding: '100px 0' }}>
      <div className="section-header-center">
        <h2 className="section-title">Technical Ecosystem</h2>
        <p className="section-subtitle">A curated constellation of engineering and creative tools.</p>
      </div>

      <div className="constellation-grid">
        {/* Pod 1: Full-Stack Engineering */}
        <div className="bento-card constellation-pod">
          <div className="pod-header">
            <Layout size={24} color="#6366F1" />
            <h3>Systems & Web</h3>
          </div>
          <div className="pod-cloud">
            <span className="skill-orbit">TypeScript</span>
            <span className="skill-orbit">React</span>
            <span className="skill-orbit">Node.js</span>
            <span className="skill-orbit">Next.js</span>
            <span className="skill-orbit">Python</span>
            <span className="skill-orbit">PostgreSQL</span>
          </div>
        </div>

        {/* Pod 2: Cloud & Infrastructure */}
        <div className="bento-card constellation-pod">
          <div className="pod-header">
            <Cloud size={24} color="#F59E0B" />
            <h3>Cloud & DevOps</h3>
          </div>
          <div className="pod-cloud">
            <span className="skill-orbit">AWS IoT</span>
            <span className="skill-orbit">Azure AI</span>
            <span className="skill-orbit">Docker</span>
            <span className="skill-orbit">GitHub Actions</span>
            <span className="skill-orbit">Terraform</span>
          </div>
        </div>

        {/* Pod 3: Hardware & IoT */}
        <div className="bento-card constellation-pod">
          <div className="pod-header">
            <Cpu size={24} color="#3B82F6" />
            <h3>Hardware & IoT</h3>
          </div>
          <div className="pod-cloud">
            <span className="skill-orbit">ESP32</span>
            <span className="skill-orbit">Arduino</span>
            <span className="skill-orbit">MQTT</span>
            <span className="skill-orbit">Sensors</span>
            <span className="skill-orbit">Raspberry Pi</span>
          </div>
        </div>

        {/* Pod 4: Creative Mastery */}
        <div className="bento-card constellation-pod">
          <div className="pod-header">
            <Video size={24} color="#EC4899" />
            <h3>Creative Engine</h3>
          </div>
          <div className="pod-cloud">
            <span className="skill-orbit">Premiere Pro</span>
            <span className="skill-orbit">DaVinci</span>
            <span className="skill-orbit">Photoshop</span>
            <span className="skill-orbit">Sound Design</span>
          </div>
        </div>
      </div>

      <style>{`
        .section-header-center {
            text-align: center;
            margin-bottom: 80px;
        }

        .section-title {
            font-size: 2.5rem;
            color: var(--text-primary);
            margin-bottom: 16px;
        }
        
        .section-subtitle {
            color: var(--text-secondary);
            font-size: 1.1rem;
        }

        .constellation-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
        }

        .constellation-pod {
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .constellation-pod:hover {
            border-color: var(--border-highlight);
            background: linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%);
        }

        .pod-header {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .pod-header h3 {
            font-size: 1.5rem;
            margin: 0;
            font-weight: 700;
            color: var(--text-primary);
        }

        .pod-cloud {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .skill-orbit {
            font-size: 0.95rem;
            padding: 8px 20px;
            background: rgba(0,0,0,0.03);
            border: 1px solid rgba(0,0,0,0.05);
            border-radius: 99px;
            color: var(--text-secondary);
            font-weight: 500;
            transition: all 0.2s;
            cursor: default;
        }

        .constellation-pod:hover .skill-orbit {
            color: var(--text-primary);
            border-color: rgba(0,0,0,0.1);
            background: rgba(0,0,0,0.05);
        }

        .skill-orbit:hover {
            background: var(--accent-blue) !important;
            color: white !important;
            border-color: var(--accent-blue) !important;
            transform: scale(1.05);
        }

        @media (max-width: 900px) {
            .constellation-grid { grid-template-columns: 1fr; }
            .constellation-pod { padding: 30px; }
        }
      `}</style>

    </section>
  );
};

export default SkillsGrid;
