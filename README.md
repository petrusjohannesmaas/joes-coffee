# Joe's Coffee — B2B Lead Capture Website

Built with Vite + React Router v7 + TypeScript.

## Project Structure

```
app/
├── RootLayout.tsx          # Shared layout: Navbar + Outlet + Footer
├── routes.ts               # React Router v7 route config
├── index.css               # Global design system (variables, resets, utilities)
│
├── components/
│   ├── Navbar.tsx / .css   # Fixed responsive navbar with scroll state
│   ├── Footer.tsx / .css   # Site-wide footer
│   └── LeadForm.tsx / .css # B2B lead capture form (the core conversion tool)
│
└── pages/
    ├── LandingPage.tsx / .css   # High-conversion B2B portal
    ├── AboutPage.tsx / .css     # Company story, timeline, values, gallery
    └── SuccessPage.tsx / .css   # Post-submission confirmation

public/
└── images/                 # ← Place all your image files here (see IMAGES.md)
```

## Setup

```bash
npm install
npm run dev
```

## Connecting the Lead Form

The `LeadForm.tsx` file contains a clearly marked block where you connect your
backend, CRM, or email service. Look for this comment:

```ts
// ── Replace this block with your actual API/email integration ──
```

**Popular options:**
- **Formspree** (easiest): https://formspree.io — replace the `fetch` URL with your endpoint
- **Resend** or **SendGrid**: POST the form data from a serverless function
- **HubSpot / Salesforce**: Use their Forms API to create a lead record directly
- **Zapier Webhook**: POST JSON to a Zap that routes to your CRM + sends a Slack alert

## Design System

All colors, fonts, and spacing tokens live in `src/index.css` as CSS custom properties.
Change `--brass` and `--espresso` to instantly re-skin the entire site.

| Token         | Value     | Use                        |
|---------------|-----------|----------------------------|
| --espresso    | #1a0f00   | Dark backgrounds, nav      |
| --roast       | #3b1f00   | Mid-dark backgrounds       |
| --brass       | #c9973a   | Primary accent, CTA        |
| --gold        | #e8b84b   | Hover state, highlights    |
| --cream       | #f5ede0   | Light text on dark bg      |
| --parchment   | #faf6ef   | Page background            |

## Fonts Used (Google Fonts — loaded in index.css)

- **Playfair Display** — display / headlines
- **Libre Baskerville** — body copy
- **DM Mono** — labels, eyebrows, CTAs
