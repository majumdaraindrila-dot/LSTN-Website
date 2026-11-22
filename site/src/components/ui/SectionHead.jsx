import Reveal from './Reveal'

/** Eyebrow + title + intro text. layout: 'left' | 'center' | 'split' */
export default function SectionHead({ eyebrow, title, text, layout = 'left', as: H = 'h2', children }) {
  const texts = Array.isArray(text) ? text : text ? [text] : []
  if (layout === 'split') {
    return (
      <Reveal className="section-head section-head--split">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <H>{title}</H>
        </div>
        <div>
          {texts.map((t, i) => <p className="lead" key={i}>{t}</p>)}
          {children}
        </div>
      </Reveal>
    )
  }
  return (
    <Reveal className={`section-head ${layout === 'center' ? 'section-head--center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <H>{title}</H>
      {texts.map((t, i) => <p className="lead" key={i}>{t}</p>)}
      {children}
    </Reveal>
  )
}
