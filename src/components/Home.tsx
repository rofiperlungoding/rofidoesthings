import React from 'react';

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

                {/* CTA Card in Bento Style */}
                <section className="bento-card" style={{
                    background: '#000000', /* Pitch black premium look */
                    color: 'white',
                    textAlign: 'center',
                    padding: '100px 40px',
                    borderRadius: '40px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-20%',
                        width: '140%',
                        height: '200%',
                        background: 'radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)',
                        pointerEvents: 'none'
                    }} />

                    <h2 style={{
                        fontSize: '3.5rem',
                        marginBottom: '24px',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        background: 'linear-gradient(90deg, #fff, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        position: 'relative'
                    }}>
                        Ready to collaborate?
                    </h2>
                    <p style={{
                        opacity: 0.8,
                        marginBottom: '40px',
                        fontSize: '1.25rem',
                        fontWeight: 400,
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        position: 'relative'
                    }}>
                        Let's turn your vision into a digital masterpiece. Open for projects & opportunities.
                    </p>
                    <a href="mailto:rofi.darmawan@outlook.com" className="btn" style={{
                        background: 'white',
                        color: 'black',
                        padding: '16px 36px',
                        borderRadius: '99px',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        boxShadow: '0 4px 12px rgba(255,255,255,0.15)',
                        transition: 'transform 0.2s',
                        display: 'inline-block',
                        position: 'relative'
                    }}>
                        Start a Project
                    </a>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
