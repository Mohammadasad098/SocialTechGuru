import { site } from '../data/site'
import ContactForm from '../components/sections/ContactForm'
import Reveal from '../components/ui/Reveal'

export default function Contact() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto grid w-[min(1240px,calc(100%-2rem))] gap-12 md:grid-cols-2">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-gold uppercase">Let's talk</p>
          <h1 className="display mt-4 text-6xl leading-none md:text-8xl">
            Book a <em className="text-gold">discovery call</em>
          </h1>
          <p className="mt-8 text-lg leading-8 text-cream-2">{site.why.body}</p>
          <a href={`mailto:${site.email}`} className="mt-8 inline-block text-gold">
            {site.email}
          </a>
        </Reveal>
        <Reveal delay={0.1} className="panel rounded-[2rem] p-7">
          <h2 className="head text-2xl font-semibold">Leave a message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
