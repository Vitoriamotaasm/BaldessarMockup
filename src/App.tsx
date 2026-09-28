import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Products } from './components/Products/Products'
import { Seminovos } from './components/Seminovos/Seminovos'
import { Historia } from './components/Historia/Historia'
import { Servicos } from './components/Servicos/Servicos'
import { Pecas } from './components/Pecas/Pecas'
import { Unidades } from './components/Unidades/Unidades'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <section className="home-hero">
          <Hero />
        </section>

        <Products />

        <Historia />

        <Seminovos />

        <Servicos />

      

        <Pecas />

        <Unidades />
      </main>

      <Footer />
    </>
  )
}

export default App