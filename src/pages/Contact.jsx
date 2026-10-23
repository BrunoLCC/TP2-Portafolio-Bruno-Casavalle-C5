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
        encontrarme en GitHub. También puedo agregar aquí mi correo personal.
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
        <div className="tarjeta-contacto">
          <h2>Correo electrónico</h2>
          <p>Agregar mi correo personal antes de publicar el portfolio.</p>
        </div>
      </div>
      <p className="descripcion aviso-contacto">
        Consejo: reemplazá este texto por una dirección de correo que quieras
        compartir públicamente.
      </p>
    </section>
  )
}

export default Contact
