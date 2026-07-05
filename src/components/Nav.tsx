import { motion } from 'motion/react'
import { GITHUB_URL } from '../lib/anim'

const LINKS = [
  { href: '#free', label: '/free' },
  { href: '#features', label: '/features' },
  { href: '#goal', label: '/goal' },
  { href: '#commands', label: '/commands' },
]

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm">
        <a href="#top" className="font-bold text-fg">
          PoopRusteek <span aria-hidden>🧻</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden rounded px-2 py-1 text-xs text-dim transition-colors hover:bg-sel hover:text-accent-soft sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-line px-3 py-1 text-xs text-accent-soft transition-colors hover:border-accent"
          >
            ★ GitHub
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
