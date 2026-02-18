---
name: writing-plans
description: Creates comprehensive implementation plans with bite-sized tasks before touching code. Use when you have a spec or requirements for a multi-step task, after brainstorming is complete.
---

# Writing Implementation Plans

Write comprehensive implementation plans assuming the engineer has zero context for the codebase. Document everything they need: which files to touch, code snippets, testing approach, and how to verify. Give them the whole plan as bite-sized tasks.

## When to use this skill
- After brainstorming/design is complete
- Before implementing any multi-step task
- When you have specs or requirements ready
- When creating a roadmap for a feature or refactor

## Announce at Start

Always announce: **"I'm using the writing-plans skill to create the implementation plan."**

## Plan Document Structure

### Required Header

Every plan MUST start with this header:

```markdown
# [Feature Name] Implementation Plan

**Goal:** [One sentence describing what this builds]

**Architecture:** [2-3 sentences about approach]

**Tech Stack:** [Key technologies/libraries]

---
```

### Save Location

Save plans to: `docs/plans/YYYY-MM-DD-<feature-name>.md`

## Bite-Sized Task Granularity

**Each step is one action (2-5 minutes):**

| Action | Step |
|--------|------|
| Write the failing test | Step 1 |
| Run it to verify it fails | Step 2 |
| Implement minimal code to pass | Step 3 |
| Run tests to verify they pass | Step 4 |
| Commit the changes | Step 5 |

## Task Template

Use this structure for each task:

```markdown
### Task N: [Component Name]

**Files:**
- Create: `exact/path/to/file.ext`
- Modify: `exact/path/to/existing.ext:123-145`
- Test: `tests/exact/path/to/test.ext`

**Step 1: Write the failing test**

[Complete test code here]

**Step 2: Run test to verify it fails**

Run: `[exact test command]`
Expected: FAIL with "[specific error message]"

**Step 3: Write minimal implementation**

[Complete implementation code here]

**Step 4: Run test to verify it passes**

Run: `[exact test command]`
Expected: PASS

**Step 5: Commit**

```bash
git add [files]
git commit -m "feat: [description]"
```
```

## Core Principles

- **Exact file paths always** — No ambiguity about where code goes
- **Complete code in plan** — Not "add validation", but actual code
- **Exact commands with expected output** — What to run, what to expect
- **DRY** — Don't Repeat Yourself
- **YAGNI** — You Ain't Gonna Need It
- **TDD** — Test-Driven Development
- **Frequent commits** — Small, atomic commits after each task

## Execution Handoff

After saving the plan, offer this choice:

> **"Plan complete and saved to `docs/plans/<filename>.md`.**
>
> **How would you like to proceed?**
> 1. **Execute now** — I'll implement task by task with verification
> 2. **Review first** — Open the plan for review before executing
> 3. **Save for later** — Just keep the plan, implement another time"

## Workflow Checklist

- [ ] Announced using the writing-plans skill
- [ ] Created plan with required header (Goal, Architecture, Tech Stack)
- [ ] Broke down into bite-sized tasks (2-5 min each)
- [ ] Each task has: Files, Steps, Complete code, Exact commands
- [ ] Followed TDD pattern (test → fail → implement → pass → commit)
- [ ] Saved plan to `docs/plans/YYYY-MM-DD-<feature-name>.md`
- [ ] Offered execution handoff options
