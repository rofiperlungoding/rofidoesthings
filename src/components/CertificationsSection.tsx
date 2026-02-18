import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

interface CertCardProps {
    title: string;
    issuer: string;
    date: string;
    skills: string[];
    color: string;
}

const CertCard: React.FC<CertCardProps> = ({ title, issuer, date, skills, color }) => (
    <div className="cert-card">
        <div className="cert-icon" style={{ background: color }}>
            <Award size={24} color="white" />
        </div>
        <div className="cert-content">
            <h4>{title}</h4>
            <div className="cert-meta">
                <span>{issuer}</span>
                <span className="dot-separator">•</span>
                <span>{date}</span>
            </div>
            <div className="cert-skills">
                {skills.slice(0, 3).map((skill: string, idx: number) => (
                    <span key={idx} className="mini-tag">{skill}</span>
                ))}
                {skills.length > 3 && <span className="more-tag">+{skills.length - 3}</span>}
            </div>
        </div>
    </div>
);

const CertificationsSection: React.FC = () => {
    // Colors for different providers/types
    const awsColor = "#FF9900";
    const azureColor = "#0078D4";
    const devColor = "#10B981";
    const metaColor = "#1877F2";

    return (
        <section className="container bento-card" id="certifications">
            <div className="section-header-left">
                <h2>📜 Professional Certifications</h2>
                <p>Validating expertise through 15+ international certifications.</p>
            </div>

            <div className="certs-grid">
                {/* Frontend */}
                <CertCard
                    title="Meta Frontend Developer"
                    issuer="Meta"
                    date="2024"
                    skills={["React", "Advanced JS", "UX/UI"]}
                    color={metaColor}
                />
                {/* Cloud */}
                <CertCard
                    title="Architecting on AWS"
                    issuer="Amazon Web Services"
                    date="2024"
                    skills={["EC2", "S3", "RDS", "VPC", "Serverless"]}
                    color={awsColor}
                />
                <CertCard
                    title="Basic Cloud and Gen AI"
                    issuer="Amazon Web Services"
                    date="2024"
                    skills={["Cloud Fundamentals", "Gen AI", "AWS Services"]}
                    color={awsColor}
                />

                {/* Azure / AI */}
                <CertCard
                    title="Azure AI Fundamentals (AI-900)"
                    issuer="Microsoft"
                    date="2024"
                    skills={["Machine Learning", "Computer Vision", "NLP"]}
                    color={azureColor}
                />

                {/* Programming */}
                <CertCard
                    title="Basic Programming (Python)"
                    issuer="Dicoding / Other"
                    date="2023"
                    skills={["Python Syntax", "OOP", "Data Structures"]}
                    color={devColor}
                />
                <CertCard
                    title="Basic Programming (C)"
                    issuer="Dicoding / Other"
                    date="2023"
                    skills={["Memory Management", "Pointers", "Low-level Logic"]}
                    color={devColor}
                />
                <CertCard
                    title="Backend with Javascript"
                    issuer="Dicoding / Other"
                    date="2023"
                    skills={["Node.js", "API Design", "Database"]}
                    color={devColor}
                />
                <CertCard
                    title="Microsoft Office Specialist"
                    issuer="Microsoft"
                    date="2023"
                    skills={["Word", "Excel", "PowerPoint"]}
                    color="#EA4335" // Office red
                />
            </div>

            <div className="cert-footer">
                <p><CheckCircle size={16} color="var(--accent-blue)" /> <em>Continuous Learning:</em> Regularly updating skills via new certification programs.</p>
            </div>

            <style>{`
        .section-header-left {
           margin-bottom: 40px;
        }
        .section-header-left h2 {
           font-size: 2rem;
           margin-bottom: 8px;
           color: white;
        }
        .section-header-left p {
           color: var(--text-secondary);
        }

        .certs-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
           gap: 20px;
        }

        .cert-card {
           display: flex;
           gap: 16px;
           background: var(--bg-card);
           border: 1px solid var(--border-subtle);
           padding: 20px;
           border-radius: 16px;
           transition: transform 0.2s;
        }
        .cert-card:hover {
           transform: translateY(-3px);
           border-color: var(--border-highlight);
        }

        .cert-icon {
           width: 48px;
           height: 48px;
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
           flex-shrink: 0;
           box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .cert-content {
           flex: 1;
        }

        .cert-content h4 {
           font-size: 1rem;
           margin-bottom: 6px;
           line-height: 1.3;
           color: white;
           font-weight: 600;
        }

        .cert-meta {
           font-size: 0.8rem;
           color: var(--text-secondary);
           margin-bottom: 12px;
           display: flex;
           align-items: center;
           gap: 6px;
        }
        .dot-separator { font-weight: 700; color: #4B5563; }

        .cert-skills {
           display: flex;
           gap: 6px;
           flex-wrap: wrap;
        }

        .mini-tag {
           font-size: 0.75rem;
           background: rgba(255,255,255,0.05);
           padding: 3px 8px;
           border-radius: 6px;
           color: #94A3B8;
           border: 1px solid rgba(255,255,255,0.05);
        }
        .more-tag {
           font-size: 0.7rem;
           color: #64748B;
           padding: 3px 4px;
        }
        
        .cert-footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid var(--border-subtle);
            font-size: 0.9rem;
            color: var(--text-secondary);
        }
        .cert-footer p { display: flex; align-items: center; gap: 8px; }

      `}</style>
        </section>
    );
};

export default CertificationsSection;
