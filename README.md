# One Love Kids Tennis

Static website for [onelovekidstennis.com](https://onelovekidstennis.com), built with Next.js and exported for GitHub Pages.

## Update the site

- Main page content: `app/page.tsx`
- Visual styling: `app/globals.css`
- Registration PDF: `public/2026-registration-form.pdf`
- Custom domain: `public/CNAME`

The dates and prices currently shown are temporary 2026 placeholders and should be updated before the next registration period.

## Local preview

```bash
npm install
npm run dev
```

## Deployment

Pushes to `main` are built and deployed by `.github/workflows/deploy-pages.yml`. In the repository's **Settings → Pages**, set the source to **GitHub Actions**.

Before changing DNS, verify the GitHub Pages URL. Then configure the apex domain using GitHub's current Pages DNS instructions and add `www` as a CNAME to `logmaund.github.io`.
