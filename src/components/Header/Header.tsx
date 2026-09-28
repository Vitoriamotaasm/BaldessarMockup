import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import './Header.css'

import logoWhite from '../../assets/logos/logo-randon-white.png'
import logoDark from '../../assets/logos/logo-random-baldessar.png'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`header ${
        scrolled ? 'header--scrolled' : ''
      }`}
    >
      <div className="header__container">

        <a
          href="#inicio"
          className="header__logo"
        >
          <img
            src={scrolled ? logoDark : logoWhite}
            alt="Randon Baldessar"
          />
        </a>

        <nav className="header__nav">

          <a href="#inicio">
            Início
          </a>

          <a href="#historia">
            Empresa
          </a>

          <a href="#produtos">
            Produtos
          </a>

          <a href="#servicos">
            Serviços
          </a>

          <a href="#pecas">
            Peças
          </a>

          <a href="#unidades">
            Unidades
          </a>

        </nav>

        <a
          href="https://wa.me/558596351434?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Baldessar."
          target="_blank"
          rel="noopener noreferrer"
          className="header__contact"
        >
        <Phone
          size={18}
          strokeWidth={2.5}
        />

          <span>
          Fale conosco
          </span>
        </a>

      </div>
    </header>
  )
}