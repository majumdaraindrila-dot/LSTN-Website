# Contact form: how submissions are received

A static website can't send email on its own. The form needs a small **backend** to receive submissions. Two options are prepared. You choose with one setting, `contactForm.endpoint` in `site/src/content/site.js`.

The form sends: full name, email, organization (optional), enquiry type, message, privacy consent, plus two hidden anti-spam fields (honeypot and time-to-complete).

---

## Option A (default, recommended for Blacknight): bundled PHP mailer

**Files:** `site/public/api/contact.php` and `site/public/api/config.php`
**Endpoint:** `'/api/contact.php'` (already set)

- Runs on the same hosting as the website, so **no extra service or cost** is needed and data doesn't leave your host (good for GDPR).
- Validates input, blocks email-header injection, has a honeypot and minimum fill-time spam trap, rate-limits to 5 messages per IP per hour, and checks the request origin.
- Sends a plain-text email with **Reply-To set to the enquirer**, so you can just hit Reply.
- Can route topics to different inboxes (`topic_recipients` in `config.php`).
- Stores nothing except a temporary, hashed rate-limit counter.

**Setup:**
1. In `config.php`, set `to_email`, `from_email` (must be a mailbox on the site's own domain) and `allowed_origins`.
2. Make sure the hosting plan has PHP enabled, which it does by default on Blacknight Linux hosting.
3. Upload, then send a test message.

**If messages don't arrive:**
- Check the spam folder.
- `from_email` must be an address on your domain. Many hosts reject other senders.
- Ask Blacknight support whether PHP `mail()` is enabled on your plan, or whether they require SMTP. If they require SMTP, the script can be switched to an SMTP library (e.g. PHPMailer) using your mailbox credentials. Or use Option B.
- Setting up SPF/DKIM records for the domain improves deliverability. That is a DNS change, so do it only with approval.

## Option B: hosted form service (no PHP needed)

Use this if the host has no PHP, or you prefer a dashboard and spam filtering.

| Service | Free tier | Notes |
|---|---|---|
| **Formspree** (formspree.io) | 50 submissions/month | Simple, EU data-processing agreement available |
| **Web3Forms** (web3forms.com) | 250/month | Access-key based |
| **Basin** (usebasin.com) | Limited | Good spam filtering |

**Setup (Formspree example):**
1. Create a form at formspree.io and copy the endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
2. In `site/src/content/site.js`, set `contactForm.endpoint: 'https://formspree.io/f/abcdwxyz'`.
3. Rebuild and upload. You can delete the `api/` folder.
4. Add the service to the Privacy Policy as a data processor.

The form already sends `Accept: application/json` and reads `{ ok: true }` or HTTP status, which is compatible with Formspree.

## Privacy

- The form requires explicit consent (checkbox linked to `/privacy`).
- Update the Privacy Policy section "Contact form" to describe the option you chose and the retention period.
