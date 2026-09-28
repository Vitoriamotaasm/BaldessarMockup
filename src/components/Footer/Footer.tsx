import './Footer.css'
import {
  ArrowUpRight,
  Mail,
  Phone,
} from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'

import logoRandom from '../../assets/logos/logo-randon-white.png'

export function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        {/* CONTATO */}

        <div className="footer__contact">

          <div className="footer__contact-content">

            <span className="footer__label">
              FALE CONOSCO!
            </span>

            <h2 className="footer__contact-title">
              Vamos conversar sobre
              <br />
              <span> o seu negócio?</span>
            </h2>

            <p className="footer__contact-description">
              Nossa equipe está pronta para ajudar você a encontrar
              a solução ideal para o seu transporte.
            </p>

            <a
              href="https://wa.me/5585996351434?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Baldessar."
              target='_blank'
              rel='noopener noreferrer'
              className="footer__contact-button"
            >
              Fale conosco
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>

          </div>

          <div className="footer__contact-info">

            <a
              href="https://wa.me/558596351434?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Baldessar."
              target='_blank'
              rel='noopener noreferrer'
              className="footer__contact-item"
            >
              <span className="footer__contact-icon">
                <Phone size={18} strokeWidth={1.7} />
              </span>

              <span className="footer__contact-text">
                <small>Telefone</small>
                <strong>(85) 99635-1434</strong>
              </span>
            </a>


            <a
              href="mailto:contato@baldessar.com.br"
              className="footer__contact-item"
            >
              <span className="footer__contact-icon">
                <Mail size={18} strokeWidth={1.7} />
              </span>

              <span className="footer__contact-text">
                <small>E-mail</small>
                <strong>baldessar.ce@baldessar.com.br</strong>
              </span>
            </a>

            <a
              href="https://www.instagram.com/randonbaldessar_/"
              className="footer__contact-item"
            >
              <span className="footer__contact-icon">
                <FaInstagram size={18} strokeWidth={1.7} />
              </span>

              <span className="footer__contact-text">
                <small>Instagram</small>
                <strong>randonbaldessar_</strong>
              </span>
            </a>

          </div>

        </div>


        {/* NAVEGAÇÃO */}

        <div className="footer__main">

          <div className="footer__brand">

            <a
              href="/"
              className="footer__logo"
            >
              <img
                src={logoRandom}
                alt="Randon Baldessar"
              />
            </a>

            <p>
              Soluções em implementos rodoviários para
              movimentar o seu negócio.
            </p>

           </div>


          <div className="footer__column">

            <h3>Empresa</h3>

            <a href="#historia">
              Nossa história
            </a>

            <a href="#unidades">
              Nossas unidades
            </a>

            <a href="https://wa.me/558596351434?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Baldessar.">
              Fale conosco
            </a>

          </div>


          <div className="footer__column">

            <h3>Produtos</h3>

            <a href="#produtos">
              Linha Pesada
            </a>

            <a href="#produtos">
              Linha Leve
            </a>

            <a href="#seminovos">
              Seminovos
            </a>

          </div>


          <div className="footer__column">

            <h3>Serviços</h3>

            <a href="#servicos">
              Manutenção
            </a>

            <a href="#pecas">
              Peças e Pneus
            </a>

            <a href="#servicos">
              Reformas e pinturas
            </a>

          </div>

        </div>


        {/* RODAPÉ */}

        <div className="footer__bottom">

          <span>
            © {new Date().getFullYear()} Baldessar.
            Todos os direitos reservados.
          </span>

          <a href="/politica-de-privacidade">
            Política de privacidade
            <ArrowUpRight size={14} />
          </a>

        </div>

      </div>

    </footer>
  )
}