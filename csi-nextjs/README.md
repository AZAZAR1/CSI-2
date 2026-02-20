# CSI — Next.js Site

Converted from static HTML/Vercel to a full **Next.js 14 App Router** project.

## Structure

```
app/
  layout.tsx               # Root layout (loads global CSS)
  page.tsx                 # Redirects / → /en
  [lang]/
    layout.tsx             # Language segment layout
    page.tsx               # Home
    programs/page.tsx
    about/page.tsx
    system/page.tsx
    partners/page.tsx
    contact/page.tsx       # Client component with fetch form
    ccs/page.tsx
    acs/page.tsx
    amc/page.tsx
    privacy/page.tsx
    terms/page.tsx
  api/
    contact/route.ts       # POST handler (replaces api/contact.py)
components/
  Nav.tsx                  # Sticky nav with lang switcher
  Footer.tsx
  ProgramDetail.tsx        # Reusable program detail layout
lib/
  i18n.ts                  # EN / FR / DE translations + t() helper
public/
  assets/                  # CSS, images, brochures (unchanged)
```

## Getting Started

```bash
npm install
cp .env.example .env.local   # Fill in SMTP settings
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/en`.

## i18n

Language switching works by navigating to `/{lang}/{page}`. Supported: `en`, `fr`, `de`.
All strings live in `lib/i18n.ts` — add new languages by adding a new key there.

## Contact API

The Python `api/contact.py` (Vercel serverless) is replaced by `app/api/contact/route.ts`.
It uses **nodemailer** and the same `CSI_SMTP_*` environment variables.

Install nodemailer:
```bash
npm install nodemailer
npm install -D @types/nodemailer
```

## Deployment (Vercel)

Push to GitHub and import to Vercel. Set env vars in the Vercel dashboard.
The `vercel.json` from the original project is no longer needed.
