# SDD ledger — plan: docs/superpowers/plans/2026-09-19-content-authoring.md

## Setup

- Branch: `content-authoring` (cut from main @ 28b77df). In-place branch, no linked worktree.
- Ruling: work in place on a feature branch instead of a git worktree — prior sessions in this repo work in place; a worktree would need a full npm reinstall and duplicate Vercel link state; branch isolates from main. Cost if wrong: none, branch is disposable.
- Dirty tree inherited (not mine, left untouched): M index.html, M src/components/Footer.tsx, M src/components/Navbar.tsx, M src/pages/AboutPage.tsx, ?? docs/, ?? public/cv.pdf. All commits use explicit paths only, never `git add -A`.
- Baseline: `npm run build` PASS. `npm run lint` FAILS pre-existing with exactly 2 errors, both in src/pages/WorkPage.tsx (ProjectCategory export, constraints vs constraint) — owner's WIP, unrelated to plan.
- Ruling: Global Constraints "lint must pass after every task" is unsatisfiable at baseline; per-task gate is instead "no NEW tsc errors vs baseline set". Cost if wrong: a real type error I introduce hides among the 2; mitigated by diffing error output per task.
- Pre-flight shared interfaces: T1 produces NoteMeta/getAllNotes/getNote/getNoteRaw → T3, T6, T7 consume (names locked). T2 produces mdxComponents/Figure/Gallery/Steps/Callout/Stat/NoteCta/PullQuote → T3, T6 consume. T4 produces /admin + config field names ↔ T1 schema names (must match 1:1). T5 consumes T4 auth_endpoint. No conflicts found.
Task 1: complete. Rulings: (1) getNoteRaw/readTimeOf/headingsOf pulled forward from Tasks 3/6 into Task 1 loader — one stable interface file, no cross-task drift; cost if wrong: none, same signatures. (2) Cover regex relaxed at birth to ^/uploads/[path]/file (Task 4 planned fix) — CMS cannot produce date folders; cost if wrong: none, Task 4 step becomes verify-only. (3) Added src/vite-env.d.ts (missing scaffold) to fix import.meta.glob types — cost if wrong: none, standard Vite file. (4) Baseline lint has 2 pre-existing WorkPage errors; gate = no NEW errors. Lint now shows exactly those 2. Tests: npm run test → 3/3 pass. Build PASS.
