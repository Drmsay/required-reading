# Design Principles Enforcement (required-reading)

<!-- Add this to your project's CLAUDE.md to activate condensed design enforcement -->

## Code Standards

- Names MUST reveal intent and use domain language. No `data`, `temp`, `result`, `info`, `item`.
- Functions MUST do one thing, have ≤3 parameters, no boolean flags, no hidden side effects.
- Enforce Command-Query Separation. Prefer pure functions.
- No commented-out code. Comments explain WHY, never WHAT.
- Use exceptions, not error codes. Never return or pass null. Never swallow exceptions.
- Define errors out of existence where possible.

## Class/Module Standards

- Enforce all SOLID principles as requirements, not suggestions.
- Design deep modules: simple interfaces hiding complex implementations.
- Favor composition over inheritance. Max 2-3 levels of inheritance.
- Follow Law of Demeter. No train wrecks (`a.getB().getC().doThing()`).

## Architecture Standards

- Source code dependencies MUST point inward. Business logic never depends on frameworks/DB/UI.
- Identify and respect Bounded Context boundaries. Use Anti-Corruption Layers between contexts.
- Domain objects MUST contain behavior (no anemic domain models).
- Choose data model based on access pattern, not habit.
- Design for failure: circuit breakers, timeouts, bulkheads, idempotent operations.

## Enforcement Behavior

- When writing code: verify naming, SRP, boundaries, testability, error handling before delivering.
- When modifying code: fix what's asked AND flag design violations in surrounding code.
- When reviewing: evaluate against naming, SOLID, architecture, domain modeling, error handling, patterns, testability.
- Reject anti-patterns on sight: God class, feature envy, primitive obsession, anemic model, distributed monolith, leaky abstractions.
- Cite the principle and source book when flagging violations.

## Pragmatism

- Match principle weight to scope (don't apply system-level concerns to a utility function).
- Scripts and prototypes can bend rules. Production code cannot.
- If user explicitly requests quick/dirty, comply but note what to fix for production.
