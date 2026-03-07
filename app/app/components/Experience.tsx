type ExperienceItem = {
    role: string
    company: string
    period: string
    location: string
    bullets: string[]
}

const experiences: ExperienceItem[] = [
    {
        role: "Software Engineer",
        company: "Oracle",
        period: "Mar 2025 – Present",
        location: "Burlington, MA (Hybrid)",
        bullets: [],
    },
    {
        role: "Software Engineer Intern",
        company: "Goodie Bag",
        period: "Dec 2024 – Mar 2025",
        location: "Remote",
        bullets: [
            "Designed and developed a scalable data pipeline using Python and Docker for restaurant lead extraction, integrating Overpass Turbo and Google Places APIs.",
            "Built and maintained a PostgreSQL database API to manage 350,000+ restaurant leads.",
        ],
    },
    {
        role: "Course Assistant — Algorithms",
        company: "University of Colorado Boulder",
        period: "Aug 2023 – Dec 2023",
        location: "Boulder, CO",
        bullets: [
            "Assisted in teaching algorithms courses and developing study materials for undergraduate students.",
        ],
    },
    {
        role: "Web Developer",
        company: "Parque Serenidad",
        period: "Jan 2021 – Jul 2021 · Internship 2019",
        location: "Paraguay",
        bullets: [
            "Full-stack development of the company website using HTML, JavaScript, CSS, PHP, and MySQL.",
        ],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="max-w-6xl mx-auto px-6 py-14">
            <div className="animate-fadeInUp delay-100">
                <span className="section-heading">Experience</span>
            </div>

            <div className="mt-10 space-y-5">
                {experiences.map((exp, i) => (
                    <div
                        key={exp.company + exp.period}
                        className={`glass-card p-6 animate-fadeInUp delay-${(i + 2) * 100}`}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                            <div>
                                <h3 className="text-[var(--text-primary)] font-semibold text-base">{exp.role}</h3>
                                <p className="text-[var(--accent)] text-sm font-medium mt-0.5">{exp.company}</p>
                            </div>
                            <div className="sm:text-right shrink-0 mt-0.5 sm:mt-0">
                                <p className="text-[var(--text-muted)] text-xs font-medium">{exp.period}</p>
                                <p className="text-[var(--text-muted)] text-xs mt-0.5">{exp.location}</p>
                            </div>
                        </div>

                        {exp.bullets.length > 0 && (
                            <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4">
                                {exp.bullets.map((b, bi) => (
                                    <li key={bi} className="flex gap-2.5 text-sm text-[var(--text-muted)] leading-relaxed">
                                        <span className="text-[var(--accent)] mt-0.5 shrink-0">▸</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
