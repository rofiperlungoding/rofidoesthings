# Unified Engineering Mosaic Implementation Plan

**Goal:** Global redesign of the portfolio to match the "Engineering Blueprint" aesthetic. This plan transforms the current isolated components into a continuous, framed mosaic experience.

**Architecture:**
- **Dynamic Framing:** All sections will adopt the side-vignette grid framing.
- **Information Hierarchy:** Key metrics and focus areas move to high-contrast pods.
- **Technical Typography:** `SF Pro Display Bold` used explicitly for data points.

**Tech Stack:** React 18, Lucide Icons, Vanilla CSS Grid.

---

### Task 1: Portfolio Mosaic Transformation

**Files:**
- `src/components/PortfolioSection.tsx`

**Steps:**
1.  **Grid Overhaul:** Replace `.projects-grid` with `.portfolio-mosaic` (3cols).
2.  **Featured Logic:** Detect repo named `CloudDesk` or most recent major project and apply `.mosaic-featured` class (`grid-column: span 2`).
3.  **Pod Refinement:** Update project cards to use the `mosaic-main` styling for depth and premium borders.

**Verification:**
- [ ] Verify `CloudDesk` repo spans 2 columns on desktop.
- [ ] Check grid gaps match the About section (24px).

---

### Task 2: Skills "Technical Constellation" (Option B)

**Files:**
- `src/components/SkillsGrid.tsx`
- `src/index.css`

**Steps:**
1.  **Structural Strip:** Remove `.skills-column` and `SkillBar` logic to favor an airy constellation.
2.  **Pod Creation:** Group skills into 4 core domain pods using `.mosaic-skill-pod`.
3.  **Icon Atmosphere:** Apply `opacity: 0.8` and `filter: grayscale(0.5)` to inactive icons, transitioning to full color + glow on pod hover.

**Verification:**
- [ ] Verify background grid vignette frames the constellation pods.
- [ ] Check icon pulse synchronization.

---

### Task 3: Career & Academic Timeline Mosaic

**Files:**
- `src/components/ExperienceSection.tsx`
- `src/components/EducationSection.tsx`

**Steps:**
1.  **Mosaic Staggering:** Arrange career items in a 2-row mosaic where the most recent spans `1.5fr` and others fill the remaining `1fr` pods.
2.  **Metric Highlight:** Move dates and "GPA/Highlights" into dedicated `mosaic-metric` mini-pods attached to the main entries.

**Verification:**
- [ ] Verify "Current University" pod is wider than "High School" pod.
- [ ] Confirm `verified-icon` logic is consistent with the profile card.

---

### Task 4: Global Vignette Synchronization

**Files:**
- `src/index.css`
- `src/components/Footer.tsx`

**Steps:**
1.  **Section Cleanup:** Remove `.bento-card` from `<section>` tags to allow the global background grid to "breathe" through the gaps between mosaic pods.
2.  **Footer Framing:** Update `.site-footer` to use a transparent background, inheriting the global grid-mask. Apply the vertical fade-out at the bottom of the page.

**Verification:**
- [ ] Full scroll test: Background grid must ONLY appear on the Left/Right margins (0-20% and 80-100%).
- [ ] Check footer contrast against the grid lines.

---

### Task 5: Final Responsive Polish

**Steps:**
1.  **Mobile Stack:** Ensure all `grid-column: span X` properties reset to `grid-column: span 1` at `< 768px`.
2.  **Gap Audit:** Ensure consistent `16px` padding inside cards across all sections.

**Verification:**
- [ ] Test on iPhone 12/13/14 viewport simulation.
- [ ] Verify all buttons share the `btn-premium-accent` animation.
