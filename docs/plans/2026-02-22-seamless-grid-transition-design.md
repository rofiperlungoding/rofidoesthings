# Design: Seamless Grid Transition

**Date:** 2026-02-22
**Topic:** Seamless transition between Hero (white) and Content (grid pattern)

## 1. Problem Statement
The current interface shows a sharp horizontal line where the pure white Hero section ends and the technical grid background begins. This breaks the premium aesthetic and feels "unpolished."

## 2. Proposed Solution: "Atmospheric Emergence"
The grid and ambient glows should not "start" at a specific section; they should emerge naturally from the bottom of the Hero section. This is achieved by using a vertical transparency mask that stays empty for most of the Hero and gradually ramps up to full opacity.

## 3. Technical Design

### A. Background Mask Engineering
Modify the `.background-grid` in `index.css`:
- Use `vh` (viewport height) units for the mask to ensure it stays anchored to the Hero section regardless of screen size.
- **Fade logic:** 
  - `0vh - 80vh`: 0% opacity (Pure White Hero)
  - `80vh - 100vh`: Soft ramp up (The Emergence)
  - `100vh - 200vh`: Full opacity (Active Content Area)
  - `200vh+`: Gradual tail-off to prevent the page from feeling too heavy at the bottom.

### B. Component Level Cleanup
- **Hero.tsx:** Remove the hardcoded `background: #FFFFFF` on `.hero-section`. This allows the `body` background to flow through, preventing "stacking" artifacts.
- **index.css:** Relax the `.background-grid` `background-image` opacity slightly to make the grid feel more "integrated" and less like an overlay.

## 4. Success Criteria
- [ ] No visible horizontal line between Hero and AboutSection.
- [ ] Grid pattern is barely visible or invisible at the top of the viewport.
- [ ] Transition feel "buttery smooth" when scrolling.
- [ ] Maintain performance using CSS `mask-image`.
