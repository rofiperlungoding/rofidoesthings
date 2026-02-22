# About Me Mosaic Redesign Implementation Plan

**Goal:** Redesign the current single-card "About Me" section into a sophisticated mosaic bento layout with a focus on core engineering pillars.

**Architecture:** Implement a 3-column CSS Grid mosaic. The layout will consist of a primary bio card (2x1), a deep-focus sidebar card (1x2), two metric pods (1x1), and a profile signature.

**Tech Stack:** React, Lucide-React, Vanilla CSS.

---

### Task 1: Mosaic Grid Layout Foundations

**Files:**
- Modify: `src/index.css:223-241`

**Step 1: Define Grid Structure**
Add the layout classes to handle the mosaic arrangement and responsive stacking.

**Step 2: Mock UI Check**
Apply the classes to the existing section manually in dev tools to verify grid spacing.
Expected: 3 equal gaps visible in the inspector.

**Step 3: Implementation Code**
Add these to `index.css`:

```css
.about-mosaic {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 24px;
    width: 100%;
}

.mosaic-main { grid-column: span 2; }
.mosaic-sidebar { grid-column: span 1; grid-row: span 2; }
.mosaic-metric { grid-column: span 1; }

@media (max-width: 1100px) {
    .about-mosaic { grid-template-columns: repeat(2, 1fr); }
    .mosaic-main { grid-column: span 2; }
    .mosaic-sidebar { grid-column: span 2; grid-row: auto; order: 3; }
    .mosaic-metric { grid-column: span 1; }
}

@media (max-width: 768px) {
    .about-mosaic { grid-template-columns: 1fr; }
    .mosaic-main, .mosaic-sidebar, .mosaic-metric { grid-column: span 1; }
}
```

---

### Task 2: Refine Card Styling & Animations

**Files:**
- Modify: `src/index.css`

**Step 1: Icon Pulse Animation**
Define a subtle glow animation for the technical focus icons.

**Step 2: Implementation Code**
Add to `index.css`:

```css
@keyframes icon-pulse {
    0% { transform: scale(1); filter: drop-shadow(0 0 0px var(--accent-glow)); }
    50% { transform: scale(1.1); filter: drop-shadow(0 0 8px var(--accent-glow)); }
    100% { transform: scale(1); filter: drop-shadow(0 0 0px var(--accent-glow)); }
}

.focus-icon-animate {
    animation: icon-pulse 3s infinite ease-in-out;
}

.metric-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 24px !important;
}
```

---

### Task 3: JSX Structure Overhaul

**Files:**
- Modify: `src/components/AboutSection.tsx`

**Step 1: Replace Legacy Container**
Change `.about-grid-wrapper` to `.about-mosaic`.

**Step 2: Reorganize Cards**
Move the stats items into their own `.mosaic-metric` cards.

**Step 3: Implementation Code**
Update the render block in `AboutSection.tsx`:

```tsx
<div className="about-mosaic">
  {/* Card 1: Main Bio */}
  <div className="bento-card mosaic-main" style={{ textAlign: 'left' }}>
    <div className="badge-pill">About Me</div>
    <h2 style={{ fontSize: '2.8rem', marginBottom: '24px' }}>
        <span className="accent-text">Bridging Logic & Imagination</span>
        <br />To Build Digital Excellence.
    </h2>
    <p style={{ maxWidth: '90%' }}>
        Hello! I'm Muhammad Rofi Darmawan. Technology to me is more than code; 
        it's the architecture of intuition and the craft of solving the "impossible."
    </p>
  </div>

  {/* Card 2: Technical Focus */}
  <div className="bento-card mosaic-sidebar">
    <h3 style={{ marginBottom: '32px' }}>Core Engineering</h3>
    <ul className="focus-list" style={{ padding: 0 }}>
       {/* Focus items will go here */}
    </ul>
  </div>

  {/* Card 3: Competitions */}
  <div className="bento-card mosaic-metric metric-card">
    <span className="stat-num" style={{ fontSize: '3rem' }}>10+</span>
    <span className="stat-lbl">Competitions Won</span>
  </div>

  {/* Card 4: Awards/Certs */}
  <div className="bento-card mosaic-metric metric-card">
    <span className="stat-num" style={{ fontSize: '3rem' }}>15+</span>
    <span className="stat-lbl">Global Certifications</span>
  </div>
</div>
```

---

### Task 4: Engineering Pillars Content Update

**Files:**
- Modify: `src/components/AboutSection.tsx`

**Step 1: Update List Items**
Replace the list items in `.focus-list` with the new technical focus areas.

**Step 2: Implementation Code**
Update the focus list:

```tsx
<li>
    <div className="focus-icon focus-icon-animate"><Settings size={22} color="#2563EB" /></div>
    <div>
        <strong>System Architecture</strong>
        <span className="sub-text">Scalable Hardware-to-Cloud Integration</span>
    </div>
</li>
<li>
    <div className="focus-icon focus-icon-animate"><Zap size={22} color="#F59E0B" /></div>
    <div>
        <strong>Human-Centric Design</strong>
        <span className="sub-text">Optimizing Performance & Technical UX</span>
    </div>
</li>
<li>
    <div className="focus-icon focus-icon-animate"><ArrowRight size={22} color="#10B981" /></div>
    <div>
        <strong>Infrastructure Automation</strong>
        <span className="sub-text">Efficient Workflows & Smart Systems</span>
    </div>
</li>
```

---

### Task 5: Final Polish & Verification

**Step 1: Styles Cleanup**
Remove the old `.about-sidebar` and `.about-main` CSS rules from the `<style>` block in `AboutSection.tsx`.

**Step 2: Visual Alignment**
Check card heights and ensure the grid-mask on the page sides frames the mosaic perfectly.
Expected: A balanced, technical "dashboard" look.
