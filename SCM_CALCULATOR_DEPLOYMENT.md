# SCM calculator deployment

The calculator is available at `/portal`.

## Vercel

Add this environment variable to Production, Preview and Development:

```text
NUXT_PUBLIC_SCM_CALCULATOR_API_BASE=https://api.createdelivercapture.com
```

Replace the hostname with the HTTPS hostname used for the EC2 API if different,
then redeploy the project.

## Files added

- `app/pages/portal.vue`
- `app/components/ScmSavingsCalculator.vue`

## Files updated

- `nuxt.config.ts`
- `package.json`
- `package-lock.json`

The added `better-sqlite3` dependency is required by the repository's existing
Nuxt Content module. It fixes a missing adapter that otherwise prevents a clean
production build.

## Backend dependency

Deploy the separate `CDC_SCM_Calculator_Backend.zip` package to EC2 before
publishing the portal. Confirm its `/health` endpoint works over HTTPS and that
its `ALLOWED_ORIGINS` contains the exact Vercel production and preview origins
that should access the API.
