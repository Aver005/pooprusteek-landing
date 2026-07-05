import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { rise, stagger, viewportOnce } from '../lib/anim'

// Real TUI slash commands — verbatim in every language. Titles/bodies live
// in src/i18n/locales/* (features.cards), one entry per cmd, same order.
const CMDS = [
  '/new · /chats',
  '/agent',
  '/goal',
  '/mcp',
  '/skills',
  '/providers · /models',
  'bash · powershell',
  '/rate · /retry',
]

export default function Features() {
  const { t } = useTranslation()
  const cards = t('features.cards', { returnObjects: true })
  return (
    <section id="features" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          kicker={t('features.kicker')}
          title={t('features.title')}
          sub={t('features.sub')}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CMDS.map((cmd, i) => (
            <motion.article
              key={cmd}
              variants={rise}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col border border-line bg-panel p-5 transition-colors hover:border-accent"
            >
              <CornerGlyphs />
              <p className="text-xs text-accent">{cmd}</p>
              <h3 className="mt-2 text-base font-bold text-fg">
                {cards[i].title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-dim">
                {cards[i].body}
              </p>
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
