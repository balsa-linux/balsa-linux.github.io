# Balsa Website Design Spec
2026-10-05

## Overview

Apple-style dark marketing page for Balsa Linux. Static site built with Vite + React + TypeScript, deployable to GitHub Pages. Pre-release page — primary CTA is "Releasing Q1 2027", no download link.

## Tech Stack

- **Vite** — build tool, outputs static `dist/`
- **React 18** — component structure
- **TypeScript** — existing project default
- **CSS custom properties** — no Tailwind, no CSS-in-JS
- **Inter** (Google Fonts) — SF Pro substitute

## Visual System

```
--bg:          #000000
--surface:     #0a0a0a
--surface-2:   #111111
--border:      rgba(255,255,255,0.08)
--text:        #f5f5f7
--text-muted:  #6e6e73
--accent:      #3b82f6

Hero headline:   72px / 700 / tight tracking
Section heading: 48px / 600
Body:            18px / 400 / 1.6 line-height
Font:            Inter
```

Motion: fade-up (translateY 24px → 0, opacity 0 → 1) via Intersection Observer, 600ms ease-out, 100ms stagger.

## File Structure

```
src/
  components/
    Nav.tsx
    Hero.tsx
    FeatureRow.tsx
    FeatureGrid.tsx
    Footer.tsx
  hooks/
    useInView.ts
  App.tsx
  index.css
```

## Page Sections

### Nav
Sticky top bar. "Balsa" text logo (left) + "GitHub →" link (right). `backdrop-filter: blur` on scroll via scroll listener adding a class.

### Hero
Full viewport height. Centered layout.
- Ambient radial glow (CSS, blue/indigo, low opacity)
- Headline: "Linux, rebuilt."
- Subhead: "Lightweight, malleable, and built on Nix."
- Pill badge: "Releasing Q1 2027"

### Feature Rows (alternating left/right text)

| # | Headline | Body | Visual |
|---|---|---|---|
| 1 | Rollback Fearlessly | Every change is atomic. Bad update? One command back. No reinstalls, no regrets. | Terminal mockup showing `nix rollback` |
| 2 | Simplicity by Default | Declarative config. Beautiful Calamares installer. zsh + Oh My Zsh out of the box. | Nix snowflake SVG + config code snippet |
| 3 | Light, yet Powerful | Ships with Zed, Neovim, LibreWolf, and Micro. Minimal bloat, maximum capability. | App icon grid (CSS-drawn) |
| 4 | Tuned for You | Performance profiles for gaming, development, and everyday use. One command to switch. | Profile selector UI mockup (CSS) |

### Feature Grid

6-card 3-column grid. Smaller features:

| Icon | Title | Body |
|---|---|---|
| 📦 | balsa-pkg | fzf-powered package search |
| 💾 | OpenZFS | Advanced storage, snapshots, checksums |
| 🐧 | Custom Kernels | Zen, Xanmod, CachyOS options |
| 🔒 | LibreWolf | Privacy-first browser by default |
| 🛡️ | H-Balsa | Hardened security config (coming soon) |
| $ | zsh + OMZ | Autosuggestions and syntax highlighting out of the box |

### Footer

"Balsa Linux · MIT License · [GitHub](https://github.com/balsa-linux/balsa)"

## GitHub Pages Deployment

`vite.config.ts` sets `base: '/balsa/'` (or repo name). `dist/` output. User handles the deploy manually.

## Constraints

- No real screenshots (pre-release)
- All visuals are CSS/SVG
- No download CTA
- User handles all git commits and pushes
