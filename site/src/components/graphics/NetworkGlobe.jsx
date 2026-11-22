/**
 * World-inspired network visualisation: a wireframe globe with connected hub
 * nodes. Decorative; the hub names are also listed in text nearby.
 */
const hubs = [
  { x: 262, y: 168, label: 'Berlin', main: true },
  { x: 232, y: 204, label: 'Frankfurt–Rhein-Main', main: true },
  { x: 220, y: 236, label: 'Basel', main: true },
  { x: 120, y: 180 }, { x: 330, y: 120 }, { x: 360, y: 250 }, { x: 150, y: 300 },
  { x: 290, y: 330 }, { x: 90, y: 250 }, { x: 200, y: 100 }, { x: 380, y: 180 },
]
const edges = [[0, 1], [1, 2], [0, 4], [0, 10], [1, 3], [2, 6], [2, 7], [0, 9], [3, 8], [5, 10], [5, 7], [6, 8], [4, 9], [1, 5], [3, 9]]

export default function NetworkGlobe({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 480 480" role="img" aria-label="Illustration of the global LSTN network connecting hubs in Berlin, Frankfurt–Rhein-Main and Basel">
      <defs>
        <radialGradient id="globe-fill" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#4D2A69" />
          <stop offset="100%" stopColor="#1f1030" />
        </radialGradient>
        <style>{`
          .ng-edge{stroke:#96F200;stroke-opacity:.45;stroke-width:1.2;stroke-dasharray:3 5;animation:ng-flow 4s linear infinite}
          .ng-pulse{transform-box:fill-box;transform-origin:center;animation:ng-pulse 2.8s ease-out infinite}
          @keyframes ng-flow{to{stroke-dashoffset:-32}}
          @keyframes ng-pulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(3.2);opacity:0}}
          @media (prefers-reduced-motion:reduce){.ng-edge,.ng-pulse{animation:none}}
        `}</style>
      </defs>
      <circle cx="240" cy="240" r="200" fill="url(#globe-fill)" stroke="rgba(211,190,228,.35)" />
      {[60, 120, 170].map((rx) => <ellipse key={rx} cx="240" cy="240" rx={rx} ry="200" fill="none" stroke="rgba(211,190,228,.18)" />)}
      {[-120, -60, 0, 60, 120].map((dy) => {
        const r = Math.sqrt(200 * 200 - dy * dy)
        return <ellipse key={dy} cx="240" cy={240 + dy} rx={r} ry={r * 0.12} fill="none" stroke="rgba(211,190,228,.15)" />
      })}
      {edges.map(([a, b], i) => <line key={i} className="ng-edge" x1={hubs[a].x} y1={hubs[a].y} x2={hubs[b].x} y2={hubs[b].y} style={{ animationDelay: `${i * -0.3}s` }} />)}
      {hubs.map((h, i) => (
        <g key={i}>
          {h.main && <circle className="ng-pulse" cx={h.x} cy={h.y} r="7" fill="#96F200" style={{ animationDelay: `${i * 0.6}s` }} />}
          <circle cx={h.x} cy={h.y} r={h.main ? 7 : 4} fill={h.main ? '#96F200' : '#D3BEE4'} stroke="#1f1030" strokeWidth="2" />
        </g>
      ))}
      {hubs.filter((h) => h.main).map((h) => (
        <text key={h.label} x={h.x + 14} y={h.y + 4} fill="#fff" fontSize="13" fontFamily="JetBrains Mono, monospace">{h.label}</text>
      ))}
    </svg>
  )
}
