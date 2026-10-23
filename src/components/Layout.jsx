import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className="contenedor">
      <Sidebar />
      <main className="contenido-principal">
        <div className="contenido">
          <Outlet />
        </div>
        <footer className="pie-pagina">
          <span>Portfolio de Bruno Casavalle</span>
          <span>Trabajo Práctico 2 · Comisión C5</span>
        </footer>
      </main>
    </div>
  )
}

export default Layout
