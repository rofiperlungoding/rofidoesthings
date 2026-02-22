# Seamless Grid Transition Implementation Plan

**Goal:** Eliminate the sharp horizontal edge between the Hero section and the content area by implementing a gradual, masking-based fade-in for the technical grid background.

**Architecture:** Use multi-layered `mask-image` with `mask-composite: intersect`. Layer 1 handles the vertical fade-in (emergence). Layer 2 handles horizontal framing (keeping the center pure white). Remove local background overrides in the Hero component.

**Tech Stack:** React, Vanilla CSS.

---

### Task 1: Re-engineer Global Grid & Mask

**Files:**
- Modify: `src/index.css:75-92`

**Step 1: Soften Grid Texture**
Lower the opacity of the grid lines and radial glows to make the transition less aggressive.
Update `.background-grid` `background-image` and `background-size`.

**Step 2: Implement Multi-Layered Mask**
Update the `mask-image` to combine:
1.  **Vertical Fade:** `transparent` until `70vh`, ramping to `black`.
2.  **Horizontal Frame:** `black` at edges, `transparent` in the center (from 20% to 80%).
Use `mask-composite: intersect` so the grid only appears where both are black.

**Implementation Code:**
```css
.background-grid {
  /* ... existing properties ... */
  background-image:
    /* Softer Glows */
    radial-gradient(circle at 0% 100vh, rgba(37, 99, 235, 0.1), transparent 800px),
    radial-gradient(circle at 100% 100vh, rgba(37, 99, 235, 0.1), transparent 800px),
    /* Fainter Grid Lines */
    linear-gradient(to right, rgba(37, 99, 235, 0.2) 1.5px, transparent 1.5px),
    linear-gradient(to bottom, rgba(37, 99, 235, 0.2) 1.5px, transparent 1.5px);

  /* INTERSECTED MASK: Fade-in + Side-only framing */
  mask-image: 
    linear-gradient(to bottom, transparent 0vh, transparent 70vh, rgba(0, 0, 0, 0.1) 85vh, black 105vh, black 100%),
    linear-gradient(to right, black 0%, transparent 20%, transparent 80%, black 100%);
  -webkit-mask-composite: source-in, source-in; /* Combine the layers */
  mask-composite: intersect; 
}
```

---

### Task 2: Remove Hero Local Overrides

**Files:**
- Modify: `src/components/Hero.tsx:45-66`

**Step 1: Strip Local Background**
Remove `background: #FFFFFF` and the `::before` pseudo-element from the Hero component. This prevents "double-layering" that causes the sharp line artifact.

**Implementation Code:**
```tsx
/* Modify Hero.tsx <style> block */
.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Removed: background: #FFFFFF; */
    padding: 0 24px;
    position: relative;
}

/* Delete this entire block */
.hero-section::before {
    display: none; /* Or just remove the block */
}
```

---

### Task 3: Final Polishing & Verification

**Step 1: Check Scroll Behavior**
Scroll from top to bottom. The grid should be invisible at the top, start appearing subtly behind the Hero "See My Work" buttons, and become fully crisp by the time the "About Me" card is centered.

**Step 2: Check Responsive States**
Verify on mobile viewports to ensure the `vh` units scale correctly.
