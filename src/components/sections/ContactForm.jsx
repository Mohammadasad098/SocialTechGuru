import { useState } from 'react'
import { site } from '../../data/site'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const subject = encodeURIComponent(`Discovery call — ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        required
        name="name"
        placeholder="Name"
        className="rounded-2xl border border-line bg-ink px-5 py-4 outline-none placeholder:text-mute focus:border-gold"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        className="rounded-2xl border border-line bg-ink px-5 py-4 outline-none placeholder:text-mute focus:border-gold"
      />
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Tell me about your brand"
        className="rounded-2xl border border-line bg-ink px-5 py-4 outline-none placeholder:text-mute focus:border-gold"
      />
      <button
        type="submit"
        className="rounded-full bg-gold px-6 py-4 text-sm font-semibold tracking-[0.16em] text-ink uppercase"
      >
        {sent ? 'Opening your email…' : 'Send message'}
      </button>
    </form>
  )
}
