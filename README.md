# Design Vision — website rebuild

A clean Next.js website for Design Vision, prepared for Netlify deployment as a **static export**. This deliberately avoids requiring Netlify's Next.js server adapter for the public brochure website, which removes a class of runtime-routing problems seen in the previous deployment.

## Included pages

- Home
- About
- Engineering Services
- Industries
- Project Experience (clearly marked as representative scopes; no client/project claims invented)
- Contact (Netlify Forms)
- Privacy Notice
- Contact thank-you page

## Technical deployment design

- Next.js App Router with `output: 'export'`
- Build command: `npm run build`
- Publish directory: `out`
- `netlify.toml` already contains these settings
- No Next.js server functions or API routes are required for this static site
- Contact form uses Netlify Forms (`data-netlify="true"`); form submissions appear in Netlify's Forms area after form detection is enabled/available for the site

## Run locally

Requires Node.js 20.9+ (Node 22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Create production export

```bash
npm run build
```

The static website is generated in `out/`. Preview it with any static web server, for example:

```bash
npx serve out
```

## Deploy to Netlify

1. Upload this project to the existing GitHub repository (`Trishcharvi/design-vision`) on the `main` branch, replacing the old website source files with the contents of this folder.
2. In Netlify, keep the existing project connected to that repository.
3. In **Project configuration → Developer settings → Build settings**, use:
   - Base directory: `/` (or leave blank if Netlify displays blank)
   - Build command: `npm run build`
   - Publish directory: `out`
   - Package directory: unset
4. Set Node.js version to 22 if Netlify does not read `netlify.toml` automatically.
5. Trigger a fresh production deploy.
6. After deploy, test both `https://thriving-puffpuff-fed7e7.netlify.app/` and `https://designvision-oilandgas.com/`.
7. In Netlify, open Forms and verify that `project-enquiry` has been detected. If form detection is disabled, enable it and redeploy once. Submit a test enquiry and confirm it appears in Forms.

## Contact form behaviour

The contact form is a Netlify form and does not send email directly through Outlook. Netlify stores form submissions and can notify the configured email address. Configure a notification to `designvision-oilandgas@outlook.com` in Netlify Forms → Form notifications.

## Business details currently displayed

- Email: designvision-oilandgas@outlook.com
- Phone: +91 86689 14353
- Location: Pune, Maharashtra, India
- Website: https://designvision-oilandgas.com

Please verify the phone number and postal/business details before final launch. The site intentionally does not publish named client references, project values, certifications or vendor approvals without verified evidence and permission.

## Important

This package is the replacement source code. It does not itself push to GitHub or change Netlify settings. Those external account actions must be completed in the user's GitHub and Netlify accounts.
