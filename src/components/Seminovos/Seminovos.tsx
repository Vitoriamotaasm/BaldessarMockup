import './Seminovos.css'
import { useState } from 'react'
import {
  Truck,
  Container,
  Check,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'

import caminhaoPesado from '../../assets/images/caminhao-pesado.webp'


const categories = [
  {
    name: 'Furgão e Frigorífico',
    icon: Truck,
  },
  {
    name: 'Sider',
    icon: Container,
  },
]

export function Seminovos() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <section className="seminovos" id='seminovos'>
      {/* Elementos decorativos do fundo */}
      <div className="seminovos__background-circle seminovos__background-circle--one" />
      <div className="seminovos__background-circle seminovos__background-circle--two" />

      <div className="seminovos__container">

        {/* =====================================================
            CABEÇALHO
        ====================================================== */}

        <div className="seminovos__heading">
          <div className="seminovos__eyebrow">
          
            
          </div>

          <h2 className="seminovos__title">
            Qualidade que continua
          </h2>
          <h2 className="seminovos__title">
            <span> na estrada.</span>
          </h2>

          <p className="seminovos__description">
            Encontre implementos revisados e prontos para continuar
            trabalhando com você.
          </p>
        </div>

        {/* =====================================================
            SHOWCASE
        ====================================================== */}

        <div className="seminovos__showcase">

          {/* IMAGEM */}

          <div className="seminovos__image">
            <img
              src={caminhaoPesado}
              alt="Implemento seminovo Baldessar"
            />

            <div className="seminovos__image-gradient" />

            

            <div className="seminovos__image-caption">
              <strong>Pronto para a próxima jornada.</strong>

              <span>
                Qualidade para seguir em frente.
              </span>
            </div>
          </div>

          {/* =================================================
              BUSCA
          ================================================== */}

          <div className="seminovos__finder">

            <div className="seminovos__finder-header">

              

              <div>

                <h3 className="seminovos__finder-title">
                  Encontre seu seminovo ideal
                </h3>
              </div>

            </div>

            <p className="seminovos__finder-description">
              Selecione o tipo de implemento e encontre a opção
              que mais combina com sua operação.
            </p>

            {/* =================================================
                CATEGORIAS
            ================================================== */}

            <div className="seminovos__categories">

              {categories.map((category) => {
                const Icon = category.icon

                const isSelected =
                  selectedCategory === category.name

                return (
                  <button
                    key={category.name}
                    type="button"
                    className={`seminovos__category ${
                      isSelected
                        ? 'seminovos__category--active'
                        : ''
                    }`}
                    onClick={() =>
                      setSelectedCategory(category.name)
                    }
                  >
                    <span className="seminovos__category-icon">
                      <Icon
                        size={32}
                        strokeWidth={1.6}
                      />
                    </span>

                    <span className="seminovos__category-name">
                      {category.name}
                    </span>
                  </button>
                )
              })}

            </div>

            {/* =================================================
                FILTROS
            ================================================== */}

            <div className="seminovos__filters">

              {/* ANO */}

              <label className="seminovos__field">
                <span className="seminovos__field-label">
                  Ano
                </span>

                <div className="seminovos__select-wrapper">
                  <select defaultValue="">
                    <option value="" disabled>
                      Selecione o ano
                    </option>

                    <option value="2026">
                      2026
                    </option>

                    <option value="2025">
                      2025
                    </option>

                    <option value="2024">
                      2024
                    </option>

                    <option value="2023">
                      2023
                    </option>
                  </select>

                  <ChevronDown size={17} />
                </div>
              </label>

              {/* MODELO */}

              <label className="seminovos__field">
                <span className="seminovos__field-label">
                  Modelo
                </span>

                <div className="seminovos__select-wrapper">
                  <select defaultValue="">
                    <option value="" disabled>
                      Selecione o modelo
                    </option>

                    <option value="furgão">
                      Furgão
                    </option>

                    <option value="frigorífico">
                      Frigorífico
                    </option>

                    <option value="sider">
                      Sider
                    </option>
                  </select>

                  <ChevronDown size={17} />
                </div>
              </label>

            </div>

            {/* =================================================
                BOTÃO
            ================================================== */}

            <button
              type="button"
              className="seminovos__search"
            >
              <span>
                Buscar seminovo
              </span>

              <span className="seminovos__search-icon">
                <ArrowRight size={20} />
              </span>
            </button>

          </div>
        </div>

        {/* =====================================================
            BENEFÍCIOS
        ====================================================== */}

        <div className="seminovos__benefits">

          <div className="seminovos__benefit">

            <span className="seminovos__benefit-icon">
              <Check
                size={16}
                strokeWidth={2.5}
              />
            </span>

            <div>
              <strong>
                Implementos revisados
              </strong>

              <span>
                Prontos para trabalhar
              </span>
            </div>

          </div>

          <div className="seminovos__benefit">

            <span className="seminovos__benefit-icon">
              <Check
                size={16}
                strokeWidth={2.5}
              />
            </span>

            <div>
              <strong>
                Qualidade Randon
              </strong>

              <span>
                Confiança em cada detalhe
              </span>
            </div>

          </div>

          <div className="seminovos__benefit">

            <span className="seminovos__benefit-icon">
              <Check
                size={16}
                strokeWidth={2.5}
              />
            </span>

            <div>
              <strong>
                Prontos para rodar
              </strong>

              <span>
                Para sua operação continuar
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}