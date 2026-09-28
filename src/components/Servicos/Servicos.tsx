import './Servicos.css'

import {
  Settings,
  MoveHorizontal,
  Wrench,
  Disc3,
  Paintbrush,
  ArrowUpRight,
} from 'lucide-react'

import oficinaRandom from '../../assets/images/oficina-random.jpg'

import { ScrollReveal } from '../ScrollReveal/ScrollReveal'

const services = [
  {
    icon: Settings,
    title: 'Instalação de Opcionais',
  },
  {
    icon: MoveHorizontal,
    title: 'Alinhamento',
  },
  {
    icon: Wrench,
    title: 'Manutenção preventiva e corretiva',
  },
  {
    icon: Disc3,
    title: 'Troca de Lonas de Freio',
  },
  {
    icon: Paintbrush,
    title: 'Reformas e pinturas',
  },
]

export function Servicos() {
  return (
    <section id="servicos" className="servicos">
      <div className="servicos__container">

        <div className="servicos__heading">
          

          <h2 className="servicos__title">
            Cuidado especializado
            <br />
            <span>para o seu implemento.</span>
          </h2>
        </div>


        <div className="servicos__content">

          {/* IMAGEM */}

          <ScrollReveal direction="left">
            <div className="servicos__image">
              <img
                src={oficinaRandom}
                alt="Serviços de manutenção Baldessar"
              />
            </div>
          </ScrollReveal>


          {/* CONTEÚDO */}

          <ScrollReveal
            direction="right"
            delay={150}
          >
            <div className="servicos__info">

              <p className="servicos__description">
                Conte com uma equipe especializada para manter
                seu implemento em perfeitas condições de trabalho,
                com serviços de qualidade e confiança.
              </p>

              <div className="servicos__list">

                {services.map((service) => {
                  const Icon = service.icon

                  return (
                    <div
                      className="servicos__item"
                      key={service.title}
                    >
                      <div className="servicos__item-left">

                        <div className="servicos__icon">
                          <Icon
                            size={21}
                            strokeWidth={1.7}
                          />
                        </div>

                        <span>
                          {service.title}
                        </span>

                      </div>

                      <ArrowUpRight
                        className="servicos__arrow"
                        size={18}
                        strokeWidth={1.8}
                      />
                    </div>
                  )
                })}

              </div>

              <a
                href="#servicos"
                className="servicos__link"
              >
                Conheça todos os serviços

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.8}
                />
              </a>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  )
}