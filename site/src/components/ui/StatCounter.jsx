import { useEffect, useState } from 'react'
import useInView from '../../lib/useInView'

const fmt = (n) => n.toLocaleString('en-US')

/** Animated number. Renders the final value on the server so it is always readable. */
export default function StatCounter({ value, suffix = '', label }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [display, setDisplay] = useState(value)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!inView || started) return
    setStarted(true)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const dur = 1400
    const t0 = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, started, value])

  return (
    <div className="stat" ref={ref}>
      <div className="stat__value">
        <span className="visually-hidden">{fmt(value)}{suffix}</span>
        <span aria-hidden="true" style={{ color: 'inherit' }}>{fmt(display)}</span>
        {suffix && <span aria-hidden="true">{suffix}</span>}
      </div>
      <p className="stat__label">{label}</p>
    </div>
  )
}
