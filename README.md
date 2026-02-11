# Veelux — Luxury Watch Showcase

Veelux is a premium luxury watch landing page built for a high-end watch brand. It targets watch enthusiasts and potential buyers, presenting a curated collection of timepieces through an immersive, dark-themed interface with glassmorphism effects, smooth carousels, and a fully tokenized design system. The project serves as a front-end showcase demonstrating pixel-perfect implementation from designer mockups to production-ready code.

---

## Technologies Used

**Frontend:** Next.js 16.1.6 with the App Router, React 19.2.3, and TypeScript 5 for static type safety across all components.

**Styling:** Tailwind CSS 4 using the new `@theme` directive for design tokens — every color in the project is centralized into named CSS custom properties, eliminating all hardcoded hex values from component code.

**Animations & Carousels:** Swiper 12.1.0 for touch-enabled, autoplay carousel slides with configurable breakpoints and smooth transitions.

**Icons:** React Icons 5.5.0, pulling from multiple icon sets — Heroicons 2 (Hi2) for filled UI icons, Go icons for navigation arrows, Io5 for WhatsApp, Bootstrap icons for the watch watermark, and Tabler for currency symbols.

**Typography:** Exo 2 via `next/font/google` — loaded and optimized at the layout level for zero layout shift across all pages.

**Image Optimization:** All 13 watch product images served through Next.js `<Image>` component for automatic lazy loading, responsive sizing, and WebP conversion.

---

## Key Features & Challenges

The main challenge was translating pixel-perfect mockup designs into responsive components without any design system provided upfront. I had to reverse-engineer the exact opacity values, spacing, and color relationships from reference images, then organize them into a reusable token system. This taught me how to think systematically about design — instead of matching colors one-by-one, I identified that the entire palette was built from just two base colors (white and black) at varying opacities, plus two accent colors.

The carousel architecture was another interesting problem. The Products section and Testimonials section both needed carousels, but with fundamentally different layouts — Products shows multiple sliding cards with external navigation, while Testimonials keeps a static image and only rotates the text content. I solved this by building a shared `Carousel` component for the common case, but keeping the Testimonials implementation separate since forcing it into the shared abstraction would have added unnecessary complexity. Knowing when *not* to abstract is just as important as DRY code.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                   Browser                        │
│                                                  │
│  ┌──────────────────────────────────────────┐    │
│  │           Next.js App Router              │    │
│  │                                           │    │
│  │  layout.tsx ──── Font loading (Exo 2)     │    │
│  │       │                  │    │
│  │       ▼                                   │    │
│  │  page.tsx ────── Section composition       │    │
│  │       │                                   │    │
│  │       ├── Navbar        (layout/)         │    │
│  │       ├── Hero          (homepage/)       │    │
│  │       ├── About         (homepage/)       │    │
│  │       ├── Products ──┐  (homepage/)       │    │
│  │       ├── WhyChoose   │  (homepage/)      │    │
│  │       ├── Testimonials│  (homepage/)      │    │
│  │       └── Footer      │  (layout/)        │    │
│  │                       │                   │    │
│  │  Shared Components ◄──┘                   │    │
│  │    ├── Carousel.tsx   (Swiper wrapper)    │    │
│  │    ├── ProductCard.tsx(glassmorphism card) │    │
│  │    ├── Button.tsx     (link or button)    │    │
│  │    └── IconWrapper.tsx(styled icon box)   │    │
│  │                                           │    │
│  │  globals.css ─── @theme color tokens      │    │
│  │                  (design tokens)       │    │
│  └──────────────────────────────────────────┘    │
│                                                  │
│  public/ ──── 13 static watch images (.jpg/.webp)│
└─────────────────────────────────────────────────┘
```

This is a purely front-end project — no backend, database, or API calls. All data (products, testimonials, contact info) lives as TypeScript arrays within the components. The architecture is intentionally flat: `page.tsx` composes the homepage by importing and stacking section components in order, while `layout.tsx` handles global concerns (font loading, footer). Shared components like `Carousel` and `ProductCard` are consumed by multiple homepage sections.

---

## Technical Decisions

### 1. Tailwind CSS 4 `@theme` over a `tailwind.config.ts` color palette

I chose Tailwind CSS 4's native `@theme` directive to define all project colors as CSS custom properties directly in `globals.css`, rather than using the traditional `tailwind.config.ts` `extend.colors` approach. This decision was driven by two factors: first, Tailwind CSS 4 dropped the config file in favor of CSS-first configuration, making `@theme` the idiomatic approach. Second, defining tokens in CSS means they're inspectable in browser DevTools and can be consumed by non-Tailwind code if needed. The result is 13 named tokens (`accent`, `cream`, `glass-heavy`, `glass-md`, etc.) that map directly to the designer's hex values — no developer ever needs to remember that `#FFFFFF45` means "27% white."

### 2. Static data arrays instead of a CMS or API

Every piece of content — product listings, testimonials, navigation links — is hardcoded as a TypeScript array within the component that uses it. For a landing page with no user-generated content and no dynamic data, introducing a CMS or API layer would add deployment complexity, loading states, and error handling without any real benefit. The tradeoff is explicit: adding a new product means editing `Products.tsx` and redeploying. For a portfolio/showcase site, this is the right tradeoff. If the project evolved into a real e-commerce store, I'd migrate product data to a headless CMS like Sanity or a database.

### 3. Separate Testimonials Swiper instead of reusing the shared `Carousel`

The shared `Carousel` component works well for uniform, multi-slide layouts like Products. But the Testimonials section has a fundamentally different structure: a static image on the left with only the text rotating on the right. Forcing this into the shared `Carousel` would require adding conditional rendering for static elements, different navigation positioning, and CSS Grid support — all for a single consumer. Instead, I used Swiper directly in `Testimonials.tsx`. This keeps the shared `Carousel` clean and simple, while the Testimonials component has full control over its unique layout. The DRY principle applies to *logic*, not to the act of importing a specific library.

---

## Setup Instructions

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn / pnpm / bun)

### Step-by-step

```bash
# 1. Clone the repository
git clone https://github.com/Starr365/Veelux-Main.git
cd veelux-main

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

No environment variables are required. The project has no backend, database, or third-party API dependencies — it runs entirely from static assets and client-side rendering.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint checks across all files |

---

## Screenshots

> **TODO:** Add screenshots of the live site. Capture at both desktop (1440px) and mobile (375px) widths to demonstrate responsive design.

<!-- Uncomment and update paths after adding screenshots:

### Desktop Views

![Hero Section — Desktop](./public/screenshots/hero_desktop.png)
*Split-screen hero with headline, preview watches, and full-bleed hero image*

![Products Carousel — Desktop](./public/screenshots/products_desktop.png)
*10-card product carousel with glassmorphism cards and navigation arrows*

![Testimonials — Desktop](./public/screenshots/testimonials_desktop.png)
*Static image + auto-rotating client quotes in a CSS Grid layout*

![Footer — Desktop](./public/screenshots/footer_desktop.png)
*3-column footer with tilted watch watermark and "VEELUX" branding*

### Mobile Views

![Hero Section — Mobile](./public/screenshots/hero_mobile.png)
*Stacked layout with full-width hero image below the headline*

![Products — Mobile](./public/screenshots/products_mobile.png)
*Single-card carousel view with swipe navigation*

-->

---

## Project Structure

```
veelux-main/
├── app/
│   ├── components/
│   │   ├── homepage/            # Page-specific sections
│   │   │   ├── Hero.tsx         # Split-screen hero layout
│   │   │   ├── About.tsx        # Brand story + image grid
│   │   │   ├── Products.tsx     # 10-card product carousel
│   │   │   ├── WhyChoose.tsx    # 4-feature grid + hero image
│   │   │   └── Testimonials.tsx # Static image + rotating quotes
│   │   ├── layout/              # Persistent layout components
│   │   │   ├── Navbar.tsx       # Pill-style navigation + CTA
│   │   │   └── Footer.tsx       # 3-column links + watermark
│   │   └── shared/              # Reusable UI primitives
│   │       ├── Carousel.tsx     # Configurable Swiper wrapper
│   │       ├── ProductCard.tsx  # Glassmorphism product card
│   │       ├── Button.tsx       # Outlined button / link
│   │       └── IconWrapper.tsx  # Styled icon container
│   ├── globals.css              # @theme color tokens + utilities
│   ├── layout.tsx               # Root layout (font, footer)
│   └── page.tsx                 # Homepage section composition
├── public/                      # 13 watch images (.jpg, .webp)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## Deployment

Deploy via [Vercel](https://veelux-main.vercel.app/):

1. Push your code to GitHub
2. Import the repository on Vercel
3. Deploy — Vercel auto-detects Next.js and configures the build

No environment variables or build configuration needed.

---

## License

© 2026 Veelux by Starr Codes. All rights reserved.
