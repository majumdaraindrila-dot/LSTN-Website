/**
 * ============================================================================
 *  PAGE COPY
 * ============================================================================
 *  All visible text for each page lives here, in page order.
 *  Edit the strings — layouts update automatically.
 *  Images: paths point into /public/images.
 *  CTA destinations: `to` = page on this site, `href: 'circle'` = Circle link
 *  from site.js, any other `href` = external URL.
 * ============================================================================
 */

export const home = {
  hero: {
    eyebrow: 'Life Sciences × Technology',
    title: 'Where life sciences and technology connect to advance health',
    highlight: 'connect', // word shown in lime
    text: 'LSTN connects and advances leaders, founders, builders and operators in life sciences to build better relationships, unlock opportunities, knowledge, and skills, and collaborate to advance health.',
    primary: { label: 'Join the Network', href: 'circle' },
    secondary: { label: 'Explore Events', to: '/events' },
    image: '/images/photos/event-room.webp',
    // Optional background video (muted loop). Put the file in /public/videos and set e.g. '/videos/hero.mp4'.
    video: null, // TODO add real LSTN event video
  },
  proof: {
    title: 'Connecting the people building the future of health.',
  },
  why: {
    eyebrow: 'Why LSTN exists',
    title: 'From silos to convergence.',
    text: 'The biggest challenges in health cannot be solved by one technology, company or discipline alone. LSTN brings together the people, knowledge, technology, opportunities and capital needed to help these ecosystems connect, collaborate and grow.',
    infraTitle: 'Community as Infrastructure.',
    infraText: 'Facilitating connection, convergence, and coordination in life sciences to advance health and help you grow.',
    cta: { label: 'About LSTN', to: '/about' },
  },
  whatWeDo: {
    eyebrow: 'What we do',
    title: 'One network. Multiple ways to connect and grow.',
    text: 'LSTN creates the infrastructure for meaningful connections and collaborations across the life sciences × tech ecosystem.',
  },
  events: {
    eyebrow: 'Events',
    title: 'Community-driven, curated networking. High-signal, less noise.',
    text: [
      'Large conferences can be expensive, crowded and difficult to navigate.',
      'LSTN creates curated, high-signal networking experiences designed to make it easier to build trust, meet the right people, and form new business development and collaborations.',
    ],
    formatTitle: 'Our flagship format',
    format: [
      { title: 'Leaders and builders in the same room', text: 'Curating leaders, builders and operators across life sciences × tech to connect and address key challenges.' },
      { title: 'Speed Networking', text: 'Connecting you with the right person or team through 1:1 matchmaking.' },
      { title: 'Expert-led roundtables', text: 'Discuss key challenges to unlock new knowledge, skills and partnerships.' },
      { title: '+ Open networking', text: 'Continue the conversations that matter most.' },
    ],
    images: ['/images/photos/speed-networking-berlin.webp', '/images/photos/roundtable-berlin.webp', '/images/photos/one-to-one-conversation.webp'],
    cta: { label: 'View Events', to: '/events' },
  },
  outcomes: {
    eyebrow: 'Real connections. Real outcomes.',
    title: 'More than networking.',
    text: 'LSTN is designed to create connections that continue after the event ends.',
  },
  network: {
    eyebrow: 'The network',
    title: 'Across life sciences. Across technology.',
    text: 'LSTN connects professionals and organizations across:',
    orgsTitle: 'Organizations represented across our network',
    sponsorsTitle: 'Past event sponsors',
  },
  community: {
    eyebrow: 'Community',
    title: 'One network. Multiple hubs.',
    lead: 'Connect with the LSTN community online and in person.',
    text: 'Meet professionals across life sciences × tech, discover events and opportunities, exchange knowledge and build relationships beyond individual events.',
    cards: [
      { title: 'Global Community', text: 'Connect through the LSTN online community.', cta: { label: 'Join the Global Hub', href: 'circle' } },
      { title: 'Germany', text: 'Join the German life sciences × tech community and discover local events.', cta: { label: 'Join Germany', href: 'circleGermany' }, places: 'Berlin · Frankfurt–Rhein-Main' },
      { title: 'Switzerland', text: 'Connect with the growing LSTN community in Switzerland.', cta: { label: 'Join Switzerland', href: 'circleSwitzerland' }, places: 'Basel' },
    ],
    more: { label: 'Explore Community', to: '/community' },
  },
  careers: {
    eyebrow: 'Careers',
    title: 'Grow your career — or your team.',
    lead: 'Great ecosystems depend on great people.',
    text: 'LSTN supports professional growth and company growth through high-trust, community-driven recruitment, connecting life sciences × tech professionals with relevant opportunities and employers.',
    talent: { title: 'Looking for your next opportunity?', cta: { label: 'Get Matched', href: 'circle' } },
    employers: { title: 'Looking for talent?', cta: { label: 'Hire Through LSTN', to: '/contact?topic=careers' } },
    more: { label: 'Explore Careers', to: '/careers' },
  },
  partners: {
    eyebrow: 'Partners & sponsors',
    title: 'Put your company at the center of advancing health.',
    text: 'Partner with LSTN to connect with curated leaders and builders across life sciences × technology. Build your presence through:',
    benefits: [
      { icon: 'visibility', title: 'Brand Visibility', text: 'Build awareness before, during and after events.' },
      { icon: 'bizdev', title: 'Business Development', text: 'Create meaningful relationships with potential clients and collaborators online and offline.' },
      { icon: 'match', title: 'Curated Matchmaking', text: 'Meet relevant professionals through targeted networking, online and offline.' },
      { icon: 'leadership', title: 'Thought Leadership', text: 'Lead conversations through expert roundtables and community activities.' },
    ],
    primary: { label: 'Become a Partner', to: '/contact?topic=partnerships' },
    secondary: { label: 'Explore Partnerships', to: '/partners' },
  },
  finalCta: {
    title: 'Join a growing community of leaders and builders advancing health at the intersection of life sciences and tech.',
    primary: { label: 'Join the Network', href: 'circle' },
    secondary: { label: 'Explore Upcoming Events', to: '/events' },
  },
}

export const about = {
  hero: {
    eyebrow: 'About us',
    title: 'Connecting people. Breaking silos. Advancing health.',
    text: 'Life Sciences Tech Network (LSTN) is a growing community connecting professionals, innovators, and companies across life sciences and technology to advance health.',
    image: '/images/photos/roundtable-berlin.webp',
  },
  mission: {
    title: 'Our Mission',
    text: 'To break down silos across life sciences and technology by connecting the right people, knowledge, resources, and opportunities.',
  },
  vision: {
    title: 'Our Vision',
    text: 'A connected global ecosystem where collaboration accelerates innovation, business growth, and better health outcomes.',
  },
  story: {
    eyebrow: 'Why we started',
    title: 'Great connections shouldn’t depend on expensive conferences.',
    text: [
      'Traditional industry events can be costly, crowded, and often lack meaningful follow-up. Meanwhile, valuable knowledge, talent, and opportunities remain scattered across disconnected networks.',
      'We started LSTN to change that — making high-value networking more accessible, targeted, and impactful.',
      'Today, we’re building a strong network of founders, scientists, operators, investors, and industry leaders who come together to share knowledge, build relationships, and create real business opportunities.',
    ],
    image: '/images/photos/one-to-one-conversation.webp',
  },
  infrastructure: {
    eyebrow: 'Community as Infrastructure',
    title: 'Stronger connections. More trust. Better collaborations.',
    text: [
      'We believe trust is essential to real collaboration and innovation.',
      'Through curated events, an online community, career connections, and cross-city collaboration, LSTN creates opportunities for people and organizations to connect, collaborate and grow.',
    ],
    closing: 'Because the future of health will need to be built together.',
    cta: { label: 'Explore the Ecosystem', to: '/about#ecosystem' },
  },
  ecosystem: {
    eyebrow: 'Ecosystem model',
    title: 'From fragmented ecosystems to collective advancement.',
    text: 'Bringing people, expertise, data, technology, and capital together.',
  },
  team: {
    eyebrow: 'Founders & team',
    title: 'Meet the People Behind LSTN',
    text: 'Built by life sciences leaders and builders, LSTN brings together a team of founders, volunteers, and ambassadors committed to strengthening the ecosystem.',
    volunteersTitle: 'Volunteers & Ambassadors',
  },
  finalCta: {
    title: 'Because the future of health is built together.',
    primary: { label: 'Join the Network', href: 'circle' },
  },
}

export const events = {
  hero: {
    eyebrow: 'Events',
    title: 'Better networking. Less noise.',
    text: 'Meet the people shaping life sciences and technology through curated conversations, expert-led discussions, and meaningful connections.',
    primary: { label: 'Join Our Events', href: 'circle' },
    note: 'Event announcements and registration happen in our Circle community.',
    image: '/images/photos/event-hall.webp',
    video: null, // TODO optional short highlight video, e.g. '/videos/events-hero.mp4'
  },
  formats: {
    eyebrow: 'Speed networking & roundtables',
    title: 'Designed for meaningful connections.',
    text: 'Skip the conference noise. Connect directly with relevant founders, operators, scientists, and industry leaders.',
    cards: [
      { title: 'Speed Networking', text: 'Focused 1:1 conversations that help you meet relevant people and make every introduction count.', image: '/images/photos/speed-networking-berlin.webp' },
      { title: 'Expert Roundtables', text: 'Small-group discussions led by industry experts, designed to exchange knowledge and explore opportunities.', image: '/images/photos/roundtable-berlin.webp' },
    ],
  },
  format: {
    eyebrow: 'Our event format',
    title: 'Every conversation counts.',
    text: 'A structured experience combining targeted introductions, practical insights, and open networking.',
  },
  cities: {
    eyebrow: 'Where we connect',
    title: 'Local connections. Cross-border opportunities.',
    text: 'Bringing life sciences × tech professionals together in key innovation hubs.',
  },
  highlights: {
    eyebrow: 'Past events & highlights',
    title: 'See the network in action.',
    text: 'From AI in Life Sciences to startup innovation, our events bring people and perspectives together.',
    items: [
      { topic: 'AI × Life Sciences', image: '/images/photos/event-room.webp', video: 'aiInLifeSciences' },
      { topic: 'Life Sciences Startups', image: '/images/photos/speed-networking-berlin.webp', video: 'lifeSciencesStartups' },
      { topic: 'Go-To-Market', image: '/images/photos/roundtable-wide.webp' },
      { topic: 'Speed Networking', image: '/images/photos/attendee-close-up.webp' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'Real conversations. Real outcomes.',
    text: 'Connections that lead to collaborations, projects, and new business opportunities.',
  },
  finalCta: {
    title: 'Don’t miss the next connection.',
    text: 'Join our community to discover events and stay connected.',
    primary: { label: 'Join the Community', href: 'circle' },
  },
}

export const community = {
  hero: {
    eyebrow: 'Community',
    title: 'One network. Multiple hubs.',
    subtitle: 'Connect locally. Collaborate globally.',
    text: 'Join professionals across life sciences and technology to share knowledge, build relationships, and create opportunities.',
    primary: { label: 'Join the Global Hub', href: 'circle' },
    image: '/images/photos/event-hall.webp',
  },
  global: {
    eyebrow: 'Global community',
    title: 'Your network, beyond borders.',
    text: 'Connect with professionals, innovators, and companies across global life sciences × tech ecosystems.',
    cta: { label: 'Join the Global Community', href: 'circle' },
  },
  platform: {
    eyebrow: 'Online platform',
    title: 'Stay connected beyond events.',
    text: 'One space to connect with members, exchange knowledge, and discover opportunities.',
    features: [
      { title: 'Community Feed', text: 'Updates, questions and conversations from members.' },
      { title: 'Announcements', text: 'Be first to hear about upcoming events in every hub.' },
      { title: 'Introduce Yourself', text: 'Share what you’re building and who you want to meet.' },
      { title: 'Events & Matchmaking', text: 'Register for events and business matchmaking at speed.' },
    ],
    // Put a real Circle screenshot at this path to replace the placeholder.
    screenshot: null, // TODO e.g. '/images/circle-screenshot.webp'
    cta: { label: 'Explore the Community', href: 'circle' },
  },
  hubs: {
    eyebrow: 'Regional hubs',
    title: 'Local communities. Global connections.',
    text: 'Build stronger networks through regional engagement and collaboration.',
    cards: [
      { title: 'Germany', text: 'Connect with life sciences × tech professionals across Germany, including Berlin and Frankfurt–Rhein-Main.', places: ['Berlin', 'Frankfurt–Rhein-Main'], cta: { label: 'Join Germany', href: 'circleGermany' } },
      { title: 'Switzerland', text: 'Explore connections and opportunities across Switzerland’s life sciences and technology ecosystem.', places: ['Basel'], cta: { label: 'Join Switzerland', href: 'circleSwitzerland' } },
    ],
  },
  collaboration: {
    eyebrow: 'Networking & collaboration',
    title: 'From introductions to opportunities.',
    text: 'Meet relevant people, exchange ideas, and build relationships that extend beyond individual events.',
    steps: [
      { title: 'Connect', text: 'Meet relevant people online and at curated events.' },
      { title: 'Exchange', text: 'Share knowledge, challenges and perspectives.' },
      { title: 'Collaborate', text: 'Turn relationships into projects and partnerships.' },
    ],
  },
  benefits: {
    eyebrow: 'Community benefits',
    title: 'Find your people. Grow your possibilities.',
    items: [
      { icon: 'connections', title: 'Meaningful Connections', text: 'Meet people across life sciences and technology.' },
      { icon: 'knowledge', title: 'Knowledge Exchange', text: 'Learn from expertise and perspectives across the ecosystem.' },
      { icon: 'opportunities', title: 'Opportunities', text: 'Discover relevant collaborations and professional connections.' },
      { icon: 'growth', title: 'Growth', text: 'Build your network, career, and business.' },
    ],
  },
  finalCta: {
    title: 'Your next connection starts here.',
    text: 'Become part of the global life sciences × tech network.',
    primary: { label: 'Join the Global Hub', href: 'circle' },
  },
}

export const careers = {
  hero: {
    eyebrow: 'Careers',
    title: 'The right connections create better opportunities.',
    text: 'Connecting life sciences × tech professionals and employers through community-driven recruitment.',
    primary: { label: 'Find Opportunities', href: 'circle' },
    secondary: { label: 'Find Talent', to: '/contact?topic=careers' },
    imageA: '/images/photos/speed-networking-berlin.webp',
    imageB: '/images/photos/roundtable-berlin.webp',
  },
  why: {
    eyebrow: 'Why community-based recruitment',
    title: 'Beyond job boards. Towards meaningful connections.',
    text: 'Traditional recruitment often starts with job postings and CVs. LSTN brings people and companies together through industry-focused relationships, shared knowledge, and community engagement.',
    traditional: ['Job posting first', 'Broad candidate searches', 'CV-led introductions', 'Often limited to active applicants'],
    community: ['Professional connection first', 'Industry-focused network', 'Knowledge and relationship-led introductions', 'Potential to connect beyond active job seekers'],
    note: 'These are descriptions of the two approaches, not performance guarantees.',
  },
  professionals: {
    eyebrow: 'For professionals',
    title: 'Your next opportunity starts with a connection.',
    text: 'Discover relevant companies, build relationships, exchange knowledge, and explore career opportunities through the LSTN community.',
    image: '/images/photos/one-to-one-conversation.webp',
    benefits: [
      { icon: 'connections', title: 'Relevant Connections', text: 'Meet professionals and organizations across your field.' },
      { icon: 'opportunities', title: 'Career Opportunities', text: 'Discover opportunities through the community.' },
      { icon: 'growth', title: 'Professional Growth', text: 'Learn, share, and advance alongside industry peers.' },
    ],
    cta: { label: 'Join the Career Community', href: 'circle' },
  },
  employers: {
    eyebrow: 'For employers',
    title: 'Find talent through the power of community.',
    text: 'Connect with professionals across biotech, pharma, medtech, digital health, and AI through an industry-focused network.',
    image: '/images/photos/roundtable-wide.webp',
    benefits: [
      { icon: 'reach', title: 'Industry-Focused Reach', text: 'Connect with talent across relevant life sciences and technology disciplines.' },
      { icon: 'match', title: 'Community-Based Matching', text: 'Discover professionals beyond conventional job applications.' },
      { icon: 'longterm', title: 'Long-Term Relationships', text: 'Build meaningful connections with potential future team members.' },
    ],
    cta: { label: 'Hire Through LSTN', to: '/contact?topic=careers' },
  },
  resources: {
    eyebrow: 'Career community & resources',
    title: 'Connect. Learn. Advance.',
    text: 'Access professional connections, industry insights, and career-related opportunities through the community.',
    items: [
      { icon: 'connections', title: 'Networking', text: 'Build relationships with peers, founders and hiring teams.' },
      { icon: 'knowledge', title: 'Knowledge', text: 'Industry insights, roundtables and shared expertise.' },
      { icon: 'growth', title: 'Career Growth', text: 'Opportunities surfaced through the community.' },
    ],
    cta: { label: 'Explore the Community', href: 'circle' },
  },
  finalCta: {
    title: 'Great careers and great teams start with the right people.',
    professionals: { title: 'For professionals', text: 'Join the LSTN community on Circle to discover opportunities.', cta: { label: 'Join the Community', href: 'circle' } },
    employers: { title: 'For employers', text: 'Tell us who you’re looking for and we’ll be in touch.', cta: { label: 'Find Talent', to: '/contact?topic=careers' } },
  },
}

export const partners = {
  hero: {
    eyebrow: 'Partners & sponsors',
    title: 'Grow your business. Strengthen the ecosystem.',
    text: 'Connect with the people, ideas, and opportunities shaping life sciences and technology.',
    primary: { label: 'Become a Partner', to: '/contact?topic=partnerships' },
    image: '/images/photos/event-room.webp',
  },
  why: {
    eyebrow: 'Why partner with LSTN',
    title: 'Access to the right leaders and builders. Meaningful connections.',
    text: 'LSTN connects your organization with founders, scientists, operators, investors, and decision-makers across life sciences × tech.',
    cards: [
      { icon: 'leadership', title: 'Decision-makers', text: 'Executives, senior leaders and founders make up the majority of our audience.' },
      { icon: 'match', title: 'Curated rooms', text: 'Around 60 hand-picked participants per flagship event — high signal, less noise.' },
      { icon: 'cities', title: 'Regional depth', text: 'Hubs in Berlin, Frankfurt–Rhein-Main and Basel, plus a global online community.' },
      { icon: 'growth', title: 'Lasting impact', text: 'Visibility before, during and after events — online and in person.' },
    ],
  },
  sponsorship: {
    eyebrow: 'Sponsorship opportunities',
    title: 'Put your brand at the center of innovation and growth.',
    text: 'Support high-impact networking events and engage with relevant professionals across regional life sciences ecosystems.',
    regions: [
      { key: 'berlin', title: 'Berlin', country: 'Germany', text: 'Connect with founders, operators, and industry leaders through curated life sciences × tech events.', deckLabel: 'View Berlin Sponsorship' },
      { key: 'frankfurt', title: 'Frankfurt–Rhein-Main', country: 'Germany', text: 'Build relationships across one of Germany’s key pharma, biotech, and innovation regions.', deckLabel: 'View Sponsorship Deck' },
      { key: 'basel', title: 'Basel / Switzerland', country: 'Switzerland', text: 'Engage with professionals across Switzerland’s life sciences and technology ecosystem.', deckLabel: 'View Sponsorship Deck' },
    ],
  },
  reach: {
    eyebrow: 'Audience & reach',
    title: 'Reach the leaders and builders driving innovation.',
    text: 'A network spanning biotech, pharma, digital health, medtech, and AI.',
    note: 'Audience composition based on 2026 sponsorship-deck figures.', // TODO confirm figures are current
    composition: [
      { label: 'Vertical', parts: [['Biotech', 30], ['Pharma', 25], ['Digital Health', 25], ['MedTech', 20]] },
      { label: 'Company type', parts: [['Startups', 40], ['Scale-ups', 25], ['Growth', 20], ['Corporate', 15]] },
      { label: 'Seniority', parts: [['Executive', 35], ['Senior', 30], ['Manager', 25], ['Academic', 10]] },
      { label: 'Function', parts: [['Commercial', 30], ['R&D', 25], ['Leadership', 25], ['IT', 20]] },
    ],
  },
  benefits: {
    eyebrow: 'Partner benefits',
    title: 'More than visibility. Real opportunities.',
    text: 'Build relationships, position your expertise, and become part of an active professional community.',
    items: [
      { icon: 'bizdev', title: 'Business Development', text: 'Build relationships with potential clients and collaborators.' },
      { icon: 'visibility', title: 'Brand Visibility', text: 'Increase awareness before, during, and after LSTN events.' },
      { icon: 'match', title: 'Curated Matchmaking', text: 'Connect with professionals relevant to your business.' },
      { icon: 'leadership', title: 'Thought Leadership', text: 'Share expertise through roundtables and community activities.' },
    ],
  },
  sponsors: {
    eyebrow: 'Past event sponsors',
    title: 'Supported by organizations across life sciences.',
  },
  stories: {
    eyebrow: 'Success stories',
    title: 'Partnerships that create impact.',
    text: 'Discover how LSTN connections lead to collaborations and business opportunities.',
  },
  finalCta: {
    title: 'Let’s create opportunities together.',
    text: 'Partner with LSTN to connect, collaborate, and grow.',
    primary: { label: 'Become a Partner', to: '/contact?topic=partnerships' },
  },
}

export const contact = {
  hero: {
    eyebrow: 'Contact',
    title: 'Let’s connect.',
    text: 'Have a question, an idea, or an opportunity to collaborate? We’d love to hear from you.',
  },
  types: {
    title: 'How can we help?',
    text: 'Whether you’re interested in partnerships, community, careers, or events, start here.',
    cards: [
      { icon: 'mail', title: 'General Enquiries', text: 'Questions about LSTN or anything else.', topic: 'general' },
      { icon: 'bizdev', title: 'Partnerships', text: 'Sponsorship and partnership opportunities.', topic: 'partnerships' },
      { icon: 'connections', title: 'Community', text: 'Hubs, membership and volunteering.', topic: 'community' },
      { icon: 'events', title: 'Careers & Events', text: 'Hiring through LSTN or event questions.', topic: 'careers' },
    ],
  },
  form: {
    title: 'Start a conversation.',
    text: 'Tell us a little about your enquiry and we’ll direct it to the right place.',
    topics: [
      { value: 'general', label: 'General' },
      { value: 'partnerships', label: 'Partnerships & Sponsorships' },
      { value: 'community', label: 'Community' },
      { value: 'events', label: 'Events' },
      { value: 'careers', label: 'Careers & Recruitment' },
    ],
    success: 'Thank you — your message has been sent. We’ll get back to you soon.',
    error: 'Sorry, something went wrong sending your message. Please try again or email us directly.',
  },
  social: {
    title: 'Stay connected.',
    text: 'Follow LSTN and explore our professional community.',
  },
}
