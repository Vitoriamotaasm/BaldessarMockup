import './Products.css'
import { useEffect, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import graneleiroStandard from '../../assets/images/graneleiro-standard.webp'
import basculanteGraneleiro from '../../assets/images/basculante-graneleiro.webp'
import caminhaoLeve from '../../assets/images/caminhao-leve.webp'
import caminhaoPesado from '../../assets/images/caminhao-pesado.webp'
import consorcioRandon from '../../assets/images/consorcio-randon.jpg'
import oficinaRandom from '../../assets/images/oficina-random.jpg'

interface Product {
  name: string
  category: string
  image: string
}

const products: Product[] = [
  {
    name: 'Graneleira Standard',
    category: 'Linha Pesada',
    image: graneleiroStandard,
  },
  {
    name: 'Basculante Graneleira',
    category: 'Linha Pesada',
    image: basculanteGraneleiro,
  },
  {
    name: 'Caminhão Leve',
    category: 'Linha Leve',
    image: caminhaoLeve,
  },
  {
    name: 'Caminhão Pesado',
    category: 'Linha Pesada',
    image: caminhaoPesado,
  },
  {
    name: 'Consórcio',
    category: 'Consórcio Randon',
    image: consorcioRandon,
  },
  {
    name: 'Oficina',
    category: 'Oficina Randon',
    image: oficinaRandom,
  },
]

export function Products() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) {
      return
    }

    const interval = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % products.length
      )
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [isAutoPlaying])

  function handlePrevious() {
    setIsAutoPlaying(false)

    setActiveIndex((current) =>
      current === 0
        ? products.length - 1
        : current - 1
    )
  }

  function handleNext() {
    setIsAutoPlaying(false)

    setActiveIndex(
      (current) => (current + 1) % products.length
    )
  }

  return (
    <section
      id="produtos"
      className="products"
    >
      <div className="products__container">

        <div className="products__header">

          <div className="products__eyebrow">
            
          </div>

          <h2 className="products__title">
            Soluções para o seu
            <span> transporte.</span>
          </h2>

          <p className="products__description">
            Encontre implementos desenvolvidos para oferecer qualidade,
            segurança e eficiência para o seu negócio.
          </p>

        </div>

        <div className="products__carousel">

          <button
            type="button"
            className="products__arrow products__arrow--left"
            onClick={handlePrevious}
            aria-label="Produto anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="products__cards">

            {products.map((product, index) => {

              const position =
                (index - activeIndex + products.length)
                % products.length

              return (
                <article
                  key={product.name}
                  className={`product-card product-card--position-${position}`}
                >

                  <div className="product-card__image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="product-card__overlay" />

                  </div>

                  <div className="product-card__content">

                    <span className="product-card__category">
                      {product.category}
                    </span>

                    <h3 className="product-card__name">
                      {product.name}
                    </h3>

                    <a
                      href="#produtos"
                      className="product-card__link"
                    >
                      Conheça o produto
                      <span>→</span>
                    </a>

                  </div>

                </article>
              )
            })}

          </div>

          <button
            type="button"
            className="products__arrow products__arrow--right"
            onClick={handleNext}
            aria-label="Próximo produto"
          >
            <ChevronRight size={24} />
          </button>

        </div>

        <div className="products__action">

          <a
            href="#produtos"
            className="products__button"
          >
            Ver todos os produtos
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  )
}