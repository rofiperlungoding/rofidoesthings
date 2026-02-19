import React from 'react';
import { Zap } from 'lucide-react';

import Hero from './Hero';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import SkillsGrid from './SkillsGrid';
import AchievementsSection from './AchievementsSection';
import CertificationsSection from './CertificationsSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import Footer from './Footer';

const Home: React.FC = () => {
    return (
        <>
            <div className="background-grid" />
            <div className="viewport-marker marker-tl" />
            <div className="viewport-marker marker-tr" />
            <div className="viewport-marker marker-bl" />
            <div className="viewport-marker marker-br" />

            {/* Full Width Hero */}
            <Hero />

            {/* Main Grid Wrapper */}
            <main id="main-content" className="container" style={{ marginTop: '0', display: 'flex', flexDirection: 'column', gap: '80px' }}>
                <AboutSection />
                <PortfolioSection />
                <SkillsGrid />
                <AchievementsSection />
                <CertificationsSection />
                <ExperienceSection />
                <EducationSection />

                {/* CTA Modern Section - Inspired by "Next Challenge" Aesthetic */}
                <section className="cta-modern" style={{
                    background: 'linear-gradient(135deg, #06231c 0%, #020617 100%)',
                    padding: '100px 60px',
                    borderRadius: '40px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    minHeight: '480px',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                    boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.7)'
                }}>
                    {/* Plus Pattern Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.1,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M19 19V5h2v14h14v2H21v14h-2V21H5v-2h14z'/%3E%3C/g%3E%3C/svg%3E")`,
                        pointerEvents: 'none',
                        maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                    }} />

                    {/* Background Glow */}
                    <div style={{
                        position: 'absolute',
                        top: '10%',
                        right: '10%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        pointerEvents: 'none'
                    }} />

                    {/* Content Group */}
                    <div style={{ position: 'relative', zIndex: 2, textAlign: 'left', width: '100%', maxWidth: '800px' }}>
                        {/* Eyebrow */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: '#10b981',
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            letterSpacing: '0.1em',
                            marginBottom: '32px',
                            textTransform: 'uppercase'
                        }}>
                            <Zap size={16} fill="#10b981" />
                            <span>Recommended for you</span>
                        </div>

                        {/* Title */}
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            marginBottom: '24px',
                            fontWeight: 800,
                            lineHeight: 1,
                            letterSpacing: '-0.04em',
                            color: 'white'
                        }}>
                            Ready to make<br />something <span style={{ color: '#10b981' }}>iconic?</span>
                        </h2>

                        {/* Description */}
                        <p style={{
                            color: '#94a3b8',
                            marginBottom: '48px',
                            fontSize: '1.25rem',
                            fontWeight: 500,
                            lineHeight: 1.6,
                            maxWidth: '600px'
                        }}>
                            Let's fuse art and code to build your next digital masterpiece.
                            Open for bold ideas and challenging projects.
                        </p>

                        {/* Badges/Tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
                            <div className="cta-badge green">
                                High Impact
                            </div>
                            <div className="cta-badge glass">
                                ~ 15 Minutes Reach-out
                            </div>
                        </div>

                        {/* Action Button */}
                        <a href="mailto:rofi.darmawan@outlook.com" className="btn-cta-modern">
                            Start a Project
                        </a>
                    </div>

                    <style>{`
                        .cta-badge {
                            padding: 10px 24px;
                            border-radius: 12px;
                            font-size: 0.9rem;
                            font-weight: 700;
                            letter-spacing: 0.02em;
                        }
                        .cta-badge.green {
                            background: rgba(16, 185, 129, 0.1);
                            border: 1px solid rgba(16, 185, 129, 0.3);
                            color: #10b981;
                        }
                        .cta-badge.glass {
                            background: rgba(255, 255, 255, 0.03);
                            backdrop-filter: blur(10px);
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            color: rgba(255, 255, 255, 0.8);
                        }
                        .btn-cta-modern {
                            background: #10b981;
                            color: #020617;
                            padding: 22px 64px;
                            border-radius: 16px;
                            font-size: 1.2rem;
                            font-weight: 800;
                            text-decoration: none;
                            display: inline-block;
                            transition: all 0.4s cubic-bezier(0.2, 1, 0.2, 1);
                            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
                        }
                        .btn-cta-modern:hover {
                            transform: translateY(-5px) scale(1.03);
                            box-shadow: 0 20px 50px rgba(16, 185, 129, 0.4);
                            background: #00f59a;
                            filter: brightness(1.1);
                        }
                    `}</style>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
