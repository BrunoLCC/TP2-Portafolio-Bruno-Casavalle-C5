import { Link, NavLink } from 'react-router-dom'

const navigationItems = [
  { path: '/', label: 'Inicio', number: '01', end: true },
  { path: '/about', label: 'Sobre mí', number: '02' },
  { path: '/skills', label: 'Habilidades', number: '03' },
  { path: '/projects', label: 'Proyectos', number: '04' },
  { path: '/contact', label: 'Contacto', number: '05' },
]

function Sidebar() {
  return (
    <aside className="menu-lateral">
      <Link className="marca" to="/" aria-label="Portfolio de Bruno, inicio">
        <span className="iniciales-marca">BC</span>
        <span className="nombre-marca">Bruno Casavalle</span>
      </Link>

      <p className="introduccion-lateral">Mi espacio en la web</p>

      <nav className="navegacion" aria-label="Navegación principal">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? 'enlace-navegacion activo' : 'enlace-navegacion'
            }
          >
            <span className="numero-navegacion">{item.number}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

    </aside>
  )
}

export default Sidebar
