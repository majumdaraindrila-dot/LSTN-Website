import useInView from '../../lib/useInView'

/** Fades/slides children in when scrolled into view. Content is always visible without JS. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
