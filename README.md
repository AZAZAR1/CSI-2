# CSI — Cigar Sommelier Institute (Next.js 15)

## Changes from Next.js 14 → 15

### Breaking change: `params` is now a Promise
In Next.js 15, route segment `params` (and `searchParams`) are **async Promises** and must be awaited before use.

All page and layout components have been updated:

```tsx
// ❌ Next.js 14
export default function Page({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  ...
}

// ✅ Next.js 15
export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  ...
}
```

### New: `components/ContactForm.tsx`
The contact form's client-side logic (using `useSearchParams`) was extracted into a dedicated
`'use client'` component. The parent `contact/page.tsx` is now a proper async Server Component,
which correctly passes `lang` after awaiting params. The `<Suspense>` wrapper is still required
around `ContactForm` because it calls `useSearchParams`.

### `next.config.js` → `next.config.ts`
Migrated to the TypeScript config format introduced in Next.js 15.

### Dependency versions
- `next`: `^15.0.0`
- `react` / `react-dom`: `^19.0.0`
- `@types/react` / `@types/react-dom`: `^19`

## Setup

```bash
npm install
npm run dev
```

## Environment variables (for contact form emails)

Create a `.env.local` file:

```
CSI_ADMIN_TO=admin@yourdomain.com
CSI_FROM_EMAIL=noreply@yourdomain.com
CSI_SMTP_HOST=smtp.yourdomain.com
CSI_SMTP_PORT=587
CSI_SMTP_USER=your_user
CSI_SMTP_PASS=your_password
CSI_SMTP_TLS=true
```

If not configured, form submissions are logged to the console instead.
