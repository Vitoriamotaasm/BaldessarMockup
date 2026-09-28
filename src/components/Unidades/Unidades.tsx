import './Unidades.css'
import { MapPin, ArrowUpRight } from 'lucide-react'

const units = [
  {
    city: 'Itaitinga',
    state: 'Ceará',
    address:
      'https://www.google.com/maps/dir//Randon+Baldessar+Itaitinga+-+Rod.+Br116+-+Jabuti,+Itaitinga+-+CE,+61880-000/@-3.9547046,-38.6575505,12z/data=!4m18!1m8!3m7!1s0x7c757005b5c0859:0xb24ced5ae58f151!2sRandon+Baldessar+Itaitinga!8m2!3d-3.9547046!4d-38.5133549!15sCj9Sb2RvdmlhIEJSLTExNiwga20gMjIsIG7CuiAxNDkwMCwgQmFpcnJvIEppYm9pYSwgSXRhaXRpbmdhIC0gQ0WSAQpjYXJfZGVhbGVy4AEA!16s%2Fg%2F11vzfrf20t!4m8!1m1!4e2!1m5!1m1!1s0x7c757005b5c0859:0xb24ced5ae58f151!2m2!1d-38.5133549!2d-3.9547046?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    city: 'Teresina',
    state: 'Piauí',
    address:
      'https://www.google.com/maps/place/Randon+Baldessar/@-5.1773808,-42.7646949,17z/data=!3m1!4b1!4m6!3m5!1s0x78e33bddd1aa4b5:0x12213d344802482c!8m2!3d-5.1773808!4d-42.7646949!16s%2Fg%2F11csqfsvtd?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    city: 'São José de Mipibu',
    state: 'Rio Grande do Norte',
    address:
      'https://www.google.com/maps/dir/-3.7911034,-38.5654532/Baldessar+-+Randon,+Rodovia+BR+101+KM+113+S%2FN+Qd+12+Lt+09+e+10+59162-000,+S%C3%A3o+Jos%C3%A9+de+Mipibu+-+RN/@-4.8732254,-38.2238703,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x7b2565de4606305:0x49da11057fb235ba!2m2!1d-35.2654026!2d-5.9737137?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D',
  },
]

export function Unidades() {
  return (
    <section id="unidades" className="unidades">
      <div className="unidades__container">

        <div className="unidades__heading">
          <span className="unidades__label">
            
          </span>

          <h2 className="unidades__title">
            Estamos perto de
            <span> você.</span>
          </h2>

          <p className="unidades__intro">
            Encontre a unidade Baldessar mais próxima e conte com
            nossa estrutura para atender às necessidades do seu negócio.
          </p>
        </div>

        <div className="unidades__content">

          <div className="unidades__map">
            <iframe
              src="https://www.google.com/maps?q=Itaitinga,+Ceará&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa das unidades Baldessar"
            />
          </div>

          <div className="unidades__list">

            {units.map((unit) => (
              <a
                href={unit.address}
                target="_blank"
                rel="noopener noreferrer"
                className="unidades__item"
                key={unit.city}
              >
                <div className="unidades__item-icon">
                  <MapPin
                    size={19}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="unidades__item-info">
                  <strong>{unit.city}</strong>
                  <span>{unit.state}</span>
                </div>

                <ArrowUpRight
                  className="unidades__arrow"
                  size={18}
                  strokeWidth={1.8}
                />
              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}