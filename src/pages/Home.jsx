import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="presentacion">
        <div className="iniciales" aria-hidden="true">
          BC
        </div>
        <p className="subtitulo">Portfolio personal · Comisión C5</p>
        <h1 className="titulo">
          Hola, soy <span>Bruno Casavalle,</span>
          <br />
          estudiante de la Tecnicatura en Programación de la UTN.
        </h1>
        <p className="descripcion">
          En este espacio comparto un poco sobre mi formación, las herramientas
          que estoy aprendiendo y algunos proyectos de práctica.
        </p>
        <div className="enlaces">
          <Link className="boton" to="/projects">
            Ver mis proyectos
          </Link>
          <Link className="boton boton-secundario" to="/about">
            Conocerme
          </Link>
        </div>
      </section>

      <section className="seccion">
        <p className="subtitulo">Un poco de contexto</p>
        <h2 className="titulo-seccion">¿Qué vas a encontrar?</h2>
        <div className="tarjeta">
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
