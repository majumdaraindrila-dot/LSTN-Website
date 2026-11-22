import { useEffect } from 'react'
import { seo, site } from '../../content/site'

/** Builds the <head> tags for a route. Used by the prerender script and on the client. */
export function headTags(path) {
  const m = seo[path] || seo['/404']
  const url = site.url + (path === '/' ? '/' : path)
  const img = site.url + site.defaultShareImage
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    path === '/404' ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join('\n    ')
}

/** Keeps title + description in sync during client-side navigation. */
export default function Seo({ path }) {
  useEffect(() => {
    const m = seo[path] || seo['/404']
    document.title = m.title
    let d = document.querySelector('meta[name="description"]')
    if (!d) { d = document.createElement('meta'); d.name = 'description'; document.head.appendChild(d) }
    d.content = m.description
    const c = document.querySelector('link[rel="canonical"]')
    if (c) c.href = site.url + path
  }, [path])
  return null
}
