/** Grid of partner/organization logos at consistent size. */
export function LogoWall({ title, logos }) {
  return (
    <div>
      {title && <h3 className="logo-wall__title">{title}</h3>}
      <ul className="logo-wall" role="list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {logos.map((l) => (
          <li key={l.name} className={`logo-tile ${l.dark ? 'logo-tile--dark' : ''}`}>
            <img src={l.src} alt={l.name} loading="lazy" decoding="async" />
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Continuously scrolling logo strip (pauses on hover; static with reduced motion). */
export function LogoMarquee({ logos, label = 'Organizations in the LSTN network' }) {
  const items = logos.filter((l) => !l.dark)
  return (
    <div className="marquee" aria-label={label} role="region">
      <div className="marquee__track">
        {items.map((l) => <img key={l.name} src={l.src} alt={l.name} loading="lazy" decoding="async" />)}
        {items.map((l) => <img key={`${l.name}-2`} src={l.src} alt="" aria-hidden="true" loading="lazy" decoding="async" />)}
      </div>
    </div>
  )
}
