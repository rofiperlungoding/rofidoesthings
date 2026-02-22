import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Star, GitFork, Book, Cpu, Layers } from 'lucide-react';

interface RepoData {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
  topics: string[];
  updated_at: string;
  created_at: string;
  size: number;
}

const ProjectDetailPage: React.FC = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const [repo, setRepo] = useState<RepoData | null>(null);
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const repoRes = await fetch(`https://api.github.com/repos/rofiperlungoding/${projectName}`);
        if (!repoRes.ok) throw new Error('Repo not found');
        const repoData = await repoRes.json();
        setRepo(repoData);

        // Fetch README for non-flagships
        const flagships = ['catcoder', 'clouddesk', 'setutor'];
        if (!flagships.includes(projectName?.toLowerCase() || '')) {
          try {
            const readmeRes = await fetch(`https://api.github.com/repos/rofiperlungoding/${projectName}/readme`, {
              headers: { 'Accept': 'application/vnd.github.v3.raw' }
            });
            if (readmeRes.ok) {
              const readmeText = await readmeRes.text();
              setReadme(readmeText);
            }
          } catch (err) {
            console.warn('README not found, using description fallback');
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
    window.scrollTo(0, 0);
  }, [projectName]);

  if (loading) return (
    <div className="project-detail-loading">
      <div className="skeleton-line skeleton-long" />
      <div className="skeleton-line skeleton-medium" />
    </div>
  );

  if (!repo) return (
    <div className="error-container">
      <h2>[ ERROR_LOG: SYSTEM_NOT_FOUND ]</h2>
      <Link to="/" className="back-link">Return to Command Center</Link>
    </div>
  );

  const isCatCoder = repo.name.toLowerCase() === 'catcoder';
  const isCloudDesk = repo.name.toLowerCase() === 'clouddesk';
  const isSeTutor = repo.name.toLowerCase() === 'setutor';
  const systemId = isCatCoder ? 'CATCODER-LOGIC-01' :
    isCloudDesk ? 'CLOUDDESK-AUTO-02' :
      isSeTutor ? 'SETUTOR-BROKER-03' :
        `SYSTEM-SPEC-${repo.id || 'N/A'}`;

  return (
    <div className="project-detail-page">
      <div className="detail-background-grid" />

      <nav className="detail-nav">
        <Link to="/" className="back-breadcrumb">
          <ArrowLeft size={16} />
          <span>BACK_TO_COMMAND_CENTER</span>
        </Link>
      </nav>

      <header className="engineering-header">
        <div className="header-top">
          <span className="system-serial">{systemId}</span>
          <div className="repo-glance">
            <div className="glance-item">
              <Star size={14} />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="glance-item">
              <GitFork size={14} />
              <span>{repo.forks_count}</span>
            </div>
            <div className="glance-item">
              <Cpu size={14} />
              <span>{(repo.size / 1024).toFixed(2)} MB</span>
            </div>
          </div>
        </div>

        <h1 className="project-title-large">{repo.name}</h1>

        <div className="revision-metadata">
          <span>REV_VERSION: 1.0.4</span>
          <span className="metadata-divider">|</span>
          <span>LAST_DEPLOY: {new Date(repo.updated_at).toLocaleDateString()}</span>
        </div>
      </header>

      <main className="detail-layout">
        <div className="spec-grid-layout">
          <div className="narrative-column">
            <section className="spec-section">
              <h2 className="spec-label">[ 01_PROJECT_VISION ]</h2>
              <div className="narrative-text">
                {isCatCoder ? (
                  <p>
                    CatCoder reimagines technical education by merging gamification mechanics with rigorous logic validation.
                    The mission was to eliminate the "tutorial hell" plateau by creating a high-stakes, interactive arena
                    where developers prove their mastery through execution, not just observation.
                  </p>
                ) : isCloudDesk ? (
                  <p>
                    CloudDesk was architected to solve the fragmentation of modern cloud infrastructure.
                    It serves as a unified orchestration layer that provides granular monitoring and automated
                    response cycles for distributed systems, ensuring 99.99% operational continuity.
                  </p>
                ) : isSeTutor ? (
                  <p>
                    SeTutor optimizes the knowledge transfer economy through an intelligent brokerage engine.
                    The system focuses on high-precision matching between student profiles and tutor expertise,
                    utilizing analytical data to minimize scheduling friction and maximize learning outcomes.
                  </p>
                ) : (
                  <p>{repo.description || "Detailed system architecture evaluation in progress. This module focuses on high-efficiency execution within its specific domain."}</p>
                )}
              </div>
            </section>

            <section className="spec-section">
              <h2 className="spec-label">[ 02_SYSTEM_ARCHITECTURE ]</h2>
              <div className="narrative-text">
                {isCatCoder ? (
                  <>
                    <p>
                      The architecture focuses on a "Logic-to-Feedback" cycle. A custom state management engine
                      tracks user progress and level progression in real-time, while an integrated code validator
                      ensures that rewards are only distributed upon successful logical execution.
                    </p>
                    <div className="handcrafted-exhibition catcoder-schematic">
                      <div className="schematic-node">LOGIC_GATE</div>
                      <div className="schematic-line" />
                      <div className="schematic-node">PROGRESS_ENG</div>
                      <div className="schematic-line" />
                      <div className="schematic-node">REWARD_DIST</div>
                    </div>
                  </>
                ) : isCloudDesk ? (
                  <>
                    <p>
                      Designed with a "Central Observer" pattern, the system monitors distributed nodes via a
                      low-latency data stream. Automated scaling logic triggers node redistribution based on
                      real-time resource metrics, handled by an enterprise-tier cloud broker.
                    </p>
                    <div className="handcrafted-exhibition clouddesk-schematic">
                      <div className="network-center" />
                      <div className="node-rings" />
                    </div>
                  </>
                ) : isSeTutor ? (
                  <>
                    <p>
                      The platform utilizes a multi-criteria matching algorithm. By analyzing availability datasets
                      and skill-affinity maps, the engine creates optimal pairs, reducing the time-to-session
                      by over 40% compared to traditional manual brokering.
                    </p>
                    <div className="handcrafted-exhibition setutor-schematic">
                      <div className="logic-tree-branch" />
                    </div>
                  </>
                ) : (
                  <p>
                    The project leverages a modern {repo.language} stack to implement robust service logic.
                    Modular components ensure that the core engine is both scalable and maintainable.
                  </p>
                )}
              </div>

              {!isCatCoder && !isCloudDesk && !isSeTutor && (
                <div className="handcrafted-placeholder">
                  <div className="schematic-blueprint-box">
                    <Layers size={32} className="blueprint-icon" />
                    <span>ARCHITECTURE_SCHEMATIC_PENDING_RENDER</span>
                  </div>
                </div>
              )}
            </section>
          </div>

          <aside className="architecture-sidebar">
            <div className="sidebar-group">
              <h3>CORE_STACK</h3>
              <div className="sidebar-tags">
                <span className="sidebar-tag" data-lang={repo.language?.toLowerCase()}>
                  {repo.language}
                </span>
                {repo.topics.map(topic => (
                  <span key={topic} className="sidebar-tag">{topic}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-group">
              <h3>RESOURCES</h3>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="sidebar-link">
                <Github size={16} />
                SOURCE_EXTERNAL
              </a>
              <div className="sidebar-link disabled">
                <Book size={16} />
                DOCUMENTATION_INTERNAL
              </div>
            </div>
          </aside>
        </div>

        {readme && (
          <section className="readme-mirror-section">
            <h2 className="spec-label">[ 03_TECHNICAL_LOG ]</h2>
            <div className="readme-container">
              {/* Simple split for better readability without external markdown libs */}
              {readme.split('\n').map((line, i) => {
                if (line.startsWith('# ')) return <h1 key={i}>{line.replace('# ', '')}</h1>;
                if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>;
                if (line.startsWith('### ')) return <h3 key={i}>{line.replace('### ', '')}</h3>;
                if (line.startsWith('- ') || line.startsWith('* ')) return <li key={i}>{line.substring(2)}</li>;
                if (line.trim() === '') return <br key={i} />;
                return <p key={i}>{line}</p>;
              })}
            </div>
          </section>
        )}
      </main>

      <style>{`
                .project-detail-page {
                    min-height: 100vh;
                    background-color: #FFFFFF;
                    color: var(--text-primary);
                    padding: 40px 8%;
                    position: relative;
                    z-index: 10;
                }

                .detail-background-grid {
                    position: fixed;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background-image: linear-gradient(to right, rgba(37, 99, 235, 0.05) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(37, 99, 235, 0.05) 1px, transparent 1px);
                    background-size: 20px 20px;
                    z-index: -1;
                    pointer-events: none;
                }

                .detail-nav {
                    margin-bottom: 60px;
                }

                .back-breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    color: var(--text-secondary);
                    text-decoration: none;
                    letter-spacing: 0.1em;
                    transition: color 0.2s;
                }

                .back-breadcrumb:hover {
                    color: var(--accent-blue);
                }

                .engineering-header {
                    margin-bottom: 80px;
                    border-left: 2px solid var(--accent-blue);
                    padding-left: 40px;
                }

                .header-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 24px;
                }

                .system-serial {
                    font-family: var(--font-mono);
                    font-size: 0.8rem;
                    color: var(--accent-blue);
                    letter-spacing: 0.2em;
                    background: rgba(37, 99, 235, 0.05);
                    padding: 6px 12px;
                    border-radius: 4px;
                }

                .repo-glance {
                    display: flex;
                    gap: 24px;
                    color: var(--text-secondary);
                }

                .glance-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.85rem;
                }

                .project-title-large {
                    font-size: 4.5rem;
                    font-weight: 700;
                    margin-bottom: 16px;
                    letter-spacing: -0.02em;
                }

                .revision-metadata {
                    display: flex;
                    gap: 16px;
                    font-family: var(--font-mono);
                    font-size: 0.7rem;
                    color: var(--text-tertiary);
                    text-transform: uppercase;
                }

                .metadata-divider { opacity: 0.3; }

                .detail-layout {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 80px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .narrative-column {
                    max-width: 800px;
                }

                .readme-mirror-section {
                    margin-top: 40px;
                    border-top: 1px solid var(--border-subtle);
                    padding-top: 80px;
                }

                .readme-container {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--text-secondary);
                }

                .readme-container h1, 
                .readme-container h2, 
                .readme-container h3 {
                    color: var(--text-primary);
                    margin-top: 40px;
                    margin-bottom: 20px;
                    font-family: var(--font-header);
                }

                .readme-container p { margin-bottom: 20px; }
                .readme-container li { margin-left: 20px; margin-bottom: 10px; }

                .spec-section {
                    margin-bottom: 100px;
                }

                .spec-label {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    color: var(--accent-blue);
                    margin-bottom: 32px;
                    letter-spacing: 0.1em;
                }

                .narrative-text {
                    font-size: 1.25rem;
                    line-height: 1.8;
                    color: var(--text-secondary);
                    font-weight: 400;
                }

                .handcrafted-exhibition {
                    margin-top: 60px;
                    background: #F8FAFF;
                    border: 1px solid var(--border-subtle);
                    border-radius: 12px;
                    padding: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                }

                /* CatCoder: Logic Nodes */
                .catcoder-schematic {
                    gap: 30px;
                }
                .schematic-node {
                    padding: 12px 20px;
                    border: 1px solid var(--accent-blue);
                    background: #FFFFFF;
                    font-family: var(--font-mono);
                    font-size: 0.7rem;
                    color: var(--accent-blue);
                    z-index: 1;
                }
                .schematic-line {
                    width: 40px;
                    height: 1px;
                    background: var(--accent-blue);
                    opacity: 0.3;
                }

                /* CloudDesk: Network Hub */
                .clouddesk-schematic .network-center {
                    width: 20px;
                    height: 20px;
                    background: var(--accent-blue);
                    border-radius: 50%;
                    box-shadow: 0 0 20px var(--accent-glow);
                }
                .clouddesk-schematic .node-rings {
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    border: 1px solid var(--accent-blue);
                    opacity: 0.1;
                    border-radius: 50%;
                }

                /* SeTutor: Logic Tree */
                .setutor-schematic .logic-tree-branch {
                    width: 2px;
                    height: 100px;
                    background: var(--accent-blue);
                    position: relative;
                }
                .setutor-schematic .logic-tree-branch::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; width: 60px; height: 60px;
                    border-top: 2px solid var(--accent-blue);
                    border-right: 2px solid var(--accent-blue);
                    opacity: 0.2;
                }

                .handcrafted-placeholder {
                    margin-top: 60px;
                    background: #F8FAFF;
                    border: 1px dashed var(--border-subtle);
                    border-radius: 12px;
                    padding: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .schematic-blueprint-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                    color: var(--text-tertiary);
                    font-family: var(--font-mono);
                    font-size: 0.7rem;
                    letter-spacing: 0.1em;
                }

                .architecture-sidebar {
                    position: sticky;
                    top: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                }

                .sidebar-group h3 {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    color: var(--text-primary);
                    margin-bottom: 24px;
                    letter-spacing: 0.1em;
                }

                .sidebar-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .sidebar-tag {
                    padding: 8px 16px;
                    background: #F3F4F6;
                    border-radius: 6px;
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                }

                .sidebar-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 20px;
                    border: 1px solid var(--border-subtle);
                    border-radius: 8px;
                    text-decoration: none;
                    color: var(--text-secondary);
                    font-size: 0.85rem;
                    font-family: var(--font-mono);
                    transition: all 0.2s;
                }

                .sidebar-link:hover:not(.disabled) {
                    border-color: var(--accent-blue);
                    color: var(--accent-blue);
                    background: #F8FAFF;
                }

                .sidebar-link.disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                @media (max-width: 1100px) {
                    .detail-layout {
                        grid-template-columns: 1fr;
                        gap: 60px;
                    }
                    .architecture-sidebar {
                        position: static;
                        order: -1;
                    }
                    .project-title-large {
                        font-size: 3rem;
                    }
                }
            `}</style>
    </div>
  );
};

export default ProjectDetailPage;
