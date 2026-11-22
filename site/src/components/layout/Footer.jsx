import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Logo from '../ui/Logo'
import { LinkedInIcon, CircleIcon } from '../ui/Icon'
import { footer, links, site } from '../../content/site'

const ext = { target: '_blank', rel: 'noopener noreferrer' }

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" aria-label="LSTN home"><Logo title="LSTN" /></Link>
            <p>{site.tagline}</p>
            <div className="footer-social">
              <a href={links.linkedin} {...ext} aria-label="LSTN on LinkedIn (opens in a new tab)"><LinkedInIcon /></a>
              <a href={links.circle} {...ext} aria-label="LSTN community on Circle (opens in a new tab)"><CircleIcon /></a>
              <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`}><Mail aria-hidden="true" /></a>
            </div>
          </div>
          <div className="footer-col">
            <h2>Explore</h2>
            <ul>{footer.explore.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
          </div>
          <div className="footer-col">
            <h2>Connect</h2>
            <ul>{footer.connect.map((l) => <li key={l.label}><a href={l.href} {...ext}>{l.label}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h2>Contact</h2>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><Link to="/contact">Contact form</Link></li>
              <li><Link to="/contact?topic=partnerships">Partnerships &amp; sponsorship</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{ margin: 0 }}>© {year} {site.name}. All rights reserved.</p>
          <ul>{footer.legal.map((l) => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </div>
      </div>
    </footer>
  )
}
