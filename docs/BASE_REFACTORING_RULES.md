# Base Refactoring Rules

## Core principle

A base is not a finished sector product by itself. A base is a reusable engine that can be configured, branded, renamed, and extended into a sector product.

## Safe refactoring steps

1. Select the closest base.
2. Define the new product identity.
3. Replace terminology through config first.
4. Update data entities through SSOT/config.
5. Update UI labels and page descriptions.
6. Update workflows and state transitions.
7. Update AI agent boundaries.
8. Validate demo mode.
9. Validate live-mode readiness.
10. Run responsive/mobile checks.

## Never do this

- Do not clone proprietary apps 1:1.
- Do not copy logos, assets, protected UI, code, or brand identity.
- Do not rebuild working systems without cause.
- Do not create duplicate state stores.
- Do not hardcode business logic outside the SSOT/config layer.
- Do not mix demo records with real/live records.
- Do not claim live backend functionality unless configured and tested.

## Required output for every refactor

- Product name.
- Who it serves.
- Why it is needed.
- Core workflows.
- Data model.
- Dashboard screens.
- PWA/user screens where relevant.
- AI agent role.
- Demo/live behaviour.
- Backend-ready path.
- Safety boundaries.
- Validation checklist.
