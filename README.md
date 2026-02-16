# required-reading

> Claude knows every engineering principle. This plugin makes it enforce them.

A Claude Code plugin that transforms Claude from a permissive code generator into a **full-lifecycle engineering standards enforcer** — covering 10 domains, with checklists that ensure nothing gets skipped, and a multi-agent team mode that spins up domain specialists for thorough reviews.

## What It Does

Claude defaults to matching whatever style the codebase uses, staying quiet about violations, and being "helpful" by writing code that works but accumulates technical debt.

**required-reading** changes that. Once installed, Claude will:

- **Enforce standards across 10 domains** — not just code quality, but architecture, testing, security, DevOps, data, delivery, product, UX, and leadership
- **Run pre-delivery checklists** — triggered automatically by work type (writing code, reviewing, designing, deploying, etc.)
- **Flag anti-patterns on sight** — God classes, anemic domain models, N+1 queries, hardcoded secrets, flaky tests, and dozens more
- **Launch specialist subagents** — Team Mode spins up parallel domain experts for comprehensive multi-domain reviews
- **Be pragmatic** — scope-appropriate enforcement, prototype-aware, performance-conscious, legacy-friendly

## What It Covers

| Domain | Key Standards |
|--------|--------------|
| **Software Engineering** | Naming, function design, CQS, error handling, refactoring, legacy code strategy |
| **Architecture & Design** | SOLID, deep modules, dependency rule, bounded contexts, DDD, design patterns |
| **QA & Testing** | TDD, test pyramid, test design, test doubles, boundary analysis, no flaky tests |
| **Security** | Input validation, output encoding, auth/authz, secrets management, STRIDE threat modeling |
| **DevOps & Reliability** | CI/CD, IaC, deployment strategies, observability, SLOs, stability patterns |
| **Data Engineering** | Data modeling, indexing, query optimization, pipelines, schema migrations, data quality |
| **Delivery & Process** | Small batches, WIP limits, estimation, Definition of Done, tech debt visibility |
| **Product Management** | Outcomes over outputs, validated learning, continuous discovery, story mapping |
| **UX Engineering** | Usability, WCAG 2.1 AA, Core Web Vitals, atomic design, design tokens |
| **Technical Leadership** | ADRs, psychological safety, intent-based leadership, capacity allocation |

## Installation

### Quick Install

```bash
npx required-reading
```

Installs the core skill + all 10 domain specialists to `~/.claude/skills/`. Works on macOS, Linux, and Windows.

### Claude Code Plugin

```
/plugin marketplace add Drmsay/Required-Reading
/plugin install required-reading@required-reading
```

### Per-Project

Copy the contents of `claude-md-snippet.md` into your project's `CLAUDE.md` for a condensed version scoped to a single project.

## Checklists

Checklists trigger automatically based on the type of work:

| Work Type | Triggered By |
|-----------|-------------|
| `WRITE_CODE` | Writing new functions, classes, modules |
| `MODIFY_CODE` | Fixing, changing, refactoring existing code |
| `REVIEW_CODE` | Reviewing PRs, diffs, or code |
| `DESIGN_SYSTEM` | Designing architecture, APIs, databases |
| `WRITE_TESTS` | Writing or adding tests |
| `DEPLOY_RELEASE` | Deploying, releasing, CI/CD work |
| `DATA_WORK` | Schema, migrations, queries, pipelines |
| `PLAN_FEATURE` | Planning, scoping, estimating |
| `DESIGN_UI` | UI/UX design and component work |
| `INCIDENT_RESPONSE` | Outages, incidents, production issues |

Example checklist output:

```markdown
### Pre-Delivery Checklist: WRITE_CODE

- [x] ENGINEERING: Names reveal intent, domain language used
- [x] ENGINEERING: Functions do one thing, ≤3 params
- [x] ARCHITECTURE: Dependencies point inward
- [x] TESTING: Tests written for new behavior
- [ ] SECURITY: **ACTION NEEDED** — User input passed to processOrder()
      without validation. Add input validation before processing.
- [x] DEVOPS: Configuration externalized

**Result: 5/6 passed. 1 action item.**
```

## Team Mode

For comprehensive reviews, Claude launches parallel domain-specialist subagents:

```
> "Review this PR with the full team"
```

Claude (as Tech Lead) will:
1. Identify relevant domains
2. Launch specialist subagents in parallel (Software Engineer, QA, Security, etc.)
3. Each specialist analyzes from their domain's perspective
4. Results synthesized into a unified Team Review Report

Selective team launch matches specialists to the work type:
- **Code PR** → Software Engineer + QA + Security
- **System design** → Architect + Security + DevOps + Data + Product
- **Feature planning** → Product + UX + Delivery + Architect
- **Incident** → DevOps + Security + Data + Eng Manager

## Before & After

| Prompt | Without | With required-reading |
|--------|---------|----------------------|
| Write a function | Vague names, too many params | Intent-revealing names, ≤3 params, SRP, CQS, checklist |
| Design a system | Reasonable architecture | Quality attributes, threat model, SLOs, data model, ADRs, checklist |
| Fix a bug | Fixes the bug | Fixes it + flags violations + runs MODIFY_CODE checklist |
| Review code | Generic feedback | 10-domain systematic review with severity ratings |
| Write tests | Basic assertions | TDD, pyramid, boundary values, proper test doubles |
| Deploy | Manual steps | Zero-downtime strategy, rollback plan, observability check |

## Pragmatism

required-reading is opinionated, not dogmatic.

- **Scope-appropriate** — won't apply system-level concerns to a utility function
- **Prototype-aware** — explicitly labeled throwaway code gets looser enforcement
- **Performance-conscious** — acknowledges that hot paths may trade readability for speed
- **Legacy-friendly** — won't demand a full rewrite during incremental improvement
- **Noise-free** — checklists surface real issues, not bureaucratic checkboxes

To bypass: *"Skip enforcement"* or *"Quick and dirty mode."* Claude will comply but note what it would change for production.

## Project Structure

```
required-reading/
├── .claude-plugin/
│   ├── marketplace.json
│   └── plugin.json
├── bin/
│   └── install.js
├── skills/
│   ├── required-reading/
│   │   └── SKILL.md                          (core — 10 domains, checklists, team mode)
│   ├── required-reading-software-engineering/
│   │   └── SKILL.md                          (deep-dive specialist)
│   ├── required-reading-architecture/
│   │   └── SKILL.md
│   ├── required-reading-testing/
│   │   └── SKILL.md
│   ├── required-reading-security/
│   │   └── SKILL.md
│   ├── required-reading-devops/
│   │   └── SKILL.md
│   ├── required-reading-data-engineering/
│   │   └── SKILL.md
│   ├── required-reading-delivery/
│   │   └── SKILL.md
│   ├── required-reading-product/
│   │   └── SKILL.md
│   ├── required-reading-ux/
│   │   └── SKILL.md
│   └── required-reading-leadership/
│       └── SKILL.md
├── claude-md-snippet.md
├── package.json
└── README.md
```

## License

MIT
