import { useEffect, useState } from 'react'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData.js'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Primary">
        <a href="#home" className="brand" onClick={(e) => go(e, 'home')} aria-label="Sanket Kadam, back to top">
          <span className="brand__mark">SK</span>
          <span className="brand__name">Sanket Kadam</span>
        </a>

        <ul className={`navbar__links ${open ? 'is-open' : ''}`} id="nav-menu">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? 'is-active' : ''}
                aria-current={active === l.id ? 'true' : undefined}
                onClick={(e) => go(e, l.id)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="navbar__resume-mobile">
            <a href={profile.resumeUrl} className="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer">
              <Download size={16} aria-hidden="true" /> Resume
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <a
            href={profile.resumeUrl}
            className="btn btn--outline btn--sm navbar__resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} aria-hidden="true" /> Resume
          </a>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="icon-btn navbar__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
