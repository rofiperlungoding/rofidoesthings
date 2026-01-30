import React from 'react';
import { Layers, Database, Layout, Smartphone } from 'lucide-react';

const TechItem = ({ label }) => (
  <span className="tech-pill">{label}</span>
);

const TechStack = () => {
  return (
    <section className="bento-card" style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '40px' }}>Powered by modern tech</h2>

      <div className="tech-grid">
        {/* Frontend */}
        <div className="tech-category">
          <div className="icon-header"> <Layout size={24} color="#EC4899" /> </div>
          <h3>Frontend</h3>
          <div className="pill-container">
            <TechItem label="React" />
            <TechItem label="Next.js" />
            <TechItem label="Tailwind" />
            <TechItem label="Framer Motion" />
            <TechItem label="TypeScript" />
          </div>
        </div>

        {/* Backend */}
        <div className="tech-category">
          <div className="icon-header"> <Database size={24} color="#3B82F6" /> </div>
          <h3>Backend</h3>
          <div className="pill-container">
            <TechItem label="Node.js" />
            <TechItem label="PostgreSQL" />
            <TechItem label="Supabase" />
            <TechItem label="Firebase" />
            <TechItem label="GraphQL" />
          </div>
        </div>

        {/* Tools */}
        <div className="tech-category">
          <div className="icon-header"> <Layers size={24} color="#10B981" /> </div>
          <h3>Tools</h3>
          <div className="pill-container">
            <TechItem label="Figma" />
            <TechItem label="Git" />
            <TechItem label="Docker" />
            <TechItem label="VS Code" />
            <TechItem label="Vite" />
          </div>
        </div>
      </div>

      <style>{`
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          text-align: left;
        }
        
        .tech-category {
          background: #F8FAFC;
          padding: 32px;
          border-radius: 16px;
          transition: transform 0.2s ease;
        }
        .tech-category:hover {
          transform: translateY(-5px);
          background: #F0F9FF;
        }

        .icon-header {
          margin-bottom: 16px; 
          background: white; 
          width: 48px; 
          height: 48px; 
          border-radius: 50%;
          display: flex; 
          align-items: center; 
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        .tech-category h3 {
          font-size: 1.25rem;
          margin-bottom: 24px;
        }

        .pill-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-pill {
          background: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #475569;
          border: 1px solid #E2E8F0;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .tech-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
