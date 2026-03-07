'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[rgba(13,17,23,0.85)] backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-[var(--text-primary)] font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          onClick={() => setOpen(false)}
        >
          niki<span className="gradient-text">hellmers</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map(item => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">{item.label}</a>
              </li>
            ))}
            <li>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="btn-accent py-[7px] px-4 text-sm"
              >
                Resume ↗
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile: Resume + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="btn-accent py-[6px] px-3 text-xs"
          >
            Resume ↗
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1"
          >
            {open ? (
              /* X icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[rgba(13,17,23,0.97)] px-5 py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link text-base"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
