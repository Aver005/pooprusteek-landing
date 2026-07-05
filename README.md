# pooprusteek-landing

Landing page for [PoopRusteek](https://github.com/Aver005/pooprusteek) — a free,
terminal-native Rust coding agent. Vite + React + TypeScript + Tailwind v4 +
Motion, Bun as runtime and package manager.

## Dev

```sh
bun install
bun dev
```

## Build

```sh
bun run build   # → dist/
```

`vite.config.ts` sets `base: '/pooprusteek/'` — required because the site is
served by **aaaver-app** from `sites/pooprusteek/` at `https://aaaver.ru/pooprusteek/`.
If the slug ever changes, change `base` to match.

## Deploy (via aaaver-app)

```bat
cd E:\Projects\Me\aaaver-app
deploy-site.bat pooprusteek E:\Projects\Me\pooprusteek-landing\dist
```

Atomic swap on the server, no restart needed. The site appears in
`GET /api/sites` and goes live immediately.

## Design notes

The palette is lifted verbatim from `pooprusteek/src/tui/theme.rs`
(Catppuccin-adjacent dark navy + blue accents); the hero logo replicates the
TUI's staggered letter-pulse animation, and the bottom status bar mirrors the
real one (`deepseek · deepseek-chat [GOAL:…] mcp:2/3 …`).
