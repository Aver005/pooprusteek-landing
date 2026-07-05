import { motion } from 'motion/react'
import { rise, stagger, viewportOnce } from '../lib/anim'

const STATS = [
  { n: '1', label: 'static binary — no node, no electron, no runtime' },
  { n: '~15k', label: 'lines of Rust on tokio + ratatui' },
  { n: '0', label: 'garbage-collector pauses while you type' },
  { n: '3', label: 'platforms: Windows · Linux · macOS' },
]

export default function TechStrip() {
  return (
    <section className="border-y border-line bg-panel/40 px-4 py-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto grid max-w-5xl gap-10 text-center sm:grid-cols-2 lg:grid-cols-4"
      >
        {STATS.map((s) => (
          <motion.div key={s.label} variants={rise}>
            <p className="text-5xl font-bold text-accent">{s.n}</p>
            <p className="mx-auto mt-3 max-w-[16rem] text-xs leading-5 text-dim">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 text-center text-xs text-dim"
      >
        Rust edition 2024 · MSRV 1.91 · CI on Windows & Linux ·{' '}
        <span className="text-soft">
          one tokio::select! loop, everything else is an event
        </span>
      </motion.p>
    </section>
  )
}
