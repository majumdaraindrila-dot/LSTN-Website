import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { links } from '../../content/site'

/**
 * Smart button/link.
 *  cta = { label, to }            → internal page
 *  cta = { label, href: 'circle'} → key from `links` in content/site.js
 *  cta = { label, href: 'https://…' } → external URL
 *  variant: primary | secondary | dark | outline-dark | link
 */
export function resolveHref(href) {
  if (!href) return null
  return links[href] ?? href
}

export default function Cta({ cta, variant = 'primary', size, className = '', icon = true, children, ...rest }) {
  if (!cta) return null
  const label = children ?? cta.label
  const cls = variant === 'link' ? `link-arrow ${className}` : `btn btn--${variant} ${size ? `btn--${size}` : ''} ${className}`
  if (cta.to) {
    return (
      <Link to={cta.to} className={cls.trim()} {...rest}>
        {label}
        {icon && <ArrowRight aria-hidden="true" />}
      </Link>
    )
  }
  const href = resolveHref(cta.href)
  if (!href) {
    return (
      <span className={cls.trim()} aria-disabled="true" {...rest}>
        {cta.disabledLabel || label}
      </span>
    )
  }
  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      className={cls.trim()}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {label}
      {icon && (external ? <ArrowUpRight aria-hidden="true" /> : <ArrowRight aria-hidden="true" />)}
      {external && <span className="visually-hidden"> (opens in a new tab)</span>}
    </a>
  )
}
