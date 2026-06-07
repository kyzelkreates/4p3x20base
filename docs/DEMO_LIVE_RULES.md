# Demo Mode / Live Mode Rules

## Locked principle

**Demo Mode shows the product. Live Mode runs the product.**

## Demo mode

Demo mode may use fake, clearly labelled data for presentation, testing, screenshots, and investor explanation.

Required:
- All demo data must be labelled or controlled through config.
- Demo data must be globally disableable.
- Demo data must not be hardcoded into core business logic.
- Demo mode must not pretend to be live operational data.

## Live mode

Live mode should activate only when demo mode is off and a real backend/configuration is present.

Required:
- No backend-only secrets in frontend/public code.
- No hidden API keys.
- No fake live claims.
- Real users, records, sync, authentication, and dashboards must only be described as active when actually connected and tested.

## Recommended backend path

- Supabase first for authentication, database, RLS, storage, and realtime where appropriate.
- Firebase, AWS/custom, generic REST/custom endpoint, or local-only fallback can be supported later.

## 4P3X API Config Guard™

Block these from frontend/public code:
- SUPABASE_SERVICE_ROLE_KEY
- OPENAI_API_KEY
- GROQ_API_KEY
- STRIPE_SECRET_KEY
- DATABASE_URL
- JWT_SECRET
- PRIVATE_KEY
- WEBHOOK_SECRET
- admin tokens
- backend-only secrets
