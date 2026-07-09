import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
    return (
        <section className="container" id="experience" style={{ padding: '100px 0' }}>
            <div className="section-header-left" style={{ marginBottom: '60px' }}>
                <div className="icon-title">
                    <Briefcase size={28} color="#4F46E5" />
                    <h2>Engineering & Strategy</h2>
                </div>
                <p>Deploying technical solutions in professional environments.</p>
            </div>

            <div className="experience-mosaic">
                {/* Main Experience: Most Recent */}
                <div className="bento-card mosaic-featured-role">
                    <div className="role-chip">Recent</div>
                    <div className="role-header">
                        <div>
                            <h4>Promotions Intern</h4>
                            <span className="company-name">Tokyo8 Indonesia</span>
                            <span className="supervisor-note">Under supervision of Suhud Adiyanto</span>
                        </div>
                        <div className="role-period">July 2025</div>
                    </div>
                    <ul className="role-achievements">
                        <li>Coordinated complex logistics for technical promotional events.</li>
                        <li>Built marketing assets using multi-media technical workflows.</li>
                        <li>Optimized event operations through collaborative strategy.</li>
                    </ul>
                </div>

                {/* Staggered Pods */}
                <div className="bento-card mosaic-standard-role">
                    <div className="role-header">
                        <h4>Documentation Officer</h4>
                        <div className="role-period">2023 - 2024</div>
                    </div>
                    <span className="company-name">MA Pembangunan Jakarta</span>
                </div>

                <div className="bento-card mosaic-standard-role">
                    <div className="role-header">
                        <h4>Documentation Trainee</h4>
                        <div className="role-period">2022 - 2023</div>
                    </div>
                    <span className="company-name">MA Pembangunan Jakarta</span>
                </div>
            </div>

            <style>{`
                .experience-mosaic {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                .mosaic-featured-role {
                    grid-column: span 2;
                    grid-row: span 2;
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    position: relative;
                }

                .role-chip {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    background: var(--accent-blue);
                    color: white;
                    padding: 4px 12px;
                    border-radius: 99px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .role-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    width: 100%;
                }

                .role-header h4 {
                    font-size: 1.5rem;
                    margin: 0;
                    color: var(--text-primary);
                    font-weight: 700;
                }

                .company-name {
                    color: var(--accent-blue);
                    font-weight: 600;
                    font-size: 1rem;
                }

                .supervisor-note {
                    display: block;
                    color: var(--text-secondary);
                    font-size: 0.85rem;
                    font-weight: 400;
                    margin-top: 4px;
                    font-style: italic;
                }

                .role-period {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                    background: rgba(0,0,0,0.03);
                    padding: 6px 12px;
                    border-radius: 8px;
                }

                .role-achievements {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .role-achievements li {
                    position: relative;
                    padding-left: 24px;
                    color: var(--text-secondary);
                    line-height: 1.6;
                }

                .role-achievements li::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 10px;
                    width: 6px;
                    height: 6px;
                    background: var(--accent-blue);
                    border-radius: 50%;
                }

                .mosaic-standard-role {
                    padding: 32px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 180px;
                }

                .mosaic-standard-role h4 {
                    font-size: 1.1rem;
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
                    .experience-mosaic { grid-template-columns: 1fr 1fr; }
                    .mosaic-featured-role { grid-column: span 2; }
                }

                @media (max-width: 768px) {
                    .experience-mosaic { grid-template-columns: 1fr; }
                    .mosaic-featured-role { grid-column: span 1; padding: 30px; }
                }
            `}</style>
        </section>
    );
};

export default ExperienceSection;
