import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { site } from '../../data/site'
import Reveal from '../ui/Reveal'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const item = site.testimonials[index]

  const prev = () => setIndex((i) => (i === 0 ? site.testimonials.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === site.testimonials.length - 1 ? 0 : i + 1))

  useEffect(() => {
    if (paused || reduceMotion || site.testimonials.length < 2) return undefined

    const timer = window.setInterval(() => {
      setIndex((current) => (current === site.testimonials.length - 1 ? 0 : current + 1))
    }, 6500)

    return () => window.clearInterval(timer)
  }, [paused, reduceMotion])

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))]">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-gold uppercase">Testimonials</p>
          <h2 className="mt-4">
            {site.testimonialsTitle.map((word) => (
              <span key={word} className="head mr-3 inline-block text-5xl font-semibold uppercase md:text-8xl">
                {word}
              </span>
            ))}
          </h2>
        </Reveal>

        <div
          className="testimonial-panel panel relative mt-12 overflow-hidden rounded-[2rem] p-7 md:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
          }}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <Quote className="absolute right-7 top-7 text-gold/20 md:right-12 md:top-10" size={54} strokeWidth={1} />
          <div className="relative min-h-[270px] md:min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex h-full flex-col justify-between"
                aria-live="polite"
              >
                <p className="display relative z-10 max-w-4xl pr-2 text-2xl leading-snug text-cream md:text-4xl">
                  “{item.quote}”
                </p>
                <div className="mt-10">
                  <p className="head text-xl font-semibold">{item.name}</p>
                  <p className="mt-1 text-sm text-mute">{item.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
            <p className="text-xs tracking-[0.16em] text-mute uppercase">
              <span className="text-gold">{String(index + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              {String(site.testimonials.length).padStart(2, '0')}
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                className="grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:border-gold hover:text-gold"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                className="grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:border-gold hover:text-gold"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
