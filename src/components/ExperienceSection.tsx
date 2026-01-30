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
        <div className="experience-wrapper">
            <section className="bento-card">
                <div className="section-header-left">
                    <div className="icon-title">
                        <Briefcase size={28} color="#4F46E5" />
                        <h2>Professional Experience</h2>
                    </div>
                    <p>Building real-world skills through hands-on work.</p>
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
         .experience-wrapper {
            /* Container if needed */
         }

         .icon-title {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
         }
         .icon-title h2 { margin: 0; font-size: 2rem; }

         .experience-timeline {
            position: relative;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            gap: 40px;
            margin-top: 40px;
         }

         .timeline-line {
            position: absolute;
            left: 0;
            top: 10px;
            bottom: 0;
            width: 2px;
            background: #E5E7EB;
         }

         .experience-item {
            position: relative;
            padding-left: 30px;
         }

         .timeline-dot {
            position: absolute;
            left: -6px; /* center on 2px line (line at left:0 is 1px?? no line is width 2px at left 0. dot width 14px -> left -6) */
            left: -6px;
            top: 6px;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: white;
            border: 3px solid #4F46E5;
            z-index: 2;
         }

         .exp-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 12px;
            flex-wrap: wrap;
            gap: 10px;
         }

         .exp-role-company h4 {
            font-size: 1.2rem;
            margin-bottom: 4px;
            color: var(--text-primary);
         }
         
         .company-name {
            font-weight: 600;
            color: #4F46E5;
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
            gap: 6px;
            margin-bottom: 2px;
         }

         .exp-duties {
            list-style-type: none;
            padding: 0;
            margin: 0;
         }
         .exp-duties li {
            position: relative;
            padding-left: 18px;
            margin-bottom: 6px;
            line-height: 1.5;
            color: #4B5563;
         }
         .exp-duties li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #9CA3AF;
         }

         @media (max-width: 600px) {
            .exp-header { flex-direction: column; align-items: flex-start; }
            .exp-meta { text-align: left; margin-top: 4px; }
            .meta-row { justify-content: flex-start; }
         }
       `}</style>
        </div>
    );
};

export default ExperienceSection;
