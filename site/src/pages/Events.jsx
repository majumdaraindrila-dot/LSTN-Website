import { Play } from 'lucide-react'
import { events as c } from '../content/pages'
import { links } from '../content/site'
import { testimonials, eventFormat, cities } from '../content/shared'
import PageHero from '../components/ui/PageHero'
import SectionHead from '../components/ui/SectionHead'
import Reveal from '../components/ui/Reveal'
import Placeholder from '../components/ui/Placeholder'
import { TestimonialCarousel } from '../components/ui/Testimonials'
import CtaBand from '../components/ui/CtaBand'

export default function Events() {
  return (
    <>
      <PageHero variant="image" {...c.hero} />

      {/* Speed networking & roundtables */}
      <section className="section section--light" aria-labelledby="formats-title">
        <div className="container">
          <SectionHead eyebrow={c.formats.eyebrow} title={<span id="formats-title">{c.formats.title}</span>} text={c.formats.text} layout="split" />
          <div className="grid grid--2">
            {c.formats.cards.map((card, i) => (
              <Reveal key={card.title} className="image-card" delay={i * 0.1}>
                <img src={card.image} alt="" loading="lazy" />
                <div className="image-card__body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Event format */}
      <section className="section section--deep" aria-labelledby="format-title">
        <div className="container">
          <SectionHead eyebrow={c.format.eyebrow} title={<span id="format-title">{c.format.title}</span>} text={c.format.text} layout="center" />
          <Reveal as="ol" className="format-steps" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {eventFormat.map((f) => (
              <li className="format-step" key={f.label}>
                <span className="format-step__value">{f.value}{f.unit && <small>{f.unit}</small>}</span>
                <p>{f.label}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Where we connect */}
      <section className="section section--white" aria-labelledby="cities-title">
        <div className="container">
          <SectionHead eyebrow={c.cities.eyebrow} title={<span id="cities-title">{c.cities.title}</span>} text={c.cities.text} layout="split" />
          <div className="grid grid--3">
            {cities.map((city, i) => (
              <Reveal key={city.city} className="city-card" delay={i * 0.08}>
                <div className="city-card__media">
                  {city.image ? <img src={city.image} alt="" loading="lazy" /> : <img src="/images/textures/protein-wide.webp" alt="" loading="lazy" style={{ opacity: 0.5 }} />}
                </div>
                {!city.image && <div className="city-card__ph"><Placeholder label={`${city.city} photo`} /></div>}
                <span className="city-card__country">{city.country}</span>
                <h3>{city.city}</h3>
                <p>{city.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past events & highlights */}
      <section className="section section--dark" aria-labelledby="highlights-title">
        <div className="container">
          <SectionHead eyebrow={c.highlights.eyebrow} title={<span id="highlights-title">{c.highlights.title}</span>} text={c.highlights.text} layout="split" />
          <div className="gallery">
            {c.highlights.items.map((item, i) => {
              const videoUrl = item.video ? links.highlightVideos[item.video] : null
              return (
                <Reveal key={item.topic} className="gallery__item" delay={i * 0.06}>
                  <img src={item.image} alt="" loading="lazy" />
                  <span className="tag">{item.topic}</span>
                  <div>
                    <h3>{item.topic}</h3>
                    {item.video && (videoUrl ? (
                      <a className="btn btn--primary btn--sm" href={videoUrl} target="_blank" rel="noopener noreferrer">
                        <Play aria-hidden="true" /> Watch Highlights<span className="visually-hidden">: {item.topic} (opens in a new tab)</span>
                      </a>
                    ) : (
                      <span className="btn btn--secondary btn--sm" aria-disabled="true"><Play aria-hidden="true" /> Highlight reel coming soon</span>
                    ))}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--pink" aria-labelledby="testimonials-title">
        <div className="container">
          <SectionHead eyebrow={c.testimonials.eyebrow} title={<span id="testimonials-title">{c.testimonials.title}</span>} text={c.testimonials.text} layout="split" />
          <Reveal><TestimonialCarousel items={[testimonials.dennis, testimonials.julian, testimonials.rizgar]} /></Reveal>
        </div>
      </section>

      <CtaBand title={c.finalCta.title} text={c.finalCta.text} primary={c.finalCta.primary} />
    </>
  )
}
