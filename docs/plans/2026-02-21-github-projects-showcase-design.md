# GitHub Projects Showcase — Implementation Plan

**Goal:** Replace hardcoded mock projects in `PortfolioSection.tsx` with real projects fetched from the GitHub API at runtime.

**Architecture:** Component fetches repos from `https://api.github.com/users/rofiperlungoding/repos` on mount, filters out excluded repos, and renders them in a single grid. Loading/error states are handled gracefully with skeleton cards and retry functionality.

**Tech Stack:** React, TypeScript, GitHub REST API (no auth needed for public repos), Lucide icons

---

## Task 1: Define TypeScript Interfaces & Constants

**Files:**
- Modify: `src/components/PortfolioSection.tsx:1-90`

**Step 1: Replace existing interfaces and data**

Remove the old `Project`, `ProjectsData` interfaces and the hardcoded `projects` object. Replace with:

```tsx
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
```

**Step 2: Verify no TypeScript errors**

Run: `npx tsc --noEmit`
Expected: No errors related to PortfolioSection

---

## Task 2: Add Fetch Logic with Loading/Error States

**Files:**
- Modify: `src/components/PortfolioSection.tsx` (component function)

**Step 1: Add state and useEffect for API fetch**

Replace the existing `PortfolioSection` component function with state management:

```tsx
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

    // ... render JSX (Task 3)
};
```

**Step 2: Verify build compiles**

Run: `npx tsc --noEmit`
Expected: PASS (may warn about unused `repos`/`loading`/`error` until Task 3)

---

## Task 3: Build the Render JSX

**Files:**
- Modify: `src/components/PortfolioSection.tsx` (return statement)

**Step 1: Write the main render with loading/error/success states**

The return statement of the component:

```tsx
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

        {/* styles in Task 4 */}
    </section>
);
```

**Step 2: Verify dev server renders**

Open browser at dev server URL.
Expected: Section loads, fetches GitHub repos, displays cards.

---

## Task 4: Add Styles (Skeleton, Error, New Elements)

**Files:**
- Modify: `src/components/PortfolioSection.tsx` (the `<style>` block)

**Step 1: Update the inline styles**

Keep existing working styles. Add these new styles:

```css
/* Skeleton loading animation */
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

/* Project meta with stars */
.project-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.star-count {
    font-size: 0.8rem;
    color: var(--text-secondary);
    font-weight: 500;
}

/* Collaboration badge */
.collab-tag {
    background: rgba(99, 102, 241, 0.1) !important;
    color: #6366F1 !important;
    border-color: rgba(99, 102, 241, 0.2) !important;
    font-weight: 600 !important;
}
```

**Step 2: Remove unused imports**

Remove unused icon imports: `Camera`, `Smartphone`, `Video`, `ImageIcon`, `Layout` — only keep `Code`, `ArrowUpRight`.

**Step 3: Verify visual in browser**

Open browser at dev server URL.
Expected: 
- On load: 6 skeleton cards with shimmer animation
- After fetch: Real project cards with GitHub data
- SeTutor card has purple "Collaboration" badge
- CloudDesk shows star count and topic tags

---

## Task 5: Visual QA & Cleanup

**Files:**
- Modify: `src/components/PortfolioSection.tsx` (if needed)

**Step 1: Check all states visually**

Verify in browser:
- [ ] Loading state shows skeleton cards
- [ ] Success state shows all repos (excluding rofidoesthings, rofiperlungoding, INTRIVIA)
- [ ] SeTutor has "Collaboration" badge
- [ ] CloudDesk shows ⭐ 2 and topics
- [ ] Cards link to correct GitHub URLs (target="_blank")
- [ ] Hover effects work (translateY, arrow rotate)
- [ ] Responsive on mobile (cards stack)

**Step 2: Disconnect internet and verify error state**

Expected: Error message + "Try Again" button appears

**Step 3: Commit**

```bash
git add src/components/PortfolioSection.tsx
git commit -m "feat: replace mock projects with live GitHub API fetch"
```
