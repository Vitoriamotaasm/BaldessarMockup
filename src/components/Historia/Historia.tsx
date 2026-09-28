import './Historia.css'

import {
  Award,
  Lightbulb,
} from 'lucide-react'

import faixadaRandon from '../../assets/images/faixada-randon.jpeg'

import { ScrollReveal } from '../ScrollReveal/ScrollReveal'

const highlights = [
  {
    icon: Award,
    title: 'Experiência',
    description:
      'Trajetória construída com compromisso e confiança.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description:
      'Soluções pensadas para as necessidades de cada cliente.',
  },
]

export function Historia() {
  return (
    <section id="empresa" className="historia">
      <div className="historia__container">

        <div className="historia__content">

          {/* TEXTO */}

          <ScrollReveal direction="left">
            <div className="historia__text">

              <h2 className="historia__title">
                Baldessar & RANDON:
                <span> A força que move seu negócio.</span>
              </h2>

              <p>
                A Baldessar é sua concessionária oficial RANDON,
                marca que figura entre os maiores e mais respeitados
                grupos industriais do mundo. Trazemos para o Nordeste
                a força e a tecnologia de uma líder global em
                implementos rodoviários.
              </p>

              <p>
                Com uma sólida trajetória de experiência e compromisso,
                nossa missão é consolidar a presença da RANDON nos
                mercados de Transporte, Logística e Agronegócio,
                ampliando nossa atuação para setores estratégicos.
              </p>

              <p>
                Comprometidos com a excelência e a inovação,
                nos dedicamos a fornecer não apenas equipamentos
                de alta qualidade, mas soluções completas e
                diferenciadas para cada cliente.
              </p>

              <p>
                Nossas unidades estão posicionadas estrategicamente
                nos estados do Ceará e Rio Grande do Norte, formando
                um centro de distribuição e suporte essencial para
                garantir um atendimento ágil e eficiente em toda a
                região.
              </p>

              <div className="historia__highlights">

                {highlights.map((highlight) => {
                  const Icon = highlight.icon

                  return (
                    <div
                      className="historia__highlight"
                      key={highlight.title}
                    >
                      <div className="historia__highlight-icon">
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                        />
                      </div>

                      <div className="historia__highlight-content">
                        <strong>
                          {highlight.title}
                        </strong>

                        <span>
                          {highlight.description}
                        </span>
                      </div>
                    </div>
                  )
                })}

              </div>

            </div>
          </ScrollReveal>


          {/* IMAGEM */}

          <ScrollReveal
            direction="right"
            delay={150}
          >
            <div className="historia__image">
              <img
                src={faixadaRandon}
                alt="Unidade Baldessar"
              />
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  )
}