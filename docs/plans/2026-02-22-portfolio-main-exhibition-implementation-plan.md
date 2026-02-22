# Implementation Plan: Portfolio Main Exhibition (Pameran Utama)

This plan implements the "Command Center" bento layout to highlight CatCoder, CloudDesk, and SeTutor as flagship projects.

## Task 1: CSS Grid & Ornamentation Update
Establish the visual foundation for the three-tier hierarchy and custom schematics.
- [ ] Add `.mosaic-hero` class to `index.css` (`grid-column: span 3`).
- [ ] Define the three unique background schematics for CatCoder, CloudDesk, and SeTutor.
- [ ] Add styling for the `[ FLAGSHIP_SYSTEM ]` monospace labels.
- [ ] Update responsive media queries to ensure the Hero (CatCoder) stacks correctly on mobile.

## Task 2: Data Sorting & Logic Overhaul
Modify `PortfolioSection.tsx` to explicitly prioritize and style the flagship projects.
- [ ] Implement a custom sorting function to move CatCoder, CloudDesk, and SeTutor to the top of the list.
- [ ] Update the `isFeatured` logic to handle three levels: `Hero`, `Featured`, and `Standard`.
- [ ] Map repository names to the new grid classes.
- [ ] Add the monospace System ID labels to the flagship card headers.

## Task 3: Visual Polish & Content Refinement
Ensure the exhibition feels premium and informative.
- [ ] Inject custom technical descriptions for the flagship projects to replace basic GitHub summaries.
- [ ] Apply the enhanced border styles to Tier 1 and Tier 2 projects.
- [ ] Verify the "Ironclad Opaque Shield" (opaque backgrounds) is preserved for the new classes.

## Task 4: Responsive Alignment
- [ ] Verify the 3 -> 2 -> 1 column transition.
- [ ] Ensure CatCoder maintains its "Importance" on mobile even without the 3-column span.
