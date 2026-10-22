import { Briefcase, CalendarDays, MapPin } from 'lucide-react'
import { experience } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="exp-title">
      <div className="container">
        <SectionHeading id="exp-title" kicker="03 — Experience" title="Internship experience" />
        <div className="timeline">
          <div className="timeline__item">
            <span className="timeline__node" aria-hidden="true">
              <Briefcase size={16} />
            </span>
            <article className="card exp">
              <header className="exp__head">
                <div>
                  <h3>{experience.role}</h3>
                  <p className="exp__company">{experience.company}</p>
                </div>
                <ul className="exp__meta">
                  <li>
                    <CalendarDays size={15} aria-hidden="true" /> {experience.period}
                  </li>
                  <li>
                    <MapPin size={15} aria-hidden="true" /> {experience.location}
                  </li>
                </ul>
              </header>
              <ul className="checklist">
                {experience.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
