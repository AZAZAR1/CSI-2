# CSI Website (Vercel) — Static + Python API (Option A)

Multilingual static site (EN/FR/DE) + Vercel Python serverless contact form.

## Deploy
1. Import this folder into a Vercel project.
2. Set Environment Variables (Project Settings):

- `CSI_ADMIN_TO` = `CDCAdmin@cdc-advisory.com`
- `CSI_FROM_EMAIL` = sender address (e.g. `no-reply@cigarsommelierinstitute.com`)
- `CSI_SMTP_HOST` = SMTP host
- `CSI_SMTP_PORT` = `587`
- `CSI_SMTP_USER` = SMTP username
- `CSI_SMTP_PASS` = SMTP password / app password
- `CSI_SMTP_TLS` = `true`

If SMTP vars aren’t set, messages will log in function output (no emails sent).

## Domain
Add `cigarsommelierinstitute.com` in Vercel → Domains.
