---
name: brand-identity
description: Provides the single source of truth for brand guidelines, design tokens, technology choices, and voice/tone. Use this skill whenever generating UI components, styling applications, writing copy, or creating user-facing assets to ensure brand consistency.
---

# Brand Identity & Guidelines

**Brand Name:** [INSERT BRAND NAME HERE]

This skill defines the core constraints for visual design and technical implementation for the brand. You must adhere to these guidelines strictly to maintain consistency.

## When to use this skill
- Generating UI components or styling applications
- Writing marketing copy, error messages, or user-facing text
- Choosing technology stacks or libraries for implementation
- Creating visual assets that require brand consistency
- Implementing dark mode or theming systems

## Reference Documentation

Depending on the task you are performing, consult the specific resource files below. Do not guess brand elements; always read the corresponding file.

### For Visual Design & UI Styling
If you need exact colors, fonts, border radii, or spacing values, read:
👉 **[`resources/design-tokens.json`](resources/design-tokens.json)**

### For Coding & Component Implementation
If you are generating code, choosing libraries, or structuring UI components, read the technical constraints here:
👉 **[`resources/tech-stack.md`](resources/tech-stack.md)**

### For Copywriting & Content Generation
If you are writing marketing copy, error messages, documentation, or user-facing text, read the persona guidelines here:
👉 **[`resources/voice-tone.md`](resources/voice-tone.md)**

## Workflow

When working on a brand-related task:

1. **Identify the task type** (Visual, Technical, or Copy)
2. **Read the corresponding resource file** before starting work
3. **Apply the constraints strictly** — do not deviate from defined tokens or rules
4. **Validate output** against the guidelines before finalizing

## Quick Reference Checklist

- [ ] Read the appropriate resource file for your task
- [ ] Use design tokens from `design-tokens.json`, not hardcoded values
- [ ] Follow tech stack rules from `tech-stack.md`
- [ ] Match voice/tone from `voice-tone.md` for any copy
- [ ] Validate all brand elements before completing the task
