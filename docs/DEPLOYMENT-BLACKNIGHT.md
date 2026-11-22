# Deploying to Blacknight (or any standard shared hosting)

The website is a set of static files plus one small PHP script for the contact form. Any Apache-based shared host with PHP works. Blacknight's Linux hosting fits that description.

> ⚠️ **Before you start:** make sure you are uploading to the **correct, empty location** and that you are **not overwriting an existing live website**. If a site already exists on the domain, download a full backup of it first (see step 3).

---

## 1. Build the site

```bash
cd site
```

```bash
npm install
```

```bash
npm run build
```

The finished website is now in **`site/dist/`**. Upload **its contents** (not the `dist` folder itself).

Check that `site/dist/` contains `index.html`, `.htaccess`, `404.html`, `sitemap.xml`, `robots.txt` and the folders `assets/`, `images/`, `api/` and `about/` … `partners/`.

> `.htaccess` starts with a dot, so it is hidden on macOS and Linux. In your FTP client, turn on **"Show hidden files"**.

## 2. Before uploading: configure

1. **`site/src/content/site.js`**: set `site.url` to the final domain (used for canonical URLs and the sitemap), then confirm the links (see `CONTENT-CHECKLIST.md`). Rebuild after changes.
2. **`site/dist/api/config.php`** (or `site/public/api/config.php` before building): set
   - `to_email`: where enquiries go
   - `from_email`: a mailbox **on the website's own domain** (e.g. `website@lifesciencestechnetwork.com`). Create this mailbox in the Blacknight control panel if needed.
   - `allowed_origins`: the final domain(s), with and without `www`

## 3. Connect with FTP/FTPS

Get these from the Blacknight control panel (cp.blacknight.com → your hosting package → FTP accounts):

| Setting | Value |
|---|---|
| Host | the FTP hostname shown in the control panel (often `ftp.yourdomain.com` or the server name) |
| Protocol | **FTP with explicit TLS (FTPS)**, preferred over plain FTP |
| Port | 21 |
| User / password | your FTP account |

Use an FTP client such as **FileZilla** (free) or **Cyberduck**.

- Find the **web root**. On Blacknight Linux hosting this is normally `/httpdocs` (or `/public_html` on some plans). Files must go *inside* this folder.
- **If files already exist there:** download a copy to your computer first as a backup, and agree with the team before replacing anything.

## 4. Upload

1. Upload **everything inside `site/dist/`** into the web root, keeping the folder structure.
2. Use **binary** transfer mode, which FileZilla's "Auto" setting handles.
3. Check `.htaccess` and `api/` were uploaded.

## 5. Test

Open the site in a browser and check:

- [ ] Home loads with images and fonts
- [ ] `/about`, `/events`, `/community`, `/careers`, `/partners`, `/contact` work, including after a browser refresh
- [ ] A made-up URL (e.g. `/test-404`) shows the branded 404 page
- [ ] **Contact form**: send a test message and confirm it arrives (check spam). See `CONTACT-FORM.md` if it doesn't.
- [ ] "Join the Network" opens Circle

## 6. HTTPS

Once the SSL certificate is active on the domain (Blacknight offers free Let's Encrypt certificates in the control panel), open `.htaccess` and **uncomment** the "Force HTTPS" lines:

```apache
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Do this only after HTTPS works, or the site becomes unreachable.

## Updating the site later

1. Edit files in `site/src/content/` (or swap images in `site/public/images/`).
2. Run `npm run build`.
3. Upload the contents of `site/dist/` again, overwriting the old files. Old files in `assets/` can be deleted; their names change with each build.

## Hosting in a sub-folder

If the site must live at e.g. `example.com/lstn/`, set `base: '/lstn/'` in `site/vite.config.js`, update absolute paths in the content files, and adjust `ErrorDocument` in `.htaccess`. Root-level hosting is recommended.

## Other hosts

The same `dist/` folder works on any static host. Without Apache (e.g. nginx), replicate the `.htaccess` rules: serve `/page` from `/page/index.html` and use `404.html` for unknown URLs. The contact form then needs PHP, or switch to a hosted form service (see `CONTACT-FORM.md`).
