import Services from '../components/sections/Services'
import Why from '../components/sections/Why'
import { site } from '../data/site'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'

export default function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-8">
        <div className="mx-auto w-[min(1240px,calc(100%-2rem))]">
          <Reveal>
            <p className="text-xs tracking-[0.28em] text-gold uppercase">Services</p>
            <h1 className="head mt-4 max-w-4xl text-5xl font-semibold uppercase md:text-7xl">
              Living at the intersection of creativity and strategy
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream-2">{site.servicesIntro.body}</p>
          </Reveal>
        </div>
      </section>
      <Services />
      <Why />
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))] py-16">
        <Button to="/contact">{site.hero.cta}</Button>
      </div>
    </>
  )
}
