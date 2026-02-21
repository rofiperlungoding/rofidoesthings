import React from 'react';
import { ArrowUpRight, Code } from 'lucide-react';

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
                <div className="portfolio-group">
                    <div className="group-header">
                        <Code size={20} />
                        <h3>Projects</h3>
                    </div>

                    {loading && (
                        <div className="projects-grid">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="project-item skeleton-card">
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
                        <div className="projects-grid">
                            {repos.map((repo) => (
                                <div key={repo.id} className="project-item">
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
                                        <a
                                            href={repo.html_url}
                                            className="project-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>

                                    <div className="project-content">
                                        <div className="project-meta">
                                            <span className="project-category">
                                                {repo.language || 'Project'}
                                            </span>
                                            {repo.stargazers_count > 0 && (
                                                <span className="star-count">
                                                    ⭐ {repo.stargazers_count}
                                                </span>
                                            )}
                                        </div>
                                        <h3>{repo.name}</h3>
                                        <p>
                                            {repo.description || 'No description provided.'}
                                        </p>

                                        <div className="tags-container">
                                            {repo.fork && (
                                                <span className="tag collab-tag">Collaboration</span>
                                            )}
                                            {repo.topics.slice(0, 4).map((topic) => (
                                                <span key={topic} className="tag">{topic}</span>
                                            ))}
                                            {repo.topics.length === 0 && repo.language && (
                                                <span className="tag">{repo.language}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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
                    min-height: 280px;
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

                .project-meta {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
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

                .star-count {
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    font-weight: 500;
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

                .collab-tag {
                    background: rgba(99, 102, 241, 0.1) !important;
                    color: #6366F1 !important;
                    border-color: rgba(99, 102, 241, 0.2) !important;
                    font-weight: 600 !important;
                }

                /* Skeleton loading */
                .skeleton-card {
                    min-height: 280px !important;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    padding: 24px;
                }

                .skeleton-line {
                    height: 16px;
                    background: linear-gradient(90deg, rgba(0,0,0,0.06) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.06) 75%);
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
                    background: linear-gradient(90deg, rgba(0,0,0,0.06) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.06) 75%);
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

                .retry-btn:hover {
                    opacity: 0.85;
                }

                @media (max-width: 900px) {
                    .section-header { flex-direction: column; align-items: flex-start; }
                    .portfolio-group { padding: 24px; }
                    .projects-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
};

export default PortfolioSection;
