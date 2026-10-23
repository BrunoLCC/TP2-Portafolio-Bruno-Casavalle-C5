function About() {
  return (
    <section>
      <p className="subtitulo">Un poco sobre mí</p>
      <h1 className="titulo">
        Aprender, probar
        <br />y <span>seguir creciendo.</span>
      </h1>
      <p className="descripcion">
        Soy Bruno Casavalle, estudiante de la Tecnicatura en Programación de la
        UTN. Me interesa entender cómo se construyen las páginas y convertir
        ideas en experiencias simples de usar.
      </p>

      <div className="seccion tarjeta">
        <h2 className="titulo-seccion">Mi perfil</h2>
        <p>
          Actualmente estoy practicando los fundamentos de JavaScript y React.
          Me gusta avanzar paso a paso, probar lo que aprendo y mejorar mis
          proyectos con cada nueva herramienta.
        </p>
        <p>
          Mi objetivo es seguir ganando experiencia en desarrollo frontend,
          colaborar con otras personas y construir una base sólida para futuros
          proyectos.
        </p>
        <ul className="lista-detalles">
          <li>
            <span className="etiqueta-detalle">Formación</span>
            <span className="valor-detalle">
              Tecnicatura en Programación · UTN
            </span>
          </li>
          <li>
            <span className="etiqueta-detalle">Intereses</span>
            <span className="valor-detalle">Frontend, diseño y tecnología</span>
          </li>
          <li>
            <span className="etiqueta-detalle">Objetivo</span>
            <span className="valor-detalle">Seguir aprendiendo y practicar</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
