import './Hero.css'

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
    >
      {/* Camada escura sobre a imagem */}
      <div className="hero__overlay" />

      {/* Conteúdo principal */}
      <div className="hero__content">

        <div className="hero__eyebrow">
          <span className="hero__line" />


          <span className="hero__line" />
        </div>

        <h1 className="hero__title">
          Implementos que
          <br />
          movem
          <br />
          <span>o seu negócio.</span>
        </h1>

        <p className="hero__description">
         Soluções em implementos rodoviários com qualidade,
          <br />
          tecnologia e confiança para o seu transporte.
        </p>

        <div className="hero__actions">

          <a
            href="#produtos"
            className="hero__button hero__button--primary"
          >
            Conheça nossos produtos
          </a>

          <a
            href="#historia"
            className="hero__button hero__button--secondary"
          >
            Conheça a Baldessar
          </a>

        </div>

      </div>

      {/* Indicador de scroll */}
      <div className="hero__scroll">
        <span />
      </div>

    </section>
  )
}