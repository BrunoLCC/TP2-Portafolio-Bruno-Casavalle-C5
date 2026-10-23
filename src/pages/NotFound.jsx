import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found">
      <p className="page-kicker">Error 404</p>
      <h1 className="page-title">
        Esa página
        <br />
        <span>no existe.</span>
      </h1>
      <p className="page-lead">
        Puede que el enlace esté mal escrito o que la página se haya movido.
      </p>
      <div className="action-links">
        <Link className="button" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

export default NotFound
