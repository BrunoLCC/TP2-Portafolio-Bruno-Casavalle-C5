import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="home-intro">
        <div className="home-mark" aria-hidden="true">
          BC
        </div>
        <p className="page-kicker">Portfolio personal · Comisión C5</p>
        <h1 className="page-title">
          Hola, soy <span>Bruno Casavalle,</span>
          <br />
          estudiante de la Tecnicatura en Programación de la UTN.
        </h1>
        <p className="page-lead">
          En este espacio comparto un poco sobre mi formación, las herramientas
          que estoy aprendiendo y algunos proyectos de práctica.
        </p>
        <div className="action-links">
          <Link className="button" to="/projects">
            Ver mis proyectos
          </Link>
          <Link className="button button-secondary" to="/about">
            Conocerme
          </Link>
        </div>
      </section>

      <section className="page-section">
        <p className="page-kicker">Un poco de contexto</p>
        <h2 className="section-heading">¿Qué vas a encontrar?</h2>
        <div className="info-card">
          <p>
            Este sitio es una continuación de mi portfolio y una oportunidad
            para practicar React. La navegación está organizada en distintas
            páginas para que puedas recorrer cada tema desde el menú.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
