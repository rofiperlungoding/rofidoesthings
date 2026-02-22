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
    featured?: boolean;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ year, level, title, description, badge, icon: Icon, color, featured }) => (
    <div className={`bento-card achievement-item ${featured ? 'mosaic-featured-achievement' : 'mosaic-standard-achievement'}`}>
        <div className="achievement-year">{year}</div>
        <div className="achievement-header">
            <div className="achievement-icon-box" style={{ background: `${color}10` }}>
                <Icon size={24} color={color} />
            </div>
            <div className="achievement-meta">
                <span className="achievement-level" style={{ color: color }}>{level} Level</span>
                <h4>{title}</h4>
            </div>
        </div>
        <p className="achievement-desc">{description}</p>
        {badge && <div className="achievement-badge-chip">{badge}</div>}
    </div>
);

const AchievementsSection: React.FC = () => {
    return (
        <section className="container" id="achievements" style={{ padding: '100px 0' }}>
            <div className="section-header-left" style={{ marginBottom: '60px' }}>
                <div className="icon-title">
                    <Trophy size={28} color="#F59E0B" />
                    <h2>Hall of Fame</h2>
                </div>
                <p>Achievements & Awards from technology and creative fields.</p>
            </div>

            <div className="achievements-mosaic">
                {/* Gold Medal - Featured */}
                <AchievementCard
                    year="2024"
                    level="National"
                    title="Gold Medal - Student Research & Innovation"
                    description="1st place in national student research and innovation competition. Demonstrating research and innovation capabilities with high-impact potential."
                    badge="🥇 Gold Medal Winner"
                    icon={Trophy}
                    color="#F59E0B"
                    featured={true}
                />

                {/* Creative Video */}
                <AchievementCard
                    year="2023"
                    level="Provincial"
                    title="1st Place - Creative Video & Short Movie"
                    description="Professional cinematography and storytelling excellence."
                    badge="🥇 1st Place"
                    icon={Video}
                    color="#EC4899"
                />

                {/* Robotics */}
                <AchievementCard
                    year="2023"
                    level="Regional"
                    title="Robotic Creative Competition"
                    description="1st Place + Best Demo + Best Presentation. Automated spice measurement robot."
                    badge="🤖 Best Demo"
                    icon={Cpu}
                    color="#3B82F6"
                />

                {/* Photography */}
                <AchievementCard
                    year="2022"
                    level="City"
                    title="Photography Competition"
                    description="Excellence in technical skill and artistic vision."
                    badge="🥈 2nd Place"
                    icon={Camera}
                    color="#10B981"
                />
            </div>

            <div className="special-awards-mosaic">
                <div className="bento-card special-award-pod">
                    <div className="sa-title">Special Recognitions</div>
                    <div className="sa-tags">
                        <div className="sa-tag"><Star size={14} fill="#F59E0B" color="#F59E0B" /> Best Editor</div>
                        <div className="sa-tag"><Star size={14} fill="#F59E0B" color="#F59E0B" /> Sound Design</div>
                        <div className="sa-tag"><Star size={14} fill="#F59E0B" color="#F59E0B" /> Best Presentation</div>
                    </div>
                </div>
            </div>

            <style>{`
                .achievements-mosaic {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    margin-bottom: 24px;
                }

                .achievement-item {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    position: relative;
                }

                .mosaic-featured-achievement {
                    grid-column: span 2;
                    /* Use image to preserve container opaqueness */
                    background-image: linear-gradient(145deg, #FFFBEB 0%, #FFFFFF 100%) !important;
                    border-color: rgba(245, 158, 11, 0.2) !important;
                    padding: 40px;
                }

                .achievement-year {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-secondary);
                    background: rgba(0,0,0,0.03);
                    padding: 4px 12px;
                    border-radius: 8px;
                }

                .achievement-icon-box {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 12px;
                }

                .achievement-level {
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    display: block;
                    margin-bottom: 4px;
                }

                .achievement-meta h4 {
                    font-size: 1.2rem;
                    color: var(--text-primary);
                    margin: 0;
                }

                .achievement-desc {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin: 0;
                }

                .achievement-badge-chip {
                    display: inline-block;
                    background: rgba(0,0,0,0.03);
                    padding: 6px 12px;
                    border-radius: 8px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    margin-top: auto;
                    width: fit-content;
                }

                .special-awards-mosaic {
                    margin-top: 24px;
                }

                .special-award-pod {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 24px 40px;
                }

                .sa-title {
                    font-weight: 700;
                    font-size: 1.1rem;
                    color: var(--text-primary);
                }

                .sa-tags {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }

                .sa-tag {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(0,0,0,0.03);
                    padding: 8px 16px;
                    border-radius: 99px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                }

                @media (max-width: 1100px) {
                    .achievements-mosaic { grid-template-columns: 1fr 1fr; }
                    .mosaic-featured-achievement { grid-column: span 2; }
                }

                @media (max-width: 768px) {
                    .achievements-mosaic { grid-template-columns: 1fr; }
                    .mosaic-featured-achievement { grid-column: span 1; padding: 24px; }
                    .special-award-pod { flex-direction: column; align-items: flex-start; gap: 16px; padding: 24px; }
                }
            `}</style>
        </section>
    );
};

export default AchievementsSection;
