import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { GITHUB_URL, rise, viewportOnce } from '../lib/anim'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="px-4 pt-24 pb-16">
      <motion.div
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <p className="text-6xl">🧻</p>
        <h2 className="mt-6 text-2xl font-bold text-fg sm:text-4xl">
          {t('footer.title')}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-dim">
          {t('footer.blurb')}
        </p>
        <motion.a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 rounded-md border border-accent bg-accent/10 px-8 py-3.5 text-sm font-bold text-accent-soft transition-colors hover:bg-accent/20"
        >
          ❯ git clone pooprusteek
        </motion.a>
      </motion.div>

      <div className="mx-auto mt-20 max-w-5xl border-t border-line pt-6">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-dim sm:flex-row">
          <p>{t('footer.tagline')}</p>
          <p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-accent-soft hover:text-accent"
            >
              github.com/Aver005/pooprusteek
            </a>{' '}
            · /quit<span className="animate-blink text-accent-soft">▊</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
