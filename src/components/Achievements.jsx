import { Award, BadgeCheck, Trophy } from 'lucide-react'
import { achievements, certifications } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'

export default function Achievements() {
  return (
    <section id="achievements" className="section" aria-labelledby="ach-title">
      <div className="container">
        <SectionHeading id="ach-title" kicker="06 — Recognition" title="Achievements & certifications" />
        <div className="ach">
          <div>
            <h3 className="ach__title">
              <Trophy size={18} aria-hidden="true" /> Achievements
            </h3>
            <ul className="ach__list">
              {achievements.map((a) => (
                <li key={a.title} className="card ach__item">
                  <Award size={18} aria-hidden="true" />
                  <div>
                    <p className="ach__name">{a.title}</p>
                    <p className="ach__detail">{a.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="ach__title">
              <BadgeCheck size={18} aria-hidden="true" /> Certifications
            </h3>
            <ul className="ach__list">
              {certifications.map((c) => (
                <li key={c.title} className="card ach__item">
                  <BadgeCheck size={18} aria-hidden="true" />
                  <div>
                    <p className="ach__name">{c.title}</p>
                    <p className="ach__detail">{c.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
