import { Check, Minus } from 'lucide-react'
import { careers as c } from '../content/pages'
import PageHero from '../components/ui/PageHero'
import SectionHead from '../components/ui/SectionHead'
import Reveal from '../components/ui/Reveal'
import Cta from '../components/ui/Cta'
import Icon from '../components/ui/Icon'

function Benefits({ items }) {
  return (
    <div className="grid grid--3 mt-lg" style={{ gap: '1rem' }}>
      {items.map((b) => (
        <div key={b.title} className="card" style={{ padding: '1.4rem' }}>
          <span className="icon-badge" style={{ width: 46, height: 46, borderRadius: 12 }}><Icon name={b.icon} width={22} height={22} /></span>
          <h3 style={{ fontSize: '1.08rem' }}>{b.title}</h3>
          <p style={{ fontSize: 'var(--fs-sm)' }}>{b.text}</p>
        </div>
      ))}
    </div>
  )
}

export default function Careers() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        text={c.hero.text}
        primary={c.hero.primary}
        secondary={c.hero.secondary}
        visual={
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'center' }}>
            <div className="media" style={{ aspectRatio: '3 / 4' }}><img src={c.hero.imageA} alt="A life sciences professional at an LSTN event" fetchPriority="high" /></div>
            <div className="media" style={{ aspectRatio: '3 / 4', marginTop: '3rem' }}><img src={c.hero.imageB} alt="A team in discussion at an LSTN roundtable" /></div>
          </div>
        }
      />

      {/* Why community-based recruitment */}
      <section className="section section--light" aria-labelledby="why-title">
        <div className="container">
          <SectionHead eyebrow={c.why.eyebrow} title={<span id="why-title">{c.why.title}</span>} text={c.why.text} layout="split" />
          <Reveal className="compare">
            <div className="compare__col compare__col--muted">
              <h3>Traditional Recruitment</h3>
              <ul>{c.why.traditional.map((t) => <li key={t}><Minus aria-hidden="true" />{t}</li>)}</ul>
            </div>
            <div className="compare__col compare__col--lstn">
              <h3><span style={{ color: 'var(--lime-500)' }}>LSTN</span> Community-Based Recruitment</h3>
              <ul>{c.why.community.map((t) => <li key={t}><Check aria-hidden="true" />{t}</li>)}</ul>
            </div>
          </Reveal>
          <p className="compare__note">{c.why.note}</p>
        </div>
      </section>

      {/* For professionals */}
      <section className="section section--white" aria-labelledby="pro-title">
        <div className="container">
          <div className="split">
            <Reveal className="media" style={{ aspectRatio: '4 / 5' }}>
              <img src={c.professionals.image} alt="Professionals networking at an LSTN event" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">{c.professionals.eyebrow}</p>
              <h2 id="pro-title">{c.professionals.title}</h2>
              <p className="lead">{c.professionals.text}</p>
              <Benefits items={c.professionals.benefits} />
              <div className="mt-lg"><Cta cta={c.professionals.cta} variant="dark" /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* For employers */}
      <section className="section section--pink" aria-labelledby="emp-title">
        <div className="container">
          <div className="split split--reverse">
            <Reveal className="media" style={{ aspectRatio: '4 / 5' }}>
              <img src={c.employers.image} alt="A hiring team meeting candidates at an LSTN event" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">{c.employers.eyebrow}</p>
              <h2 id="emp-title">{c.employers.title}</h2>
              <p className="lead">{c.employers.text}</p>
              <Benefits items={c.employers.benefits} />
              <div className="mt-lg"><Cta cta={c.employers.cta} variant="dark" /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Career community & resources */}
      <section className="section section--deep" aria-labelledby="res-title">
        <div className="container">
          <SectionHead eyebrow={c.resources.eyebrow} title={<span id="res-title">{c.resources.title}</span>} text={c.resources.text} layout="center" />
          <div className="grid grid--3">
            {c.resources.items.map((r, i) => (
              <Reveal key={r.title} className="card card--dark center" delay={i * 0.08} style={{ alignItems: 'center' }}>
                <span className="icon-badge icon-badge--lg"><Icon name={r.icon} /></span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="center mt-lg"><Cta cta={c.resources.cta} /></Reveal>
        </div>
      </section>

      {/* Final dual CTA */}
      <section className="section section--light section--tight" aria-labelledby="final-title">
        <div className="container">
          <Reveal><h2 id="final-title" className="center" style={{ maxWidth: '20ch', marginInline: 'auto', marginBottom: '2.5rem', fontSize: 'var(--fs-2xl)' }}>{c.finalCta.title}</h2></Reveal>
          <div className="dual-cta">
            <Reveal className="dual-cta__panel dual-cta__panel--lime">
              <h3>{c.finalCta.professionals.title}</h3>
              <p>{c.finalCta.professionals.text}</p>
              <Cta cta={c.finalCta.professionals.cta} variant="dark" />
            </Reveal>
            <Reveal className="dual-cta__panel dual-cta__panel--dark" delay={0.1}>
              <h3>{c.finalCta.employers.title}</h3>
              <p>{c.finalCta.employers.text}</p>
              <Cta cta={c.finalCta.employers.cta} variant="primary" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
