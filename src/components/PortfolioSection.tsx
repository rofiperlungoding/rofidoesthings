import React from 'react';
import { ArrowUpRight, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    fork: boolean;
    topics: string[];
    updated_at: string;
}

const GITHUB_USERNAME = 'rofiperlungoding';
const EXCLUDED_REPOS = ['rofidoesthings', 'rofiperlungoding', 'INTRIVIA'];

const LANGUAGE_COLORS: Record<string, string> = {
    TypeScript: '#3178C6',
    JavaScript: '#F7DF1E',
    Python: '#3776AB',
    Java: '#ED8B00',
    'C++': '#00599C',
    C: '#A8B9CC',
    HTML: '#E34F26',
    CSS: '#1572B6',
};

const PortfolioSection: React.FC = () => {
    const [repos, setRepos] = React.useState<GitHubRepo[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    const fetchRepos = React.useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(
                `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
            );
            if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
            const data: GitHubRepo[] = await res.json();
            const filtered = data.filter(
                (repo) => !EXCLUDED_REPOS.includes(repo.name)
            );
            setRepos(filtered);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load projects');
        } finally {
            setLoading(false);
        }
    }, []);

    React.useEffect(() => {
        fetchRepos();
    }, [fetchRepos]);

    return (
        <section className="container" id="portfolio" style={{ padding: '100px 0' }}>
            <div className="section-header">
                <div>
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-subtitle">Real projects from my GitHub — built with passion</p>
                </div>
            </div>

            <div className="portfolio-content-wrapper">
                {!loading && (
                    <div className="group-header">
                        <Code size={20} />
                        <h3>Open Source Architecture</h3>
                    </div>
                )}

                {loading && (
                    <div className="portfolio-mosaic">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bento-card project-item skeleton-card">
                                <div className="skeleton-line skeleton-short" />
                                <div className="skeleton-line skeleton-long" />
                                <div className="skeleton-line skeleton-medium" />
                                <div className="skeleton-tags">
                                    <div className="skeleton-tag" />
                                    <div className="skeleton-tag" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {error && (
                    <div className="error-state">
                        <p>😕 {error}</p>
                        <button onClick={fetchRepos} className="retry-btn">
                            Try Again
                        </button>
                    </div>
                )}

                {!loading && !error && (
                    <div className="portfolio-mosaic">
                        {[...repos]
                            .sort((a, b) => {
                                const flagships = ['catcoder', 'clouddesk', 'setutor'];
                                const aIdx = flagships.indexOf(a.name.toLowerCase());
                                const bIdx = flagships.indexOf(b.name.toLowerCase());
                                if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
                                if (aIdx !== -1) return -1;
                                if (bIdx !== -1) return 1;
                                return 0;
                            })
                            .map((repo) => {
                                const name = repo.name.toLowerCase();
                                const isHero = name.includes('catcoder');
                                const isFeatured = name.includes('clouddesk');
                                const isSeTutor = name.includes('setutor');

                                let gridClass = 'mosaic-standard';
                                let schematicClass = '';
                                let systemId = '';

                                if (isHero) {
                                    gridClass = 'mosaic-hero';
                                    schematicClass = 'schematic-catcoder';
                                    systemId = '[ FLAGSHIP_SYSTEM_01 ]';
                                } else if (isFeatured) {
                                    gridClass = 'mosaic-featured';
                                    schematicClass = 'schematic-clouddesk';
                                    systemId = '[ ARCHITECTED_SYSTEM_02 ]';
                                } else if (isSeTutor) {
                                    gridClass = 'mosaic-standard'; // SeTutor is Tier 2 in Row 2, but spans 1
                                    schematicClass = 'schematic-setutor';
                                    systemId = '[ SPECIALTY_SYSTEM_03 ]';
                                }

                                return (
                                    <Link
                                        key={repo.id}
                                        to={`/project/${repo.name}`}
                                        className={`bento-card project-item ${gridClass} ${schematicClass} project-detail-anchor`}
                                    >
                                        {systemId && <span className="system-id">{systemId}</span>}
                                        <div className="card-top">
                                            <div className="project-icon-box">
                                                <Code
                                                    size={24}
                                                    color={
                                                        repo.language
                                                            ? LANGUAGE_COLORS[repo.language] || '#94A3B8'
                                                            : '#94A3B8'
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="project-link"
                                            >
                                                <ArrowUpRight size={20} />
                                            </div>
                                        </div>

                                        <div className="project-content">
                                            <div className="project-meta">
                                                <span className="project-category">
                                                    {repo.language || 'Project'}
                                                </span>
                                                {repo.stargazers_count > 0 && (
                                                    <span className="star-count">
                                                        <span className="stat-num" style={{ fontSize: '1rem', marginRight: '4px' }}>
                                                            {repo.stargazers_count}
                                                        </span>
                                                        Stars
                                                    </span>
                                                )}
                                            </div>
                                            <h3>{repo.name}</h3>
                                            <p>
                                                {isHero ? "Flagship gamified learning infrastructure designed to bridge the gap between theory and execution. Implementation of complex logic cycles, progress tracking, and reward systems." :
                                                    isFeatured ? "Enterprise-grade cloud management system with real-time monitoring, automated scaling architectures, and high-availability node distribution." :
                                                        isSeTutor ? "Intelligent educational brokering platform optimizing knowledge transfer through automated scheduling and performance analytics." :
                                                            repo.description || `System Architecture Evaluation: ${repo.language || 'Software'} based development | Focused on modular systems.`}
                                            </p>

                                            <div className="tags-container">
                                                {repo.fork && (
                                                    <span className="tag collab-tag" data-lang="collaboration">Collaboration</span>
                                                )}
                                                {repo.topics.slice(0, (isHero || isFeatured) ? 6 : 4).map((topic) => (
                                                    <span key={topic} className="tag" data-lang={topic.toLowerCase()}>{topic}</span>
                                                ))}
                                                {repo.topics.length === 0 && repo.language && (
                                                    <span className="tag" data-lang={repo.language.toLowerCase()}>{repo.language}</span>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                )}
            </div>

            <style>{`
                .section-header {
                    margin-bottom: 50px;
                }
                
                .section-title {
                    font-size: 2.5rem;
                    color: var(--text-primary);
                    margin-bottom: 12px;
                }
                .section-subtitle {
                    color: var(--text-secondary);
                    font-size: 1.1rem;
                }

                .portfolio-content-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .group-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--text-primary);
                    padding-bottom: 20px;
                }

                .group-header h3 {
                    font-size: 1.5rem;
                    margin: 0;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }
                
                .project-item {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    min-height: 280px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .project-item.mosaic-hero,
                .project-item.mosaic-featured {
                    padding: 40px;
                }

                .project-detail-anchor {
                    text-decoration: none;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .project-detail-anchor h3 {
                    color: var(--text-primary);
                }
                
                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .project-icon-box {
                    width: 48px;
                    height: 48px;
                    background: rgba(0,0,0,0.03);
                    border-radius: 12px;
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

                .project-meta {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 16px;
                }
                
                .project-content h3 {
                    font-size: 1.5rem;
                    margin-bottom: 12px;
                    color: var(--text-primary);
                    font-weight: 700;
                }
                
                .project-content p {
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 24px;
                    flex-grow: 1;
                    font-size: 1rem;
                }
                
                .project-category {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--accent-blue);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .star-count {
                    font-size: 0.85rem;
                    color: #64748B;
                    display: flex;
                    align-items: center;
                    font-weight: 500;
                }
                
                .tags-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: auto;
                }
                
                 .tag {
                    background: #F8FAFC;
                    padding: 6px 14px;
                    border-radius: 99px;
                    font-size: 0.75rem;
                    color: #475569;
                    font-weight: 600;
                    border: 1px solid #E2E8F0;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.2s ease;
                }

                .tag::before {
                    content: '';
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #94A3B8;
                }

                /* Language Specific Dots */
                .tag[data-lang="typescript"]::before { background: #3178C6; }
                .tag[data-lang="javascript"]::before { background: #F7DF1E; }
                .tag[data-lang="react"]::before { background: #61DAFB; }
                .tag[data-lang="nextjs"]::before { background: #000000; }
                .tag[data-lang="nodejs"]::before { background: #339933; }
                .tag[data-lang="python"]::before { background: #3776AB; }
                .tag[data-lang="css"]::before { background: #1572B6; }
                .tag[data-lang="html"]::before { background: #E34F26; }
                .tag[data-lang="collaboration"]::before { background: #2563EB; }

                .tag:hover {
                    border-color: #CBD5E1;
                    background: #F1F5F9;
                    transform: scale(1.05);
                }

                .collab-tag {
                    background: rgba(37, 99, 235, 0.05) !important;
                    color: #2563EB !important;
                    border-color: rgba(37, 99, 235, 0.1) !important;
                    font-weight: 600 !important;
                }

                /* Skeleton loading */
                .skeleton-card {
                    min-height: 280px !important;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .skeleton-line {
                    height: 16px;
                    background: linear-gradient(90deg, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.04) 75%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                    border-radius: 8px;
                }

                .skeleton-short { width: 40%; }
                .skeleton-medium { width: 70%; }
                .skeleton-long { width: 90%; }

                .skeleton-tags {
                    display: flex;
                    gap: 8px;
                    margin-top: auto;
                }

                .skeleton-tag {
                    width: 60px;
                    height: 28px;
                    background: linear-gradient(90deg, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.04) 75%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                    border-radius: 99px;
                }

                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                /* Error state */
                .error-state {
                    text-align: center;
                    padding: 60px 20px;
                    color: var(--text-secondary);
                }

                .error-state p {
                    font-size: 1.1rem;
                    margin-bottom: 20px;
                }

                .retry-btn {
                    background: var(--accent-blue);
                    color: white;
                    border: none;
                    padding: 10px 24px;
                    border-radius: 99px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }

                @media (max-width: 900px) {
                    .portfolio-mosaic { grid-template-columns: 1fr; }
                    .project-item.mosaic-featured { padding: 24px; }
                }
            `}</style>

        </section>
    );
};

export default PortfolioSection;
