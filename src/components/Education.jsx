import { CalendarDays, GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section id="education" className="section section--alt" aria-labelledby="edu-title">
      <div className="container">
        <SectionHeading id="edu-title" kicker="05 — Education" title="Education" />
        <div className="timeline">
          {education.map((e) => (
            <div key={e.degree} className="timeline__item timeline__item--spaced">
              <span className="timeline__node" aria-hidden="true">
                <GraduationCap size={16} />
              </span>
              <article className="card exp">
                <header className="exp__head">
                  <div>
                    <h3>{e.degree}</h3>
                    <p className="exp__company">{e.school}</p>
                  </div>
                  {e.period ? (
                    <ul className="exp__meta">
                      <li>
                        <CalendarDays size={15} aria-hidden="true" /> {e.period}
                      </li>
                    </ul>
                  ) : null}
                </header>
                <p className="edu__cgpa">
                  {e.scoreLabel}: <strong>{e.score}</strong>
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
