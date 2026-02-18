import React from 'react';
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
                <div className="achievement-icon" style={{ background: `${color}15`, color: color, borderColor: `${color}30` }}>
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
        <section className="container bento-card" id="achievements">
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
                    color="#F59E0B"
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
           margin-bottom: 60px;
        }
        .section-header-center h2 {
           font-size: 2.5rem;
           margin-bottom: 12px;
           color: white;
        }
        .section-header-center p {
           color: var(--text-secondary);
           font-size: 1.1rem;
        }

        .achievements-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
           gap: 24px;
           margin-bottom: 40px;
        }

        .achievement-card {
           background: var(--bg-card);
           border: 1px solid var(--border-subtle);
           border-radius: 20px;
           padding: 24px;
           position: relative;
           overflow: hidden;
           transition: all 0.2s;
        }
        .achievement-card:hover {
           border-color: var(--border-highlight);
           transform: translateY(-5px);
           background: rgba(255,255,255,0.03);
        }

        .achievement-year {
           position: absolute;
           top: 0;
           right: 0;
           background: rgba(255,255,255,0.05);
           padding: 6px 14px;
           border-bottom-left-radius: 16px;
           font-size: 0.8rem;
           font-weight: 700;
           color: var(--text-secondary);
           border-bottom: 1px solid var(--border-subtle);
           border-left: 1px solid var(--border-subtle);
        }

        .achievement-header {
           display: flex;
           gap: 16px;
           margin-bottom: 16px;
        }

        .achievement-icon {
           width: 48px;
           height: 48px;
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
           flex-shrink: 0;
           border: 1px solid transparent;
        }

        .achievement-level {
           font-size: 0.75rem;
           text-transform: uppercase;
           font-weight: 700;
           letter-spacing: 0.05em;
           display: block;
           margin-bottom: 4px;
        }
        
        .achievement-meta h4 {
           font-size: 1.15rem;
           line-height: 1.3;
           margin: 0;
           color: white;
           font-weight: 600;
        }

        .achievement-card p {
           font-size: 0.95rem;
           color: var(--text-secondary);
           margin-bottom: 20px;
           line-height: 1.6;
        }

        .achievement-badge {
           display: inline-block;
           background: rgba(255,255,255,0.03);
           border: 1px dashed var(--border-subtle);
           padding: 6px 12px;
           border-radius: 8px;
           font-size: 0.85rem;
           font-weight: 500;
           color: #E2E8F0;
        }

        .special-awards-banner {
           background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
           border-radius: 24px;
           padding: 32px;
           color: white;
           display: flex;
           align-items: center;
           justify-content: space-between;
           flex-wrap: wrap;
           gap: 24px;
           position: relative;
           overflow: hidden;
           border: 1px solid rgba(255,255,255,0.05);
           box-shadow: 0 20px 50px -20px rgba(0,0,0,0.5);
        }
        
        .special-awards-title {
           font-weight: 700;
           font-size: 1.25rem;
           position: relative;
           z-index: 1;
        }
        
        .special-awards-list {
           display: flex;
           gap: 12px;
           flex-wrap: wrap;
           position: relative;
           z-index: 1;
        }
        
        .sa-item {
           display: flex;
           align-items: center;
           gap: 10px;
           font-size: 0.9rem;
           background: rgba(255,255,255,0.08);
           padding: 8px 16px;
           border-radius: 99px;
           border: 1px solid rgba(255,255,255,0.05);
           transition: background 0.2s;
           color: #CBD5E1;
        }
        .sa-item:hover {
            background: rgba(255,255,255,0.15);
            color: white;
        }
        
        /* Glow effect */
        .special-awards-banner::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 100%;
            background: radial-gradient(circle at center, rgba(99,102,241,0.2) 0%, transparent 70%);
            pointer-events: none;
        }

        @media (max-width: 768px) {
           .special-awards-banner { flex-direction: column; align-items: flex-start; }
           .special-awards-list { width: 100%; }
        }
      `}</style>
        </section>
    );
};

export default AchievementsSection;
