import { useState } from 'react'
import { motion } from 'motion/react'
import Logo from './Logo'
import TerminalDemo from './TerminalDemo'
import { GITHUB_URL } from '../lib/anim'

const INSTALL_CMD = 'git clone https://github.com/Aver005/pooprusteek && cargo run'

export default function Hero() {
  return (
    <header className="grid-bg relative overflow-hidden px-4 pt-24 pb-20 sm:pt-32">
      {/* soft accent glow behind the logo */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[32rem] w-[54rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 rounded-full border border-line bg-panel px-4 py-1.5 text-xs text-soft"
        >
          <span className="text-ok">●</span> free forever — it talks to
          chat.deepseek.com, not to your wallet
        </motion.p>

        <Logo className="text-4xl sm:text-6xl lg:text-7xl" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 text-sm tracking-wide text-soft sm:text-base"
        >
          Terminal coding agent · powered by DeepSeek web
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-4 max-w-2xl text-sm leading-7 text-dim sm:text-base"
        >
          A free, terminal-native alternative to Claude Code — written in Rust.
          Parallel chats, background sub-agents, an iterative{' '}
          <span className="text-warn">GOAL</span> loop, MCP servers and
          markdown skills. No API key. No subscription. No fluff.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 mb-16 flex w-full max-w-2xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          <CopyCommand />
          <motion.a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 rounded-md border border-accent bg-accent/10 px-6 py-3 text-center text-sm font-bold text-accent-soft transition-colors hover:bg-accent/20"
          >
            ★ GitHub
          </motion.a>
        </motion.div>

        <TerminalDemo />
      </div>
    </header>
  )
}

function CopyCommand() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — leave the button as-is */
    }
  }
  return (
    <button
      onClick={copy}
      className="group flex min-w-0 items-center gap-3 overflow-hidden rounded-md border border-line bg-panel-deep px-4 py-3 text-left text-xs text-soft transition-colors hover:border-accent sm:text-sm"
      title="Copy to clipboard"
    >
      <span className="shrink-0 text-ok">❯</span>
      <span className="truncate">git clone Aver005/pooprusteek && cargo run</span>
      <span className="ml-auto shrink-0 text-dim transition-colors group-hover:text-accent-soft">
        {copied ? <span className="text-ok">✓ copied</span> : '⧉'}
      </span>
    </button>
  )
}
