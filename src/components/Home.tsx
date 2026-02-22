import React from 'react';
import { Zap, Github, Mail } from 'lucide-react';

import Hero from './Hero';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import SkillsGrid from './SkillsGrid';
import AchievementsSection from './AchievementsSection';
import CertificationsSection from './CertificationsSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import Footer from './Footer';
import Navbar from './Navbar';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="background-grid" />
            <div className="viewport-marker marker-tl" />
            <div className="viewport-marker marker-tr" />
            <div className="viewport-marker marker-bl" />
            <div className="viewport-marker marker-br" />

            {/* Full Width Hero */}
            <Hero />

            {/* Main Grid Wrapper */}
            <main id="main-content" className="container" style={{ marginTop: '0', display: 'flex', flexDirection: 'column', gap: '100px' }}>
                <AboutSection />
                <PortfolioSection />
                <SkillsGrid />
                <AchievementsSection />
                <CertificationsSection />
                <ExperienceSection />
                <EducationSection />

                {/* Final Blueprint CTA Section */}
                <section className="cta-blueprint">
                    <div className="blueprint-overlay"></div>
                    <div className="cta-content">
                        <div className="cta-eyebrow">
                            <Zap size={14} className="icon-pulse" />
                            <span>Available for new challenges</span>
                        </div>
                        <h2>Let's Architect Your <span className="accent-text">Next Success.</span></h2>
                        <p>
                            Engineering robust digital systems with a focus on quality,
                            scalability, and user-centric design.
                        </p>
                        <div className="cta-actions">
                            <a href="mailto:rofi.darmawan@outlook.com" className="btn btn-primary">
                                <Mail size={18} style={{ marginRight: 8 }} /> Start a Project
                            </a>
                            <a href="https://github.com/rofiperlungoding" target="_blank" rel="noreferrer" className="btn btn-secondary">
                                <Github size={18} style={{ marginRight: 8 }} /> GitHub Profile
                            </a>
                        </div>
                    </div>

                    <style>{`
                        .cta-blueprint {
                            background: white;
                            padding: 120px 60px;
                            border-radius: 40px;
                            position: relative;
                            overflow: hidden;
                            border: 1px solid var(--border-subtle);
                            box-shadow: 0 40px 100px -20px rgba(0,0,0,0.05);
                            margin-bottom: 40px;
                        }

                        .blueprint-overlay {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            opacity: 0.03;
                            background-image: linear-gradient(var(--accent-blue) 1.5px, transparent 1.5px),
                                              linear-gradient(90deg, var(--accent-blue) 1.5px, transparent 1.5px);
                            background-size: 40px 40px;
                            pointer-events: none;
                        }

                        .cta-content {
                            position: relative;
                            z-index: 2;
                            max-width: 800px;
                        }

                        .cta-eyebrow {
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            color: var(--accent-blue);
                            font-size: 0.75rem;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: 0.1em;
                            margin-bottom: 32px;
                        }

                        .cta-blueprint h2 {
                            font-size: clamp(2.5rem, 5vw, 4rem);
                            line-height: 1.1;
                            margin-bottom: 24px;
                            color: var(--text-primary);
                        }

                        .cta-blueprint p {
                            font-size: 1.25rem;
                            color: var(--text-secondary);
                            line-height: 1.6;
                            margin-bottom: 48px;
                            max-width: 600px;
                        }

                        .cta-actions {
                            display: flex;
                            gap: 16px;
                            flex-wrap: wrap;
                        }

                        @media (max-width: 768px) {
                            .cta-blueprint { padding: 60px 30px; border-radius: 30px; }
                            .cta-actions { flex-direction: column; }
                            .cta-actions .btn { width: 100%; }
                        }
                    `}</style>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
