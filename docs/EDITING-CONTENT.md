# Editing content

You don't need to touch layout code to update the site. After any change, preview with `npm run dev`, then `npm run build` and upload `dist/`.

## Where things live

| To change… | Edit |
|---|---|
| Circle / LinkedIn / newsletter / hub links | `site/src/content/site.js` → `links` |
| Headline numbers (5,000+, 60, 15+) | `site/src/content/site.js` → `stats` |
| Navigation, footer links | `site/src/content/site.js` → `nav`, `footer` |
| Page titles & Google descriptions | `site/src/content/site.js` → `seo` |
| Contact email | `site/src/content/site.js` → `site.email` |
| Any page text, button labels, page images | `site/src/content/pages.js` (one section per page, in page order) |
| Testimonials, founders, volunteers & ambassadors | `site/src/content/shared.js` |
| Partner / sponsor logos | `site/src/content/shared.js` → `networkOrganizations`, `pastSponsors` |
| Six "Community as Infrastructure" pillars | `site/src/content/shared.js` → `pillars` |
| City cards (Berlin, Frankfurt–Rhein-Main, Basel) | `site/src/content/shared.js` → `cities` |
| Colours, fonts, spacing | `site/src/styles/tokens.css` |

Text is plain JavaScript strings. Keep the quotes, and if the text contains an apostrophe use a typographic one (’) or escape it (`\'`).

## Buttons (CTAs)

Every button is an object such as `{ label: 'Join the Network', href: 'circle' }`:

- `to: '/events'` → a page on this site (`/contact?topic=partnerships` preselects the form topic)
- `href: 'circle'` → a named link from `links` in `site.js` (`circle`, `circleGermany`, `circleSwitzerland`, `linkedin`, `newsletter`)
- `href: 'https://…'` → any external URL (opens in a new tab)

## Images

All images are in `site/public/images/`:

```
images/
  photos/         event photography (hero & section images)
  people/         founder portraits
  testimonials/   testimonial portraits
  logos/organizations/   "Organizations represented across our network"
  logos/sponsors/        "Past event sponsors"
  textures/       protein-structure artwork (decorative)
  brand/          LSTN logo SVGs (lime / purple / white)
```

**To replace a photo:** save the new image with the **same file name**, or put it in the folder and update the path in the content file.

**Recommended formats:**
- Photos: **WebP** or JPG, about **2000 px wide** for full-width heroes and **1200 px** for cards, under ~400 KB. Free converter: squoosh.app.
- Portraits: square or 4:5, ~600 px.
- Logos: transparent **PNG or SVG**, trimmed with no extra padding, ~160 px tall. Logos display greyscale and turn colour on hover. For a white or light logo, add `true` as the third argument (`sp('name', 'Name', true)`) so it sits on a purple tile.

## Videos

Put MP4 files (H.264, muted, ideally under 8 MB, 1080p) in `site/public/videos/`, then set:

- Home hero: `home.hero.video = '/videos/hero.mp4'` in `pages.js`
- Events hero: `events.hero.video = '/videos/events-hero.mp4'`
- Highlight reels (YouTube or Vimeo links): `links.highlightVideos` in `site.js`

The hero image is used as the poster and as the fallback.

## Circle screenshot (Community page)

Save a real screenshot (16:10, ~1600 px wide) as `site/public/images/circle-screenshot.webp` and set `community.platform.screenshot` to that path.

## Team members

Add volunteers and ambassadors in `shared.js` → `team`:

```js
{ name: 'Jane Doe', role: 'Ambassador — Basel', image: '/images/people/jane-doe.webp', linkedin: 'https://www.linkedin.com/in/…' },
```

Remove the `placeholder: true` example entries. Leave `image: ''` to show initials.

## Sponsorship decks

Put the approved PDF in `site/public/downloads/` and set its path in `site.js` → `links.sponsorshipDecks.berlin` (etc.). The button changes from "Enquire About Sponsorship" to the download automatically.

## Adding a new page

1. Create `site/src/pages/NewPage.jsx` (copy an existing page as a starting point).
2. Add a `<Route>` in `site/src/App.jsx`.
3. Add the path to `site/src/routes.js` (so it is pre-rendered) and an entry in `seo` in `site.js`.
4. Optionally add it to `nav` / `footer`.

## Swapping in the brand fonts (Nourd / Computer Says No)

1. Obtain **web-font licences** and `.woff2` files from the foundry.
2. Put them in `site/src/styles/fonts/`.
3. Create `site/src/styles/fonts.css`:
   ```css
   @font-face { font-family: 'Nourd'; src: url('./fonts/Nourd-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
   @font-face { font-family: 'Nourd'; src: url('./fonts/Nourd-SemiBold.woff2') format('woff2'); font-weight: 600; font-display: swap; }
   @font-face { font-family: 'Computer Says No'; src: url('./fonts/ComputerSaysNo.woff2') format('woff2'); font-display: swap; }
   ```
4. Import it at the top of `site/src/styles/index.css`, then in `tokens.css` move `'Nourd'` to the front of `--font-display` and `'Computer Says No'` to the front of `--font-mono`.
