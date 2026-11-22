/**
 * Audience composition — one 100% stacked bar per dimension.
 * Palette validated for CVD separation & contrast on the dark section surface.
 * Each segment has a hover/focus tooltip; a legend with values sits below each
 * bar, and a data table is provided for screen readers.
 */
const COLORS = ['#5E9E00', '#6A5CF2', '#C9761F', '#D03FC4']

export default function CompositionChart({ rows }) {
  return (
    <div className="comp-chart">
      {rows.map((row) => (
        <div key={row.label}>
          <div className="comp-row__head"><span>{row.label}</span><span>100%</span></div>
          <div className="comp-bar" aria-hidden="true">
            {row.parts.map(([name, pct], i) => (
              <div key={name} className="comp-bar__seg" tabIndex={-1} style={{ width: `${pct}%`, background: COLORS[i] }}>
                <span className="comp-tip">{name} · {pct}%</span>
              </div>
            ))}
          </div>
          <ul className="comp-legend" aria-hidden="true">
            {row.parts.map(([name, pct], i) => (
              <li key={name}><i style={{ background: COLORS[i] }} /><span>{name}</span> <b>{pct}%</b></li>
            ))}
          </ul>
        </div>
      ))}
      <table className="visually-hidden">
        <caption>Audience composition</caption>
        <thead><tr><th scope="col">Dimension</th><th scope="col">Segment</th><th scope="col">Share</th></tr></thead>
        <tbody>
          {rows.flatMap((row) => row.parts.map(([name, pct]) => (
            <tr key={row.label + name}><th scope="row">{row.label}</th><td>{name}</td><td>{pct}%</td></tr>
          )))}
        </tbody>
      </table>
    </div>
  )
}
