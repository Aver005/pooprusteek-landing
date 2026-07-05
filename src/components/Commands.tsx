import { motion } from 'motion/react'
import { rise, viewportOnce } from '../lib/anim'

const ROW_A = [
  '/new', '/chats', '/btw', '/agent', '/agents', '/goal', '/mcp', '/skills',
  '/tools', '/whitelist', '/jobs', '/ps', '/attach', '/compact',
]
const ROW_B = [
  '/providers', '/models', '/rate', '/retry', '/sessions', '/load', '/export',
  '/import', '/cwd', '/last', '/debug', '/wipe', '/logout', '/quit',
]

export default function Commands() {
  return (
    <section id="commands" className="overflow-hidden px-0 py-24">
      <motion.div
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-3xl px-4 text-center"
      >
        <p className="text-xs tracking-[0.3em] text-dim uppercase">
          <span className="text-accent">──</span> the surface area{' '}
          <span className="text-accent">──</span>
        </p>
        <h2 className="mt-3 text-2xl font-bold text-fg sm:text-4xl">
          30+ slash commands. Zero menus.
        </h2>
        <p className="mt-4 text-sm leading-7 text-soft">
          Everything is a command, exactly where your hands already are.
        </p>
      </motion.div>

      <div className="relative mt-14 flex flex-col gap-4">
        {/* edge fades so rows dissolve instead of clipping */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <MarqueeRow items={ROW_A} className="animate-marquee" />
        <MarqueeRow items={ROW_B} className="animate-marquee-rev" />
      </div>
    </section>
  )
}

function MarqueeRow({
  items,
  className,
}: {
  items: string[]
  className: string
}) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden" aria-hidden>
      <div className={`flex w-max shrink-0 gap-4 pr-4 ${className}`}>
        {doubled.map((cmd, i) => (
          <span
            key={i}
            className="rounded border border-line bg-panel px-4 py-2 text-sm whitespace-nowrap text-accent-soft transition-colors hover:border-accent"
          >
            {cmd}
          </span>
        ))}
      </div>
    </div>
  )
}
