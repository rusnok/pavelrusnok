# Pavel Rusnok – Personal Website

Modern personal brand site for **Pavel Rusnok** — AI/ML engineer, coach and consultant.

**Live (after enabling GitHub Pages):** https://rusnok.github.io/pavelrusnok/

## Sections

- **Hero** – clear value proposition for new clients
- **About** – background (Barclays, Siemens, PhD, teaching)
- **Services** – Coaching · Consulting · AI/ML Solutions
- **Contact** – direct email CTA

## Tech stack

- React 19 + TypeScript
- Vite
- Modern CSS (no heavy UI library)
- Optimised for **GitHub Pages** (`base: '/pavelrusnok/'`)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to GitHub Pages

### Option A – GitHub Actions (recommended)

1. Go to **Settings → Pages**
2. Source: **GitHub Actions**
3. Push to `main` (or run the workflow manually). A ready-to-use workflow is already in `.github/workflows/deploy.yml`.

### Option B – Manual

```bash
npm install -D gh-pages
npm run deploy
```

## Custom domain later

When you have `pavelrusnok.net` (or .cz / .eu), just add a `CNAME` file in `public/` and update DNS.

---

Built for client acquisition. Feel free to edit copy, add a photo, case studies or a calendar link.
