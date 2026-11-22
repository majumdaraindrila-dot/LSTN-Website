import { MapPin } from 'lucide-react'
import { partners as c } from '../content/pages'
import { links, stats } from '../content/site'
import { testimonials, pastSponsors } from '../content/shared'
import PageHero from '../components/ui/PageHero'
import SectionHead from '../components/ui/SectionHead'
import Reveal from '../components/ui/Reveal'
import Cta from '../components/ui/Cta'
import Icon from '../components/ui/Icon'
import StatCounter from '../components/ui/StatCounter'
import { LogoWall } from '../components/ui/LogoWall'
import { TestimonialCarousel } from '../components/ui/Testimonials'
import CtaBand from '../components/ui/CtaBand'
import CompositionChart from '../components/graphics/CompositionChart'

export default function Partners() {
  return (
    <>
      <PageHero variant="image" {...c.hero} />

      {/* Why partner */}
      <section className="section section--light" aria-labelledby="why-title">
        <div className="container">
          <SectionHead eyebrow={c.why.eyebrow} title={<span id="why-title">{c.why.title}</span>} text={c.why.text} layout="split" />
          <div className="grid grid--4">
            {c.why.cards.map((b, i) => (
              <Reveal key={b.title} className="card card--hover" delay={i * 0.06}>
                <span className="icon-badge icon-badge--lg"><Icon name={b.icon} /></span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship opportunities */}
      <section className="section section--pink" aria-labelledby="spons-title">
        <div className="container">
          <SectionHead eyebrow={c.sponsorship.eyebrow} title={<span id="spons-title">{c.sponsorship.title}</span>} text={c.sponsorship.text} layout="split" />
          <div className="grid grid--3">
            {c.sponsorship.regions.map((r, i) => {
              const deck = links.sponsorshipDecks[r.key]
              const cta = deck
                ? { label: r.deckLabel, href: deck }
                : { label: 'Enquire About Sponsorship', to: '/contact?topic=partnerships' }
              return (
                <Reveal key={r.key} className="region-card" delay={i * 0.08}>
                  <div className="region-card__top">
                    <span className="city-card__country" style={{ color: 'var(--aubergine-600)' }}>{r.country}</span>
                    <span className="region-card__pin"><MapPin aria-hidden="true" /></span>
                  </div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                  <Cta cta={cta} variant="dark" size="sm" {...(deck ? { download: true } : {})} />
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reach */}
      <section className="section section--deep" aria-labelledby="reach-title">
        <div className="container">
          <SectionHead eyebrow={c.reach.eyebrow} title={<span id="reach-title">{c.reach.title}</span>} text={c.reach.text} layout="split" />
          <div className="stat-row">
            <StatCounter {...stats.followers} label="Followers" />
            <StatCounter {...stats.participants} />
            <StatCounter {...stats.organizations} label="Organizations supporting LSTN events" />
          </div>
          <Reveal className="mt-xl card card--dark" style={{ padding: 'clamp(1.75rem, 4vw, 3rem)' }}>
            <h3 style={{ fontSize: 'var(--fs-xl)' }}>Audience composition</h3>
            <CompositionChart rows={c.reach.composition} />
            <p className="chart-note">{c.reach.note}</p>
          </Reveal>
        </div>
      </section>

      {/* Partner benefits */}
      <section className="section section--white" aria-labelledby="ben-title">
        <div className="container">
          <SectionHead eyebrow={c.benefits.eyebrow} title={<span id="ben-title">{c.benefits.title}</span>} text={c.benefits.text} layout="split" />
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

      {/* Past sponsors */}
      <section className="section section--light section--flush-top" aria-labelledby="sponsors-title">
        <div className="container">
          <SectionHead eyebrow={c.sponsors.eyebrow} title={<span id="sponsors-title">{c.sponsors.title}</span>} />
          <Reveal><LogoWall logos={pastSponsors} /></Reveal>
        </div>
      </section>

      {/* Success stories */}
      <section className="section section--dark" aria-labelledby="stories-title">
        <div className="container">
          <SectionHead eyebrow={c.stories.eyebrow} title={<span id="stories-title">{c.stories.title}</span>} text={c.stories.text} layout="split" />
          <Reveal><TestimonialCarousel items={[testimonials.rizgar, testimonials.paulina]} label="Sponsor success stories" /></Reveal>
        </div>
      </section>

      <CtaBand title={c.finalCta.title} text={c.finalCta.text} primary={c.finalCta.primary} />
    </>
  )
}
