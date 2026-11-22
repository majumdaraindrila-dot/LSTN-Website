/**
 * Decorative "transit map" connection lines — a nod to the metro-line motif in
 * the LSTN visual identity. Purely decorative (aria-hidden).
 */
const sets = {
  default: [
    { d: 'M-40 620 H260 L380 500 H760 L880 380 H1480', c: '#96F200', w: 2.5 },
    { d: 'M-40 700 H420 L520 600 H980 L1100 480 H1480', c: '#D3BEE4', w: 1.5, o: 0.5 },
    { d: 'M1040 -40 V200 L1160 320 V900', c: '#FD67F2', w: 1.5, o: 0.6 },
    { d: 'M640 -40 V140 L760 260 H1480', c: '#D3BEE4', w: 1.2, o: 0.35 },
  ],
  dense: [
    { d: 'M-40 520 H300 L420 400 H820 L940 280 H1480', c: '#96F200', w: 2.5 },
    { d: 'M-40 600 H520 L620 500 H1040 L1160 380 H1480', c: '#D3BEE4', w: 1.5, o: 0.45 },
    { d: 'M1000 -40 V160 L1120 280 V900', c: '#FD67F2', w: 1.5, o: 0.55 },
    { d: 'M1260 -40 V420 L1140 540 V900', c: '#C7FF6D', w: 1.2, o: 0.4 },
    { d: 'M700 -40 V100 L820 220 H1480', c: '#D3BEE4', w: 1.2, o: 0.3 },
  ],
  band: [
    { d: 'M-40 560 H200 L320 440 H700 L820 320 H1480', c: '#96F200', w: 2, o: 0.6 },
    { d: 'M-40 640 H460 L560 540 H1480', c: '#D3BEE4', w: 1.2, o: 0.35 },
    { d: 'M1180 -40 V180 L1300 300 V900', c: '#FD67F2', w: 1.2, o: 0.45 },
  ],
}
const stations = {
  default: [[380, 500], [760, 500], [880, 380], [1160, 320], [520, 600]],
  dense: [[420, 400], [820, 400], [940, 280], [1120, 280], [620, 500], [1140, 540]],
  band: [[320, 440], [700, 440], [820, 320]],
}

export default function ConnectionLines({ className = '', variant = 'default', animated = false }) {
  const lines = sets[variant] || sets.default
  return (
    <svg className={className} viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <style>{`
          .cl-flow{stroke-dasharray:6 18;animation:cl-dash 6s linear infinite}
          @keyframes cl-dash{to{stroke-dashoffset:-240}}
          @media (prefers-reduced-motion:reduce){.cl-flow{animation:none}}
        `}</style>
      </defs>
      {lines.map((l, i) => (
        <path key={i} d={l.d} fill="none" stroke={l.c} strokeWidth={l.w} strokeOpacity={l.o ?? 0.9} strokeLinejoin="round" />
      ))}
      {animated && (
        <path d={lines[0].d} fill="none" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.65" className="cl-flow" />
      )}
      {(stations[variant] || []).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="7" fill="#1f1030" stroke={i % 3 === 2 ? '#FD67F2' : '#96F200'} strokeWidth="2.5" />
      ))}
    </svg>
  )
}
