import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export function QuoteCard({ t }) {
  return (
    <figure className="quote-card" style={{ margin: 0 }}>
      <blockquote>{t.quote}</blockquote>
      <figcaption>
        {t.image && <img src={t.image} alt="" loading="lazy" width="52" height="52" />}
        <div>
          <strong>{t.name}</strong>
          <span>{t.role}</span>
        </div>
      </figcaption>
    </figure>
  )
}

/** Accessible testimonial carousel: arrow buttons, dots, keyboard arrows, swipe. No autoplay. */
export function TestimonialCarousel({ items, label = 'Testimonials' }) {
  const [index, setIndex] = useState(0)
  const count = items.length
  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count])
  const touch = useRef(null)
  const liveRef = useRef(null)

  useEffect(() => {
    if (liveRef.current) liveRef.current.textContent = `Testimonial ${index + 1} of ${count}`
  }, [index, count])

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(index + 1)
        if (e.key === 'ArrowLeft') go(index - 1)
      }}
    >
      <div
        className="carousel__viewport"
        onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touch.current == null) return
          const dx = e.changedTouches[0].clientX - touch.current
          if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1))
          touch.current = null
        }}
      >
        <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((t, i) => (
            <div
              className="carousel__slide"
              key={t.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
              inert={i !== index}
            >
              <figure className="quote-card" style={{ margin: 0 }}>
                {t.image && (
                  <div className="carousel__portrait">
                    <img src={t.image} alt={t.name} loading="lazy" />
                  </div>
                )}
                <div>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption className="carousel__author" style={{ display: 'block' }}>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </figcaption>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__controls">
        <div className="carousel__dots">
          {items.map((t, i) => (
            <button key={t.name} type="button" className="carousel__dot" aria-label={`Show testimonial from ${t.name}`} aria-current={i === index} onClick={() => go(i)} />
          ))}
        </div>
        <div className="carousel__arrows">
          <button type="button" className="icon-btn" onClick={() => go(index - 1)} aria-label="Previous testimonial"><ArrowLeft aria-hidden="true" /></button>
          <button type="button" className="icon-btn" onClick={() => go(index + 1)} aria-label="Next testimonial"><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
      <p className="visually-hidden" aria-live="polite" ref={liveRef} />
    </div>
  )
}
