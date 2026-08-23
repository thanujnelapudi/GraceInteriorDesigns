# Grace Interior Designs — Multi-Page Website

A luxury editorial static site for **Grace Interior Designs** — an interior wall art and painting studio based in Hanumakonda, Warangal, and Hyderabad, India.

Built with **Astro 5**, **Tailwind CSS v4**, **GSAP scroll-reveal animations**, and **Astro Content Collections**.

---

## 🚀 Quick Start & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
To start the dev server in background mode:
```bash
astro dev --background
```

To manage the dev server:
- `astro dev status` — Check server status
- `astro dev logs` — View server logs
- `astro dev stop` — Stop server

Default local server URL: **`http://localhost:4321/`**

---

## 📝 How to Add a New Work

All works are stored as Markdown files in `src/content/works/`.

To add a new work:

1. Create a new `.md` file inside `src/content/works/` (e.g. `src/content/works/my-new-mural.md`).
2. Add the required frontmatter schema:

```markdown
---
id: "my-new-mural"
title: "My New Wall Mural"
category: "wall-murals" # Must be one of: wall-murals, wall-floral-arts, interior-wall-arts, verli-paintings, canvas-paintings, photo-arts
description: "Detailed description of the artwork and design."
priceRange: "₹15,000 – ₹30,000"
timeRange: "3 – 5 working days"
images:
  - "https://picsum.photos/800/600?random=50"
  - "https://picsum.photos/800/600?random=51"
featured: true # true to show on homepage featured section
---
```

3. Save the file. Astro will automatically create the dynamic route `/categories/[category]/[work-slug]` during build!

---

## 📱 How to Change the WhatsApp Number

The WhatsApp number is configured across CTAs and the floating button:

1. Search for `919999999999` across the codebase (e.g., in `src/components/WhatsAppButton.astro`, `src/pages/index.astro`, `src/pages/contact.astro`, `src/pages/categories/[slug]/[work].astro`, `src/components/Lightbox.astro`).
2. Replace `919999999999` with your official WhatsApp number (including country code `91` without any `+` or spaces).

---

## 📦 Building for Production & Vercel Deployment

### Build Static Site
```bash
npm run build
```

This generates a static output bundle inside the `dist/` directory.

### Deploying to Vercel

1. Push this project repository to **GitHub / GitLab / Bitbucket**.
2. Go to [Vercel Dashboard](https://vercel.com/new) and import the repository.
3. Vercel will automatically detect Astro:
   - **Framework Preset**: Astro
   - **Build Command**: `astro build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

---

## 🎨 Design Tokens

- **Primary Navy**: `#1A2A6C`
- **Accent Gold**: `#E8A020`
- **Warm Cream Background**: `#FAF8F5`
- **Warm Grey Divider**: `#C8C0B4`
- **Charcoal Text**: `#2C2C2A`

---

## 📄 Site Map & Routes

- `/` — Homepage
- `/gallery` — Gallery Page (All 18 Works)
- `/categories` — Categories Index Page
- `/categories/[slug]` — Category Detail Page
- `/categories/[slug]/[work]` — Work Detail Page
- `/about` — About Page
- `/contact` — Contact Page
