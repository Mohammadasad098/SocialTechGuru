import { Link } from 'react-router-dom'
import { site } from '../../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto w-[min(1240px,calc(100%-2rem))] py-16">
        <p className="text-xs tracking-[0.28em] text-gold uppercase">Leave a message</p>
        <a
          href={`mailto:${site.email}`}
          className="display mt-4 block text-4xl leading-none text-cream transition-colors hover:text-gold md:text-7xl"
        >
          {site.email}
        </a>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex gap-6 text-sm tracking-[0.16em] text-mute uppercase">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-cream">
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-mute">
            <Link to="/about" className="hover:text-cream">About</Link>
            <Link to="/services" className="hover:text-cream">Services</Link>
            <Link to="/work" className="hover:text-cream">Case Studies</Link>
            <Link to="/contact" className="hover:text-cream">Let's talk</Link>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-line pt-6 text-xs text-mute">
          <p>{site.copyright}</p>
          <p className="tracking-[0.18em] uppercase">Content that connects</p>
        </div>
      </div>
    </footer>
  )
}
