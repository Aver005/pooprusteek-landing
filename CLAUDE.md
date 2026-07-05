# CLAUDE.md

Guidance for Claude Code (and any other agent) working in this repository.

## What this is

The marketing landing page for **PoopRusteek** (`E:\Projects\Me\pooprusteek`) —
a free, terminal-native Rust TUI coding agent driving DeepSeek's
reverse-engineered web API. This repo is the *website about it*, not the agent
itself. One page, no routing, no backend, no state library.

Stack: **Bun** (runtime + package manager — never npm/pnpm/yarn), **Vite 8**,
**React 19 + TypeScript (strict)**, **Tailwind v4** (CSS-first config via
`@theme` in `src/index.css`, no tailwind.config file), **Motion 12**
(`motion/react` — the framer-motion successor), **oxlint**.

```sh
bun install
bun dev              # http://localhost:5173/pooprusteek/
bun run build        # tsc -b && vite build → dist/
bun run preview      # serves dist/ at http://localhost:4173/pooprusteek/
bun run lint         # oxlint (no output = clean)
```

## Invariants — break these and the site breaks

1. **`base: '/pooprusteek/'` in `vite.config.ts` must equal the deploy slug.**
   The site is served by aaaver-app from `sites/pooprusteek/` at
   `aaaver.ru/pooprusteek/`. Dev and preview URLs also live under that base —
   `http://localhost:5173/` alone 404s.
2. **The palette is not yours to invent.** Every color token in
   `src/index.css` `@theme` is copied from
   `pooprusteek/src/tui/theme.rs` (comments in the CSS map token → THEME
   field). New UI must use existing tokens (`ink`, `panel`, `panel-deep`,
   `fg`, `accent`, `accent-dim`, `accent-soft`, `line`, `dim`, `soft`, `err`,
   `ok`, `warn`, `sel`). If the TUI theme changes, re-sync from theme.rs.
3. **One font: JetBrains Mono Variable** (self-hosted via
   `@fontsource-variable/jetbrains-mono`, imported in index.css). No second
   typeface — the entire aesthetic is "the TUI, but a webpage".
4. **Every JS-timer animation must respect reduced motion.** Motion components
   are covered globally by `MotionConfig reducedMotion="user"` in `main.tsx`,
   but `setTimeout`/`setInterval` animations (TerminalDemo typewriter,
   spinners, PowTicker, GoalLoop cycle) each guard with `useReducedMotion()` —
   keep doing that for anything new, and give it a sensible static end-state.
5. **Don't put Tailwind `transition-*` classes on `motion.*` elements** — they
   fight Motion's inline styles and stutter. `transition-colors` for pure
   CSS hovers on plain elements is fine (used on cards/links).
6. **Grid children that must shrink need `min-w-0`.** Already bitten once:
   the PoW ticker's `truncate` (= `white-space: nowrap`) inflated its grid
   column's min-content and caused horizontal scroll on mobile. Terminal-ish
   single-line content inside any grid/flex column → `min-w-0` on the item.
7. **Copy is English, tone is the project's**: irreverent about the name,
   dead-serious about the engineering ("No API key. No subscription. No
   fluff."). Real TUI strings (status badges, tagline, status-bar format) are
   quoted verbatim — don't paraphrase them, they're the product.

## Repo map

- `src/App.tsx` — section order: Nav → Hero → ZeroDollars → Features →
  GoalLoop → Commands → TechStrip → Footer → StatusBar.
- `src/index.css` — all theming: `@theme` tokens + keyframes
  (`blink`, `marquee`, `marquee-rev`), `.crt` scanline/vignette overlay
  (fixed, z-60, pointer-events-none), `.grid-bg` phosphor grid.
- `src/lib/anim.ts` — shared `rise`/`stagger` variants, `viewportOnce`,
  `GITHUB_URL` (https://github.com/Aver005/pooprusteek).
- `src/components/`
  - `Logo.tsx` — POOPRUSTEEK wordmark; staggered per-letter color wave
    (soft-blue → blue → green) replicating the TUI landing logo; letters
    0 / mid / last underlined, same as the TUI.
  - `TerminalDemo.tsx` — scripted typewriter session. The whole demo is the
    `SCRIPT` array (`typed: true` lines get char-by-char typing, others
    appear whole after `pause` ms); it loops forever. Edit SCRIPT to change
    the demo; keep status labels real (`[GOAL ON]`, `[EVALUATING]`,
    `[GOAL DONE]`…). Full cycle ≈ 15 s.
  - `ZeroDollars.tsx` — `$0.00` + ledger `<dl>` + `PowTicker` (fake nonce
    counter, `Math.random` is fine here).
  - `Features.tsx` — 8 cards; also exports `SectionTitle` used by GoalLoop.
    Cards have decorative `┌ ┐ └ ┘` corner glyphs that recolor on hover.
  - `GoalLoop.tsx` — auto-advancing `STATES` array of real GOAL badges with
    `AnimatePresence mode="wait"`; per-state `hold` ms.
  - `Commands.tsx` — two CSS marquees (`animate-marquee`, `-rev`); items are
    duplicated in-render for the seamless loop; edge fade overlays.
  - `StatusBar.tsx` — fixed bottom replica of the TUI status bar; scroll
    progress via `useScroll` shown as `ctx:N%` + `| / - \` spinner.
- `docs/hero.webp` — README screenshot (committed; 1440×1000 viewport shot,
  lossless WebP via sharp).
- `.shots/`, `.playwright-mcp/` — gitignored screenshot scratch.

## Verifying changes

There are no tests; verification is visual:

1. `bun run build` (tsc catches type errors) and `bun run lint`.
2. `bun run preview` in background, then drive it with Playwright MCP at
   `http://localhost:4173/pooprusteek/`.
3. Check desktop (1440×900) and mobile (390×844). On mobile always run the
   horizontal-overflow probe — this page's most likely regression:
   `document.documentElement.scrollWidth > document.documentElement.clientWidth`
   must be `false` (probe at several scroll positions; some sections mount
   content on `whileInView`).
4. For a hero screenshot with the terminal in a good state, wait for
   `page.waitForSelector('text=[GOAL DONE]')` instead of guessing timings.
5. Playwright MCP resolves relative screenshot paths against *its own* cwd
   (not this repo) — always pass absolute paths.

## Deploying

Hosting is aaaver-app (`E:\Projects\Me\aaaver-app`): its Bun server serves
`sites/<slug>/` at `/<slug>/`, slug = lowercase `[a-z0-9-]`, `index.html`
must sit at the folder root (satisfied by `dist/`). Deploy is one command,
atomic, no restart:

```bat
cd E:\Projects\Me\aaaver-app
deploy-site.bat pooprusteek E:\Projects\Me\pooprusteek-landing\dist
```

Live check: `https://aaaver.ru/api/sites` lists mounted slugs.

## Conventions

- Components: one file per section in `src/components/`, default export,
  local helpers below the default export in the same file.
- Reveal-on-scroll: use the shared `rise`/`stagger` variants with
  `viewport={viewportOnce}` — don't hand-roll new IntersectionObserver logic.
- Commits are the user's job; don't run `git commit`/`git push` unless
  explicitly asked. The sibling agent repo uses conventional commits with
  gitmoji (`feat(landing): ✨ …`) — follow that if asked to commit here.
