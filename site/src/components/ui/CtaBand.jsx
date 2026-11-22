import Cta from './Cta'
import Reveal from './Reveal'
import ConnectionLines from '../graphics/ConnectionLines'

/** Full-width purple/lime call-to-action panel used at the end of each page. */
export default function CtaBand({ title, text, primary, secondary, center = true, art = '/images/textures/protein-cluster.webp' }) {
  return (
    <section className="section section--light section--tight" aria-label="Call to action">
      <div className="container">
        <Reveal className={`cta-band ${center ? 'cta-band--center' : ''}`}>
          <ConnectionLines className="hero__lines" variant="band" />
          {art && <img className="cta-band__art cta-band__art--right" src={art} alt="" aria-hidden="true" loading="lazy" style={center ? { opacity: 0.22 } : undefined} />}
          <div className="cta-band__glow" aria-hidden="true" />
          <h2>{title}</h2>
          {text && <p className="lead">{text}</p>}
          <div className="cluster" style={{ marginTop: text ? 0 : '2rem' }}>
            <Cta cta={primary} variant="primary" />
            {secondary && <Cta cta={secondary} variant="secondary" />}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
