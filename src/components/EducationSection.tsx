import React from 'react';
import { GraduationCap } from 'lucide-react';

const EducationSection: React.FC = () => {
    return (
        <section className="container" id="education" style={{ padding: '100px 0' }}>
            <div className="section-header-left" style={{ marginBottom: '60px' }}>
                <div className="icon-title">
                    <GraduationCap size={28} color="#10B981" />
                    <h2>Academic Foundations</h2>
                </div>
                <p>Engineering education at the intersection of theory and practice.</p>
            </div>

            <div className="education-mosaic">
                {/* Main degree: Most recent */}
                <div className="bento-card mosaic-featured-edu">
                    <div className="edu-badge pulse">Current</div>
                    <div className="edu-header">
                        <div>
                            <h4>Computer Engineering</h4>
                            <span className="inst-name">Universitas Brawijaya</span>
                        </div>
                        <div className="edu-period">2025 - Present</div>
                    </div>

                    <div className="edu-stats">
                        <div className="edu-stat-item">
                            <span className="stat-label">Focus</span>
                            <span className="stat-value">Embedded Systems & AI</span>
                        </div>
                        <div className="edu-stat-item">
                            <span className="stat-label">Location</span>
                            <span className="stat-value">Malang, East Java</span>
                        </div>
                    </div>

                    <p className="edu-desc">
                        Developing core systems architecture, digital signal processing,
                        and machine learning applications within the hardware ecosystem.
                    </p>
                </div>

                {/* Secondary Education */}
                <div className="bento-card mosaic-standard-edu">
                    <div className="edu-header">
                        <h4>Mathematics & Science</h4>
                        <div className="edu-period">2022 - 2025</div>
                    </div>
                    <span className="inst-name">MA Pembangunan Jakarta</span>
                </div>
            </div>

            <style>{`
                .education-mosaic {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                .mosaic-featured-edu {
                    grid-column: span 2;
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    /* Use image only to keep #FFFFFF base opaque */
                    background-image: linear-gradient(145deg, #F0FDF4 0%, #FFFFFF 100%) !important;
                    border-color: rgba(16, 185, 129, 0.2) !important;
                    position: relative;
                }

                .edu-badge {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    background: rgba(16, 185, 129, 0.1);
                    color: #059669;
                    padding: 4px 12px;
                    border-radius: 99px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                }

                .edu-header h4 {
                    font-size: 1.5rem;
                    margin: 0;
                    color: var(--text-primary);
                    font-weight: 700;
                }

                .inst-name {
                    color: #059669;
                    font-weight: 600;
                    font-size: 1rem;
                }

                .edu-period {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                    background: rgba(0,0,0,0.03);
                    padding: 4px 12px;
                    border-radius: 8px;
                    display: inline-block;
                    margin-top: 8px;
                }

                .edu-stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    padding: 20px;
                    background: rgba(0,0,0,0.02);
                    border-radius: 16px;
                    border: 1px solid rgba(0,0,0,0.03);
                }

                .edu-stat-item {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .stat-label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    color: #64748B;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                }

                .stat-value {
                    font-size: 1rem;
                    color: var(--text-primary);
                    font-weight: 600;
                }

                .edu-desc {
                    color: var(--text-secondary);
                    line-height: 1.6;
                    font-size: 1rem;
                    margin: 0;
                }

                .mosaic-standard-edu {
                    padding: 32px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .mosaic-standard-edu h4 {
                    font-size: 1.2rem;
                    margin: 0 0 8px 0;
                    color: var(--text-primary);
                }

                .icon-title {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .icon-title h2 {
                    margin: 0;
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }

                @media (max-width: 1100px) {
                    .education-mosaic { grid-template-columns: 1fr 1fr; }
                    .mosaic-featured-edu { grid-column: span 2; }
                }

                @media (max-width: 768px) {
                    .education-mosaic { grid-template-columns: 1fr; }
                    .mosaic-featured-edu { grid-column: span 1; padding: 30px; }
                    .edu-stats { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
};

export default EducationSection;
