import { ArrowUpRight, Code2, Github } from 'lucide-react'
import { developerProfiles, social } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'

// Profile-link cards only: no statistics are shown, so nothing here depends on external APIs.
const cards = [
  {
    key: 'github',
    title: 'GitHub',
    handle: 'github.com/sanketkadam09',
    text: 'Source code for my projects, including SmartDoc AI Engine, Clarity Desk and FindMySpace.',
    href: social.github,
    Icon: Github,
  },
  {
    key: 'leetcode',
    title: 'LeetCode',
    handle: 'leetcode.com/u/kadamsanket09',
    text: 'Data structures and algorithms practice.',
    href: social.leetcode,
    Icon: Code2,
  },
]

export default function DeveloperProfiles() {
  return (
    <section id="profiles" className="section section--alt" aria-labelledby="prof-title">
      <div className="container">
        <SectionHeading
          id="prof-title"
          kicker="07 — Practice"
          title="GitHub & LeetCode"
          subtitle={developerProfiles.intro}
        />
        <div className="profiles">
          {cards.map(({ key, title, handle, text, href, Icon }) => (
            <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="card profile-card">
              <span className="highlight__icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <div className="profile-card__body">
                <h3>{title}</h3>
                <p className="profile-card__handle">{handle}</p>
                <p>{text}</p>
              </div>
              <ArrowUpRight size={20} className="profile-card__arrow" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
