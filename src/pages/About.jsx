function About() {
  return (
    <section>
      <p className="page-kicker">Un poco sobre mí</p>
      <h1 className="page-title">
        Aprender, probar
        <br />y <span>seguir creciendo.</span>
      </h1>
      <p className="page-lead">
        Soy Bruno Casavalle y estoy formándome en desarrollo web. Me interesa
        entender cómo se construyen las páginas y convertir ideas en
        experiencias simples de usar.
      </p>

      <div className="page-section info-card">
        <h2 className="section-heading">Mi perfil</h2>
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
        <ul className="detail-list">
          <li>
            <span className="detail-label">Formación</span>
            <span className="detail-value">Estudiante de desarrollo web</span>
          </li>
          <li>
            <span className="detail-label">Intereses</span>
            <span className="detail-value">Frontend, diseño y tecnología</span>
          </li>
          <li>
            <span className="detail-label">Objetivo</span>
            <span className="detail-value">Seguir aprendiendo y practicar</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
