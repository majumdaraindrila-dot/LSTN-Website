# Pre-launch content checklist

Every item below is a placeholder or an unconfirmed value in the current build. Search the code for `TODO` to find each one.

## Links (`site/src/content/site.js`)

- [ ] **Final domain:** `site.url` (currently `https://www.lifesciencestechnetwork.com`, assumed from the email domain)
- [x] **Circle (global):** `https://bit.ly/lstn-circle`, as supplied in the brief
- [ ] **Germany hub URL:** currently falls back to the global Circle link
- [ ] **Switzerland hub URL:** currently falls back to the global Circle link
- [ ] **LinkedIn company page:** `https://www.linkedin.com/company/life-sciences-tech-network/` is a *best guess* and **must be verified**
- [ ] **Newsletter sign-up URL:** currently points to the Linktree
- [ ] **Event highlight reels** (AI × Life Sciences, Life Sciences Startups): buttons show "coming soon"
- [ ] **Regional sponsorship decks:** buttons go to the contact form until PDFs are approved for public download

## Numbers & claims

- [ ] **Followers:** the home brief says **5,000+**, the 2026 sponsorship deck says **4,250+**. The site uses 5,000+ everywhere (one setting in `stats`).
- [ ] 60 curated participants / 15+ organizations: confirm still accurate
- [ ] Audience composition chart (Partners page) uses 2026 deck figures: confirm
- [ ] Dennis K. title: the deck says "Consultant, Temedica", the home brief says "Angel Investor and Consultant". Pick one.

## Images & media

- [ ] **8–15 high-quality event photos** with permission. The current photos were extracted from the brand PDFs; several are small (≈600 px) and should be replaced with originals.
- [ ] **Nicholas C. Fiorenza portrait:** the brief says it needs to change
- [ ] Founder LinkedIn profile URLs
- [ ] Volunteer & ambassador names, roles, photos, LinkedIn links (4 labelled placeholders on About)
- [ ] Frankfurt–Rhein-Main and Basel city photos (labelled placeholders on Events)
- [ ] **Authentic Circle screenshot** for the laptop mockup (Community page)
- [ ] Separate testimonial portraits in higher resolution (current ones come from the deck)
- [ ] Hero video (optional)
- [ ] Original LSTN logo files. The site uses a vector trace of the logo from the ecosystem graphic; compare it with the master SVG.

## Logos

- [ ] **Approval to display** each organization and sponsor logo, plus the wording "Organizations represented across our network" and "Past event sponsors"
- [ ] Higher-resolution / SVG versions of logos (the current ones come from the deck)

## Legal (required before launch, Germany)

- [ ] **Imprint (Impressum):** legal entity, address, representatives, register, VAT ID (`site/src/pages/Legal.jsx`)
- [ ] **Privacy Policy:** controller, hosting, contact form processing, rights (template provided)
- [ ] Cookie/analytics: the site currently uses **no cookies or analytics**, so no cookie banner is needed. If analytics or embedded YouTube are added, add a consent tool and update the policy.

## Brand

- [ ] Web-font licences for **Nourd** and **Computer Says No** (substitutes in use until then)
- [ ] Confirm brand hex codes. The ones in use are from *LSTN Designs 2026*: `#321B45 #4D2A69 #D3BEE4 #96F200 #C7FF6D #EFFFD5 #FD2FEE #FD67F2 #FFE5FD`.

## Contact form

- [ ] Set `to_email`, `from_email`, `allowed_origins` in `public/api/config.php`
- [ ] Send a test submission after upload
