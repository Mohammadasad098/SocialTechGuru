import { Link } from 'react-router-dom'
import { site } from '../../data/site'
import Reveal from '../ui/Reveal'

export default function Services({ compact = false }) {
  return (
    <section id="services" className="border-y border-line bg-ink-2 py-24 md:py-32">
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))]">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs tracking-[0.28em] text-gold uppercase">{site.servicesIntro.eyebrow}</p>
              <h2 className="head mt-3 text-5xl font-semibold uppercase tracking-[-0.06em] md:text-7xl">{site.servicesIntro.title}</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-mute md:text-lg">{site.servicesIntro.body}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-3 md:mt-16 md:grid-cols-2">
          {site.services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.05}>
              <Link
                to="/services"
                className="service-card group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-3xl border border-line bg-cream/[0.025] p-6 transition-colors duration-300 hover:border-gold/40 hover:bg-gold/[0.045] md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-gold">{service.number} / 04</span>
                  <span className="service-arrow grid h-9 w-9 place-items-center rounded-full border border-line text-mute transition-all group-hover:border-gold group-hover:text-gold">↗</span>
                </div>
                <h3 className="head mt-8 max-w-md text-2xl font-semibold leading-tight group-hover:text-gold md:text-3xl">{service.title}</h3>
                {!compact && <p className="mt-3 max-w-md text-sm leading-6 text-mute group-hover:text-cream-2">{service.body}</p>}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
