import { Trophy, Star, Video, Cpu, Camera, LucideIcon } from 'lucide-react';

interface AchievementCardProps {
    year: string;
    level: string;
    title: string;
    description: string;
    badge?: string;
    icon: LucideIcon;
    color: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ year, level, title, description, badge, icon: Icon, color }) => (
    <div className="achievement-card">
        <div className="achievement-year">{year}</div>
        <div className="achievement-content">
            <div className="achievement-header">
                <div className="achievement-icon" style={{ background: `${color}15`, color: color }}>
                    <Icon size={20} />
                </div>
                <div className="achievement-meta">
                    <span className="achievement-level" style={{ color: color }}>{level} Level</span>
                    <h4>{title}</h4>
                </div>
            </div>
            <p>{description}</p>
            {badge && <div className="achievement-badge">{badge}</div>}
        </div>
    </div>
);

const AchievementsSection: React.FC = () => {
    return (
        <section className="bento-card" id="achievements">
            <div className="section-header-center">
                <h2>🏆 Hall of Fame</h2>
                <p>Achievements & Awards from various technology and creative competitions.</p>
            </div>

            <div className="achievements-grid">
                {/* Gold Medal */}
                <AchievementCard
                    year="2024"
                    level="National"
                    title="Gold Medal - Student Research & Innovation"
                    description="1st place in national student research and innovation competition. Demonstrating research and innovation capabilities."
                    badge="🥇 Gold Medal Winner"
                    icon={Trophy}
                    color="#D97706"
                />

                {/* Creative Video */}
                <AchievementCard
                    year="2023"
                    level="Provincial"
                    title="1st Place - Creative Video & Short Movie"
                    description="1st place in creative video category. Combining strong storytelling with professional cinematography techniques."
                    badge="🥇 1st Place Winner"
                    icon={Video}
                    color="#EC4899"
                />

                {/* Robotics */}
                <AchievementCard
                    year="2023"
                    level="Regional (Jakarta)"
                    title="1st Place - Robotic Creative Competition"
                    description="1st Place Robotic Creative + Best Demonstration + Best Presentation. Automated spice measurement robot for SMEs."
                    badge="🤖 Best Demo & Presentation"
                    icon={Cpu}
                    color="#3B82F6"
                />

                {/* Photography */}
                <AchievementCard
                    year="2022"
                    level="City"
                    title="2nd Place - Photography Competition"
                    description="2nd place in photography competition, demonstrating consistency in technical skill and artistic vision."
                    badge="🥈 2nd Place"
                    icon={Camera}
                    color="#10B981"
                />
            </div>

            <div className="special-awards-banner">
                <div className="special-awards-title">Special Recognitions</div>
                <div className="special-awards-list">
                    <div className="sa-item">
                        <Star size={16} color="#F59E0B" /> <span>Best Editor Award</span>
                    </div>
                    <div className="sa-item">
                        <Star size={16} color="#F59E0B" /> <span>Best Music & Sound Designer</span>
                    </div>
                    <div className="sa-item">
                        <Star size={16} color="#F59E0B" /> <span>Best Presentation</span>
                    </div>
                </div>
            </div>

            <style>{`
        .section-header-center {
           text-align: center;
           margin-bottom: 50px;
        }
        .section-header-center h2 {
           font-size: 2.5rem;
           margin-bottom: 10px;
        }
        .section-header-center p {
           color: var(--text-secondary);
        }

        .achievements-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
           gap: 24px;
           margin-bottom: 40px;
        }

        .achievement-card {
           background: #F9FAFB;
           border: 1px solid #E5E7EB;
           border-radius: 16px;
           padding: 24px;
           position: relative;
           overflow: hidden;
           transition: all 0.2s;
        }
        .achievement-card:hover {
           border-color: #D1D5DB;
           transform: translateY(-5px);
           background: white;
           box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
        }

        .achievement-year {
           position: absolute;
           top: 0;
           right: 0;
           background: #E5E7EB;
           padding: 4px 12px;
           border-bottom-left-radius: 12px;
           font-size: 0.8rem;
           font-weight: 700;
           color: #6B7280;
        }

        .achievement-header {
           display: flex;
           gap: 12px;
           margin-bottom: 16px;
        }

        .achievement-icon {
           width: 40px;
           height: 40px;
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           flex-shrink: 0;
        }

        .achievement-level {
           font-size: 0.75rem;
           text-transform: uppercase;
           font-weight: 700;
           letter-spacing: 0.5px;
           display: block;
           margin-bottom: 2px;
        }
        
        .achievement-meta h4 {
           font-size: 1.1rem;
           line-height: 1.3;
           margin: 0;
        }

        .achievement-card p {
           font-size: 0.95rem;
           color: var(--text-secondary);
           margin-bottom: 16px;
           line-height: 1.5;
        }

        .achievement-badge {
           display: inline-block;
           background: white;
           border: 1px dashed #D1D5DB;
           padding: 4px 10px;
           border-radius: 6px;
           font-size: 0.8rem;
           font-weight: 600;
           color: #4B5563;
        }

        .special-awards-banner {
           background: linear-gradient(to right, #1E1B4B, #4338CA);
           border-radius: 16px;
           padding: 24px;
           color: white;
           display: flex;
           align-items: center;
           justify-content: space-between;
           flex-wrap: wrap;
           gap: 20px;
        }
        
        .special-awards-title {
           font-weight: 700;
           font-size: 1.1rem;
           letter-spacing: 0.5px;
           text-transform: uppercase;
        }
        
        .special-awards-list {
           display: flex;
           gap: 20px;
           flex-wrap: wrap;
        }
        
        .sa-item {
           display: flex;
           align-items: center;
           gap: 8px;
           font-size: 0.9rem;
           background: rgba(255,255,255,0.1);
           padding: 6px 12px;
           border-radius: 99px;
        }

        @media (max-width: 768px) {
           .special-awards-banner { flex-direction: column; align-items: flex-start; }
           .special-awards-list { flex-direction: column; gap: 10px; width: 100%; }
        }
      `}</style>
        </section>
    );
};

export default AchievementsSection;
