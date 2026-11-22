import Cta from './Cta'
import ConnectionLines from '../graphics/ConnectionLines'

/**
 * Hero for inner pages.
 *  variant 'image'  → full-width photo background with purple overlay
 *  variant 'split'  → text left, visual right (pass `visual`)
 *  variant 'plain'  → minimal purple hero with connection-line illustration
 */
export default function PageHero({ eyebrow, title, subtitle, text, primary, secondary, note, image, video, variant = 'plain', visual, children }) {
  const actions = (primary || secondary) && (
    <div className="cluster">
      <Cta cta={primary} variant="primary" />
      {secondary && <Cta cta={secondary} variant="secondary" />}
    </div>
  )
  const copy = (
    <div className="hero__content">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}{subtitle && <><br /><span className="text-accent">{subtitle}</span></>}</h1>
      {text && <p className="lead">{text}</p>}
      {actions}
      {note && <p className="page-hero__note">{note}</p>}
      {children}
    </div>
  )

  if (variant === 'image') {
    return (
      <header className="page-hero page-hero--image">
        <div className="hero__media" aria-hidden="true">
          {video ? <video src={video} poster={image} autoPlay muted loop playsInline /> : <img src={image} alt="" fetchPriority="high" />}
        </div>
        <ConnectionLines className="hero__lines" />
        <div className="container">{copy}</div>
      </header>
    )
  }
  if (variant === 'split') {
    return (
      <header className="page-hero page-hero--split">
        <ConnectionLines className="hero__lines" />
        <div className="container">
          <div className="split">
            {copy}
            <div className="page-hero__visual">{visual}</div>
          </div>
        </div>
      </header>
    )
  }
  return (
    <header className="page-hero">
      <ConnectionLines className="hero__lines" variant="dense" animated />
      <div className="container">{copy}</div>
    </header>
  )
}
