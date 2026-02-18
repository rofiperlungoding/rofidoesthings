import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItemProps {
    role: string;
    company: string;
    duration: string;
    location: string;
    duties: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, duration, location, duties }) => (
    <div className="experience-item">
        <div className="timeline-dot"></div>
        <div className="exp-header">
            <div className="exp-role-company">
                <h4>{role}</h4>
                <span className="company-name">{company}</span>
            </div>
            <div className="exp-meta">
                <div className="meta-row"><Calendar size={14} /> {duration}</div>
                <div className="meta-row"><MapPin size={14} /> {location}</div>
            </div>
        </div>
        <ul className="exp-duties">
            {duties.map((duty: string, idx: number) => (
                <li key={idx}>{duty}</li>
            ))}
        </ul>
    </div>
);

const ExperienceSection: React.FC = () => {
    return (
        <div className="experience-wrapper container">
            <section className="bento-card" id="experience">
                <div className="section-header-left">
                    <div className="icon-title">
                        <Briefcase size={28} color="#4F46E5" />
                        <h2>Professional Experience</h2>
                    </div>
                    <p>Building real-world skills through hands-on work in fast-paced environments.</p>
                </div>

                <div className="experience-timeline">
                    <div className="timeline-line"></div>

                    <ExperienceItem
                        role="Promotions Intern"
                        company="Suhud Adiyanto"
                        duration="July 2025"
                        location="South Jakarta, Jakarta"
                        duties={[
                            "Coordinated logistics for promotional events and managed inventory.",
                            "Collaborated with sales team to develop promotional activities.",
                            "Contributed to video/photo shoots for marketing materials."
                        ]}
                    />

                    <ExperienceItem
                        role="Event Documentation Officer"
                        company="MA Pembangunan Jakarta"
                        duration="Sep 2023 - Mar 2024"
                        location="South Tangerang, Banten"
                        duties={[
                            "Created comprehensive internal process documentation.",
                            "Conducted regular audits to ensure documentation compliance.",
                            "Collaborated with teams to gather info for project docs."
                        ]}
                    />

                    <ExperienceItem
                        role="Event Documentation Trainee"
                        company="MA Pembangunan Jakarta"
                        duration="Sep 2022 - Apr 2023"
                        location="South Tangerang, Banten"
                        duties={[
                            "Engaged guests and managed registration desk.",
                            "Collaborated with team for seamless event operations.",
                            "Reviewed and updated event documentation."
                        ]}
                    />
                </div>
            </section>

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

         .experience-timeline {
            position: relative;
            padding-left: 10px;
            display: flex;
            flex-direction: column;
            gap: 50px;
            margin-top: 20px;
         }

         .timeline-line {
            position: absolute;
            left: 39px;
            top: 20px;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, var(--accent-blue), transparent);
            opacity: 0.3;
         }

         .experience-item {
            position: relative;
            padding-left: 80px;
         }

         .timeline-dot {
            position: absolute;
            left: 32px;
            top: 6px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--bg-card);
            border: 2px solid var(--accent-blue);
            z-index: 2;
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
         }

         .exp-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-wrap: wrap;
            gap: 12px;
         }

         .exp-role-company h4 {
            font-size: 1.3rem;
            margin-bottom: 4px;
            color: white;
            font-weight: 600;
         }
         
         .company-name {
            font-size: 1rem;
            font-weight: 500;
            color: var(--accent-blue);
         }

         .exp-meta {
            text-align: right;
            font-size: 0.9rem;
            color: var(--text-secondary);
         }
         .meta-row {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;
            margin-bottom: 4px;
         }

         .exp-duties {
            list-style-type: none;
            padding: 0;
            margin: 0;
         }
         .exp-duties li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 8px;
            line-height: 1.6;
            color: var(--text-secondary);
            font-size: 0.95rem;
         }
         .exp-duties li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #4F46E5;
            font-size: 1.2rem;
            line-height: 1;
         }

         @media (max-width: 600px) {
            .exp-header { flex-direction: column; align-items: flex-start; }
            .exp-meta { text-align: left; margin-top: 8px; }
            .meta-row { justify-content: flex-start; }
            .timeline-line { left: 19px; }
            .timeline-dot { left: 12px; }
            .experience-item { padding-left: 50px; }
         }
       `}</style>
        </div>
    );
};

export default ExperienceSection;
