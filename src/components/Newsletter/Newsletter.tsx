import './Newsletter.css'
import { ArrowRight } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__container">

        <h2 className="newsletter__title">
          Assine nossa newsletter
        </h2>

        <form className="newsletter__form">

          <input
            type="text"
            placeholder="Nome*"
            aria-label="Nome"
          />

          <input
            type="email"
            placeholder="E-mail*"
            aria-label="E-mail"
          />

          <button type="submit">
            <span>Assinar</span>
            <ArrowRight size={21} strokeWidth={1.8} />
          </button>

        </form>

      </div>
    </section>
  )
}