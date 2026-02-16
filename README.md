# required-reading

> Claude knows every design principle. This plugin makes it enforce them.

A Claude Code plugin that transforms Claude from a permissive code generator into an opinionated design principles enforcer — backed by foundational software design literature.

## What It Does

Claude defaults to matching whatever style the codebase uses, staying quiet about violations, and being "helpful" by writing code that works but accumulates technical debt.

**required-reading** changes that. Once installed, Claude will:

- **Enforce naming discipline** — no more `doStuff()`, `data`, `temp`, or `result`
- **Apply SOLID, Clean Architecture, and DDD** as requirements, not suggestions
- **Flag anti-patterns on sight** — God classes, anemic domain models, leaky abstractions, distributed monoliths
- **Choose the right data model** for the access pattern, not just default to "throw it in Postgres"
- **Design for failure** — circuit breakers, timeouts, bulkheads, idempotent operations
- **Cite its sources** — every flag references the specific principle and its origin

## What It Covers

| Area | Enforced Principles |
|------|-------------------|
| **Code** | Naming, function design, CQS, error handling, formatting |
| **Classes & Modules** | SOLID, deep modules, information hiding, composition over inheritance |
| **Architecture** | Dependency Rule, bounded contexts, component boundaries |
| **Domain Modeling** | Aggregates, entities, value objects, domain events, anti-corruption layers |
| **Data** | Model selection by access pattern, consistency trade-offs, schema evolution |
| **Distributed Systems** | Service boundaries, failure modes, replication, partitioning |
| **Patterns** | Correct application of GoF, enterprise, and tactical DDD patterns |

## Installation

### Quick Install

```bash
npx required-reading
```

Copies the skill file to `~/.claude/skills/required-reading/` — works on macOS, Linux, and Windows.

### Claude Code Plugin

```
/plugin marketplace add Drmsay/Required-Reading
/plugin install required-reading@required-reading
```

### Manual

```bash
mkdir -p ~/.claude/skills/required-reading
curl -o ~/.claude/skills/required-reading/SKILL.md \
  https://raw.githubusercontent.com/Drmsay/Required-Reading/master/skills/required-reading/SKILL.md
```

### Per-Project

Copy the contents of `claude-md-snippet.md` into your project's `CLAUDE.md` for a condensed version scoped to a single project.

## Before & After

| Prompt | Without | With required-reading |
|--------|---------|----------------------|
| Write a function | Vague names, too many params, hidden side effects | Intent-revealing names, ≤3 params, SRP, CQS |
| Design a class | Matches existing style, even if it's a God class | SOLID enforced, deep module design, composition over inheritance |
| Add a feature | Drops it wherever convenient | Respects architectural boundaries, bounded contexts, dependency direction |
| Fix a bug | Fixes the bug | Fixes the bug AND flags surrounding design violations |
| Review code | Generic feedback | Systematic evaluation against named principles with citations |
| Design a system | Reasonable architecture | Quality attributes, fitness functions, data model analysis, failure mode design |

## Pragmatism

required-reading is opinionated, not dogmatic.

- **Scope-appropriate** — won't apply system-level concerns to a utility function
- **Prototype-aware** — explicitly labeled throwaway code gets looser enforcement
- **Performance-conscious** — acknowledges that hot paths may trade readability for speed
- **Legacy-friendly** — won't demand a full rewrite during incremental improvement

To bypass enforcement: *"Skip enforcement, give me a quick version."* Claude will comply but note what it would change for production.

## Project Structure

```
required-reading/
├── .claude-plugin/
│   ├── marketplace.json
│   └── plugin.json
├── bin/
│   └── install.js
├── skills/
│   └── required-reading/
│       └── SKILL.md
├── claude-md-snippet.md
├── package.json
└── README.md
```

## License

MIT
