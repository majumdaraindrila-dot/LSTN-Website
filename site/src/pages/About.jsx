import { Target, Telescope } from 'lucide-react'
import { about as c } from '../content/pages'
import { founders, team, pillars } from '../content/shared'
import PageHero from '../components/ui/PageHero'
import SectionHead from '../components/ui/SectionHead'
import Reveal from '../components/ui/Reveal'
import Cta from '../components/ui/Cta'
import Icon, { LinkedInIcon } from '../components/ui/Icon'
import CtaBand from '../components/ui/CtaBand'
import EcosystemGraphic from '../components/graphics/EcosystemGraphic'
import NetworkGlobe from '../components/graphics/NetworkGlobe'

const initials = (n) => n.split(' ').map((p) => p[0]).slice(0, 2).join('')

export default function About() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        text={c.hero.text}
        visual={
          <>
            <div className="media"><img src={c.hero.image} alt="LSTN community members in conversation at a roundtable" fetchPriority="high" /></div>
            <img className="page-hero__texture" src="/images/textures/protein-coil.webp" alt="" aria-hidden="true" style={{ width: '120%', left: '-30%', bottom: '-25%' }} />
          </>
        }
      />

      {/* Mission & Vision */}
      <section className="section section--light" aria-label="Mission and vision">
        <div className="container">
          <div className="grid grid--2">
            <Reveal className="mv-panel mv-panel--dark">
              <span className="icon-badge icon-badge--lg"><Target aria-hidden="true" strokeWidth={1.6} /></span>
              <h2>{c.mission.title}</h2>
              <p>{c.mission.text}</p>
            </Reveal>
            <Reveal className="mv-panel mv-panel--pink" delay={0.1}>
              <span className="icon-badge icon-badge--lg"><Telescope aria-hidden="true" strokeWidth={1.6} /></span>
              <h2>{c.vision.title}</h2>
              <p>{c.vision.text}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why we started */}
      <section className="section section--white section--flush-top" aria-labelledby="story-title" style={{ paddingTop: 'calc(var(--section-y) * .3)' }}>
        <div className="container">
          <div className="split">
            <Reveal className="media media--duotone" style={{ aspectRatio: '4 / 3' }}>
              <img src={c.story.image} alt="Two professionals in a focused 1:1 conversation at an LSTN event" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">{c.story.eyebrow}</p>
              <h2 id="story-title">{c.story.title}</h2>
              {c.story.text.map((t) => <p key={t} className="lead">{t}</p>)}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Community as Infrastructure */}
      <section className="section section--dark" aria-labelledby="infra-title" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="split">
            <Reveal>
              <p className="eyebrow">{c.infrastructure.eyebrow}</p>
              <h2 id="infra-title">{c.infrastructure.title}</h2>
              {c.infrastructure.text.map((t) => <p key={t} className="lead">{t}</p>)}
              <p className="lead" style={{ color: 'var(--lime-500)', fontFamily: 'var(--font-display)', fontWeight: 500 }}>{c.infrastructure.closing}</p>
              <div className="mt-lg"><Cta cta={c.infrastructure.cta} /></div>
            </Reveal>
            <Reveal delay={0.1}><NetworkGlobe /></Reveal>
          </div>
        </div>
      </section>

      {/* Ecosystem model */}
      <section id="ecosystem" className="section section--deep" aria-labelledby="eco-title">
        <div className="container">
          <SectionHead eyebrow={c.ecosystem.eyebrow} title={<span id="eco-title">{c.ecosystem.title}</span>} text={c.ecosystem.text} layout="center" />
          <div className="container--narrow" style={{ marginInline: 'auto', padding: 0 }}>
            <EcosystemGraphic />
          </div>
          <Reveal className="mt-xl center">
            <h3 style={{ fontSize: 'var(--fs-2xl)', color: 'var(--lime-500)' }}>Community as Infrastructure</h3>
            <p className="lead" style={{ maxWidth: 620, marginInline: 'auto' }}>Facilitating connection, convergence, innovation, and growth in life sciences.</p>
          </Reveal>
          <div className="grid grid--3 mt-lg pillar-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.title} className="card card--dark pillar" delay={(i % 3) * 0.08}>
                <span className="pillar__num" aria-hidden="true" />
                <span className="icon-badge"><Icon name={p.icon} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founders & team */}
      <section className="section section--light" aria-labelledby="team-title">
        <div className="container">
          <SectionHead eyebrow={c.team.eyebrow} title={<span id="team-title">{c.team.title}</span>} text={c.team.text} layout="split" />
          <div className="grid grid--2">
            {founders.map((f, i) => (
              <Reveal key={f.name} className="person" delay={i * 0.1}>
                <div className="person__photo"><img src={f.image} alt={`Portrait of ${f.name}`} loading="lazy" /></div>
                <div>
                  <h3>{f.name}</h3>
                  <p className="person__role">{f.role}</p>
                  <p>{f.bio}</p>
                  {f.linkedin ? (
                    <a className="link-arrow" href={f.linkedin} target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon width={16} height={16} /> LinkedIn profile<span className="visually-hidden"> of {f.name} (opens in a new tab)</span>
                    </a>
                  ) : (
                    <p className="person__todo">[Placeholder: LinkedIn profile URL]</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-xl">
            <h3 className="logo-wall__title">{c.team.volunteersTitle}</h3>
          </Reveal>
          <div className="grid grid--4">
            {team.map((m, i) => (
              <Reveal key={i} className="member" delay={i * 0.05}>
                <div className={`member__avatar ${m.placeholder ? 'member__avatar--ph' : ''}`}>
                  {m.image ? <img src={m.image} alt={`Portrait of ${m.name}`} loading="lazy" /> : m.placeholder ? 'PHOTO' : initials(m.name)}
                </div>
                <h3>{m.placeholder ? `[${m.name}]` : m.name}</h3>
                <p>{m.role}</p>
                {m.linkedin && <a className="link-arrow" style={{ fontSize: '.9rem', marginTop: '.4rem' }} href={m.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={c.finalCta.title} primary={c.finalCta.primary} />
    </>
  )
}
