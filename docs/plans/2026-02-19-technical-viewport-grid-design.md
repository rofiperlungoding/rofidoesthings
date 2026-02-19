# Design: Technical Viewport Grid

**Date:** 2026-02-19
**Topic:** Adding subtle "engineering" textures to the portfolio to reduce "blandness" while maintaining minimalist balance.

## Overview
The goal is to introduce a "Technical Viewport" aesthetic. This involves adding an Architectural/Geometric texture that evokes a high-precision digital drafting board or CAD workspace.

## Architecture
- **Global Background Layer**: A fixed `::before` pseudo-element on the `body` or a top-level wrapper.
- **Dynamic Grid Implementation**: Using CSS repeating linear gradients to render a crisp, scalable 100px x 100px grid.
- **Visual Balance (Vignette Fade)**: A CSS `mask-image` with a radial gradient will be applied to the grid. This ensures the grid is visible in the periphery (sides/corners) and fades to zero opacity in the center, framing the content without interfering with legibility.

## Components & Visuals
### 1. The Grid
- **Scale**: 100px x 100px cells.
- **Weight**: 0.5px line width for extreme precision.
- **Color**: Low-opacity Slate-Blue/Electric Blue (`rgba(37,99,235, 0.04)`).

### 2. Precision Markers
- **Corner Brackets**: Small 'L' shaped brackets or '+' crosshairs fixed to the four corners of the viewport.
- **Technical Metadata**: Faint, fixed technical labels (e.g., `REF: RF-2026`, `COORD: 00-X`) along the edges.

## Data Flow & Integration
- **CSS-Only**: The entire system is implemented in CSS (`index.css`) for zero performance overhead.
- **Fixed Positioning**: Elements are `position: fixed` to maintain the "Viewport" illusion as the user scrolls content.

## Responsiveness & Testing
- **Mobile handling**: Hide peripheral markers on screens < 768px to avoid clutter.
- **Verification**: Ensure no overlap with interactive elements and maintain WCAG contrast for primary content.

---
**Status:** Validated by USER.
