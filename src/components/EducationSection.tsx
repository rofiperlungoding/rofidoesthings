import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

const EducationSection: React.FC = () => {
    return (
        <section className="container bento-card" id="education">
            <div className="section-header-left">
                <div className="icon-title">
                    <GraduationCap size={28} color="#059669" />
                    <h2>Education</h2>
                </div>
                <p>Academic foundation in Computer Engineering & Technology.</p>
            </div>

            <div className="education-grid">
                {/* University */}
                <div className="edu-card current">
                    <div className="edu-badge">Current</div>
                    <h3>Associate of Applied Science (A.A.S) in Computer Engineering</h3>
                    <h4>Brawijaya University, Malang</h4>
                    <div className="edu-meta">
                        <span><MapPin size={14} /> East Java, Indonesia</span>
                    </div>

                    <div className="edu-details">
                        <h5>Key Focus Areas:</h5>
                        <div className="tags-cloud">
                            <span>Software Dev</span>
                            <span>Networking</span>
                            <span>Embedded Systems</span>
                            <span>IoT & Robotics</span>
                            <span>Cloud Computing</span>
                        </div>
                    </div>
                </div>

                {/* High School */}
                <div className="edu-card">
                    <div className="edu-badge completed">Graduated 2025</div>
                    <h3>High School Diploma - Math & Science</h3>
                    <h4>MA Pembangunan Jakarta</h4>
                    <div className="edu-meta">
                        <span><MapPin size={14} /> South Tangerang, Banten</span>
                    </div>

                    <div className="edu-details">
                        <h5>Major Research:</h5>
                        <p>
                            "Development of an automated spice measurement robot integrated with Android application and cloud database for SMEs."
                        </p>
                        <div className="edu-achievements">
                            <strong>Highlights:</strong> Best Demonstration, Best Presentation, 1st Place Robotic Creative.
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .section-header-left {
            margin-bottom: 40px;
        }
        .icon-title {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 12px;
        }
        .icon-title h2 { margin: 0; font-size: 2rem; color: white; }
        .section-header-left p { color: var(--text-secondary); }

        .education-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 30px;
        }

        .edu-card {
           background: var(--bg-card);
           border: 1px solid var(--border-subtle);
           border-radius: 20px;
           padding: 32px;
           position: relative;
        }
        
        .edu-card.current {
           background: linear-gradient(145deg, rgba(16, 185, 129, 0.05) 0%, rgba(0,0,0,0) 100%);
           border-color: rgba(16, 185, 129, 0.2);
        }

        .edu-badge {
           position: absolute;
           top: 24px;
           right: 24px;
           font-size: 0.75rem;
           background: rgba(255,255,255,0.1);
           padding: 6px 12px;
           border-radius: 99px;
           font-weight: 600;
           color: var(--text-secondary);
           border: 1px solid rgba(255,255,255,0.05);
        }
        .current .edu-badge { 
            background: rgba(16, 185, 129, 0.1); 
            color: #34D399; 
            border-color: rgba(16, 185, 129, 0.2);
        }

        .edu-card h3 {
           font-size: 1.4rem;
           margin-bottom: 8px;
           line-height: 1.3;
           padding-right: 80px; /* Space for badge */
           color: white;
        }
        
        .edu-card h4 {
           font-size: 1.1rem;
           color: var(--text-primary);
           font-weight: 500;
           margin-bottom: 12px;
        }
        
        .edu-meta {
           display: flex;
           gap: 12px;
           font-size: 0.9rem;
           color: var(--text-secondary);
           margin-bottom: 24px;
        }
        .edu-meta span { display: flex; align-items: center; gap: 6px; }

        .edu-details h5 {
           font-size: 0.85rem;
           text-transform: uppercase;
           letter-spacing: 0.05em;
           color: #64748B;
           margin-bottom: 16px;
           font-weight: 600;
        }

        .tags-cloud {
           display: flex;
           flex-wrap: wrap;
           gap: 8px;
        }
        .tags-cloud span {
           background: rgba(255,255,255,0.03);
           padding: 6px 12px;
           border-radius: 8px;
           font-size: 0.85rem;
           border: 1px solid rgba(255,255,255,0.05);
           color: var(--text-secondary);
        }
        .current .tags-cloud span { 
            border-color: rgba(16, 185, 129, 0.15);
            color: #D1FAE5;
        }

        .edu-details p {
           font-size: 1rem;
           line-height: 1.6;
           margin-bottom: 16px;
           font-style: italic;
           color: var(--text-secondary);
        }
        
        .edu-achievements {
           font-size: 0.95rem;
           color: white;
           padding-top: 16px;
           border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 768px) {
           .education-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default EducationSection;
