import { motion } from 'motion/react'

// Replicates the TUI landing logo: every letter of POOPRUSTEEK pulses
// through accent_soft → accent → success in a staggered wave; the first,
// middle and last letters are additionally underlined (see tui/landing.rs).
const WORD = 'POOPRUSTEEK'
const WAVE = ['#7DD3FC', '#60A5FA', '#A6E3A1', '#60A5FA', '#7DD3FC']
const UNDERLINED = new Set([0, Math.floor(WORD.length / 2), WORD.length - 1])

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <h1
      className={`font-bold tracking-[0.08em] whitespace-nowrap select-none ${className}`}
      aria-label="PoopRusteek"
    >
      {WORD.split('').map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={
            UNDERLINED.has(i)
              ? 'underline decoration-2 underline-offset-8'
              : undefined
          }
          animate={{ color: WAVE }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.13,
          }}
        >
          {ch}
        </motion.span>
      ))}
    </h1>
  )
}
