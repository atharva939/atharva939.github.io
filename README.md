# Atharva Lakade — Minimalist Portfolio Redesign

A refined, high-performance personal portfolio redesigned from scratch for an AI & Data Science engineer.

## Key Changes in This Redesign
- **Removed Overly Flashy Elements**: Eliminated heavy glassmorphism blur, spinning/floating particles, and distracting animations.
- **Editorial Modern Engineering Aesthetic**: Crisp typography (Geist / Geist Mono), high-contrast palette, and structured hierarchy inspired by top engineering portfolios (Stripe, Linear, Paco, Karpathy).
- **Featured Projects**:
  - **NanoGPT**: Transformer from scratch in PyTorch (Decoder-only generative language model, multi-head attention, positional encodings).
  - **Climate Temperature EDA**: Statistical analysis and data visualizations on historical climate trends using Pandas, NumPy, Matplotlib & Seaborn.
  - **Smart India Hackathon (SIH)**: Hackathon problem-solving and rapid engineering.
- **Interactive Details**:
  - One-click dark / light mode toggle (persisted with `localStorage` and system preference detection).
  - One-click copy email button with toast feedback.
  - Sticky clean navigation with scroll spy.
  - Fully mobile-responsive layout.

## Files
- `index.html`: Semantic HTML5 markup, accessible landmarks, and OpenGraph metadata.
- `style.css`: Pure CSS design system with CSS custom properties for light/dark modes. Zero heavy frameworks.
- `script.js`: Lightweight vanilla JavaScript for theme toggling, clipboard actions, and navigation.

## How to Deploy to GitHub Pages (atharva939.github.io)
1. Open your local `atharva939.github.io` repository folder (or clone it from GitHub):
   ```bash
   git clone https://github.com/atharva939/atharva939.github.io.git
   ```
2. Replace `index.html`, `style.css`, and `script.js` with these files.
3. Commit and push:
   ```bash
   git add .
   git commit -m "Redesign portfolio: clean, minimalist UI"
   git push origin main
   ```
4. GitHub Pages will automatically update your site at [atharva939.github.io](https://atharva939.github.io).
