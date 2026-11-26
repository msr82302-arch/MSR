# MSR Professional Portfolio (`msr-professional-portfolio`)

Official personal engineering portfolio for **Muhammad Sohaib Rasheed (MSR)** — BS Artificial Intelligence Student at NUTECH, Islamabad and Python & Django Developer.

## Overview

This portfolio documents verified academic progression, backend mentorship, applied AI speech pipelines, Ethereum blockchain fellowship training, flagship open-source case studies, and Fiverr freelance services.

### Core Sections

- **Hero & Brand Identity**: Direct introduction featuring authentic photography from the Gauth AI Registration Booth.
- **About & Education**: NUTECH BS Artificial Intelligence (Fall 2025 – Expected 2029, 3rd Semester as of November 2026), Nizi Solution Python & Django Mentorship, and Citadel–Edversity Blockchain Technology Fellowship.
- **Chronological Professional Journey**: Interactive stage-by-stage progression (`Stage 01` through `Stage 07`), with unverified milestones (`Stage 02: Python Internship`) kept unpublished in `src/data/portfolioData.ts` until supporting records are confirmed.
- **Technical Skills**: Programming, Backend Engineering, Databases, Frontend, AI, Blockchain/Web3, and Tools.
- **Flagship Projects & Architecture**:
  - **Web3 Decentralized Supply Chain & Product Verification System** (`https://github.com/msr82302-arch/Web3-Supply-chain`)
  - **ICAT — Multilingual Speech Processing Application** (`https://github.com/msr82302-arch/Multilingual-Speech`)
- **Additional Prototypes & Sanitized Overviews**: Scoped summaries for EasyTravel (frontend prototype) and XeroTech Technologies Management System (sanitized architecture overview).
- **Professional Services**: Connected to official Fiverr gigs for Ethereum smart contracts, Python/Django Web2/Web3 development, and programming tutoring.
- **Contact**: Email (`msr82302@gmail.com`) with one-click copy, WhatsApp (`+92 322 5071982`), LinkedIn, GitHub, and validated inquiry composer.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React

## Project Structure

```text
├── index.html                  # SEO metadata, OpenGraph, JSON-LD, Google Fonts
├── public/
│   ├── favicon.svg             # MSR SVG monogram favicon
│   ├── robots.txt              # Search crawler directives
│   ├── sitemap.xml             # XML sitemap
│   └── assets/aistudio/        # Authentic local photograph assets
├── src/
│   ├── components/
│   │   ├── AboutEducation.tsx
│   │   ├── ArchitectureDiagram.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── ProfessionalJourney.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── TechnicalSkills.tsx
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for verified content & unpublished drafts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
└── vite.config.ts
```

## Local Setup & Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server** (runs on port `3000`):
   ```bash
   npm run dev
   ```

3. **Type-check / Lint**:
   ```bash
   npm run lint
   ```

4. **Production build**:
   ```bash
   npm run build
   ```
   Output is generated in `dist/`.

## Content Verification & Publishing Workflow

All portfolio content lives in `src/data/portfolioData.ts`.

- **Publishing Stage 02 (Python Internship)**: Locate `id: 'stage-02'` in `TIMELINE_STAGES`, update `organization`, `location`, `period`, `summary`, `progressionNote`, and `topics` with verified details, and set `published: true`.
- **Adding Optional Social Links**: Update `SITE_CONFIG.optionalSocials` only after verifying official URLs.
- **Updating Profile Portrait**: Add your portrait image to `public/assets/` and assign `SITE_CONFIG.secondaryPortraitPath`.

## Deployment & Recovery

The application compiles into static assets (`dist/`) with zero external database or runtime secret requirements:

1. Push the full repository to GitHub under `msr82302-arch/msr-professional-portfolio`.
2. Deploy `dist/` (or connect the GitHub repository) to any static host with HTTPS and custom domain support (e.g., Cloudflare Pages, Vercel, Netlify, or GitHub Pages).
3. Configure SPA fallback or 404 routing as needed (`NotFoundPage.tsx` handles unknown paths client-side).
