/**
 * Shared content used on several pages: testimonials, people, logos, pillars.
 * Images live in /public/images — replace a file with one of the same name,
 * or change the path here.
 */

export const testimonials = {
  dennis: {
    quote:
      'I generated real opportunities beyond networking, including two startup engagements, a pilot project, and a follow-on contract now in progress.',
    name: 'Dennis K.',
    role: 'Consultant, Temedica', // Home brief lists "Angel Investor and Consultant" — TODO confirm preferred title
    image: '/images/testimonials/dennis-k.webp',
  },
  julian: {
    quote:
      'LSTN created the connection that sparked a new market access project for data- and AI-driven health tech companies.',
    name: 'Julian B.',
    role: 'Associate Principal, Idalab',
    image: '/images/testimonials/julian-b.webp',
  },
  rizgar: {
    quote:
      'We co-organized a roundtable that deepened our ties to Berlin’s life sciences community, connected us with qualified prospects, engaged current clients, and strengthened our market position.',
    name: 'Rizgar S.',
    role: 'Founder, Sciential',
    image: '/images/testimonials/rizgar-s.webp',
  },
  paulina: {
    quote:
      'One event led to a platform feature, a follow-up meeting, market analysis, and a project proposal with a CEO in the AI-for-CRO and pharma space.',
    name: 'Paulina G.',
    role: 'Founder, lifesciences.digital',
    image: '/images/testimonials/paulina-g.webp',
  },
}

export const founders = [
  {
    name: 'Nicholas C. Fiorenza',
    role: 'Co-Founder',
    bio: 'Entrepreneur and community builder with 15+ years of industry experience. Building and growing life sciences startups and communities since 2018.',
    image: '/images/people/nicholas-fiorenza.webp', // TODO replace — brief notes this photo needs to change
    linkedin: '', // TODO add LinkedIn profile URL
  },
  {
    name: 'Csaba Bujna',
    role: 'Co-Founder',
    bio: 'European Director of Life Sciences Business Development with 15+ years of industry experience. Building and growing professional communities since 2011.',
    image: '/images/people/csaba-bujna.webp',
    linkedin: '', // TODO add LinkedIn profile URL
  },
]

/** Volunteers & ambassadors — add people here; leave image '' for initials. */
export const team = [
  { name: 'Volunteer name', role: 'Ambassador — Berlin', image: '', linkedin: '', placeholder: true },
  { name: 'Volunteer name', role: 'Ambassador — Frankfurt–Rhein-Main', image: '', linkedin: '', placeholder: true },
  { name: 'Volunteer name', role: 'Ambassador — Basel', image: '', linkedin: '', placeholder: true },
  { name: 'Volunteer name', role: 'Community Volunteer', image: '', linkedin: '', placeholder: true },
]

const org = (file, name) => ({ name, src: `/images/logos/organizations/${file}.png` })
const sp = (file, name, dark = false) => ({ name, src: `/images/logos/sponsors/${file}.png`, dark })

/** "Organizations represented across our network" — from the 2026 sponsorship deck. */
export const networkOrganizations = [
  org('bayer', 'Bayer'),
  org('pfizer', 'Pfizer'),
  org('sanofi', 'Sanofi'),
  org('biontech', 'BioNTech'),
  org('merck', 'Merck'),
  org('gsk', 'GSK'),
  org('johnson-johnson', 'Johnson & Johnson Innovative Medicine'),
  org('charite', 'Charité – Universitätsmedizin Berlin'),
  org('max-delbrueck-center', 'Max Delbrück Center'),
  org('accenture', 'Accenture'),
  org('capgemini', 'Capgemini'),
  org('centogene', 'Centogene'),
  org('opella', 'Opella'),
  org('nuvisan', 'Nuvisan'),
  org('idalab', 'idalab'),
  org('aignostics', 'Aignostics'),
  org('tissuse', 'TissUse'),
  org('cellbricks', 'Cellbricks'),
  org('molecule', 'Molecule'),
  org('mamahealth', 'mamahealth'),
  org('glycothera', 'Glycothera'),
  org('captain-cell', 'Captain Cell'),
  org('checkimmune', 'CheckImmune'),
  org('green-elephant-biotech', 'Green Elephant Biotech'),
  org('galagos', 'Galagos'),
  org('medwise-ai', 'medwise.ai'),
  org('sci2', 'Sci²'),
  org('tada', 'TADA'),
]

/** "Past event sponsors" — from the 2026 sponsorship deck. TODO confirm approval to display. */
export const pastSponsors = [
  sp('berlin-partner', 'Berlin Partner'),
  sp('castor', 'Castor'),
  sp('cdd-vault', 'CDD Vault'),
  sp('kadans', 'Kadans Science Partner'),
  sp('usdm-life-sciences', 'USDM Life Sciences'),
  sp('merantix-momentum', 'Merantix Momentum'),
  sp('eclinical', 'eClinical Solutions'),
  sp('testblu', 'testblu diagnostics'),
  sp('longevity-global', 'Longevity Global'),
  sp('efor', 'Efor'),
  sp('plamper-consulting', 'Plamper Consulting'),
  sp('berlin-business-office-usa', 'Berlin Business Office USA'),
  sp('sciential', 'Sciential', true),
  sp('frontwell-solutions', 'FrontWell Solutions', true),
]

/** Six pillars of "Community as Infrastructure". `icon` names map to components/ui/Icon.jsx */
export const pillars = [
  {
    icon: 'events',
    title: 'Events & Networking',
    text: 'Curated matchmaking through speed networking and expert-led roundtables that bring the right people and technologies together at the right time.',
    cta: { label: 'Explore Events', to: '/events' },
  },
  {
    icon: 'platform',
    title: 'Online Community',
    text: 'Stay connected across global hubs through online networking, events, upskilling and collaboration.',
    cta: { label: 'Join our Circle Community', href: 'circle' },
  },
  {
    icon: 'career',
    title: 'Career Advancement',
    text: 'Connecting life sciences × tech talent and employers through community-driven recruitment.',
    cta: { label: 'Explore Careers', to: '/careers' },
  },
  {
    icon: 'data',
    title: 'Data & Intelligence',
    text: 'Turning community participation into insights that surface relevant people, needs and opportunities.',
  },
  {
    icon: 'venture',
    title: 'Venture Building',
    text: 'Connecting ventures with the people, knowledge and capital needed to create, scale and innovate.',
  },
  {
    icon: 'cities',
    title: 'Multi-City Collaboration',
    text: 'Connecting life sciences hubs through online and in-person activities to strengthen collaboration across cities.',
  },
]

export const verticals = ['Biotech', 'Pharma', 'Digital Health', 'MedTech', 'AI']

export const eventFormat = [
  { value: '60', label: 'Curated participants' },
  { value: '7 × 6', unit: 'min', label: '1:1 speed-networking conversations' },
  { value: '6', label: 'Expert-led roundtables' },
  { value: '+', label: 'Open networking' },
]

export const cities = [
  {
    city: 'Berlin',
    country: 'Germany',
    text: 'Our founding hub — curated life sciences × tech events in the heart of Berlin’s innovation ecosystem.',
    image: '/images/photos/berlin.webp',
  },
  {
    city: 'Frankfurt–Rhein-Main',
    country: 'Germany',
    text: 'Connecting one of Germany’s key pharma, biotech and innovation regions.',
    image: '', // TODO add a Frankfurt–Rhein-Main photo
  },
  {
    city: 'Basel',
    country: 'Switzerland',
    text: 'Engaging professionals across Switzerland’s life sciences and technology ecosystem.',
    image: '', // TODO add a Basel photo
  },
]
