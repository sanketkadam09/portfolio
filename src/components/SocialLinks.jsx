import { Code2, Github, Linkedin } from 'lucide-react'
import { social } from '../data/portfolioData.js'

const items = [
  { key: 'github', label: 'GitHub', href: social.github, Icon: Github },
  { key: 'linkedin', label: 'LinkedIn', href: social.linkedin, Icon: Linkedin },
  { key: 'leetcode', label: 'LeetCode', href: social.leetcode, Icon: Code2 },
]

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social ${className}`}>
      {items.map(({ key, label, href, Icon }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label={`${label} profile (opens in a new tab)`}
            title={label}
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
