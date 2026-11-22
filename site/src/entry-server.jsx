import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { headTags } from './components/layout/Seo'
import { routes } from './routes'

export { routes }

/** Used by scripts/prerender.mjs to produce static HTML for each page. */
export function render(url) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return { html, head: headTags(url) }
}
