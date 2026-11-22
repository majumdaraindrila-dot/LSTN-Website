import { MapPin } from 'lucide-react'
import { home as c } from '../content/pages'
import { stats } from '../content/site'
import { testimonials, networkOrganizations, pastSponsors, pillars, verticals } from '../content/shared'
import Cta from '../components/ui/Cta'
import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import StatCounter from '../components/ui/StatCounter'
import Icon from '../components/ui/Icon'
import { LogoWall, LogoMarquee } from '../components/ui/LogoWall'
import { QuoteCard } from '../components/ui/Testimonials'
import CtaBand from '../components/ui/CtaBand'
import ConnectionLines from '../components/graphics/ConnectionLines'
import EcosystemGraphic from '../components/graphics/EcosystemGraphic'

/** Renders `text`, wrapping the first occurrence of `word` in <em> (lime). */
function Highlight({ text, word }) {
  if (!word || !text.includes(word)) return text
  const [a, ...b] = text.split(word)
  return <>{a}<em>{word}</em>{b.join(word)}</>
}

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <header className="hero">
        <div className="hero__media" aria-hidden="true">
          {c.hero.video ? (
            <video src={c.hero.video} poster={c.hero.image} autoPlay muted loop playsInline />
          ) : (
            <img src={c.hero.image} alt="" fetchPriority="high" />
          )}
        </div>
        <ConnectionLines className="hero__lines" animated />
        <div className="container">
          <div className="hero__content">
            <p className="eyebrow">{c.hero.eyebrow}</p>
            <h1><Highlight text={c.hero.title} word={c.hero.highlight} /></h1>
            <p className="lead">{c.hero.text}</p>
            <div className="cluster">
              <Cta cta={c.hero.primary} />
              <Cta cta={c.hero.secondary} variant="secondary" />
            </div>
          </div>
          <div className="hero__foot">
            <ul className="hero__tags" aria-label="Sectors">
              {verticals.map((v) => <li key={v} className="tag">{v}</li>)}
            </ul>
            <a href="#proof" className="scroll-cue"><span aria-hidden="true" />Scroll</a>
          </div>
        </div>
      </header>

      {/* 2. TRUST / NETWORK PROOF */}
      <section id="proof" className="section section--white section--tight" aria-labelledby="proof-title">
        <div className="container">
          <Reveal>
            <h2 id="proof-title" style={{ fontSize: 'var(--fs-2xl)', maxWidth: '22ch' }}>{c.proof.title}</h2>
          </Reveal>
          <div className="stat-row mt-lg">
            <StatCounter {...stats.followers} />
            <StatCounter {...stats.participants} />
            <StatCounter {...stats.organizations} />
          </div>
          <div className="mt-xl">
            <LogoMarquee logos={networkOrganizations} />
          </div>
        </div>
      </section>

      {/* 3. WHY LSTN EXISTS */}
      <section className="section section--deep" aria-labelledby="why-title" style={{ overflow: 'hidden' }}>
        <img src="/images/textures/protein-strand.webp" alt="" aria-hidden="true" loading="lazy" style={{ position: 'absolute', right: '-10%', top: '-4%', width: 'min(900px, 80%)', opacity: 0.18, zIndex: -1, pointerEvents: 'none' }} />
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <Reveal className="sticky-col">
              <p className="eyebrow">{c.why.eyebrow}</p>
              <h2 id="why-title">{c.why.title}</h2>
              <p className="lead">{c.why.text}</p>
              <div className="mt-lg" style={{ paddingTop: '1.75rem', borderTop: '1px solid var(--line-on-dark)' }}>
                <h3 style={{ color: 'var(--lime-500)', fontSize: 'var(--fs-2xl)' }}>{c.why.infraTitle}</h3>
                <p className="lead">{c.why.infraText}</p>
                <div className="mt-lg"><Cta cta={c.why.cta} variant="secondary" /></div>
              </div>
            </Reveal>
            <EcosystemGraphic />
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="section section--light" aria-labelledby="wwd-title">
        <div className="container">
          <SectionHead eyebrow={c.whatWeDo.eyebrow} title={<span id="wwd-title">{c.whatWeDo.title}</span>} text={c.whatWeDo.text} layout="split" />
          <div className="grid grid--3 pillar-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.title} className="card card--hover pillar" delay={(i % 3) * 0.08}>
                <span className="pillar__num" aria-hidden="true" />
                <span className="icon-badge"><Icon name={p.icon} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.cta && <Cta cta={p.cta} variant="link" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EVENTS */}
      <section className="section section--dark" aria-labelledby="events-title" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="split split--top">
            <div>
              <Reveal>
                <p className="eyebrow">{c.events.eyebrow}</p>
                <h2 id="events-title">{c.events.title}</h2>
                {c.events.text.map((t) => <p key={t} className="lead">{t}</p>)}
              </Reveal>
              <Reveal className="mt-lg" delay={0.1}>
                <h3 className="eyebrow" style={{ marginBottom: '0.5rem' }}>{c.events.formatTitle}</h3>
                <ul className="feature-list">
                  {c.events.format.map((f) => (
                    <li key={f.title}>
                      <span className="feature-list__dot" aria-hidden="true" style={{ background: 'var(--lime-500)', boxShadow: '0 0 0 4px rgba(150,242,0,.15)' }} />
                      <div>
                        <h4 style={{ margin: '0 0 .2rem', fontSize: '1.15rem' }}>{f.title}</h4>
                        <p>{f.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-lg"><Cta cta={c.events.cta} /></div>
              </Reveal>
            </div>
            <Reveal className="collage sticky-col" delay={0.15}>
              <div className="media"><img src={c.events.images[0]} alt="Participants at an LSTN speed-networking event in Berlin" loading="lazy" /></div>
              <div className="media"><img src={c.events.images[1]} alt="An LSTN expert-led roundtable discussion" loading="lazy" /></div>
              <div className="media media--duotone"><img src={c.events.images[2]} alt="Two participants in a 1:1 conversation" loading="lazy" /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. REAL CONNECTIONS. REAL OUTCOMES. */}
      <section className="section section--pink" aria-labelledby="outcomes-title">
        <div className="container">
          <SectionHead eyebrow={c.outcomes.eyebrow} title={<span id="outcomes-title">{c.outcomes.title}</span>} text={c.outcomes.text} layout="split" />
          <div className="grid grid--3">
            {[testimonials.dennis, testimonials.julian, testimonials.rizgar].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}><QuoteCard t={t} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE NETWORK */}
      <section className="section section--white" aria-labelledby="network-title">
        <div className="container">
          <SectionHead eyebrow={c.network.eyebrow} title={<span id="network-title">{c.network.title}</span>} layout="split" text={c.network.text}>
            <ul className="cluster" style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0' }}>
              {verticals.map((v) => <li key={v} className="tag">{v}</li>)}
            </ul>
          </SectionHead>
          <Reveal><LogoWall title={c.network.orgsTitle} logos={networkOrganizations} /></Reveal>
          <Reveal className="mt-xl"><LogoWall title={c.network.sponsorsTitle} logos={pastSponsors} /></Reveal>
        </div>
      </section>

      {/* 8. COMMUNITY */}
      <section className="section section--deep" aria-labelledby="community-title">
        <div className="container">
          <SectionHead eyebrow={c.community.eyebrow} title={<span id="community-title">{c.community.title}</span>} text={[c.community.lead, c.community.text]} layout="split">
            <div style={{ marginTop: '1rem' }}><Cta cta={c.community.more} variant="link" /></div>
          </SectionHead>
          <div className="grid grid--3">
            {c.community.cards.map((card, i) => (
              <Reveal key={card.title} className="card card--dark card--hover" delay={i * 0.08}>
                <span className="icon-badge"><Icon name={i === 0 ? 'globe' : 'pin'} /></span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                {card.places && (
                  <p style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--lime-300)' }}>
                    <MapPin size={14} aria-hidden="true" /> {card.places}
                  </p>
                )}
                <div style={{ marginTop: 'auto', paddingTop: '.5rem' }}><Cta cta={card.cta} variant={i === 0 ? 'primary' : 'secondary'} size="sm" /></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CAREERS */}
      <section className="section section--light" aria-labelledby="careers-title">
        <div className="container">
          <div className="split">
            <Reveal className="media" style={{ aspectRatio: '5 / 4' }}>
              <img src="/images/photos/attendee-close-up.webp" alt="An LSTN community member listening during an event" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">{c.careers.eyebrow}</p>
              <h2 id="careers-title">{c.careers.title}</h2>
              <p className="lead" style={{ color: 'var(--ink)', fontWeight: 500 }}>{c.careers.lead}</p>
              <p className="lead">{c.careers.text}</p>
              <div className="grid grid--2 mt-lg">
                <div className="card card--pink">
                  <h3 style={{ fontSize: '1.15rem' }}>{c.careers.talent.title}</h3>
                  <Cta cta={c.careers.talent.cta} variant="dark" size="sm" />
                </div>
                <div className="card card--pink">
                  <h3 style={{ fontSize: '1.15rem' }}>{c.careers.employers.title}</h3>
                  <Cta cta={c.careers.employers.cta} variant="outline-dark" size="sm" />
                </div>
              </div>
              <div className="mt-lg"><Cta cta={c.careers.more} variant="link" /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10. PARTNERS / SPONSORS */}
      <section className="section section--dark" aria-labelledby="partners-title" style={{ overflow: 'hidden' }}>
        <img src="/images/textures/protein-ring.webp" alt="" aria-hidden="true" loading="lazy" style={{ position: 'absolute', right: '-12%', top: '4%', width: 'min(640px, 55%)', opacity: 0.12, zIndex: -1, pointerEvents: 'none' }} />
        <div className="container">
          <SectionHead eyebrow={c.partners.eyebrow} title={<span id="partners-title">{c.partners.title}</span>} text={c.partners.text} layout="split" />
          <div className="grid grid--4">
            {c.partners.benefits.map((b, i) => (
              <Reveal key={b.title} className="card card--dark" delay={i * 0.06}>
                <span className="icon-badge"><Icon name={b.icon} /></span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="cluster mt-lg">
            <Cta cta={c.partners.primary} />
            <Cta cta={c.partners.secondary} variant="secondary" />
          </Reveal>
          <div className="mt-xl" style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '1.75rem 0' }}>
            <LogoMarquee logos={pastSponsors} label="Past event sponsors" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CtaBand title={c.finalCta.title} primary={c.finalCta.primary} secondary={c.finalCta.secondary} />
    </>
  )
}
