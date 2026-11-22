/**
 * ============================================================================
 *  LSTN — GLOBAL SITE SETTINGS
 * ============================================================================
 *  Edit links, contact details, statistics and form settings here.
 *  Every value marked  // TODO  is a placeholder that must be confirmed
 *  before launch (see docs/CONTENT-CHECKLIST.md).
 * ============================================================================
 */

export const site = {
  name: 'Life Sciences Tech Network',
  shortName: 'LSTN',
  tagline: 'Advancing health by connecting the life sciences × tech ecosystems.',
  // Final production domain, no trailing slash. Used for canonical URLs,
  // sitemap.xml and social-sharing tags.
  url: 'https://www.lifesciencestechnetwork.com', // TODO confirm final domain
  email: 'info@lifesciencestechnetwork.com',
  defaultShareImage: '/images/photos/event-room.webp',
}

/**
 * External links. The "Join the Network" button on every page uses `circle`.
 */
export const links = {
  // Global LSTN community on Circle (link supplied in the website brief)
  circle: 'https://bit.ly/lstn-circle',

  // Regional hubs — TODO: replace with the confirmed Germany / Switzerland hub URLs.
  // Until then they fall back to the global Circle community.
  circleGermany: 'https://bit.ly/lstn-circle', // TODO confirm Germany hub URL
  circleSwitzerland: 'https://bit.ly/lstn-circle', // TODO confirm Switzerland hub URL

  linkedin: 'https://www.linkedin.com/company/life-sciences-tech-network/', // TODO confirm LinkedIn company URL
  newsletter: 'https://linktr.ee/lifesciencestechnetwork', // TODO replace with newsletter sign-up URL
  linktree: 'https://linktr.ee/lifesciencestechnetwork',

  // Regional sponsorship decks. Put an approved PDF in /public/downloads/ and
  // set the path, e.g. '/downloads/LSTN-Berlin-Sponsorship-2026.pdf'.
  // While null, the button links to the contact form instead.
  sponsorshipDecks: {
    berlin: null, // TODO add approved public Berlin deck
    frankfurt: null,
    basel: null,
  },

  // Event highlight reels (YouTube / Vimeo URLs). While null, the "Watch
  // highlights" button is shown as "Coming soon".
  highlightVideos: {
    aiInLifeSciences: null, // TODO add highlight reel URL
    lifeSciencesStartups: null, // TODO add highlight reel URL
  },
}

/**
 * Headline statistics. One source of truth used across Home, Events and Partners.
 */
export const stats = {
  followers: { value: 5000, suffix: '+', label: 'Unique followers across the globe' }, // TODO confirm (sponsorship deck says 4,250+)
  participants: { value: 60, suffix: '', label: 'Curated participants at flagship events' },
  organizations: { value: 15, suffix: '+', label: 'Organizations supporting the LSTN community' },
}

/**
 * Contact form delivery.
 *
 *  endpoint: where the form POSTs.
 *    - '/api/contact.php'  → the PHP script shipped in /public/api (works on
 *                             Blacknight shared hosting; configure it first)
 *    - 'https://formspree.io/f/XXXXXXX' → a hosted form service instead
 *  See docs/CONTACT-FORM.md.
 */
export const contactForm = {
  endpoint: '/api/contact.php',
}

export const nav = [
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Community', to: '/community' },
  { label: 'Careers', to: '/careers' },
  { label: 'Partners', to: '/partners' },
]

export const footer = {
  explore: [
    { label: 'About', to: '/about' },
    { label: 'Events', to: '/events' },
    { label: 'Community', to: '/community' },
    { label: 'Careers', to: '/careers' },
    { label: 'Partners', to: '/partners' },
    { label: 'Contact', to: '/contact' },
  ],
  connect: [
    { label: 'LinkedIn', href: links.linkedin },
    { label: 'Join our Newsletter', href: links.newsletter },
    { label: 'Global Community / Circle', href: links.circle },
    { label: 'Germany', href: links.circleGermany },
    { label: 'Switzerland', href: links.circleSwitzerland },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Imprint', to: '/imprint' },
    { label: 'Cookie Settings', to: '/privacy#cookies' },
  ],
}

/**
 * Page titles & descriptions for search engines and social sharing.
 */
export const seo = {
  '/': {
    title: 'LSTN — Life Sciences Tech Network | Where life sciences and technology connect',
    description:
      'LSTN connects leaders, founders, builders and operators across life sciences and technology through curated events, an online community and community-driven recruitment.',
  },
  '/about': {
    title: 'About LSTN — Connecting people. Breaking silos. Advancing health.',
    description:
      'Why Life Sciences Tech Network exists, our mission and vision, the ecosystem we are building and the people behind it.',
  },
  '/events': {
    title: 'Events — Speed networking & expert roundtables | LSTN',
    description:
      'Curated, high-signal life sciences × tech networking: 1:1 speed networking, expert-led roundtables and open networking in Berlin, Frankfurt–Rhein-Main and Basel.',
  },
  '/community': {
    title: 'Community — One network. Multiple hubs. | LSTN',
    description:
      'Join the global LSTN community and regional hubs in Germany and Switzerland to share knowledge, build relationships and create opportunities.',
  },
  '/careers': {
    title: 'Careers — Community-driven recruitment | LSTN',
    description:
      'Connecting life sciences × tech professionals and employers through high-trust, community-driven recruitment.',
  },
  '/partners': {
    title: 'Partners & Sponsors — Grow your business with LSTN',
    description:
      'Partner with LSTN to reach curated leaders and builders across biotech, pharma, digital health, medtech and AI through events and community.',
  },
  '/contact': {
    title: 'Contact LSTN — Let’s connect',
    description:
      'Get in touch with Life Sciences Tech Network about partnerships, sponsorship, community, careers or events.',
  },
  '/privacy': { title: 'Privacy Policy | LSTN', description: 'Privacy policy of Life Sciences Tech Network.' },
  '/imprint': { title: 'Imprint | LSTN', description: 'Legal notice (Impressum) of Life Sciences Tech Network.' },
  '/404': { title: 'Page not found | LSTN', description: 'The page you were looking for could not be found.' },
}
