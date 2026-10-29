import { site } from '../data/site'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'

export default function About() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto w-[min(980px,calc(100%-2rem))]">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-gold uppercase">About</p>
          <h1 className="display mt-4 text-6xl leading-none md:text-8xl">
            Content that <em className="text-gold">connects</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 text-xl leading-9 text-cream-2">{site.hero.bio}</p>
          <p className="mt-8 text-lg leading-8 text-mute">{site.why.body}</p>
          <div className="mt-10">
            <Button to="/contact">{site.hero.cta}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
