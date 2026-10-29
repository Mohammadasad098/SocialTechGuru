import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function Button({ to, href, children, variant = 'gold', className = '' }) {
  const styles = {
    gold: 'bg-gold text-ink hover:bg-gold-2',
    ghost: 'bg-transparent text-cream border border-line hover:border-gold hover:text-gold',
    cream: 'bg-cream text-ink hover:bg-cream-2',
  }[variant]

  const cls = `inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${styles} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
        <ArrowUpRight size={16} />
      </Link>
    )
  }

  return (
    <a href={href} className={cls}>
      {children}
      <ArrowUpRight size={16} />
    </a>
  )
}
