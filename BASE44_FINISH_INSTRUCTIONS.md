# BASE44 FINISH INSTRUCTIONS
## 4P3X Verse™ Version 4.0 — 20 Refactorable Base Architecture System
**Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™**

---

## How to Inspect the Project

Before making any changes, read these files in order:

1. `README.md` — project overview, run/build/deploy instructions
2. `src/data/bases.js` — the 20 base architecture definitions (SSOT)
3. `src/agents/agentRegistry.js` — bounded AI agent definitions (SSOT)
4. `src/main.jsx` — all UI components and page sections
5. `src/styles.css` — full design system
6. `docs/V4_PRODUCT_STRATEGY.md` — positioning and creator statement
7. `docs/BASE_REFACTORING_RULES.md` — how to safely refactor a base
8. `docs/DEMO_LIVE_RULES.md` — demo/live separation rules
9. `base44/RUN_PLAN_V4_20_BASES.txt` — controlled build run plan

---

## How to Preserve the Architecture

- **SSOT rule**: All base data lives in `src/data/bases.js`. Never hardcode base info into components.
- **Agent rule**: All agent definitions live in `src/agents/agentRegistry.js`. Never hardcode agents into components.
- **Component rule**: Each page section is a named React component in `src/main.jsx`. Keep them separate and named clearly.
- **Style rule**: All design tokens are CSS custom properties in `:root {}` at the top of `styles.css`. Change colours there only.
- **No destructive refactor**: Do not delete sections that exist and work. Extend, don't replace.

---

## How to Finish Safely

1. Run `npm install` first.
2. Run `npm run build` and check it passes before any content changes.
3. Make one type of change at a time (data, then UI, then styles).
4. Run `npm run build` again after each significant change.
5. Never claim a task is complete if the build fails.
6. Never expose secrets. Check every file before committing.

---

## How to Refactor One Base Into a Product

Follow this sequence — do not skip steps:

```
1. Select the closest base from src/data/bases.js
2. Define the new product identity (name, sector, audience)
3. Create a new product folder (e.g. /products/my-product/)
4. Copy the base shell — do NOT modify the original base config
5. Replace terminology through config/data files first
6. Update data entities and field names
7. Update UI labels and page descriptions
8. Update AI agent bounds in agentRegistry
9. Validate demo mode (all demo data clearly labelled, globally disableable)
10. Validate live-mode readiness (no secrets, backend path documented)
11. Run responsive checks at 320px, 375px, 768px, 1024px, 1366px
12. Run npm run build — must pass
13. Write product-specific README
```

---

## How to Add More Bases Later

1. Open `src/data/bases.js`
2. Add a new object following the exact same schema as existing bases:
   - `id` (string, e.g. '21')
   - `name`
   - `category`
   - `summary`
   - `modules` (array)
   - `canBecome` (array)
   - `aiAgent`
   - `sectors` (array)
   - `backendPath`
   - `status`
3. Do NOT change any existing base objects unless correcting factual errors.
4. The base card grid will render the new base automatically.
5. Run `npm run build` to confirm.

---

## What NOT to Change

- Do NOT remove `Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™` from any branding area
- Do NOT remove ™ from `Kyzel Kreates™` in branding contexts
- Do NOT rename the project away from `4P3X Verse™`
- Do NOT delete the 20-base config objects in `bases.js`
- Do NOT add hardcoded backend secrets to any frontend file
- Do NOT claim live backend is connected if it isn't tested
- Do NOT present demo data as live operational data
- Do NOT add unrelated authentication, payment flows, or SaaS features without explicit instruction
- Do NOT rebuild the entire system when a targeted fix is possible
- Do NOT create duplicate component systems or duplicate routes

---

## How to Validate Before Deployment

Run this checklist in order:

```
[ ] npm install — completes without errors
[ ] npm run build — completes without errors, output in /dist
[ ] Open /dist/index.html in browser — page loads
[ ] All 20 base cards render in the base grid
[ ] Clicking a base card updates the detail panel
[ ] All navigation anchor links scroll to correct sections
[ ] Burger menu works on mobile (≤768px)
[ ] No horizontal scroll overflow at 375px width
[ ] All 10 live product links are present and correct
[ ] All external links open in new tab with rel="noopener noreferrer"
[ ] No console errors in browser devtools
[ ] No secrets in any /src or /public file
[ ] Kyzel Kreates™ includes ™ in all branding areas
[ ] Version 4.0 is the final 20-base architecture
[ ] Demo/live separation is described clearly
[ ] README.md is current and accurate
[ ] BASE44_FINISH_INSTRUCTIONS.md is current
```

---

## How to Avoid Feature Drift

Feature drift happens when new code adds unrelated functionality that was never requested.

Rules to prevent it:

1. Only add what is in the specification or explicitly requested.
2. If something is not broken, do not touch it.
3. Keep each change to the smallest scope possible.
4. Do not add authentication unless specifically requested.
5. Do not add payment flows unless specifically requested.
6. Do not add third-party integrations unless specifically requested.
7. If in doubt, describe the change and ask before making it.

---

## Final Deployment Checklist

```
[ ] Build passes: npm run build
[ ] /dist folder contains index.html + assets
[ ] No secrets in /dist or /src
[ ] All 20 bases render
[ ] Mobile responsive at 375px
[ ] All nav links work
[ ] All product links correct
[ ] README up to date
[ ] BASE44_FINISH_INSTRUCTIONS.md up to date
[ ] Branding consistent throughout
[ ] Demo/live mode explained clearly
[ ] Investor section present
[ ] AI agent safety rules visible
[ ] Version 4.0 framed as the complete 20-base system
[ ] Deployable to Vercel / Netlify as static site
```

---

*4P3X Verse™ Version 4.0 — Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™*
