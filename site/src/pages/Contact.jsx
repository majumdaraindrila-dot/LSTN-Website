import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Newspaper, ArrowUpRight } from 'lucide-react'
import { contact as c } from '../content/pages'
import { links, site } from '../content/site'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import Icon, { LinkedInIcon, CircleIcon } from '../components/ui/Icon'
import ContactForm from '../components/sections/ContactForm'

const TOPICS = ['general', 'partnerships', 'community', 'events', 'careers']

export default function Contact() {
  const [params] = useSearchParams()
  const [topic, setTopic] = useState(null)

  // Preselect topic from ?topic=… (after mount, so pre-rendered HTML matches)
  useEffect(() => {
    const t = params.get('topic')
    if (t && TOPICS.includes(t)) setTopic(t)
  }, [params])

  const pick = (t) => {
    setTopic(t)
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => document.getElementById('cf-name')?.focus({ preventScroll: true }), 500)
  }

  const socials = [
    { icon: <Mail aria-hidden="true" />, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'Life Sciences Tech Network', href: links.linkedin, ext: true },
    { icon: <CircleIcon />, label: 'Global community', value: 'LSTN Circle', href: links.circle, ext: true },
    { icon: <Newspaper aria-hidden="true" />, label: 'Newsletter', value: 'Join our Newsletter', href: links.newsletter, ext: true },
  ]

  return (
    <>
      <PageHero {...c.hero} />

      <section className="section section--light section--tight" aria-labelledby="types-title">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: '2rem' }}>
            <h2 id="types-title" style={{ fontSize: 'var(--fs-2xl)' }}>{c.types.title}</h2>
            <p className="lead">{c.types.text}</p>
          </Reveal>
          <div className="grid grid--4">
            {c.types.cards.map((card, i) => (
              <Reveal key={card.topic} delay={i * 0.05}>
                <button type="button" className="enquiry-card" aria-pressed={topic === card.topic} onClick={() => pick(card.topic)}>
                  <span className="icon-badge"><Icon name={card.icon} /></span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="section section--light section--flush-top" aria-label="Contact form and details">
        <div className="container">
          <div className="contact-layout">
            <ContactForm topic={topic} onTopicChange={setTopic} />
            <aside className="contact-aside" aria-labelledby="social-title">
              <div style={{ marginBottom: '0.5rem' }}>
                <h2 id="social-title" style={{ fontSize: 'var(--fs-xl)' }}>{c.social.title}</h2>
                <p style={{ color: 'var(--ink-soft)' }}>{c.social.text}</p>
              </div>
              {socials.map((s) => (
                <a key={s.label} className="contact-line" href={s.href} {...(s.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <span className="icon-badge">{s.icon}</span>
                  <span style={{ flex: 1 }}><small>{s.label}</small><strong>{s.value}</strong></span>
                  {s.ext && <ArrowUpRight size={18} aria-hidden="true" />}
                  {s.ext && <span className="visually-hidden"> (opens in a new tab)</span>}
                </a>
              ))}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
