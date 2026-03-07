import Image from 'next/image'
import Header from './components/Header/Header'
import About from '@/app/components/About'
import Experience from '@/app/components/Experience'
import Projects from './components/Projects/Projects'
import Github from '@/app/components/Github'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ── Hero ─────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8">
          {/* Avatar */}
          <div className="animate-fadeInUp relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/profile.jpeg"
              alt="Nicholas Hellmers"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name + title */}
          <div className="animate-fadeInUp delay-100 space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              Nicholas{' '}
              <span className="gradient-text">Hellmers Davalos</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-muted)] font-medium">
              Software Engineer{' '}
              <span className="text-[var(--accent)]">@ Oracle</span>
            </p>
            <p className="text-sm text-[var(--text-muted)]">Greater Boston, MA</p>
          </div>

          {/* CTA buttons */}
          <div className="animate-fadeInUp delay-200 flex flex-wrap gap-3 justify-center">
            <a href="#about" className="btn-accent">
              About me
            </a>
            <a
              href="https://www.linkedin.com/in/nicholas-hellmers/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              LinkedIn ↗
            </a>
          </div>

        </section>

        {/* ── Divider ──────────────────────────── */}
        <div className="section-divider" />

        {/* ── About & Skills ───────────────────── */}
        <About />

        {/* ── Divider ──────────────────────────── */}
        <div className="section-divider" />

        {/* ── Experience ───────────────────────── */}
        <Experience />

        {/* ── Divider ──────────────────────────── */}
        <div className="section-divider" />

        {/* ── Projects ─────────────────────────── */}
        <Projects />

        {/* ── Divider ──────────────────────────── */}
        <div className="section-divider" />

        {/* ── GitHub ───────────────────────────── */}
        <Github />
      </main>

      <Footer />
    </>
  )
}