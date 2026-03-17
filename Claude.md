# CLAUDE.md — Landing Page Development Guide

## Objective

Build and maintain a high-performance landing page optimized for conversion, SEO, and speed.

The landing page must follow the defined **technology stack, architecture standards, and performance metrics** described below.

---

# Tech Stack

## Framework

* Next.js (App Router)
* React 18+
* TypeScript

## Styling

* Tailwind CSS
* CSS variables for theming

## UI Components

* shadcn/ui
* Radix UI (via shadcn)

## Animations

* Framer Motion (light usage only)

## Icons

* Lucide Icons

## Forms

* React Hook Form
* Zod for validation

## Analytics

* Google Analytics 4
* Optional: PostHog or Plausible

## Deployment

* Vercel

---

# Project Structure

Use a modular architecture.

```
/app
  layout.tsx
  page.tsx
  globals.css

/components
  hero
  features
  testimonials
  pricing
  faq
  cta
  footer

/lib
  analytics
  utils

/public
  images
  logos
```

Component rules:

* Components must be reusable
* Avoid large monolithic files
* One component per folder when possible
* Separate UI logic from layout structure

---

# Landing Page Sections

The page should include the following sections:

1. Hero
2. Social proof
3. Features
4. Benefits
5. Testimonials
6. Pricing (optional)
7. FAQ
8. Final CTA
9. Footer

---

# Performance Requirements

Strict performance targets must be followed.

## Core Web Vitals

Target values:

LCP (Largest Contentful Paint)
< 2.0s

CLS (Cumulative Layout Shift)
< 0.05

INP (Interaction to Next Paint)
< 200ms

---

## Lighthouse Targets

Performance ≥ 95
Accessibility ≥ 95
Best Practices ≥ 95
SEO ≥ 95

---

# Optimization Rules

Claude must ensure the following:

Images

* Use next/image
* Use AVIF or WebP
* Always include width and height

Fonts

* Use next/font
* Avoid external font loading

JS bundle

* Minimize client components
* Prefer Server Components

Animations

* Avoid heavy animation libraries
* Animate only key elements

---

# SEO Requirements

Each page must include:

* Metadata title
* Metadata description
* Open Graph tags
* Structured data when relevant

Example metadata:

```ts
export const metadata = {
  title: "Product Name — The best solution",
  description: "Short description of the product and value proposition"
}
```

---

# Conversion Optimization

Claude should prioritize conversion-focused UX.

Guidelines:

* Clear headline
* Strong CTA above the fold
* Multiple CTA placements
* Social proof early
* Simple pricing if applicable

CTA examples:

* Get Started
* Start Free Trial
* Book a Demo

---

# Design Principles

Design must follow:

* Clean layout
* Clear visual hierarchy
* Large readable typography
* Consistent spacing
* Mobile-first design

Spacing scale:

```
4px
8px
16px
24px
32px
48px
64px
```

---

# Responsiveness

Support the following breakpoints:

sm
md
lg
xl
2xl

Mobile experience must be prioritized.

---

# Accessibility

Required practices:

* Proper semantic HTML
* ARIA labels when necessary
* Keyboard navigation
* Sufficient color contrast
* Alt text for images

Target Lighthouse accessibility ≥ 95.

---

# Coding Standards

Claude must follow:

* TypeScript strict mode
* Functional React components
* Avoid unnecessary state
* Prefer server components
* Clean readable code

Naming conventions:

Components → PascalCase
Functions → camelCase
Files → kebab-case

---

# Output Rules

When generating code:

* Provide complete components
* Avoid pseudo code
* Keep files organized
* Follow the defined structure

Do not introduce new libraries unless explicitly requested.

---

# Goal

The final result must be a **production-ready landing page optimized for:**

* speed
* SEO
* conversion
* maintainability
