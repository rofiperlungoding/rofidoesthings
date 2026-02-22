# Implementation Plan: Standalone Project Pages

This plan covers the transition to a multi-page routing system, custom flagship pages, and an automated markdown repository mirror.

## Task 1: Routing & Page Component Setup
Initialize the multi-page structure.
- [ ] Add dynamic route `/:projectName` in `App.tsx`.
- [ ] Create `ProjectDetailPage.tsx` as the main layout wrapper.
- [ ] Implement the `EngineeringHeader` component with System IDs and GitHub stats.
- [ ] Setup the `ArchitectureSidebar` sticky component.

## Task 2: Flagship Exhibition (Tier 1 & 2)
Handcraft the primary storytelling sections.
- [ ] Create custom content modules for `CatCoder` (Gamification flow).
- [ ] Create custom content modules for `CloudDesk` (Network nodes).
- [ ] Create custom content modules for `SeTutor` (Logic tree).
- [ ] Inject handcrafted schematics specifically for these three.

## Task 3: Repository Mirroring (Tier 3)
Build the automated documentation generator.
- [ ] Implement GitHub API fetch for `README.md` raw content.
- [ ] Add a visual markdown formatter (using styled divs/components).
- [ ] Implement the "System Serial Number" generator using repository metadata.

## Task 4: UI/UX Refinement
Connect the dots between the grid and the spec sheets.
- [ ] Wrap `PortfolioSection` cards in `Link` components from `react-router-dom`.
- [ ] Implement the "Back to Command Center" breadcrumb.
- [ ] Apply the 20px Grid Watermark to all `ProjectDetailPage` backgrounds.
- [ ] Add smooth scroll-to-top logic on route transitions.
