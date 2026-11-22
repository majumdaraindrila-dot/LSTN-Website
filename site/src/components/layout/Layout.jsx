import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Seo from './Seo'
import { seo } from '../../content/site'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const path = pathname.replace(/\/+$/, '') || '/'

  // Scroll to top on page change, or to the #anchor if present
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Seo path={seo[path] ? path : '/404'} />
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
