import { site } from '../content/site'
import Placeholder from '../components/ui/Placeholder'

/*
 * IMPORTANT: These are structural templates only, not legal advice.
 * Replace all [bracketed] placeholders with text approved by LSTN / legal counsel
 * before launch. A German Impressum (§ 5 DDG) and a GDPR-compliant privacy
 * policy are required for a website operated from Germany.
 */

function LegalHero({ title }) {
  return (
    <header className="page-hero" style={{ paddingBottom: '3rem' }}>
      <div className="container"><p className="eyebrow">Legal</p><h1 style={{ fontSize: 'var(--fs-3xl)' }}>{title}</h1></div>
    </header>
  )
}

export function Privacy() {
  return (
    <>
      <LegalHero title="Privacy Policy" />
      <section className="section section--white">
        <div className="container">
          <Placeholder light label="Final privacy policy text required" hint="Replace this page’s content with the approved GDPR privacy policy before launch." style={{ minHeight: 0, marginBottom: '2rem' }} />
          <div className="prose">
            <h2>1. Controller</h2>
            <p>[Legal entity name, address, contact details of the controller.] Email: <a href={`mailto:${site.email}`}>{site.email}</a></p>
            <h2>2. Hosting</h2>
            <p>[Hosting provider name and address, e.g. Blacknight Internet Solutions Ltd., Ireland. Describe server log files (IP address, date/time, pages requested) and retention period.]</p>
            <h2>3. Contact form</h2>
            <p>When you use our contact form we process the data you provide (name, email address, organization, enquiry type, message) to respond to your enquiry (Art. 6(1)(b) and (f) GDPR). [Describe how the message is delivered — e.g. by email via our hosting provider — and how long it is stored.]</p>
            <h2>4. External links and embedded services</h2>
            <p>Our website links to external platforms such as Circle, LinkedIn and Linktree. These services are only contacted when you click a link. [Add details for any embedded video or other third-party service used.]</p>
            <h2 id="cookies">5. Cookies &amp; analytics</h2>
            <p>This website does not set cookies and does not use analytics or tracking tools. Fonts are hosted on our own server, so no data is sent to font providers. [If analytics or embedded media are added later, update this section and add a consent banner.]</p>
            <h2>6. Your rights</h2>
            <p>[Rights of access, rectification, erasure, restriction, data portability, objection, and the right to lodge a complaint with a supervisory authority.]</p>
            <p><em>Last updated: [date]</em></p>
          </div>
        </div>
      </section>
    </>
  )
}

export function Imprint() {
  return (
    <>
      <LegalHero title="Imprint" />
      <section className="section section--white">
        <div className="container">
          <Placeholder light label="Final legal notice (Impressum) required" hint="Fill in the details below before launch." style={{ minHeight: 0, marginBottom: '2rem' }} />
          <div className="prose">
            <h2>Information according to § 5 DDG</h2>
            <p>[Legal entity name and legal form]<br />[Street and number]<br />[Postcode, City]<br />[Country]</p>
            <h3>Represented by</h3>
            <p>[Name(s) of authorised representative(s)]</p>
            <h3>Contact</h3>
            <p>Email: <a href={`mailto:${site.email}`}>{site.email}</a><br />Phone: [phone number]</p>
            <h3>Register entry</h3>
            <p>[Register court and registration number, if applicable]</p>
            <h3>VAT ID</h3>
            <p>[VAT identification number according to § 27a UStG, if applicable]</p>
            <h3>Responsible for content</h3>
            <p>[Name and address of the person responsible for editorial content]</p>
          </div>
        </div>
      </section>
    </>
  )
}
