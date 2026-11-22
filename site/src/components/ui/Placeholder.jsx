/** Clearly labelled placeholder for content that still needs to be supplied. */
export default function Placeholder({ label, hint, light = false, className = '', style }) {
  return (
    <div className={`placeholder ${light ? 'placeholder--light' : ''} ${className}`} style={style} role="img" aria-label={`Placeholder: ${label}`}>
      <div>
        <strong>Placeholder</strong>
        {label}
        {hint && <div style={{ opacity: 0.75, marginTop: '0.35rem' }}>{hint}</div>}
      </div>
    </div>
  )
}
