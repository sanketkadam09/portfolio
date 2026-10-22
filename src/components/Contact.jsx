import { useState } from 'react'
import { Code2, Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import { contact, profile, social } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const empty = { name: '', email: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (!v.subject.trim()) e.subject = 'Please enter a subject.'
  if (!v.message.trim()) e.message = 'Please enter a message.'
  return e
}

const { serviceId, templateId, publicKey } = contact.emailjs
const emailjsConfigured = Boolean(serviceId && templateId && publicKey)

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', text: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus({ type: 'error', text: 'Please fix the highlighted fields.' })
      const firstKey = Object.keys(found)[0]
      document.getElementById(`contact-${firstKey}`)?.focus()
      return
    }

    if (emailjsConfigured) {
      setStatus({ type: 'pending', text: 'Sending…' })
      try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: values.name,
              from_email: values.email,
              subject: values.subject,
              message: values.message,
              to_email: profile.email,
            },
          }),
        })
        if (!res.ok) throw new Error('Request failed')
        setStatus({ type: 'success', text: 'Message sent. Thank you, I will get back to you soon.' })
        setValues(empty)
      } catch (err) {
        setStatus({
          type: 'error',
          text: `The message could not be sent. Please email me directly at ${profile.email}.`,
        })
      }
      return
    }

    // mailto fallback: opens the visitor's email app. We cannot know whether they send it.
    const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setStatus({
      type: 'info',
      text: 'Your email app should open with the message prepared. Press send there to deliver it. Nothing has been sent yet.',
    })
  }

  const field = (name, label, props = {}) => (
    <div className={`field ${errors[name] ? 'field--error' : ''}`}>
      <label htmlFor={`contact-${name}`}>{label}</label>
      {name === 'message' ? (
        <textarea
          id={`contact-${name}`}
          name={name}
          rows={5}
          value={values[name]}
          onChange={onChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `err-${name}` : undefined}
          required
        />
      ) : (
        <input
          id={`contact-${name}`}
          name={name}
          value={values[name]}
          onChange={onChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `err-${name}` : undefined}
          required
          {...props}
        />
      )}
      {errors[name] ? (
        <p className="field__error" id={`err-${name}`}>
          {errors[name]}
        </p>
      ) : null}
    </div>
  )

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title" kicker="08 — Contact" title={contact.heading} subtitle={contact.text} />
        <div className="contact">
          <div className="contact__info">
            <ul className="contact__list">
              <li>
                <Mail size={18} aria-hidden="true" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href={profile.phoneHref}>{profile.phone}</a>
              </li>
              <li>
                <Linkedin size={18} aria-hidden="true" />
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn profile<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <Github size={18} aria-hidden="true" />
                <a href={social.github} target="_blank" rel="noopener noreferrer">
                  GitHub profile<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <Code2 size={18} aria-hidden="true" />
                <a href={social.leetcode} target="_blank" rel="noopener noreferrer">
                  LeetCode profile<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>

          <form className="card form" onSubmit={onSubmit} noValidate>
            <div className="form__row">
              {field('name', 'Name', { type: 'text', autoComplete: 'name' })}
              {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
            </div>
            {field('subject', 'Subject', { type: 'text' })}
            {field('message', 'Message')}
            <button type="submit" className="btn btn--primary" disabled={status.type === 'pending'}>
              <Send size={18} aria-hidden="true" /> {emailjsConfigured ? 'Send message' : 'Compose email'}
            </button>
            <p className={`form__status form__status--${status.type}`} role="status" aria-live="polite">
              {status.text}
            </p>
            {!emailjsConfigured ? (
              <p className="form__hint">This form opens your email app to send the message.</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
