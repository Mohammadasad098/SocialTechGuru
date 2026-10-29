import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../../data/site'
import Button from '../ui/Button'

const portrait =
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85'

export default function Hero() {
  return (
    <section className="hero-section relative isolate overflow-hidden pb-12 pt-28 md:pb-16 md:pt-36">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="relative mx-auto grid w-[min(1240px,calc(100%-2rem))] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_var(--color-gold)]" />
            {site.hero.kicker}
          </motion.p>

          <h1 className="head max-w-3xl text-[clamp(3.75rem,9vw,8.5rem)] font-semibold leading-[0.83] tracking-[-0.075em]">
            <motion.span
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Make your
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="display hero-script block pl-[0.08em] text-gold"
            >
              content
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              connect.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.65 }}
            className="mt-8 max-w-xl"
          >
            <p className="text-base leading-7 text-cream-2 md:text-lg md:leading-8">{site.hero.bio}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/contact">{site.hero.cta}</Button>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 px-3 py-3 text-sm text-cream-2 transition-colors hover:text-gold"
              >
                Explore my work
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex items-center gap-4 border-t border-line pt-5"
          >
            <div className="flex -space-x-2">
              {['#d8a189', '#b98570', '#e7c4b5'].map((color) => (
                <span
                  key={color}
                  className="h-8 w-8 rounded-full border-2 border-ink"
                  style={{ background: `linear-gradient(145deg, ${color}, #5b3931)` }}
                />
              ))}
            </div>
            <p className="text-xs leading-5 text-mute">
              Thoughtful strategy.
              <span className="ml-1 text-cream-2">Real connection.</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hero-visual relative mx-auto w-full max-w-[540px]"
        >
          <div className="hero-image-frame relative ml-auto aspect-[0.86] w-[82%] overflow-hidden rounded-[48%_48%_2rem_2rem] border border-gold/20">
            <img src={portrait} alt="Creative portrait for SocialTechGuru" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-gold/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">Strategy meets storytelling</p>
              <p className="display mt-2 text-3xl text-cream md:text-4xl">Your brand, in its element.</p>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -9, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="hero-note panel absolute left-0 top-[16%] max-w-[190px] rounded-2xl p-4 shadow-2xl md:left-2"
          >
            <span className="mb-3 grid h-9 w-9 place-items-center rounded-full bg-gold/10 text-gold">
              <Sparkles size={17} />
            </span>
            <p className="head text-sm font-semibold">More than a pretty feed.</p>
            <p className="mt-1 text-xs leading-5 text-mute">Purpose behind every post.</p>
          </motion.div>

          <div className="absolute bottom-[13%] left-0 rounded-2xl border border-gold/25 bg-ink-2/90 px-4 py-3 backdrop-blur-md md:-left-3">
            <p className="display text-2xl text-gold">On purpose</p>
            <p className="mt-0.5 text-[0.65rem] tracking-[0.16em] text-mute uppercase">From plan to post</p>
          </div>

          <div className="absolute right-0 top-[7%] -z-10 h-24 w-24 rounded-full border border-gold/20 md:right-[-2%] md:h-36 md:w-36" />
          <div className="absolute bottom-[4%] right-[4%] -z-10 h-20 w-20 rounded-full bg-blush/10 blur-2xl" />
        </motion.div>
      </div>

      <div className="mx-auto mt-16 flex w-[min(1240px,calc(100%-2rem))] items-center justify-between border-t border-line pt-5">
        <p className="text-[0.65rem] tracking-[0.22em] text-mute uppercase">Scroll to explore</p>
        <motion.a
          href="#about"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll to about section"
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-gold transition-colors hover:border-gold"
        >
          <ArrowDown size={16} />
        </motion.a>
      </div>

      <div className="mt-10 overflow-hidden border-y border-line py-4">
        <div className="marquee-track flex w-max gap-10 text-xs tracking-[0.24em] text-mute uppercase md:text-sm">
          {[...site.services.map((service) => service.title), ...site.services.map((service) => service.title)].map(
            (item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10">
                {item}
                <span className="text-gold">✦</span>
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
