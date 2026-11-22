# LSTN — Life Sciences Tech Network website

A responsive company website for LSTN, built with **React + Vite**. The build output is **plain static files** (HTML, CSS, JS and images). They run on any standard web host, including Blacknight shared hosting over FTP/FTPS, and need no particular hosting provider.

> **Status:** Development build. **Nothing has been deployed**, no hosting or services have been bought, and no domain or DNS settings have been touched.

---

## Project structure

```
lstn-website/
├── README.md                  ← you are here
├── docs/
│   ├── EDITING-CONTENT.md     ← how to change text, images, links, logos
│   ├── DEPLOYMENT-BLACKNIGHT.md ← step-by-step upload to Blacknight (FTP/FTPS)
│   ├── CONTACT-FORM.md        ← how the enquiry form delivers messages
│   └── CONTENT-CHECKLIST.md   ← placeholders & items to confirm before launch
├── source-material/           ← original brand PDFs + raw extracted assets (not part of the website)
│   ├── brand-documents/
│   └── extracted-assets/
└── site/                      ← the website source code
    ├── index.html             ← HTML shell
    ├── package.json           ← scripts & dependencies
    ├── vite.config.js
    ├── scripts/prerender.mjs  ← generates static HTML per page + sitemap
    ├── public/                ← files copied as-is into the build
    │   ├── images/            ← photos, people, testimonials, logos, textures, brand
    │   ├── videos/            ← (empty) drop hero/highlight videos here
    │   ├── downloads/         ← (empty) drop approved sponsorship PDFs here
    │   ├── api/contact.php    ← contact-form mailer (PHP) + config.php
    │   ├── .htaccess          ← clean URLs, caching, security headers (Apache)
    │   └── favicon.svg
    └── src/
        ├── content/           ← ✏️  ALL TEXT, LINKS & SETTINGS LIVE HERE
        │   ├── site.js        ← links (Circle, LinkedIn…), stats, nav, footer, SEO
        │   ├── pages.js       ← copy for every page, in page order
        │   └── shared.js      ← testimonials, founders, team, logos, pillars, cities
        ├── pages/             ← one file per page (Home, About, Events…)
        ├── components/        ← reusable UI (layout, ui, sections, graphics)
        └── styles/            ← design tokens (colours, fonts), base, components
```

Source code (`site/src`) and assets (`site/public`) are kept apart. Everything you'd normally edit is in **`site/src/content/`**.

---

## Quick start (local development)

Requires **Node.js 18+** (20 or 22 recommended).

```bash
cd site
```

```bash
npm install
```

```bash
npm run dev
```

Open the URL it prints (usually http://localhost:5173). Edits show up instantly.

## Build for production

```bash
npm run build
```

This creates **`site/dist/`**, the complete website, ready to upload:

- `index.html`, `about/index.html`, `events/index.html` … a pre-rendered HTML file for every page, so search engines and social previews see full content
- `404.html`, `sitemap.xml`, `robots.txt`, `.htaccess`
- `assets/`: hashed CSS, JS and fonts
- `images/`, `api/`

To preview the production build locally:

```bash
npm run preview
```

> The contact form only sends mail on the real PHP host. Locally it shows its error message, which is expected.

Deployment steps: **[docs/DEPLOYMENT-BLACKNIGHT.md](docs/DEPLOYMENT-BLACKNIGHT.md)**

---

## Pages

| URL | Purpose | Main CTA |
|---|---|---|
| `/` | Home: hero, proof, why LSTN, what we do, events, outcomes, network, community, careers, partners | Join the Network → Circle |
| `/about` | Mission & vision, story, community as infrastructure, ecosystem model (`#ecosystem`), founders & team | Explore the Ecosystem |
| `/events` | Formats, event format, cities, highlights, testimonials. **No event calendar**, by design | Join Our Events → Circle |
| `/community` | Global community, Circle platform, Germany/Switzerland hubs, benefits | Join the Global Hub → Circle |
| `/careers` | Community-based vs traditional recruitment; professionals → Circle, employers → contact. **No job board**, by design | Get Matched / Hire Through LSTN |
| `/partners` | Why partner, regional sponsorship, reach & audience, benefits, sponsors, success stories | Become a Partner → contact |
| `/contact` | Enquiry types (preselect form topic), contact form, email & social | Send Message |
| `/privacy`, `/imprint` | Legal templates (**must be completed**) | n/a |

The CTA redirect map in the brief is implemented exactly. Links such as `/contact?topic=careers` preselect the matching enquiry type.

## Design system

- **Colours** (from *LSTN Designs 2026*): aubergine `#321B45` / `#4D2A69`, electric lime `#96F200` / `#C7FF6D`, magenta `#FD2FEE` (used sparingly), pale pink panels `#FFE5FD`, lavender `#D3BEE4`. Defined in `site/src/styles/tokens.css`.
- **Typography:** the brand fonts are **Nourd** and **Computer Says No**, both commercial. Until web licences are supplied, the site uses close open-source substitutes, **Outfit** (headings), **DM Sans** (body) and **JetBrains Mono** (labels). They're **self-hosted** in the build, so no requests go to Google (GDPR-friendly). See *Swapping in the brand fonts* in `docs/EDITING-CONTENT.md`.
- **Motifs:** metro-line "connection" lines (from the Berlin transit graphics), protein-structure artwork, lime line icons and real event photography.
- **Motion:** subtle scroll reveals, counters and a logo marquee. All of it switches off for users who set *reduce motion*.

## Quality notes

- Fully responsive (tested at 390 px mobile and 1440 px desktop). Accessible mobile menu with focus trap and Escape-to-close.
- An automated accessibility audit (axe-core, WCAG 2 A/AA) passes on every page. The site has a skip link, labelled form fields with inline errors, keyboard-operable carousels and alt text.
- SEO: a unique title and description per page, canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt`.
- Performance: pre-rendered HTML, WebP images, lazy loading, long-term caching of hashed assets, gzip via `.htaccess`.
- No cookies, no trackers, no third-party requests on page load.
