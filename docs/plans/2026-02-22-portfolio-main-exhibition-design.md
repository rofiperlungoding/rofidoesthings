# Design: Portfolio "Main Exhibition" (Pameran Utama) Redesign

**Date**: 2026-02-22  
**Status**: Validated  
**Topic**: High-end structural and visual overhaul to highlight flagship projects (CatCoder, CloudDesk, SeTutor).

## 1. Objective
Establish a Tiered Exhibition (Pameran Utama) hierarchy that immediately distinguishes flagship architected systems from standard code repositories. This layout will create a narrative of technical mastery through scale and custom visual schematics.

## 2. Tiered Grid Hierarchy
The `portfolio-mosaic` will no longer be a standard auto-flow grid. It will follow a "Command Center" sequence:

| Tier | Project(s) | Span Logic (Desktop) | Visual Role |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Hero)** | CatCoder | `grid-column: span 3` | Centerpiece / Main Entry Point |
| **Tier 2 (Command)** | CloudDesk | `grid-column: span 2` | Major Sub-system |
| **Tier 2 (Command)** | SeTutor | `grid-column: span 1` | Focused Specialty System |
| **Tier 3 (Archive)** | All Others | `grid-column: span 1` | Technical Repository Archive |

## 3. Domain-Specific Schematics
Flagship cards will move away from generic grids to unique background patterns indicating their domain:

- **CatCoder**: "Gamification Loop" (Node-based logic branches).
- **CloudDesk**: "Distributed Network" (Central nodes with radiating cloud connections).
- **SeTutor**: "Knowledge Tree" (Branching educational paths).

## 4. Flagship Ornamentation
Each flagship card will feature:
- **Identifier**: A monospace "SYSTEM ID" label at the top (e.g., `[ FLAGSHIP_SYSTEM_01 ]`).
- **Enhanced Border**: A slightly stronger border-color (`var(--accent-blue)` at `0.3` opacity).
- **Custom Content**: Detailed technical descriptions that move beyond the GitHub repo summary.

## 5. Technical Implementation
- **Sorting Logic**: Explicitly pull the "Big Three" to the front of the `repos` array in `PortfolioSection.tsx`.
- **Conditional Classes**: `.mosaic-hero` (span 3), `.mosaic-featured` (span 2), and `.mosaic-standard` (span 1).
- **CSS Variable Injection**: Pass custom SVG background patterns via CSS variables or specific class names.

## 6. Testing points
- **Responsive Stacking**: CatCoder must drop to 1-column on mobile while maintaining its flagship presence.
- **Visual Balance**: Ensure the custom schematics do not clutter the "Spicy Minimalist" look.
- **Opaque Shield**: Maintain the solid white background to block the main page's grid.
