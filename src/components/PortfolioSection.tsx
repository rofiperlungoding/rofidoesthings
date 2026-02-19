import React from 'react';
import { ArrowUpRight, Camera, Code, Smartphone, Video, Image as ImageIcon, Layout } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    category: string;
    desc: string;
    tags: string[];
    icon: React.ReactNode;
    link: string;
    featured?: boolean;
}

interface ProjectsData {
    tech: Project[];
    creative: Project[];
}

const projects: ProjectsData = {
    tech: [
        {
            id: 1,
            title: "Automated Measurement Robot",
            category: "Robotics & IoT",
            desc: "Automated robot for SMEs with Android & Cloud Database integration. 1st Place Robotic Creative.",
            tags: ["IoT", "Android", "Cloud", "C++"],
            icon: <Smartphone size={24} color="#3B82F6" />,
            link: "#",
            featured: true
        },
        {
            id: 2,
            title: "Modern SaaS Landing Page",
            category: "Frontend Engineering",
            desc: "Pixel-perfect implementation of a modern fintech landing page with complex animations and responsive design.",
            tags: ["TypeScript", "React", "Tailwind", "Framer Motion"],
            icon: <Layout size={24} color="#6366F1" />,
            link: "#"
        },
        {
            id: 3,
            title: "IoT AWS Integration",
            category: "Cloud Computing",
            desc: "AWS IoT Core implementation for device management and data monitoring.",
            tags: ["AWS", "IoT", "Lambda", "DynamoDB"],
            icon: <Code size={24} color="#F59E0B" />,
            link: "#"
        },
        {
            id: 4,
            title: "AI/ML Experiments",
            category: "AI & Data",
            desc: "Computer vision and data analysis exploration using Python and TensorFlow.",
            tags: ["Python", "AI", "ML", "Data"],
            icon: <Code size={24} color="#8B5CF6" />,
            link: "#"
        }
    ],
    creative: [
        {
            id: 5,
            title: "Award-Winning Short Film",
            category: "Creative Video",
            desc: "1st Place Provincial Creative Video Competition. Cinematic storytelling.",
            tags: ["Directing", "Editing", "Cinematography"],
            icon: <Video size={24} color="#EC4899" />,
            link: "#",
            featured: true
        },
        {
            id: 6,
            title: "Photography Portfolio",
            category: "Photography",
            desc: "Award-winning portrait and event photography collection.",
            tags: ["Portrait", "Event", "Composition"],
            icon: <ImageIcon size={24} color="#F43F5E" />,
            link: "#"
        },
        {
            id: 7,
            title: "Event Documentation",
            category: "Professional Service",
            desc: "Professional documentation for school and corporate events.",
            tags: ["Event", "Coverage", "Content"],
            icon: <Camera size={24} color="#6366F1" />,
            link: "#"
        }
    ]
};

const PortfolioSection: React.FC = () => {
    return (
        <section className="container" id="portfolio" style={{ padding: '100px 0' }}>
            <div className="section-header">
                <div>
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-subtitle">A selection of my best projects in Engineering & Creativity</p>
                </div>
            </div>

            <div className="portfolio-content-wrapper">
                {/* Creative Section */}
                <div className="portfolio-group">
                    <div className="group-header">
                        <Camera size={20} />
                        <h3>Creative & Design</h3>
                    </div>
                    <div className="projects-grid">
                        {projects.creative.map((project) => (
                            <div key={project.id} className={`project-item ${project.featured ? 'featured' : ''}`}>
                                <div className="card-top">
                                    <div className="project-icon-box">
                                        {project.icon}
                                    </div>
                                    <a href={project.link} className="project-link">
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>

                                <div className="project-content">
                                    <div className="project-meta">
                                        <span className="project-category">{project.category}</span>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>

                                    <div className="tags-container">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Section */}
                <div className="portfolio-group">
                    <div className="group-header">
                        <Code size={20} />
                        <h3>Tech & Engineering</h3>
                    </div>
                    <div className="projects-grid">
                        {projects.tech.map((project) => (
                            <div key={project.id} className={`project-item ${project.featured ? 'featured' : ''}`}>
                                <div className="card-top">
                                    <div className="project-icon-box">
                                        {project.icon}
                                    </div>
                                    <a href={project.link} className="project-link">
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>

                                <div className="project-content">
                                    <div className="project-meta">
                                        <span className="project-category">{project.category}</span>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>

                                    <div className="tags-container">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 50px;
                    flex-wrap: wrap;
                    gap: 30px;
                }
                
                .section-title {
                    font-size: 2.5rem;
                    color: var(--text-primary);
                    margin-bottom: 8px;
                }
                .section-subtitle {
                    color: var(--text-secondary);
                    font-size: 1.1rem;
                }

                .portfolio-content-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                    margin-top: 20px;
                }

                .portfolio-group {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    background: var(--bg-card);
                    border: 1px solid var(--border-subtle);
                    border-radius: 32px;
                    padding: 48px;
                    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.03);
                }

                .group-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--text-primary);
                    border-bottom: 1px solid var(--border-subtle);
                    padding-bottom: 20px;
                    margin-bottom: 8px;
                }

                .group-header h3 {
                    font-size: 1.5rem;
                    margin: 0;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }
                
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
                    gap: 32px;
                }
                
                .project-item {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    min-height: 320px;
                    background: rgba(0,0,0,0.02);
                    border: 1px solid var(--border-subtle);
                    border-radius: 20px;
                    padding: 24px;
                    transition: all 0.2s;
                }
                .project-item:hover {
                    border-color: var(--border-highlight);
                    background: var(--bg-card-hover);
                    transform: translateY(-4px);
                }
                
                .project-item.featured {
                    grid-column: span 2;
                    background: linear-gradient(145deg, rgba(37, 99, 235, 0.05) 0%, rgba(0,0,0,0) 100%);
                    border-color: rgba(37, 99, 235, 0.2);
                }
                
                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .project-icon-box {
                    width: auto;
                    height: auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .project-link {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #64748B;
                    border: 1px solid rgba(0,0,0,0.1);
                    transition: all 0.2s;
                    text-decoration: none;
                }
                .project-item:hover .project-link {
                    background: var(--accent-blue);
                    color: white;
                    border-color: var(--accent-blue);
                    transform: rotate(45deg);
                }
                
                .project-content h3 {
                    font-size: 1.5rem;
                    margin-bottom: 12px;
                    color: var(--text-primary);
                    font-weight: 600;
                }
                
                .project-content p {
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 24px;
                    flex-grow: 1;
                    font-size: 0.95rem;
                }
                
                .project-category {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--accent-blue);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 12px;
                    display: block;
                }
                
                .tags-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: auto;
                }
                
                .tag {
                    background: rgba(0,0,0,0.05);
                    padding: 6px 14px;
                    border-radius: 99px;
                    font-size: 0.8rem;
                    color: #94A3B8;
                    font-weight: 500;
                    border: 1px solid rgba(0,0,0,0.05);
                }

                @media (max-width: 900px) {
                    .project-item.featured { grid-column: span 1; }
                    .section-header { flex-direction: column; align-items: flex-start; }
                    .tab-switcher { width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default PortfolioSection;
