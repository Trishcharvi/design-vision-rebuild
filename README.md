# Design Vision — Corporate Website

Static website for **Design Vision**, a pipeline and oil & gas engineering consultancy based in
Pune, India. Live at <https://designvision-oilandgas.com>.

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** hand-written CSS in `src/app/globals.css` (no Tailwind, no CSS framework)
- **Output:** fully static export (`output: 'export'`) — no server, no serverless functions
- **Hosting:** Netlify, building from GitHub `main`
- **Repository:** `Trishcharvi/design-vision-rebuild`

---

## Local development

```bash
npm ci          # install exactly what package-lock.json specifies
npm run dev     # dev server at http://localhost:3000
npm run build   # production build + static export into out/
npm run lint    # eslint
```

`npm run build` must finish with no errors before pushing. It runs ESLint and the TypeScript
compiler, then prerenders every route and writes the static site to `out/`.

To check the built site exactly as Netlify will serve it:

```bash
npx serve out        # then open the printed localhost URL
```

Do not open `out/index.html` directly with `file://` — asset paths are absolute (`/_next/...`)
and will not resolve.

---

## Deployment

Netlify builds from the GitHub repository. There is nothing to upload by hand.

```bash
git add -A
git commit -m "Describe the change"
git push origin main
```

Netlify then runs `npm run build` and publishes `out/`. Settings that must stay as they are:

| Netlify setting | Required value |
| --- | --- |
| Base directory | *(empty — the repo root is the project root)* |
| Build command | `npm run build` |
| Publish directory | `out` |
| Node version | `22` (set in `netlify.toml`) |
| Next.js Runtime plugin | **not installed** — this is a static export |

`netlify.toml` in the repo root is the source of truth for the build command, publish directory,
Node version, security headers and cache headers. If the Netlify UI and `netlify.toml` disagree,
`netlify.toml` wins for build settings.

### If a deploy fails

1. Read the Netlify deploy log top to bottom — the first error is the real one.
2. Reproduce locally with `npm ci && npm run build`. A build that fails locally will fail there.
3. Check the **base directory** is empty. If the repo is ever nested one folder deep, this is the
   setting that breaks it.
4. Check the **Next.js Runtime** plugin is not installed. It conflicts with `output: 'export'`.
5. Confirm `node_modules`, `.next` and `out` are not committed (see `.gitignore`).

---

## Project structure

```
src/
  data/
    site.ts          Company name, contact details, address — single source of truth
    services.ts      The 11 engineering disciplines + the pipeline lifecycle phases
    sectors.ts       The 4 business areas (industries)
  components/
    Header.tsx       Top bar + sticky nav with dropdown menus (client component)
    Footer.tsx       Four-column footer, generated from the data files
    ServiceCards.tsx Discipline cards for the homepage
    Lifecycle.tsx    Pipeline lifecycle rail
    Breadcrumbs.tsx  Breadcrumb trail for inner pages
    CTA.tsx          Reusable closing call-to-action band
    SectionHeading.tsx
  app/
    layout.tsx       Metadata, JSON-LD structured data, header/footer shell
    globals.css      Base stylesheet + enhancement layer (appended at the end)
    page.tsx                      /
    about/                        /about/
    services/                     /services/
    services/[slug]/              /services/<discipline>/   (11 pages, generateStaticParams)
    industries/                   /industries/
    industries/[slug]/            /industries/<sector>/     (4 pages, generateStaticParams)
    projects/                     /projects/
    standards/                    /standards/
    quality-hse/                  /quality-hse/
    careers/                      /careers/
    contact/                      /contact/
    contact/thank-you/            /contact/thank-you/
    privacy/                      /privacy/
public/
  favicon.png, favicon.svg, robots.txt, sitemap.xml
```

### Adding or editing a discipline page

Edit `src/data/services.ts` only. Each entry generates its own page, its nav menu entry, its
footer link, its homepage card and its JSON-LD service entry. Add a new object to `DISCIPLINES`
with a unique `slug`, then add the route to `public/sitemap.xml`.

The same applies to business areas in `src/data/sectors.ts`.

Company name, email, phone and address live in `src/data/site.ts` and are used everywhere —
change them in one place.

### Contact form

The form on `/contact/` is a **Netlify Form**. For it to keep working, the markup must retain:

- `name="project-enquiry"` on the `<form>`
- `data-netlify="true"`
- `netlify-honeypot="bot-field"` and the hidden `bot-field` input
- the hidden `<input name="form-name" value="project-enquiry">`
- `action="/contact/thank-you/"`

Netlify detects the form by parsing the deployed HTML at build time. Submissions appear under
**Forms** in the Netlify dashboard. Set up notification emails there, not in code.

---

## Content conventions

- British English spelling (`organisation`, `optimisation`, `analyse`).
- No named client or project references until written permission is confirmed — `/projects/`
  deliberately describes scope types instead.
- No claim of third-party ISO certification. `/quality-hse/` states that the principles of
  ISO 9001 are applied and that certification is not claimed. Change this only if certification
  is actually obtained.
- Codes and standards on `/standards/` are the normal design basis references. Applicable
  editions are confirmed per project.
