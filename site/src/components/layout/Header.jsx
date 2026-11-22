import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react'
import Logo from '../ui/Logo'
import { nav, links, site } from '../../content/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu on navigation
  useEffect(() => { setOpen(false) }, [pathname])

  // Lock scroll, close on Escape, keep focus inside the open menu
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const first = menuRef.current?.querySelector('a')
    first?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus() }
      if (e.key === 'Tab' && menuRef.current) {
        const items = [toggleRef.current, ...menuRef.current.querySelectorAll('a')]
        const idx = items.indexOf(document.activeElement)
        if (e.shiftKey && idx <= 0) { e.preventDefault(); items[items.length - 1].focus() }
        else if (!e.shiftKey && idx === items.length - 1) { e.preventDefault(); items[0].focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
        <div className="container site-header__inner">
          <Link to="/" className="brand" aria-label={`${site.name} — home`}>
            <Logo title="" aria-hidden="true" />
            <span className="brand__text">
              Life Sciences Tech Network
              <small>Life sciences × tech</small>
            </span>
          </Link>
          <nav className="main-nav" aria-label="Main">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {item.label}
              </NavLink>
            ))}
            <a className="btn btn--primary btn--sm" href={links.circle} target="_blank" rel="noopener noreferrer">
              Join the Network <ArrowUpRight aria-hidden="true" />
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </nav>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>
      <div id="mobile-menu" ref={menuRef} className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {item.label} <ArrowRight aria-hidden="true" />
            </NavLink>
          ))}
          <NavLink to="/contact">Contact <ArrowRight aria-hidden="true" /></NavLink>
        </nav>
        <a className="btn btn--primary" href={links.circle} target="_blank" rel="noopener noreferrer">
          Join the Network <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="mobile-menu__foot">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </>
  )
}
