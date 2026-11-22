import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, CircleCheck, CircleAlert } from 'lucide-react'
import { contactForm, site } from '../../content/site'
import { contact as c } from '../../content/pages'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Contact enquiry form.
 * Submits multipart form data to `contactForm.endpoint` (see content/site.js).
 * Works with the bundled PHP mailer (/public/api/contact.php) or a hosted
 * service such as Formspree. Expects a JSON response: { ok: true } on success.
 */
export default function ContactForm({ topic, onTopicChange }) {
  const [values, setValues] = useState({ name: '', email: '', organization: '', topic: topic || 'general', message: '', consent: false, website: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const startedAt = useRef(Date.now())
  const statusRef = useRef(null)

  useEffect(() => { if (topic) setValues((v) => ({ ...v, topic })) }, [topic])

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [k]: val }))
    if (k === 'topic') onTopicChange?.(val)
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!values.name.trim()) er.name = 'Please enter your full name.'
    if (!EMAIL_RE.test(values.email.trim())) er.email = 'Please enter a valid email address.'
    if (!values.message.trim() || values.message.trim().length < 10) er.message = 'Please tell us a little more (at least 10 characters).'
    if (!values.consent) er.consent = 'Please confirm you agree to the Privacy Policy.'
    return er
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) {
      const first = Object.keys(er)[0]
      document.getElementById(`cf-${first}`)?.focus()
      return
    }
    setStatus('sending')
    try {
      const data = new FormData()
      Object.entries(values).forEach(([k, v]) => data.append(k, typeof v === 'boolean' ? (v ? 'yes' : 'no') : v))
      data.append('topicLabel', c.form.topics.find((t) => t.value === values.topic)?.label || values.topic)
      data.append('elapsed', String(Math.round((Date.now() - startedAt.current) / 1000)))
      const res = await fetch(contactForm.endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json.ok === false) throw new Error(json.error || 'Request failed')
      setStatus('success')
      setValues((v) => ({ ...v, name: '', email: '', organization: '', message: '', consent: false }))
    } catch {
      setStatus('error')
    }
    setTimeout(() => statusRef.current?.focus(), 50)
  }

  const fieldProps = (k) => ({
    id: `cf-${k}`,
    name: k,
    'aria-invalid': errors[k] ? 'true' : undefined,
    'aria-describedby': errors[k] ? `cf-${k}-err` : undefined,
  })
  const err = (k) => errors[k] ? <span className="field__error" id={`cf-${k}-err`}>{errors[k]}</span> : null

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-labelledby="form-title">
      <div>
        <h2 id="form-title" style={{ fontSize: 'var(--fs-2xl)' }}>{c.form.title}</h2>
        <p style={{ color: 'var(--ink-soft)' }}>{c.form.text}</p>
      </div>

      {status === 'success' && (
        <div className="form-status form-status--success" role="status" tabIndex={-1} ref={statusRef}>
          <CircleCheck aria-hidden="true" /> {c.form.success}
        </div>
      )}
      {status === 'error' && (
        <div className="form-status form-status--error" role="alert" tabIndex={-1} ref={statusRef}>
          <CircleAlert aria-hidden="true" />
          <span>{c.form.error} <a href={`mailto:${site.email}`}>{site.email}</a></span>
        </div>
      )}

      <div className="form__row">
        <div className="field">
          <label htmlFor="cf-name">Full Name<span className="req" aria-hidden="true">*</span></label>
          <input {...fieldProps('name')} type="text" autoComplete="name" placeholder="Your full name" required value={values.name} onChange={set('name')} />
          {err('name')}
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email<span className="req" aria-hidden="true">*</span></label>
          <input {...fieldProps('email')} type="email" autoComplete="email" placeholder="Your email address" required value={values.email} onChange={set('email')} />
          {err('email')}
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="cf-organization">Organization <span className="opt">(optional)</span></label>
          <input {...fieldProps('organization')} type="text" autoComplete="organization" placeholder="Company / Organization" value={values.organization} onChange={set('organization')} />
        </div>
        <div className="field">
          <label htmlFor="cf-topic">Enquiry Type<span className="req" aria-hidden="true">*</span></label>
          <select {...fieldProps('topic')} required value={values.topic} onChange={set('topic')}>
            {c.form.topics.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-message">Message<span className="req" aria-hidden="true">*</span></label>
        <textarea {...fieldProps('message')} placeholder="How can we help?" required value={values.message} onChange={set('message')} maxLength={5000} />
        {err('message')}
      </div>

      {/* Honeypot — hidden from people, catches spam bots */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
      </div>

      <div className="field">
        <label className="checkbox" htmlFor="cf-consent" style={{ fontWeight: 400 }}>
          <input {...fieldProps('consent')} type="checkbox" checked={values.consent} onChange={set('consent')} required />
          <span>I have read the <Link to="/privacy">Privacy Policy</Link> and agree to the processing of my information for this enquiry.<span className="req" aria-hidden="true">*</span></span>
        </label>
        {err('consent')}
      </div>

      <button type="submit" className="btn btn--dark" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : <>Send Message <Send aria-hidden="true" /></>}
      </button>
      <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-soft)', margin: 0 }}><span aria-hidden="true">*</span> Required fields</p>
    </form>
  )
}
