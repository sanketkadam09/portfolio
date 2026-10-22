import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolioData.js'
import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__tag">{profile.footerTagline}</p>
        </div>
        <SocialLinks />
        <button
          type="button"
          className="btn btn--outline btn--sm"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={16} aria-hidden="true" /> Back to top
        </button>
      </div>
      <p className="footer__copy">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
