# Mugalya Ronald — portfolio frontend

A responsive, static portfolio for freelance web development, custom CMS services, Windows troubleshooting, networking, and automation.

## Preview locally

Open `index.html` directly in a browser, or run `node server.cjs` and visit http://localhost:4173. No installation or build is needed. Google Fonts is optional; system fonts work offline.

## Files

- `index.html`: personal story, services, demonstration, and contact details.
- `style.css`: responsive design.
- `app.js`: interactive demo theme switcher and copyright year.
- `server.cjs`: local preview server.

## Content boundaries

The illustrated site and interactive concept are labelled demonstrations, not client work. Metrak Real Estate and Girls Lifeline Organisation are included as websites Ronald built and manages, at his request. The supplied promotional poster is preserved unchanged; the standalone portrait is displayed at its natural proportions. No testimonials or invented results are included. ITN is recorded as completed, and the remaining CCNA studies and diploma as in progress.

The site remains static: no CMS, account system, database, or self-hosted backend. The optional contact form posts directly to Formspree, which supplies the third-party backend. WhatsApp, telephone, and email links use visitors' external apps and remain available. AI skills are listed in the About section.

## Contact form: external setup required

1. Create a Formspree account and form at https://formspree.io/. Set and verify the recipient inbox (mugalyaronald77@gmail.com, if desired) as prompted by Formspree.
2. Copy the endpoint from the form's Integration section.
3. In index.html replace https://formspree.io/f/YOUR_FORM_ID with that endpoint. This public form ID is not a secret. Never add account passwords, API secrets, or SMTP credentials to these public files.
4. Deploy the same static files through the existing GitHub Pages workflow. No build, package, or hosting change is required.
5. Submit a real enquiry from the published site, check the Formspree result and dashboard, and verify receipt in the intended inbox, including spam. Test an invalid email and an empty required field. Test a failed/offline submission and use the existing contact links as fallback.

Until a valid endpoint is configured, the form remains disabled and explains the alternative contact methods. app.js enables it only for a configured Formspree endpoint. Without JavaScript, use the existing contact links. Native HTML validation checks required fields and email format. Submission navigates to Formspree's response page; this site does not claim delivery or clear the message before submission. The _gotcha honeypot helps filter basic spam; review service spam settings and current usage limits in your account.

Visitor names, emails, and messages are processed by Formspree. Review its privacy terms and account retention settings before activation. No service account was created and no email delivery has been verified as part of this code change.

## GitHub Pages

Upload the files to a repository. In Settings → Pages, choose deployment from a branch, then select the main branch and root folder. All asset links are relative so the site supports a repository subpath. `server.cjs` is only for local preview.
