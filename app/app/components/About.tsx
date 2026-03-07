const skills = {
  "Languages": ["Go", "Python", "TypeScript", "JavaScript", "SQL", "Scala", "Java", "PHP"],
  "Frameworks & Tools": ["React", "Next.js", "Docker", "PostgreSQL", "MongoDB", "MySQL", "Git"],
}

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-14">
      <div className="animate-fadeInUp delay-100">
        <span className="section-heading">About Me</span>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="animate-fadeInUp delay-200 space-y-4 text-[var(--text-muted)] leading-relaxed text-[0.97rem]">
          <p>
            Hi, I&apos;m <span className="text-[var(--text-primary)] font-semibold">Nicholas (Niki) Hellmers Davalos</span> — a
            software engineer currently at <span className="text-[var(--accent)] font-medium">Oracle</span> in the Greater
            Boston area. I hold a BS in Computer Science from the{" "}
            <span className="text-[var(--text-primary)] font-medium">University of Colorado Boulder</span>.
          </p>
          <p>
            I&apos;m driven by curiosity and a passion for building software that solves real-world problems. My work spans
            backend systems, developer tooling, data pipelines, and full-stack web applications. I thrive in environments
            where I can collaborate with talented teams and continuously grow as an engineer.
          </p>
          <p>
            Outside of work I enjoy competitive programming, exploring open-source projects, and building side projects
            that push me to learn new technologies. I&apos;m fluent in English, Spanish, and Guaraní.
          </p>
        </div>

        {/* Skills */}
        <div className="animate-fadeInUp delay-300 space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3 font-semibold">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
