import Cta from '../components/ui/Cta'
import ConnectionLines from '../components/graphics/ConnectionLines'

export default function NotFound() {
  return (
    <header className="page-hero" style={{ minHeight: '80svh', display: 'flex', alignItems: 'center' }}>
      <ConnectionLines className="hero__lines" variant="dense" />
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This connection doesn’t exist — yet.</h1>
        <p className="lead">The page you’re looking for may have moved. Let’s get you back on track.</p>
        <div className="cluster">
          <Cta cta={{ label: 'Back to home', to: '/' }} />
          <Cta cta={{ label: 'Contact us', to: '/contact' }} variant="secondary" />
        </div>
      </div>
    </header>
  )
}
