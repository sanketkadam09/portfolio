import { about } from '../data/portfolioData.js'
import { iconMap } from './icons.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" kicker="01 — About" title="Computer Science graduate, backend and AI focused" />
        <div className="about">
          <div className="about__text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="about__cards">
            {about.highlights.map((h) => {
              const Icon = iconMap[h.icon]
              return (
                <li key={h.title} className="card highlight">
                  <span className="highlight__icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3>{h.title}</h3>
                    <p>{h.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
