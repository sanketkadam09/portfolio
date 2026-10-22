import { skillGroups } from '../data/portfolioData.js'
import { iconMap } from './icons.js'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          kicker="02 — Skills"
          title="Technical skills"
          subtitle="Technologies I have used in my internship and personal projects."
        />
        <div className="skills">
          {skillGroups.map((g) => {
            const Icon = iconMap[g.icon]
            return (
              <article key={g.title} className="card skill-card">
                <header className="skill-card__head">
                  <span className="highlight__icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <h3>{g.title}</h3>
                </header>
                <ul className="tags">
                  {g.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
