---
name: brainstorming
description: Explores user intent, requirements, and design before implementation through Socratic dialogue. Use this before any creative work - creating features, building components, adding functionality, or modifying behavior.
---

# Brainstorming Ideas Into Designs

Help turn ideas into fully formed designs and specs through natural collaborative dialogue.

## When to use this skill
- Before creating new features or functionality
- When building new components or modules
- Before modifying existing behavior significantly
- When the user has an idea but needs help refining it
- At the start of any creative or design work

## The Process

### Phase 1: Understanding the Idea
- Check out the current project state first (files, docs, recent commits)
- Ask questions **one at a time** to refine the idea
- Prefer **multiple choice questions** when possible
- Focus on understanding: purpose, constraints, success criteria

### Phase 2: Exploring Approaches
- Propose **2-3 different approaches** with trade-offs
- Present options conversationally with your recommendation and reasoning
- Lead with your recommended option and explain why

### Phase 3: Presenting the Design
- Once you understand what you're building, present the design
- Break it into sections of **200-300 words**
- Ask after each section: "Does this look right so far?"
- Cover: architecture, components, data flow, error handling, testing
- Be ready to go back and clarify if something doesn't make sense

## After the Design

### Documentation
- Write the validated design to `docs/plans/YYYY-MM-DD-<topic>-design.md`
- Commit the design document to git

### Implementation (if continuing)
- Ask: "Ready to set up for implementation?"
- Use the **writing-plans** skill to create a detailed implementation plan

## Key Principles

| Principle | Description |
|-----------|-------------|
| **One question at a time** | Don't overwhelm with multiple questions |
| **Multiple choice preferred** | Easier to answer than open-ended when possible |
| **YAGNI ruthlessly** | Remove unnecessary features from all designs |
| **Explore alternatives** | Always propose 2-3 approaches before settling |
| **Incremental validation** | Present design in sections, validate each |
| **Be flexible** | Go back and clarify when something doesn't make sense |

## Workflow Checklist

- [ ] Reviewed current project state (files, docs, commits)
- [ ] Asked clarifying questions one at a time
- [ ] Proposed 2-3 approaches with trade-offs
- [ ] User selected preferred approach
- [ ] Presented design in 200-300 word sections
- [ ] Validated each section with user
- [ ] Saved design to `docs/plans/YYYY-MM-DD-<topic>-design.md`
- [ ] Committed design document
- [ ] Asked if ready to proceed to implementation planning
