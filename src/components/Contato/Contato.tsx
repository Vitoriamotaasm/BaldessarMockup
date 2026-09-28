import './Contato.css'
import { ArrowUpRight, Phone, Mail } from 'lucide-react'

export function Contato() {
  return (
    <section className="contato">
      <div className="contato__container">

        <div className="contato__content">
          <span className="contato__label">
            FALE CONOSCO!
          </span>

          <h2 className="contato__title">
            Vamos conversar sobre
            <span> o seu negócio?</span>
          </h2>

          <p className="contato__description">
            Nossa equipe está pronta para ajudar você a encontrar
            a solução ideal para o seu transporte.
          </p>

          <a
            href="https://wa.me/558596351434"
            target="_blank"
            rel="noopener noreferrer"
            className="contato__button"
          >
            Fale conosco
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </a>
        </div>

        <div className="contato__info">

          {/* WHATSAPP / TELEFONE */}

          <a
            href="https://wa.me/5585996351434"
            target="_blank"
            rel="noopener noreferrer"
            className="contato__info-item"
          >
            <span className="contato__icon">
              <Phone size={19} strokeWidth={1.7} />
            </span>

            <span>
              <small>WhatsApp</small>
              <strong>(85) 99635-1434</strong>
            </span>
          </a>

          {/* E-MAIL */}

          <a
            href="mailto:baldessar.ce@baldessar.com.br"
            className="contato__info-item"
          >
            <span className="contato__icon">
              <Mail size={19} strokeWidth={1.7} />
            </span>

            <span>
              <small>E-mail</small>
              <strong>baldessar.ce@baldessar.com.br</strong>
            </span>
          </a>

        </div>

      </div>
    </section>
  )
}