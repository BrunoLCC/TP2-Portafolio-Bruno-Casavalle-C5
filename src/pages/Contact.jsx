function Contact() {
  return (
    <section>
      <p className="page-kicker">Sigamos en contacto</p>
      <h1 className="page-title">
        ¿Hablamos de
        <br />
        <span>una idea?</span>
      </h1>
      <p className="page-lead">
        Si querés conocer más sobre mi trabajo o compartir una propuesta, podés
        encontrarme en GitHub. También puedo agregar aquí mi correo personal.
      </p>

      <div className="contact-grid">
        <a
          className="contact-card"
          href="https://github.com/BrunoLCC"
          target="_blank"
          rel="noreferrer"
        >
          <h2>GitHub</h2>
          <p>github.com/BrunoLCC ↗</p>
        </a>
        <div className="contact-card">
          <h2>Correo electrónico</h2>
          <p>Agregar mi correo personal antes de publicar el portfolio.</p>
        </div>
      </div>
      <p className="page-lead contact-hint">
        Consejo: reemplazá este texto por una dirección de correo que quieras
        compartir públicamente.
      </p>
    </section>
  )
}

export default Contact
