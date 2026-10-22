import { useEffect, useMemo, useRef, useState } from 'react'
import { ExternalLink, Github, Info, X } from 'lucide-react'
import { projectFilters, projects } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'
import ProjectPreview from './ProjectPreview.jsx'

function RepoButton({ project }) {
  return (
    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
      <Github size={16} aria-hidden="true" /> View Source Code
      <span className="sr-only"> for {project.title} (opens in a new tab)</span>
    </a>
  )
}

function DemoButton({ project }) {
  if (!project.demoUrl) return null
  return (
    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm">
      <ExternalLink size={16} aria-hidden="true" /> Live Demo
    </a>
  )
}

function Badges({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t} className="tag tag--accent">
          {t}
        </li>
      ))}
    </ul>
  )
}

function Modal({ project, onClose }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll('a[href], button:not([disabled])')
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={dialogRef}
      >
        <button type="button" className="icon-btn modal__close" onClick={onClose} ref={closeRef} aria-label="Close project details">
          <X size={18} aria-hidden="true" />
        </button>
        <p className="kicker">{project.category}</p>
        <h3 id="modal-title" className="modal__title">
          {project.title}
        </h3>
        <p className="modal__period">{project.period}</p>
        <ProjectPreview id={project.id} />
        <p className="modal__desc">{project.description}</p>
        <h4>Key features</h4>
        <ul className="checklist">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <h4>Technologies</h4>
        <Badges items={project.tech} />
        <div className="modal__actions">
          <RepoButton project={project} />
          <DemoButton project={project} />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.filters.includes(filter))),
    [filter],
  )

  return (
    <section id="projects" className="section" aria-labelledby="proj-title">
      <div className="container">
        <SectionHeading
          id="proj-title"
          kicker="04 — Projects"
          title="Featured projects"
          subtitle="Three projects across RAG, agentic AI and full-stack development. Source code is on GitHub."
        />

        <div className="filters" role="group" aria-label="Filter projects by category">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter ${filter === f.id ? 'is-active' : ''}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
        </p>

        <div className="projects">
          {visible.map((p) => (
            <article key={p.id} className="card project">
              <ProjectPreview id={p.id} />
              <div className="project__body">
                <p className="kicker">{p.category}</p>
                <h3>{p.title}</h3>
                <p className="project__desc">{p.description}</p>
                <Badges items={p.tech} />
                <ul className="project__feat">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="project__actions">
                  <RepoButton project={p} />
                  <DemoButton project={p} />
                  <button type="button" className="btn btn--ghost btn--sm" onClick={() => setSelected(p)}>
                    <Info size={16} aria-hidden="true" /> Details
                    <span className="sr-only"> about {p.title}</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected ? <Modal project={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  )
}
