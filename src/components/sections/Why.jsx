import { site } from '../../data/site'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

export default function Why() {
  return (
    <section className="why-section relative overflow-hidden bg-cream text-ink">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2rem))] gap-12 py-24 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-20 md:py-32">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-ink/50 uppercase">{site.why.eyebrow}</p>
          <h2 className="display mt-4 text-7xl leading-[0.85] md:text-9xl">
            Why
            <em className="block text-[#a57b43]">STG?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border-l border-ink/15 pl-6 md:pl-10">
            <p className="text-xl leading-9 text-ink/80 md:text-2xl md:leading-10">{site.why.body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button to="/contact" variant="gold">
              Contact us
            </Button>
              <span className="text-xs tracking-[0.16em] text-ink/50 uppercase">Human insight · Clear strategy · Lasting impact</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
