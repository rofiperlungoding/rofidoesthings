# Technical Viewport Grid Implementation Plan

**Goal:** Add a subtle, high-precision technical grid and corner markers to the portfolio to add texture and an "engineering" feel.

**Architecture:** Use global CSS pseudo-elements and fixed positioning to create a stable, non-obtrusive background grid with a radial fade (vignette) and static precision markers in the viewport corners.

**Tech Stack:** Vanilla CSS (CSS Gradients, Masks), Lucide Icons (referenced via CSS if needed, or simple divs).

---

### Task 1: Global Grid Implementation
**Files:**
- Modify: `src/index.css`

**Step 1: Implement the Grid**
Add the grid logic to `::before` of the `body`.

```css
/* src/index.css */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  
  /* The Grid: 100px cells */
  background-image: 
    linear-gradient(to right, rgba(37, 99, 235, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(37, 99, 235, 0.04) 1px, transparent 1px);
  background-size: 100px 100px;
  
  /* Vignette Fade: Invisible in center, visible at edges */
  mask-image: radial-gradient(circle at center, transparent 30%, black 100%);
  -webkit-mask-image: radial-gradient(circle at center, transparent 30%, black 100%);
}
```

**Step 2: Verify**
- Check the site in the browser.
- Ensure the grid is visible on the sides but fades out where the content is.

**Step 3: Commit**
```bash
git add src/index.css
git commit -m "feat: implement global technical viewport grid"
```

---

### Task 2: Precision Corner Markers
**Files:**
- Modify: `src/index.css`
- Modify: `src/components/Home.tsx`

**Step 1: Implement Corner Brackets & Labels in CSS**
Use `::after` on `body` for the metadata and specific classes for brackets.

```css
/* src/index.css */
body::after {
  content: 'REF: RF-2026';
  position: fixed;
  bottom: 24px;
  right: 24px;
  font-family: monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: rgba(37, 99, 235, 0.2);
  pointer-events: none;
  z-index: 100;
}

/* Precision Brackets (L-shapes) */
.viewport-marker {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(37, 99, 235, 0.15);
  pointer-events: none;
  z-index: 100;
}

.marker-tl { top: 24px; left: 24px; border-right: none; border-bottom: none; }
.marker-tr { top: 24px; right: 24px; border-left: none; border-bottom: none; }
.marker-bl { bottom: 24px; left: 24px; border-right: none; border-top: none; }
.marker-br { bottom: 24px; right: 24px; border-left: none; border-top: none; }
```

**Step 2: Add Marker HTML to Home.tsx**
```tsx
/* src/components/Home.tsx */
// Within the main fragment:
<div className="viewport-marker marker-tl" />
<div className="viewport-marker marker-tr" />
<div className="viewport-marker marker-bl" />
<div className="viewport-marker marker-br" />
```

**Step 3: Verify**
- Confirm markers are pinned to corners.
- Confirm they don't block interaction.

**Step 4: Commit**
```bash
git add src/index.css src/components/Home.tsx
git commit -m "feat: add precision corner markers and technical label"
```

---

### Task 3: Mobile Optimization
**Files:**
- Modify: `src/index.css`

**Step 1: Add Media Queries**
Reduce density or hide markers on small screens.

```css
/* src/index.css */
@media (max-width: 768px) {
  body::before {
    background-size: 50px 50px;
    opacity: 0.5;
  }
  .viewport-marker, body::after {
    display: none;
  }
}
```

**Step 2: Verify**
- Toggle mobile view in DevTools.
- Ensure site still looks clean and centered.

**Step 3: Commit**
```bash
git add src/index.css
git commit -m "feat: optimize viewport grid for mobile"
```
