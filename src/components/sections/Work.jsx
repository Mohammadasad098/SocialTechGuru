import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { site } from '../../data/site'
import Reveal from '../ui/Reveal'

export default function Work() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))]">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-gold uppercase">{site.workIntro.eyebrow}</p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-3xl text-2xl leading-snug text-cream-2 md:text-3xl">{site.workIntro.body}</p>
            <Link to="/work" className="shrink-0 text-sm text-gold transition-colors hover:text-gold-2">
              View all projects <ArrowUpRight size={15} className="ml-1 inline" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {site.projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} className="group">
              <Link to={`/work/${project.slug}`} className="project-card block overflow-hidden rounded-[1.75rem] border border-line bg-ink-2">
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4]">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="img-zoom h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-ink/30 px-3 py-1.5 text-xs text-white/90 backdrop-blur-md">
                    {project.year}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                    <div>
                      <p className="text-xs tracking-[0.18em] text-gold uppercase">{project.category}</p>
                      <h3 className="head mt-2 text-3xl font-semibold">{project.title}</h3>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-ink transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
