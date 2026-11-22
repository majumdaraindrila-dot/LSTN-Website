import { MapPin } from 'lucide-react'
import { community as c } from '../content/pages'
import PageHero from '../components/ui/PageHero'
import SectionHead from '../components/ui/SectionHead'
import Reveal from '../components/ui/Reveal'
import Cta from '../components/ui/Cta'
import Icon from '../components/ui/Icon'
import Placeholder from '../components/ui/Placeholder'
import CtaBand from '../components/ui/CtaBand'
import NetworkGlobe from '../components/graphics/NetworkGlobe'

export default function Community() {
  return (
    <>
      <PageHero variant="image" {...c.hero} />

      {/* Global community */}
      <section className="section section--deep" aria-labelledby="global-title">
        <div className="container">
          <div className="split">
            <Reveal><NetworkGlobe /></Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">{c.global.eyebrow}</p>
              <h2 id="global-title">{c.global.title}</h2>
              <p className="lead">{c.global.text}</p>
              <div className="mt-lg"><Cta cta={c.global.cta} /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Online platform */}
      <section className="section section--dark" aria-labelledby="platform-title" style={{ overflow: 'hidden' }}>
        <div className="container">
          <SectionHead eyebrow={c.platform.eyebrow} title={<span id="platform-title">{c.platform.title}</span>} text={c.platform.text} layout="split" />
          <div className="split" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
            <Reveal className="laptop">
              <div className="laptop__screen">
                {c.platform.screenshot ? (
                  <img src={c.platform.screenshot} alt="The LSTN community on the Circle platform" loading="lazy" />
                ) : (
                  <Placeholder label="Authentic screenshot of the LSTN Circle community" hint="Set community.platform.screenshot in content/pages.js" />
                )}
              </div>
              <div className="laptop__base" aria-hidden="true" />
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="feature-list">
                {c.platform.features.map((f) => (
                  <li key={f.title}>
                    <span className="feature-list__dot" aria-hidden="true" />
                    <div><h3>{f.title}</h3><p>{f.text}</p></div>
                  </li>
                ))}
              </ul>
              <div className="mt-lg"><Cta cta={c.platform.cta} /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Regional hubs */}
      <section className="section section--light" aria-labelledby="hubs-title">
        <div className="container">
          <SectionHead eyebrow={c.hubs.eyebrow} title={<span id="hubs-title">{c.hubs.title}</span>} text={c.hubs.text} layout="split" />
          <div className="grid grid--2">
            {c.hubs.cards.map((h, i) => (
              <Reveal key={h.title} className="hub-card" delay={i * 0.1}>
                <img className="hub-card__art" src={i === 0 ? '/images/textures/protein-cluster.webp' : '/images/textures/protein-ring.webp'} alt="" aria-hidden="true" loading="lazy" />
                <span className="city-card__country">Regional hub</span>
                <h3>{h.title}</h3>
                <ul className="hub-card__places" aria-label="Locations">
                  {h.places.map((p) => <li key={p} className="tag"><MapPin aria-hidden="true" />{p}</li>)}
                </ul>
                <p>{h.text}</p>
                <Cta cta={h.cta} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Networking & collaboration */}
      <section className="section section--deep" aria-labelledby="collab-title">
        <div className="container">
          <SectionHead eyebrow={c.collaboration.eyebrow} title={<span id="collab-title">{c.collaboration.title}</span>} text={c.collaboration.text} layout="split" />
          <Reveal as="ol" className="steps-line" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {c.collaboration.steps.map((s) => (
              <li key={s.title} className="steps-line__item"><h3>{s.title}</h3><p>{s.text}</p></li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section--white" aria-labelledby="benefits-title">
        <div className="container">
          <SectionHead eyebrow={c.benefits.eyebrow} title={<span id="benefits-title">{c.benefits.title}</span>} layout="center" />
          <div className="grid grid--4">
            {c.benefits.items.map((b, i) => (
              <Reveal key={b.title} className="card card--hover" delay={i * 0.06}>
                <span className="icon-badge"><Icon name={b.icon} /></span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={c.finalCta.title} text={c.finalCta.text} primary={c.finalCta.primary} />
    </>
  )
}
