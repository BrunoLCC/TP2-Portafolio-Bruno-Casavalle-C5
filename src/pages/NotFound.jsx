import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="pagina-no-encontrada">
      <p className="subtitulo">Error 404</p>
      <h1 className="titulo">
        Esa página
        <br />
        <span>no existe.</span>
      </h1>
      <p className="descripcion">
        Puede que el enlace esté mal escrito o que la página se haya movido.
      </p>
      <div className="enlaces">
        <Link className="boton" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

export default NotFound
