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

                {/* CTA Card in Bento Style - Batik Edition */}
                <section className="bento-card cta-batik" style={{
                    background: '#050505',
                    color: 'white',
                    textAlign: 'center',
                    padding: '80px 24px',
                    borderRadius: '40px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '400px'
                }}>
                    {/* Batik Pattern Overlay - Minimal Geometric Flower/Star */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.07,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        pointerEvents: 'none'
                    }} />

                    {/* Gradient Orbs for Depth */}
                    <div style={{
                        position: 'absolute',
                        top: '-100px',
                        left: '-100px',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)',
                        filter: 'blur(60px)',
                        pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(234,179,8,0.1) 0%, rgba(0,0,0,0) 70%)',
                        filter: 'blur(60px)',
                        pointerEvents: 'none'
                    }} />

                    {/* Abstract Batik Motif (Center/Behind) - SVG Illustration */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        opacity: 0.03,
                        pointerEvents: 'none',
                        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23FFFFFF' d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,89.9,-2.4C89.7,13,86.6,28.7,78.2,42.4C69.8,56.1,56.1,67.8,41.5,74.7C26.9,81.6,11.4,83.7,-3.7,89.5C-18.8,95.3,-33.5,104.8,-46.2,100.9C-58.9,97,-69.6,79.7,-76.9,62.8C-84.2,45.9,-88.1,29.4,-87.3,13.3C-86.5,-2.8,-81,-18.5,-72.6,-32.3C-64.2,-46.1,-52.9,-58,-40.4,-66.2C-27.9,-74.4,-14.2,-78.9,0.5,-79.7C15.2,-80.5,30.5,-77.6,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E") no-repeat center center`,
                        backgroundSize: 'contain'
                    }} />


                    <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            marginBottom: '24px',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            letterSpacing: '-0.03em',
                            background: 'white',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 80px rgba(255,255,255,0.3)'
                        }}>
                            Ready to make<br />something <span style={{ color: '#94a3b8', WebkitTextFillColor: '#94a3b8' }}>iconic?</span>
                        </h2>

                        <p style={{
                            color: '#a1a1aa',
                            marginBottom: '40px',
                            fontSize: '1.2rem',
                            fontWeight: 500,
                            maxWidth: '500px',
                            margin: '0 auto 40px auto',
                            lineHeight: 1.6
                        }}>
                            Let's fuse art and code to build your next digital masterpiece.
                            Open for bold ideas and challenging projects.
                        </p>

                        <a href="mailto:rofi.darmawan@outlook.com" className="btn-cta-batik">
                            Start a Project
                        </a>
                    </div>

                    <style>{`
                        .btn-cta-batik {
                            background: white;
                            color: black;
                            padding: 18px 48px;
                            border-radius: 99px;
                            fontSize: 1.1rem;
                            fontWeight: 700;
                            text-decoration: none;
                            display: inline-block;
                            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                            box-shadow: 0 0 0 1px rgba(255,255,255,0.1);
                        }
                        .btn-cta-batik:hover {
                            transform: scale(1.05);
                            box-shadow: 0 0 30px rgba(255,255,255,0.2);
                            background: #f8fafc;
                        }
                    `}</style>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
