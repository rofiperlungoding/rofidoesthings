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
        <section className="container bento-card" id="experience">
            <div className="section-header-left">
                <div className="icon-title">
                    <Briefcase size={28} color="#4F46E5" />
                    <h2>Professional Experience</h2>
                </div>
                <p>Building real-world skills through hands-on work in fast-paced environments.</p>
            </div>

            <div className="experience-grid">

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
         .icon-title h2 { margin: 0; font-size: 2rem; color: var(--text-primary); }
         .section-header-left p { color: var(--text-secondary); }

         .experience-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-top: 20px;
         }

         .experience-item {
            background: var(--bg-card);
            border: 1px solid var(--border-subtle);
            border-radius: 20px;
            padding: 32px;
            transition: all 0.2s;
         }
         
         .experience-item:hover {
            border-color: var(--border-highlight);
            background: var(--bg-card-hover);
            transform: translateY(-4px);
         }

         .exp-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 12px;
            border-bottom: 1px solid var(--border-subtle);
            padding-bottom: 16px;
         }

         .exp-role-company h4 {
            font-size: 1.3rem;
            margin-bottom: 4px;
            color: var(--text-primary);
            font-weight: 600;
         }
         
         .company-name {
            font-size: 1rem;
            font-weight: 500;
            color: var(--accent-blue);
         }

         .exp-meta {
            text-align: right;
            font-size: 0.85rem;
            color: var(--text-secondary);
            background: rgba(0,0,0,0.03);
            padding: 8px 12px;
            border-radius: 8px;
         }
         .meta-row {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;
            margin-bottom: 4px;
         }
         .meta-row:last-child { margin-bottom: 0; }

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

         @media (max-width: 900px) {
            .experience-grid { grid-template-columns: 1fr; }
            .exp-header { flex-direction: column; align-items: flex-start; }
            .exp-meta { text-align: left; margin-top: 8px; width: 100%; justify-content: flex-start; }
            .meta-row { justify-content: flex-start; }
         }
       `}</style>
        </section>
    );
};

export default ExperienceSection;
