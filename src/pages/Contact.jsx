function Contact() {
  return (
    <section>
      <p className="subtitulo">Sigamos en contacto</p>
      <h1 className="titulo">
        ¿Hablamos de
        <br />
        <span>una idea?</span>
      </h1>
      <p className="descripcion">
        Si querés conocer más sobre mi trabajo o compartir una propuesta, podés
        encontrarme en GitHub o escribirme por correo electrónico.
      </p>

      <div className="rejilla-contacto">
        <a
          className="tarjeta-contacto"
          href="https://github.com/BrunoLCC"
          target="_blank"
          rel="noreferrer"
        >
          <h2>GitHub</h2>
          <p>github.com/BrunoLCC ↗</p>
        </a>
        <a className="tarjeta-contacto" href="mailto:bcasavalle@gmail.com">
          <h2>Correo electrónico</h2>
          <p>bcasavalle@gmail.com ↗</p>
        </a>
      </div>
    </section>
  )
}

export default Contact
