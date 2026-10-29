import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

export default function AboutPreview() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2rem))] gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-gold uppercase">A little about the approach</p>
          <h2 className="display mt-5 text-6xl leading-[0.92] md:text-8xl">
            Strategy with
            <em className="mt-1 block text-gold">a pulse.</em>
          </h2>
          <div className="gold-rule mt-8 h-px w-32" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="panel rounded-[2rem] p-7 md:p-10">
            <p className="text-lg leading-8 text-cream-2 md:text-xl md:leading-9">
              Social media management sits at the core of the work. Every post should serve a purpose, not just fill a
              feed. The blend is research, competitor analysis, creativity, and human psychology — always in the brand’s
              unique voice.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-6">
              <span className="text-xs tracking-[0.18em] text-mute uppercase">Meet Khadijat · Strategist & creator</span>
              <Button to="/about" variant="ghost">
                About Khadijat
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
