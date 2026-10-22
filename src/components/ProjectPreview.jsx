import { ArrowRight, FileText, MapPin, Star, Upload } from 'lucide-react'

// CSS-built illustrative previews. These are NOT screenshots of the real applications.

function SmartDocPreview() {
  return (
    <div className="pv pv--smartdoc">
      <div className="pv__col">
        <p className="pv__label">Upload</p>
        <div className="pv__drop">
          <Upload size={18} aria-hidden="true" />
          <span>PDF · DOCX · Image</span>
        </div>
        <div className="pv__file">
          <FileText size={14} aria-hidden="true" /> report.pdf
        </div>
      </div>
      <div className="pv__col">
        <p className="pv__label">Retrieved context</p>
        <div className="pv__chunk pv__chunk--hl">
          <i /> <i /> <i className="short" />
        </div>
        <div className="pv__chunk">
          <i /> <i className="short" />
        </div>
      </div>
      <div className="pv__col">
        <p className="pv__label">AI answer</p>
        <div className="pv__answer">
          <i /> <i /> <i /> <i className="short" />
        </div>
      </div>
    </div>
  )
}

function ClarityPreview() {
  const steps = ['Requirements', 'Planning', 'Drafting', 'Review', 'Document Generation']
  return (
    <div className="pv pv--clarity">
      <ol className="flow">
        {steps.map((s, i) => (
          <li key={s} className="flow__step">
            <span className="flow__node">{i + 1}</span>
            <span className="flow__name">{s}</span>
            {i < steps.length - 1 ? <ArrowRight size={14} className="flow__arrow" aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>
      <p className="pv__note">Missing budget, timeline or team size? The agent asks you instead of guessing.</p>
    </div>
  )
}

function FindMySpacePreview() {
  return (
    <div className="pv pv--space">
      <div className="space__list">
        {['Room listing', 'Room listing', 'Room listing'].map((t, i) => (
          <div key={i} className="space__item">
            <span className="space__thumb" />
            <div>
              <i />
              <i className="short" />
              <span className="space__stars" aria-hidden="true">
                <Star size={10} /> <Star size={10} /> <Star size={10} />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="space__map" aria-hidden="true">
        <span className="pin pin--1">
          <MapPin size={18} />
        </span>
        <span className="pin pin--2">
          <MapPin size={18} />
        </span>
        <span className="pin pin--3">
          <MapPin size={18} />
        </span>
      </div>
    </div>
  )
}

export default function ProjectPreview({ id }) {
  return (
    <figure className="preview" aria-label="Illustrative visual preview, not a screenshot">
      {id === 'smartdoc' ? <SmartDocPreview /> : null}
      {id === 'clarity' ? <ClarityPreview /> : null}
      {id === 'findmyspace' ? <FindMySpacePreview /> : null}
      <figcaption className="preview__cap">Illustrative visual preview — not a live application</figcaption>
    </figure>
  )
}
