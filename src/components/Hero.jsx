import { ArrowRight, Download, Mail } from 'lucide-react'
import { hero, profile } from '../data/portfolioData.js'
import SocialLinks from './SocialLinks.jsx'

function scrollTo(e, id) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--a" />
        <span className="hero__orb hero__orb--b" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" /> {hero.label}
          </p>
          <h1 id="hero-title" className="hero__title">
            Hi, I&apos;m <span className="gradient-text">Sanket Kadam.</span>
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <p className="hero__text">{hero.text}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary" onClick={(e) => scrollTo(e, 'projects')}>
              Explore My Projects <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href={profile.resumeUrl} className="btn btn--outline" download="Sanket_Kadam_Resume.pdf">
              <Download size={18} aria-hidden="true" /> Download Resume
            </a>
            <a href="#contact" className="btn btn--ghost" onClick={(e) => scrollTo(e, 'contact')}>
              <Mail size={18} aria-hidden="true" /> Get In Touch
            </a>
          </div>

          <SocialLinks className="hero__social" />
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="editor">
            <div className="editor__bar">
              <span className="dot dot--r" />
              <span className="dot dot--y" />
              <span className="dot dot--g" />
              <span className="editor__file">rag_pipeline.py</span>
            </div>
            <pre className="editor__code">
              <code>
                <span className="c-k">@app</span>
                <span className="c-p">.route(</span>
                <span className="c-s">&quot;/api/ask&quot;</span>
                <span className="c-p">, methods=[</span>
                <span className="c-s">&quot;POST&quot;</span>
                <span className="c-p">])</span>
                {'\n'}
                <span className="c-k">@jwt_required</span>
                <span className="c-p">()</span>
                {'\n'}
                <span className="c-k">def </span>
                <span className="c-f">ask_document</span>
                <span className="c-p">():</span>
                {'\n'}
                {'    '}
                <span className="c-v">question</span>
                <span className="c-p"> = request.json[</span>
                <span className="c-s">&quot;question&quot;</span>
                <span className="c-p">]</span>
                {'\n'}
                {'    '}
                <span className="c-v">cached</span>
                <span className="c-p"> = redis.get(cache_key(question))</span>
                {'\n'}
                {'    '}
                <span className="c-k">if </span>
                <span className="c-p">cached:</span>
                {'\n'}
                {'        '}
                <span className="c-k">return </span>
                <span className="c-p">jsonify(cached)</span>
                {'\n\n'}
                {'    '}
                <span className="c-v">vec</span>
                <span className="c-p"> = embed(question)</span>
                {'\n'}
                {'    '}
                <span className="c-v">chunks</span>
                <span className="c-p"> = hybrid_search(vec, question)</span>
                {'\n'}
                {'    '}
                <span className="c-v">answer</span>
                <span className="c-p"> = llm.generate(question, chunks)</span>
                {'\n'}
                {'    '}
                <span className="c-k">return </span>
                <span className="c-p">jsonify(answer)</span>
                <span className="caret" />
              </code>
            </pre>
          </div>

          <div className="chip chip--a">Flask · REST API</div>
          <div className="chip chip--b">RAG · pgvector</div>
          <div className="chip chip--c">LangGraph</div>
        </div>
      </div>
    </section>
  )
}
