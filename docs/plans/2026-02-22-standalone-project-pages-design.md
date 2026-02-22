# Design: Standalone Project "Narrative Specs"

**Date**: 2026-02-22  
**Status**: Validated  
**Topic**: Implementation of dedicated pages for portfolio projects.

## 1. Objective
Transform the portfolio from a single-page overview into a multi-layered exhibition. Every project will have a dedicated "Technical Specification" page that balances high-end storytelling with rigorous engineering documentation.

## 2. Page Framework: "The Narrative Spec"
Combining ultra-clean minimalism with technical detail.

- **System Identification Block (Header)**:
  - Large monospace **System ID** (e.g., `CATCODER-LOGIC-01`).
  - GitHub Stats Bar: Stars, Fork count, and Repository Size.
  - Revision metadata (Creation date + Last Update).
- **The Main Narrative (800px Column)**:
  - Focused sections: "Project Vision," "The Engineering Challenge," and "Architecture Overview."
  - Massive whitespace for readability.
- **Architecture Sidebar (Sticky)**:
  - Track the tech stack (with status dots) and system requirements constantly as the user scrolls.

## 3. Hybrid Content Strategy
- **Flagship Handcrafting (CatCoder, CloudDesk, SeTutor)**:
  - Custom React components for each flagship page.
  - Hardcoded "System Diagrams" (SVG) explaining logic flows, network nodes, and knowledge trees.
- **Generic Spec Mirror (Archive)**:
  - Automatic conversion of GitHub READMEs into styled blueprint content.
  - Auto-generated "System Serial Numbers" based on repo ID.

## 4. Visual Aesthetic
- **Theme**: Stark White with Blue/Amber accents.
- **Watermark**: A faint 20px Grid Background across all detail pages.
- **Typography**: Outfit for headers, Inter for long-form narrative text.

## 5. Navigation & UX
- **Entry**: Full bento card click from `Home.tsx`.
- **Exit**: "Back to Command Center" link with breadcrumb styling.
- **Scroll Behavior**: Instant scroll-to-top on route change.
