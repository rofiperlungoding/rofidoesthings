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
    <div className="bento-card cert-item">
        <div className="cert-badge-icon" style={{ background: `${color}10` }}>
            <Award size={22} color={color} />
        </div>
        <div className="cert-info">
            <h4>{title}</h4>
            <div className="cert-meta-row">
                <span className="issuer">{issuer}</span>
                <span className="dot">•</span>
                <span className="year">{date}</span>
            </div>
            <div className="cert-tag-cloud">
                {skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="cert-mini-tag">{skill}</span>
                ))}
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
        <section className="container" id="certifications" style={{ padding: '100px 0' }}>
            <div className="section-header-left" style={{ marginBottom: '60px' }}>
                <div className="icon-title">
                    <Award size={28} color="#2563EB" />
                    <h2>Knowledge Benchmarks</h2>
                </div>
                <p>Validating expertise through professional certification programs.</p>
            </div>

            <div className="cert-mosaic">
                {/* Meta Frontend */}
                <CertCard
                    title="Meta Frontend Developer"
                    issuer="Meta"
                    date="2024"
                    skills={["React", "Testing"]}
                    color={metaColor}
                />
                {/* Cloud */}
                <CertCard
                    title="Architecting on AWS"
                    issuer="AWS"
                    date="2024"
                    skills={["S3", "Lambda"]}
                    color={awsColor}
                />
                <CertCard
                    title="Deep Learning / Gen AI"
                    issuer="AWS"
                    date="2024"
                    skills={["NLP", "Bedrock"]}
                    color={awsColor}
                />
                <CertCard
                    title="Azure AI - (AI-900)"
                    issuer="Microsoft"
                    date="2024"
                    skills={["Cognitive", "ML"]}
                    color={azureColor}
                />
                <CertCard
                    title="Python Mastery"
                    issuer="Dicoding"
                    date="2023"
                    skills={["OOP", "Algorithms"]}
                    color={devColor}
                />
                <CertCard
                    title="Full-stack Backend"
                    issuer="Dicoding"
                    date="2023"
                    skills={["Node.js", "DB"]}
                    color={devColor}
                />
            </div>

            <div className="cert-footer-tray">
                <div className="bento-card cert-status-pod">
                    <p><CheckCircle size={18} color="#10B981" /> <strong>Continuous Learning:</strong> Currently pursuing advanced Cloud Engineering and DevOps standards.</p>
                </div>
            </div>

            <style>{`
                .cert-mosaic {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }

                .cert-item {
                    display: flex;
                    gap: 16px;
                    padding: 24px;
                    align-items: center;
                }

                .cert-badge-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .cert-info h4 {
                    font-size: 0.95rem;
                    margin: 0 0 4px 0;
                    color: var(--text-primary);
                    font-weight: 700;
                    line-height: 1.3;
                }

                .cert-meta-row {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    margin-bottom: 8px;
                }

                .cert-meta-row .dot { font-weight: 700; }

                .cert-tag-cloud {
                    display: flex;
                    gap: 4px;
                }

                .cert-mini-tag {
                    font-size: 0.7rem;
                    background: rgba(0,0,0,0.03);
                    padding: 2px 8px;
                    border-radius: 4px;
                    color: #64748B;
                    font-weight: 600;
                }

                .cert-footer-tray {
                    margin-top: 24px;
                }

                .cert-status-pod {
                    padding: 20px 32px;
                }

                .cert-status-pod p {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin: 0;
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                }

                @media (max-width: 1100px) {
                    .cert-mosaic { grid-template-columns: 1fr 1fr; }
                }

                @media (max-width: 768px) {
                    .cert-mosaic { grid-template-columns: 1fr; }
                    .cert-item { padding: 20px; }
                    .cert-status-pod { padding: 20px; }
                }
            `}</style>
        </section>
    );
};

export default CertificationsSection;
