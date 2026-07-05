// Source of truth for all translatable copy (English is the default locale).
// `ru.ts` is pinned to this shape — add a key here and the build fails until
// it's translated there. TUI-verbatim strings (status badges, slash commands,
// the TerminalDemo script, the status bar) stay hard-coded in components on
// purpose: they're the product, not copy — don't move them in here.
const en = {
  hero: {
    pill: 'free forever — it talks to chat.deepseek.com, not to your wallet',
    tagline: 'Terminal coding agent · powered by DeepSeek web',
    desc: 'A free, terminal-native alternative to Claude Code — written in Rust. Parallel chats, background sub-agents, an iterative <goal>GOAL</goal> loop, MCP servers and markdown skills. No API key. No subscription. No fluff.',
    copyTitle: 'Copy to clipboard',
    copied: '✓ copied',
  },
  zero: {
    kicker: 'monthly bill',
    blurb:
      'Not a trial. Not a free tier with a token ration. PoopRusteek drives the same web chat you already use for free — it just does it from your terminal, with tools.',
    powSolved: 'solved locally',
    ledger: [
      {
        k: 'auth',
        v: 'your own chat.deepseek.com session — cookie + userToken, stored in the OS keyring, encrypted at rest',
      },
      {
        k: 'proof-of-work',
        v: 'the SHA-3 challenge DeepSeek uses to gate its web API is solved locally, on your CPU',
      },
      {
        k: 'api key',
        v: 'none. there is nothing to leak, rotate, or top up',
      },
      {
        k: 'telemetry',
        v: 'none. your code goes to the model you chose and nowhere else',
      },
    ],
  },
  features: {
    kicker: 'capabilities',
    title: 'Small binary. Senior engineer.',
    sub: '«Работает как старший инженер: автономно, хирургически, без воды.» — the system prompt, and it means it.',
    cards: [
      {
        title: 'Parallel conversations',
        body: 'Every chat owns its own forked session and agent task. Background turns keep streaming while you type somewhere else — nothing ever collides.',
      },
      {
        title: 'Sub-agents',
        body: 'Spawn isolated workers — foreground for a clean answer, background for fire-and-forget. Only the conclusion comes back, not the noise.',
      },
      {
        title: 'GOAL loop',
        body: 'A worker writes, an evaluator judges. The loop iterates with concrete feedback until the goal actually passes — capped at 10 rounds, no infinite spin.',
      },
      {
        title: 'MCP native',
        body: 'stdio, HTTP and SSE servers with OAuth. Auto-discovers configs from 8 sources — Claude Desktop, VS Code, Cursor, and friends.',
      },
      {
        title: 'Markdown skills',
        body: 'Reusable instruction sets injected into the system prompt on demand. Teach it your stack once, reuse it everywhere.',
      },
      {
        title: 'Bring any model',
        body: 'DeepSeek web by default; Ollama, LM Studio, vLLM or any OpenAI-compatible endpoint, plus Gemini and Anthropic-compatible providers.',
      },
      {
        title: 'Real shell, real PTY',
        body: 'Foreground, background and interactive PTY jobs. /jobs and /ps to list and kill. Tool approvals with a whitelist for the ones you trust.',
      },
      {
        title: 'Streaming under control',
        body: 'Token-by-token SSE streaming with live t/s stats, rolling-window rate limits and configurable retries — down to infinite stubbornness.',
      },
    ],
  },
  goal: {
    kicker: '/goal mode',
    title: "It doesn't stop when it sounds done. It stops when it is.",
    sub: 'Two agents, one loop: a worker does the job, an evaluator refuses to be impressed. You watch the status bar.',
    // One entry per STATES badge in GoalLoop.tsx, same order.
    logs: [
      'worker + evaluator armed, waiting for a goal',
      'state the success criteria — it will be held to them',
      'worker edits code, runs the suite, reports back',
      'a second agent judges the result against the goal',
      'rejected — evaluator feeds concrete fixes back in',
      'sessions swap after repeated failures to escape dead ends',
      'goal met — loop closed, hard-capped at 10 iterations',
    ],
  },
  commands: {
    kicker: 'the surface area',
    title: '30+ slash commands. Zero menus.',
    sub: 'Everything is a command, exactly where your hands already are.',
  },
  tech: {
    // One label per number in TechStrip.tsx (1 / ~15k / 0 / 3), same order.
    stats: [
      'static binary — no node, no electron, no runtime',
      'lines of Rust on tokio + ratatui',
      'garbage-collector pauses while you type',
      'platforms: Windows · Linux · macOS',
    ],
    meta: 'Rust edition 2024 · MSRV 1.91 · CI on Windows & Linux',
    metaTail: 'one tokio::select! loop, everything else is an event',
  },
  footer: {
    title: 'Your terminal. Your session. Your agent.',
    blurb: "Yes, it's really called PoopRusteek. The code is surgical anyway — go read it.",
    tagline:
      'PoopRusteek 🧻 · built with ratatui, tokio and questionable naming decisions',
  },
}

export default en
