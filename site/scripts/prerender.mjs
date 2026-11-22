/**
 * Pre-renders every route to static HTML after `vite build`:
 *   dist/index.html, dist/about/index.html, … dist/404.html
 * Also writes sitemap.xml and robots.txt.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, routes } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const { site } = await import(pathToFileURL(path.join(root, 'src/content/site.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const write = (url, outFile) => {
  const { html, head } = render(url)
  const page = template.replace('<!--head-tags-->', head).replace('<!--app-html-->', html)
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, page)
  console.log('  ✓', path.relative(dist, outFile))
}

console.log('Pre-rendering pages:')
for (const url of routes) {
  write(url, url === '/' ? path.join(dist, 'index.html') : path.join(dist, url.slice(1), 'index.html'))
}
write('/404', path.join(dist, '404.html'))

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${site.url}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${site.url}/sitemap.xml\n`)
fs.rmSync(ssrDir, { recursive: true, force: true })
console.log('  ✓ sitemap.xml, robots.txt\nDone. Upload the contents of dist/ to your web host.')
