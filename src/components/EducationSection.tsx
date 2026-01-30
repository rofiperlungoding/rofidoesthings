import { GraduationCap, MapPin } from 'lucide-react';

const EducationSection: React.FC = () => {
    return (
        <section className="bento-card" id="education">
            <div className="section-header-left">
                <div className="icon-title">
                    <GraduationCap size={28} color="#059669" />
                    <h2>Education</h2>
                </div>
                <p>Academic foundation in Computer Engineering.</p>
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
        .education-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 30px;
        }

        .edu-card {
           background: #F9FAFB;
           border: 1px solid #E5E7EB;
           border-radius: 16px;
           padding: 30px;
           position: relative;
        }
        
        .edu-card.current {
           background: #F0FDF9; /* Light emerald tint */
           border-color: #A7F3D0;
        }

        .edu-badge {
           position: absolute;
           top: 20px;
           right: 20px;
           font-size: 0.75rem;
           background: #E5E7EB;
           padding: 4px 10px;
           border-radius: 20px;
           font-weight: 600;
           color: #4B5563;
        }
        .edu-badge.completed { background: #E5E7EB; }
        .current .edu-badge { background: #10B981; color: white; }

        .edu-card h3 {
           font-size: 1.25rem;
           margin-bottom: 8px;
           line-height: 1.3;
           padding-right: 60px; /* Space for badge */
        }
        
        .edu-card h4 {
           font-size: 1rem;
           color: var(--text-secondary);
           font-weight: 500;
           margin-bottom: 8px;
        }
        
        .edu-meta {
           display: flex;
           gap: 12px;
           font-size: 0.9rem;
           color: #6B7280;
           margin-bottom: 24px;
        }
        .edu-meta span { display: flex; align-items: center; gap: 4px; }

        .edu-details h5 {
           font-size: 0.9rem;
           text-transform: uppercase;
           letter-spacing: 0.5px;
           color: #9CA3AF;
           margin-bottom: 12px;
        }

        .tags-cloud {
           display: flex;
           flex-wrap: wrap;
           gap: 8px;
        }
        .tags-cloud span {
           background: white;
           padding: 4px 10px;
           border-radius: 6px;
           font-size: 0.85rem;
           border: 1px solid #D1D5DB; /* Slightly darker border for contrast */
           color: #374151;
        }
        .current .tags-cloud span { border-color: #6EE7B7; }

        .edu-details p {
           font-size: 0.95rem;
           line-height: 1.5;
           margin-bottom: 12px;
           font-style: italic;
           color: #4B5563;
        }
        
        .edu-achievements {
           font-size: 0.9rem;
           color: #4B5563;
        }

        @media (max-width: 768px) {
           .education-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default EducationSection;
