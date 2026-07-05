import { motion } from 'motion/react'
import { rise, stagger, viewportOnce } from '../lib/anim'

const FEATURES = [
  {
    cmd: '/new · /chats',
    title: 'Parallel conversations',
    body: 'Every chat owns its own forked session and agent task. Background turns keep streaming while you type somewhere else — nothing ever collides.',
  },
  {
    cmd: '/agent',
    title: 'Sub-agents',
    body: 'Spawn isolated workers — foreground for a clean answer, background for fire-and-forget. Only the conclusion comes back, not the noise.',
  },
  {
    cmd: '/goal',
    title: 'GOAL loop',
    body: 'A worker writes, an evaluator judges. The loop iterates with concrete feedback until the goal actually passes — capped at 10 rounds, no infinite spin.',
  },
  {
    cmd: '/mcp',
    title: 'MCP native',
    body: 'stdio, HTTP and SSE servers with OAuth. Auto-discovers configs from 8 sources — Claude Desktop, VS Code, Cursor, and friends.',
  },
  {
    cmd: '/skills',
    title: 'Markdown skills',
    body: 'Reusable instruction sets injected into the system prompt on demand. Teach it your stack once, reuse it everywhere.',
  },
  {
    cmd: '/providers · /models',
    title: 'Bring any model',
    body: 'DeepSeek web by default; Ollama, LM Studio, vLLM or any OpenAI-compatible endpoint, plus Gemini and Anthropic-compatible providers.',
  },
  {
    cmd: 'bash · powershell',
    title: 'Real shell, real PTY',
    body: 'Foreground, background and interactive PTY jobs. /jobs and /ps to list and kill. Tool approvals with a whitelist for the ones you trust.',
  },
  {
    cmd: '/rate · /retry',
    title: 'Streaming under control',
    body: 'Token-by-token SSE streaming with live t/s stats, rolling-window rate limits and configurable retries — down to infinite stubbornness.',
  },
]

export default function Features() {
  return (
    <section id="features" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          kicker="capabilities"
          title="Small binary. Senior engineer."
          sub="«Работает как старший инженер: автономно, хирургически, без воды.» — the system prompt, and it means it."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((f) => (
            <motion.article
              key={f.cmd}
              variants={rise}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col border border-line bg-panel p-5 transition-colors hover:border-accent"
            >
              <CornerGlyphs />
              <p className="text-xs text-accent">{f.cmd}</p>
              <h3 className="mt-2 text-base font-bold text-fg">{f.title}</h3>
              <p className="mt-3 text-[13px] leading-6 text-dim">{f.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* box-drawing corners that light up on hover — the ratatui border wink */
function CornerGlyphs() {
  const base =
    'pointer-events-none absolute text-line transition-colors group-hover:text-accent-soft text-xs leading-none'
  return (
    <>
      <span aria-hidden className={`${base} top-1 left-1`}>┌</span>
      <span aria-hidden className={`${base} top-1 right-1`}>┐</span>
      <span aria-hidden className={`${base} bottom-1 left-1`}>└</span>
      <span aria-hidden className={`${base} bottom-1 right-1`}>┘</span>
    </>
  )
}

export function SectionTitle({
  kicker,
  title,
  sub,
}: {
  kicker: string
  title: string
  sub?: string
}) {
  return (
    <motion.div
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="max-w-3xl"
    >
      <p className="text-xs tracking-[0.3em] text-dim uppercase">
        <span className="text-accent">──</span> {kicker}
      </p>
      <h2 className="mt-3 text-2xl font-bold text-fg sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-sm leading-7 text-soft">{sub}</p>}
    </motion.div>
  )
}
