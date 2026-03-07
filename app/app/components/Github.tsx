import { languageColors } from '@/util/languageColors'

type GithubData = {
    login: string
    public_repos: number
    followers: number
}

type GithubRepo = {
    name: string
    description: string
    html_url: string
    language: string
}

async function getGithubData(): Promise<GithubData> {
    const res = await fetch('https://api.github.com/users/NicholasHellmers', { next: { revalidate: 3600 } })
    return res.json()
}

async function getGithubRepos(): Promise<GithubRepo[]> {
    const res = await fetch('https://api.github.com/users/NicholasHellmers/repos?sort=updated&per_page=30', {
        next: { revalidate: 3600 },
    })
    return res.json()
}

export default async function Github() {
    const [githubData, githubRepos] = await Promise.all([getGithubData(), getGithubRepos()])
    const repos = githubRepos.filter(r => r.language != null)

    return (
        <section id="github" className="max-w-6xl mx-auto px-6 py-20">
            <div className="animate-fadeInUp delay-100">
                <span className="section-heading">GitHub</span>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-3 animate-fadeInUp delay-200">
                <a
                    href="https://github.com/NicholasHellmers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-badge text-sm py-1.5 px-4"
                >
                    @{githubData.login}
                </a>
                <span className="skill-badge text-sm py-1.5 px-4">
                    {githubData.public_repos} public repos
                </span>
                <span className="skill-badge text-sm py-1.5 px-4">
                    {githubData.followers} followers
                </span>
            </div>

            {/* Repo grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeInUp delay-300">
                {repos.map(repo => (
                    <a
                        key={repo.name}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-4 flex flex-col gap-3 min-h-[110px]"
                    >
                        <h4 className="text-[var(--text-primary)] font-semibold text-sm truncate">{repo.name}</h4>
                        <p className="text-[var(--text-muted)] text-xs leading-relaxed flex-1 line-clamp-2">
                            {repo.description || 'No description available.'}
                        </p>
                        <div className="flex items-center gap-2">
                            <span
                                className="lang-dot"
                                style={{ backgroundColor: languageColors[repo.language] ?? '#888' }}
                            />
                            <span className="text-[var(--text-muted)] text-xs">{repo.language}</span>
                        </div>
                    </a>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center animate-fadeInUp delay-400">
                <a
                    href="https://github.com/NicholasHellmers?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                >
                    View all repositories →
                </a>
            </div>
        </section>
    )
}
