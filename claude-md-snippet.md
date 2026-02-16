# Engineering Standards Enforcement (required-reading)

<!-- Add this to your project's CLAUDE.md to activate condensed full-lifecycle enforcement -->

## Code Standards
- Names MUST reveal intent and use domain language. No `data`, `temp`, `result`, `info`, `item`.
- Functions MUST do one thing, have ≤3 parameters, no boolean flags, no hidden side effects.
- Enforce Command-Query Separation. Prefer pure functions.
- No commented-out code. Comments explain WHY, never WHAT.
- Use exceptions, not error codes. Never return or pass null. Never swallow exceptions.
- Define errors out of existence where possible.
- Refactor in small, verified steps. Never combine refactoring with behavior changes.

## Architecture Standards
- Enforce all SOLID principles as requirements, not suggestions.
- Design deep modules: simple interfaces hiding complex implementations.
- Source code dependencies MUST point inward. Business logic never depends on frameworks/DB/UI.
- Identify and respect Bounded Context boundaries. Use Anti-Corruption Layers.
- Domain objects MUST contain behavior (no anemic domain models).
- Choose data model based on access pattern, not habit.
- Record architectural decisions as ADRs.

## Testing Standards
- Follow Red-Green-Refactor. Tests drive design, not afterthought.
- Test pyramid: ~70% unit, ~20% integration, ~10% E2E.
- Name tests to describe behavior. Single assertion principle. Four-phase structure.
- Test behavior, not implementation. No flaky tests. No testing private methods.
- Characterization tests before modifying legacy code.

## Security Standards
- Validate ALL input at trust boundaries. Allowlists over denylists. Server-side validation.
- Parameterized queries only. Context-aware output encoding. CSP headers.
- Auth/authz enforced server-side on every request. Least privilege.
- Never hardcode secrets. Never log sensitive data. Never secrets in URLs.
- HTTPS/TLS everywhere. Passwords hashed with Argon2id/bcrypt/scrypt.
- Threat model (STRIDE) for new systems. Dependency vulnerability scanning in CI.

## DevOps Standards
- Automate builds, tests, and deployments. Main branch always deployable.
- Infrastructure as code. No snowflake servers.
- Zero-downtime deployments. Rollback strategy tested before deploying.
- Observability: structured logging, metrics (golden signals), distributed tracing.
- SLOs backed by SLIs. Alert on symptoms, not causes.
- Circuit breakers, timeouts, bulkheads, retries with backoff.

## Data Standards
- Choose data model based on access pattern, not convention.
- Index for actual query patterns. No SELECT * in production. No N+1 queries.
- Schema migrations are additive/non-destructive. Test against production-scale data.
- Idempotent pipelines. Handle event time vs processing time correctly.
- Data quality SLOs: freshness, completeness, accuracy.

## Delivery Standards
- Small batches. WIP limits. Make all work visible.
- Relative estimation. Definition of Done enforced.
- Stream-aligned teams. Respect Conway's Law.
- Technical debt visible and allocated capacity.

## Product Standards
- Outcomes over outputs. Validate demand before building.
- Problems before solutions. Continuous discovery.
- User stories with testable acceptance criteria.
- One Metric That Matters per phase.

## UX Standards
- Usability first. Follow established conventions.
- WCAG 2.1 AA minimum. Keyboard accessible. Screen reader tested.
- Design tokens as single source of truth. Atomic design hierarchy.
- Core Web Vitals: LCP <2.5s, INP <200ms, CLS <0.1.
- Mobile-first responsive design.

## Leadership Standards
- ADRs for significant decisions. Technical vision communicated.
- Psychological safety. Intent-based leadership.
- Code review as teaching, not gatekeeping.
- Capacity allocated across feature/debt/ops/growth.

## Enforcement Behavior
- Classify work type at task start (WRITE_CODE, MODIFY_CODE, REVIEW_CODE, etc.).
- Apply domain rules continuously during work.
- Run applicable checklist before delivering. Report results.
- Flag violations with severity: CRITICAL, MAJOR, MINOR.
- Reject anti-patterns: God class, anemic domain model, N+1 queries, hardcoded secrets, flaky tests, feature factory, hero dependency, and more.

## Pragmatism
- Match principle weight to scope. Don't apply system concerns to utility functions.
- Scripts and prototypes can bend rules. Production code cannot.
- If user explicitly requests quick/dirty, comply but note what to fix for production.
