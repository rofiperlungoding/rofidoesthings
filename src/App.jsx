import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsGrid from './components/SkillsGrid';
import AchievementsSection from './components/AchievementsSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />

      {/* Main Grid Wrapper */}
      <main id="main-content" className="container" style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', gap: '80px' }}>
        <Hero />
        <AboutSection />
        <PortfolioSection />
        <SkillsGrid />
        <AchievementsSection />
        <CertificationsSection />
        <ExperienceSection />
        <EducationSection />

        {/* CTA Card in Bento Style */}
        <section className="bento-card" style={{
          background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
          color: 'white',
          textAlign: 'center',
          padding: '80px 20px'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Ready to collaborate?</h2>
          <p style={{ opacity: 0.9, marginBottom: '32px', fontSize: '1.2rem' }}>
            Let's turn your vision into a digital masterpiece. Open for projects & opportunities.
          </p>
          <a href="mailto:rofi.darmawan@outlook.com" className="btn" style={{ background: 'white', color: '#4F46E5' }}>
            Start a Project
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
