import './Pecas.css'

import {
  Settings,
  Wrench,
  CircleDot,
  Disc3,
  Lightbulb,
  ArrowUpRight,
} from 'lucide-react'

import { ScrollReveal } from '../ScrollReveal/ScrollReveal'

const parts = [
  {
    icon: Settings,
    name: 'Pino Rei',
  },
  {
    icon: Wrench,
    name: 'Câmara de Serviço',
  },
  {
    icon: Settings,
    name: 'Balancim',
  },
  {
    icon: CircleDot,
    name: 'Roda',
  },
  {
    icon: Disc3,
    name: 'Lona de Freio',
  },
  {
    icon: Settings,
    name: 'Paralama',
  },
  {
    icon: Lightbulb,
    name: 'Sinaleira Traseira',
  },
  {
    icon: Settings,
    name: 'Boca de Escoamento',
  },
]

export function Pecas() {
  return (
    <section id="pecas" className="pecas">

      <div className="pecas__background-circle pecas__background-circle--one" />
      <div className="pecas__background-circle pecas__background-circle--two" />

      <div className="pecas__container">

        <ScrollReveal direction="up">

          <div className="pecas__top">

            

            <h2 className="pecas__title">
              Peças para manter sua operação em movimento.
            </h2>

            <p className="pecas__intro">
              Encontre peças de reposição e soluções para manter
              seus implementos em pleno funcionamento.
            </p>

          </div>

        </ScrollReveal>


        <ScrollReveal
          direction="up"
          delay={150}
        >

          <div className="pecas__parts">

            <div className="pecas__section-header">

              <h3>
                Peças de reposição
              </h3>

              <a href="#pecas">
                Ver catálogo
                <ArrowUpRight size={17} />
              </a>

            </div>


            <div className="pecas__list">

              {parts.map((part) => {
                const Icon = part.icon

                return (
                  <a
                    href="#pecas"
                    className="pecas__item"
                    key={part.name}
                  >

                    <span className="pecas__icon">
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                      />
                    </span>

                    <span className="pecas__name">
                      {part.name}
                    </span>

                    <ArrowUpRight
                      className="pecas__item-arrow"
                      size={17}
                      strokeWidth={1.8}
                    />

                  </a>
                )
              })}

            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  )
}