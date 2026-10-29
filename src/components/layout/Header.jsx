import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { site } from '../../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto mt-4 flex w-[min(1240px,calc(100%-1.5rem))] items-center justify-between rounded-full border border-line bg-ink/70 px-4 py-2.5 backdrop-blur-xl md:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/ENphXjMAh2uGhh4W06xwUp4Io.avif"
            alt="SocialTechGuru"
            className="h-10 w-10 rounded-full object-contain"
          />
          <span className="head text-sm font-semibold tracking-[0.12em] uppercase">
            SocialTechGuru
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-mute md:flex">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `transition-colors hover:text-cream ${isActive ? 'text-gold' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-gold px-4 py-2 text-xs font-semibold tracking-[0.14em] text-ink uppercase md:inline-flex"
          >
            Let's talk
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 w-[min(1240px,calc(100%-1.5rem))] rounded-3xl border border-line bg-ink-2 p-6 md:hidden">
          <div className="flex flex-col gap-4 text-lg">
            {site.nav.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="text-gold" onClick={() => setOpen(false)}>
              Let's talk
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
