import { HeartPulse, Brain, Dna, Pill, MonitorSmartphone, UsersRound, BrainCircuit, RefreshCcw } from 'lucide-react'
import Reveal from '../ui/Reveal'

function CellIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M12 3.5c2.2 0 2.9 1.3 4.6 1.9 1.8.7 3.4 1.4 3.4 3.9 0 2 1 2.6 1 4.2 0 2.6-2.2 3.4-3.5 4.7-1.4 1.5-2.4 2.8-5.5 2.8s-4.2-1.4-5.6-2.8C5 16.9 3 16.1 3 13.5c0-1.6 1-2.2 1-4.2 0-2.5 1.6-3.2 3.4-3.9 1.7-.6 2.4-1.9 4.6-1.9Z" />
      <circle cx="12" cy="12.5" r="2.4" />
      <circle cx="8" cy="9" r="1" /><circle cx="16" cy="9" r="1" /><circle cx="8" cy="16" r="1" /><circle cx="16" cy="16" r="1" />
    </svg>
  )
}

const silos = [
  { label: 'Cancer', Icon: CellIcon },
  { label: 'Cardiovascular Disease', Icon: HeartPulse },
  { label: 'Neurodegenerative Disease', Icon: Brain },
  { label: 'Metabolic Disease', Icon: RefreshCcw },
]
const nodes = [
  { label: 'Biotech', Icon: Dna },
  { label: 'Pharma', Icon: Pill },
  { label: 'Health Tech', Icon: MonitorSmartphone },
  { label: 'Patient Data', Icon: UsersRound },
  { label: 'AI', Icon: BrainCircuit },
]

/**
 * Simplified web version of the LSTN ecosystem graphic:
 * "From Disease and Technology Silos → Convergence and Cures".
 */
export default function EcosystemGraphic() {
  return (
    <div className="eco">
      <Reveal className="eco__panel">
        <div className="eco__head">
          <span className="eco__step">01</span>
          <div>
            <h3>From disease and technology silos…</h3>
            <p>Chronic diseases share major underlying pathways (e.g. ageing), but the ecosystems tackling them remain fragmented and siloed. They cannot be solved by one technology, company, or treatment alone.</p>
          </div>
        </div>
        <ul className="eco__silos" role="list">
          {silos.map(({ label, Icon }) => (
            <li key={label}>
              <Icon className="eco__icon" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="eco__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 60" fill="none"><path d="M12 0v52m0 0-8-8m8 8 8-8" stroke="currentColor" strokeWidth="2" strokeDasharray="4 5" /></svg>
      </div>

      <Reveal className="eco__panel eco__panel--glow" delay={0.1}>
        <div className="eco__head">
          <span className="eco__step">02</span>
          <div>
            <h3>…to convergence and cures</h3>
            <p>Silos fragment data, obscure insights, and lose value between boundaries. The future of medicine will be based on integrated, continuously learning systems to enable better prevention and eventual cures.</p>
          </div>
        </div>
        <div className="eco__loop">
          <svg className="eco__loop-line" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
            <rect x="4" y="4" width="992" height="112" rx="56" fill="none" stroke="rgba(150,242,0,.45)" strokeWidth="2" strokeDasharray="6 8" vectorEffect="non-scaling-stroke" />
          </svg>
          <ul className="eco__nodes" role="list">
            {nodes.map(({ label, Icon }) => (
              <li key={label}>
                <span className="eco__node"><Icon aria-hidden="true" strokeWidth={1.6} /></span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  )
}
