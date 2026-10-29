import { Link, Navigate, useParams } from 'react-router-dom'
import { site } from '../data/site'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = site.projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  const others = site.projects.filter((p) => p.slug !== slug)

  return (
    <article className="pt-36 pb-24">
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))]">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-gold uppercase">{project.category}</p>
          <h1 className="head mt-4 text-5xl font-semibold md:text-7xl">{project.title}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-cream-2">{project.body}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {project.images.map((src) => (
            <img key={src} src={src} alt={project.title} className="h-[380px] w-full rounded-[1.5rem] object-cover" />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-10">
          <Button to="/contact">{site.hero.cta}</Button>
          <div className="flex flex-wrap gap-4 text-sm text-mute">
            {others.map((p) => (
              <Link key={p.slug} to={`/work/${p.slug}`} className="hover:text-gold">
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
