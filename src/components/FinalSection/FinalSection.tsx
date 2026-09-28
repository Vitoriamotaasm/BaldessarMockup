import './FinalSection.css'
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
} from 'lucide-react'
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'

import logo from '../../assets/logos/logo-random.jpeg'

export function FinalSection() {
  return (
    <section className="final-section">

      {/* CONTATO */}

      <div className="final-section__contact">
        <div className="final-section__container final-section__contact-container">

          <div className="final-section__contact-content">

            <span className="final-section__label">
              FALE CONOSCO!
            </span>

            <h2 className="final-section__title">
              Vamos conversar sobre
              <span> o seu negócio?</span>
            </h2>

            <p className="final-section__description">
              Nossa equipe está pronta para ajudar você a encontrar
              a solução ideal para o seu transporte.
            </p>

            <a
              href="/contato"
              className="final-section__contact-button"
            >
              Fale conosco
              <ArrowUpRight size={16} />
            </a>

          </div>

          <div className="final-section__contact-info">

            <a
              href="tel:+558530000000"
              className="final-section__contact-item"
            >
              <Phone size={19} />

              <div>
                <span>Telefone</span>
                <strong>(85) 3000-0000</strong>
              </div>
            </a>

            <a
              href="mailto:contato@baldessar.com.br"
              className="final-section__contact-item"
            >
              <Mail size={19} />

              <div>
                <span>E-mail</span>
                <strong>contato@baldessar.com.br</strong>
              </div>
            </a>

          </div>

        </div>
      </div>


      {/* NEWSLETTER */}

      <div className="final-section__newsletter">

        <div className="final-section__container final-section__newsletter-container">

          <h3>
            Assine nossa newsletter
          </h3>

          <form className="final-section__form">

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
              <ArrowRight size={19} />
            </button>

          </form>

        </div>

      </div>


      {/* FOOTER */}

      <footer className="final-section__footer">

        <div className="final-section__container">

          <div className="final-section__footer-main">

            <div className="final-section__brand">

              <a href="/" className="final-section__logo">
                <img
                  src={logo}
                  alt="Randon Baldessar"
                />
              </a>

              <p>
                Soluções em implementos rodoviários para
                movimentar o seu negócio.
              </p>

              <div className="final-section__social">

                <a href="#" aria-label="Instagram">
                  <FaInstagram size={16} />
                </a>

                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin size={16} />
                </a>

                <a href="#" aria-label="YouTube">
                  <FaYoutube size={16} />
                </a>

              </div>

            </div>


            <div className="final-section__column">

              <h4>Empresa</h4>

              <a href="/empresa">
                Nossa história
              </a>

              <a href="/unidades">
                Nossas unidades
              </a>

              <a href="/contato">
                Fale conosco
              </a>

            </div>


            <div className="final-section__column">

              <h4>Produtos</h4>

              <a href="/produtos">
                Linha Pesada
              </a>

              <a href="/produtos">
                Linha Leve
              </a>

              <a href="/seminovos">
                Seminovos
              </a>

            </div>


            <div className="final-section__column">

              <h4>Serviços</h4>

              <a href="/servicos">
                Manutenção
              </a>

              <a href="/pecas">
                Peças e Pneus
              </a>

              <a href="/servicos">
                Reformas e pinturas
              </a>

            </div>

          </div>


          <div className="final-section__bottom">

            <span>
              © {new Date().getFullYear()} Baldessar.
              Todos os direitos reservados.
            </span>

            <a href="/politica-de-privacidade">
              Política de privacidade
              <ArrowUpRight size={13} />
            </a>

          </div>

        </div>

      </footer>

    </section>
  )
}