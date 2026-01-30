import React, { useState } from 'react';
import { ArrowUpRight, Folder, Camera, Code, Server, Smartphone, Video, Image as ImageIcon } from 'lucide-react';

const projects = {
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
            title: "Secure Web App",
            category: "Cybersecurity",
            desc: "Web application development with security best practices and OWASP Top 10 implementation.",
            tags: ["Security", "Web", "Auth", "Encryption"],
            icon: <Server size={24} color="#10B981" />,
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

const PortfolioSection = () => {
    const [activeTab, setActiveTab] = useState('tech');

    return (
        <section className="bento-card" id="portfolio">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Portfolio & Projects</h2>
                    <p className="section-subtitle">Exploring two worlds: Technology & Creativity</p>
                </div>

                <div className="tab-switcher">
                    <button
                        className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tech')}
                    >
                        <Code size={18} /> Tech & Engineering
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'creative' ? 'active' : ''}`}
                        onClick={() => setActiveTab('creative')}
                    >
                        <Camera size={18} /> Creative & Design
                    </button>
                </div>
            </div>

            <div className="projects-grid">
                {projects[activeTab].map((project) => (
                    <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
                        <div className="project-icon-box">
                            {project.icon}
                        </div>
                        <div className="project-content">
                            <div className="project-meta">
                                <span className="project-category">{project.category}</span>
                                {project.featured && <span className="featured-badge">Featured</span>}
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>

                            <div className="tags-container">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <a href={project.link} className="project-link">
                            <ArrowUpRight size={20} />
                        </a>
                    </div>
                ))}
            </div>

            <style>{`
        .section-header {
           display: flex;
           justify-content: space-between;
           align-items: flex-end;
           margin-bottom: 40px;
           flex-wrap: wrap;
           gap: 20px;
        }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 8px;
        }
        .section-subtitle {
           color: var(--text-secondary);
           font-size: 1.1rem;
        }

        .tab-switcher {
           background: #F3F4F6;
           padding: 6px;
           border-radius: 12px;
           display: flex;
           gap: 6px;
        }
        
        .tab-btn {
           border: none;
           background: transparent;
           padding: 10px 20px;
           border-radius: 8px;
           font-weight: 600;
           color: var(--text-secondary);
           cursor: pointer;
           display: flex;
           align-items: center;
           gap: 8px;
           transition: all 0.2s;
        }
        
        .tab-btn.active {
           background: white;
           color: #4F46E5;
           box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .projects-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
           gap: 24px;
        }
        
        .project-card {
           background: #F9FAFB;
           border-radius: 20px;
           padding: 30px;
           border: 1px solid #E5E7EB;
           transition: all 0.2s ease;
           position: relative;
           display: flex;
           flex-direction: column;
           gap: 24px;
        }
        
        .project-card:hover {
           transform: translateY(-5px);
           border-color: #C7D2FE;
           box-shadow: 0 10px 30px -10px rgba(79, 70, 229, 0.1);
        }
        
        .project-card.featured {
           grid-column: span 2;
           background: linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 100%);
           border-color: #E0E7FF;
        }

        .project-icon-box {
           width: 50px;
           height: 50px;
           background: white;
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
           box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
        
        .project-meta {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 12px;
        }
        
        .project-category {
           font-size: 0.85rem;
           font-weight: 600;
           color: #6B7280;
           text-transform: uppercase;
           letter-spacing: 0.5px;
        }
        
        .featured-badge {
           background: #FCD34D;
           color: #92400E;
           font-size: 0.75rem;
           font-weight: 700;
           padding: 4px 10px;
           border-radius: 20px;
        }
        
        .project-content h3 {
           font-size: 1.4rem;
           margin-bottom: 12px;
           line-height: 1.3;
        }
        
        .project-content p {
           color: var(--text-secondary);
           line-height: 1.6;
           margin-bottom: 20px;
           flex-grow: 1;
        }
        
        .tags-container {
           display: flex;
           flex-wrap: wrap;
           gap: 8px;
        }
        
        .tag {
           background: white;
           padding: 4px 12px;
           border-radius: 99px;
           font-size: 0.8rem;
           color: #4B5563;
           border: 1px solid #E5E7EB;
        }
        
        .project-link {
           position: absolute;
           top: 30px;
           right: 30px;
           width: 40px;
           height: 40px;
           border-radius: 50%;
           background: white;
           display: flex;
           align-items: center;
           justify-content: center;
           color: #9CA3AF;
           border: 1px solid #E5E7EB;
           transition: all 0.2s;
        }
        .project-card:hover .project-link {
           color: #4F46E5;
           border-color: #4F46E5;
        }
        
        @media (max-width: 900px) {
           .project-card.featured { grid-column: span 1; }
           .section-header { flex-direction: column; align-items: flex-start; }
           .tab-switcher { width: 100%; justify-content: space-between; }
           .tab-btn { flex: 1; justify-content: center; }
        }
      `}</style>
        </section>
    );
};

export default PortfolioSection;
